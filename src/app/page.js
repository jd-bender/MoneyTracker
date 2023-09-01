"use client";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { CircularProgress } from "@mui/material";
import signOutFromApp from "../firebase/auth/signOut";

export default function Home() {
    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.push("/login");
        }
    }, [user]);

    const logout = () => {
        signOutFromApp();
    };

    return (
        user ?
            <span>
                <button>Add Expense</button>
                <button>View Expenses</button>
                <button onClick={logout}>Log Out</button>
            </span>
            :
            <CircularProgress />
    );
};