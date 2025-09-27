import { FormRegister } from "../components/form-register";

export async function RegisterPage() {
  return (
    <div className="flex justify-center items-center gap-10 bg-primary-foreground py-20 min-h-screen px-5">
      <div className="flex w-full max-w-sm flex-col gap-6 rounded border bg-background p-6">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Bikin akun</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Masukkan detail Anda di bawah ini untuk mendaftar
          </p>
        </div>
        <FormRegister />

        <div className="flex flex-col gap-4 text-sm">
          <p>
            Sudah punya akun?{" "}
            <a href="/login" className="underline">
              Masuk
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
