import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { checkRateLimit } from '@/lib/rate-limit';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export async function POST( req: Request) {
    const { rateLimited } = await checkRateLimit(req)

    if (rateLimited) {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    )
  }

    try {
        // Ambil Request yang isinya email dan password
        const { email, password } = await req.json();

        // Deklarasi Variabel User Berisi User Berdasarkan Email
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        // Pengecekan Jika User dengan Email Yang di cari tidak ada
        if(!user){
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, {
                status: 404
            })
        }

        // Deklarasi Variabel Berisi Password Yang sudah Di compare agar tidak ter enskripsi
        const isValid = await bcrypt.compare(password, user.password);

        // Pengecekan jika Password Tidak Valid
        if(!isValid){
            return NextResponse.json({
                success: false,
                message: "Invalid credentials"
            }, {
                status: 401
            })
        }

        // buat jwt Token
        const token = jwt.sign({
            id: user.id,
        }, process.env.JWT_SECRET!, {
            expiresIn: "1d",
        })

        const response = NextResponse.json({
            success: true,
            message: "Login successful",
            data: {
                token,
                user
            }}, {
            status: 200
        })

        response.cookies.set({
            name: "token",
            value: token,
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24, // 1 day
            path: "/",
            httpOnly: true
        })

        return response;
    } catch (error) {
        return NextResponse.json({
            success: false,
            status: 500,
            message: error
        })
    }
}