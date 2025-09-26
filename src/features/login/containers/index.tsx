"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export function LoginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="flex justify-center items-center gap-10 bg-primary-foreground py-20 min-h-screen px-5">
      <div className="flex w-full max-w-sm flex-col gap-6 rounded border bg-background p-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Masuk</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Masukkan detail Anda di bawah ini untuk masuk
          </p>
        </div>
        <Form {...form}>
          <form
            className="w-full space-y-4"
            onSubmit={form.handleSubmit((data) => console.log(data))}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input placeholder="******" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">
              Masuk
            </Button>
          </form>
        </Form>

        <div className="flex flex-col gap-4 text-sm">
          <p>
            Tidak punya akun?{" "}
            <a href="/register" className="underline">
              Daftar
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
