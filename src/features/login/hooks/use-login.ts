import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { convertErrorMessage } from "@/lib/auth";
import { signIn } from "@/lib/auth-client";
import type { LoginFormSchema } from "../schemas";

export function useLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const action = async (data: LoginFormSchema) => {
    setIsLoading(true);

    await signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          setIsLoading(false);
          router.push("/dashboard");
        },
        onError: (error) => {
          setIsLoading(false);
          toast.error(convertErrorMessage(error.error.code));
        },
      },
    );
  };

  return {
    isLoading,
    action,
  };
}
