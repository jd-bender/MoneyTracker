"use client";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import ProtectedRouteConcealer from "../ui/ProtectedRouteConcealer";
import signOutFromApp from "../firebase/auth/signOut";

export default function Home() {
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user]);

    return (
        <ProtectedRouteConcealer>
            <span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => router.push("/addExpense")}>Add Expense</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => signOutFromApp()}>Log Out</button>
            </span>
        </ProtectedRouteConcealer>
    );
};