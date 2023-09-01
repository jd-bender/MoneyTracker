"use client";
import { useState } from "react";
import { Typography, TextField, Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const submitLogin = async (event) => {
        event.preventDefault()

        const { result, error } = await signIn(email, password);

        if (error) {
            return console.log(error);
        }

        return router.push("/");
    };

    return (
        <span className='bg-white flex flex-col w-1/2 h-1/2 min-w-fit rounded-3xl justify-center place-items-center'>
            <Typography variant="h4" className="mb-4">Money Tracker</Typography>
            
            <span className="mb-4">
                <TextField label="Email" sx={{width: '20rem'}} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
            </span>
            
            <span className="mb-4">
                <TextField label="Password" type="password" sx={{width: '20rem'}} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
            </span>

            <Button variant="outlined" className="mb-4" onClick={submitLogin}>Login</Button>
            
            <Link href="/signup"><u>Sign Up</u></Link>
        </span>
    );
};