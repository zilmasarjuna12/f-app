import { useRouter } from "next/navigation";
import { useState } from "react";

import { convertErrorMessage } from "@/lib/auth";
import { signUp } from "@/lib/auth-client";

import { toast } from "sonner";

import { type RegisterFormSchema } from "../schemas";

export const useRegister = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const action = async (data: RegisterFormSchema) => {
    setIsLoading(true);

    await signUp.email(
      {
        email: data.email,
        password: data.password,
        name: data.name,
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
      }
    );
  };

  return {
    isLoading,
    action,
  };
};
