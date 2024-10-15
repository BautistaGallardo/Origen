'use client';
import { cookies } from "next/headers";
import { logoutAction } from "../api/auth/logout/route";
import { useTransition } from "react";
import { Button, Loader } from "@mantine/core";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";


export function LogoutButton() {
    const [isLoading, startTransition] = useTransition();
    const router = useRouter();
    return (
        <Button
            className="btn btn-ghost rounded-lg bg-Custm_primary text-white normal-case text-xl p-2"
            onClick={() =>
                startTransition(async () => {
                    await logoutAction();
                    router.refresh();
                })
            }
            disabled={isLoading}
        >
            {isLoading ? <Loader size={20} /> : "Logout"}
        </Button>
    );
}


