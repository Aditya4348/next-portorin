import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

async function main(){
    const hashedPassword = await bcrypt.hash("@Dmin@Dit4348", 20);

    await prisma.user.create({
    data: {
      email: "aditalvisa@gmail.com",
      password: hashedPassword,
    },
  });


  console.log("Admin CMS Berhasil Dibuat")
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });