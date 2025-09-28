import { useRouter } from "next/navigation";
import { useState } from "react";

import { signOut } from "@/lib/auth-client";

export function useLogout() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const action = async () => {
    setIsLoading(true);

    await signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/login");
          setIsLoading(false);
        },
        onError: () => {
          setIsLoading(false);
        },
      },
    });
  };

  return { action, isLoading };
}
