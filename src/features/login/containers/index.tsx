import { FormLogin } from "../components/form-login";

export function LoginPage() {
  return (
    <div className="flex justify-center items-center gap-10 bg-primary-foreground py-20 min-h-screen px-5">
      <div className="flex w-full max-w-sm flex-col gap-6 rounded border bg-background p-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Masuk</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Masukkan detail Anda di bawah ini untuk masuk
          </p>
        </div>
        <FormLogin />

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
