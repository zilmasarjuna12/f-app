import { PrismaClient } from "@/generated/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

const prisma = new PrismaClient();

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
});

export const convertErrorMessage = (code: string) => {
  switch (code) {
    case "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL":
      return "User sudah terdaftar, silakan gunakan email lain.";
    case "INVALID_EMAIL_OR_PASSWORD":
      return "Email atau password tidak valid.";
    default:
      return "Terjadi kesalahan yang tidak terduga.";
  }
};
