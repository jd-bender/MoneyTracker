"use client";
import { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import ProtectedRouteConcealer from "../ui/ProtectedRouteConcealer";
import signOutFromApp from "../firebase/auth/signOut";

export default function Home() {
    const [loadingAddExpensePage, setLoadingAddExpensePage] = useState(false);
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user]);

    function loadAddExpensePage() {
        router.push("/addExpense");
        setLoadingAddExpensePage(true);
    };

    return (
        <ProtectedRouteConcealer>
            <span>
                {
                    loadingAddExpensePage ?
                        <CircularProgress />
                        :
                        <>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={loadAddExpensePage}>Add Expense</button>
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => signOutFromApp()}>Log Out</button>
                        </>
                }
            </span>
        </ProtectedRouteConcealer>
    );
};