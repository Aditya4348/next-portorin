import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
    try {
        // Ambil Token Dari cookie
        const cookieStore = await cookies();
        let token = cookieStore.get("token")?.value;

        // Cek Apakah Cookie Tersebut Berisi Token
        if (!token) {
            const authHeader = req.headers.get("authorization");
            if (authHeader?.startsWith("Bearer ")) {
                token = authHeader.split(" ")[1];
            }
        }

        // Jika cookie Kosong Kirim respon Unauthorized
        if (!token) {
            return NextResponse.json({
                success: false,
                message: "Unauthorized"
            }, {
                status: 401
            })
        }

        // Verifikasi Token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET!
        ) as { id: number };

        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: {
                id: true,
                email: true,
            }
        });

        if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found"
            }, {
                status: 404
            })
        }

        return NextResponse.json({
            success: true,
            data: user
        }, {
            status: 200
        })
        
    } catch (error) {
        console.error("Error fetching user:", error);
        return NextResponse.json({
            success: false,
            message: "Internal Server Error"
        }, {
            status: 500
        })
    }
}