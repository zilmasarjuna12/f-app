import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Format email tidak valid"),
  password: z.string().min(6, "Password harus terdiri dari minimal 6 karakter"),
});

export type LoginFormSchema = z.infer<typeof loginSchema>;
