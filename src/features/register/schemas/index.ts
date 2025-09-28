import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(2, "Nama harus terdiri dari minimal 2 karakter"),
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Password harus terdiri dari minimal 6 karakter"),
});

export type RegisterFormSchema = z.infer<typeof registerSchema>;
