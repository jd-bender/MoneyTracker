"use client";
import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Typography, TextField, Button, CircularProgress } from '@mui/material';
import UnprotectedRouteConcealer from "../../ui/UnprotectedRouteConcealer";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import signIn from "../../firebase/auth/signIn";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggingIn, setLoggingIn] = useState(false);

    const { user } = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (user) {
            router.push("/");
        }
    }, [user]);

    const submitLogin = async (event) => {
        event.preventDefault()
        setLoggingIn(true);

        const { result, error } = await signIn(email, password);

        setLoggingIn(false);

        if (error) {
            return console.log(error);
        }
        
        router.push("/");
    };

    return (
        <UnprotectedRouteConcealer>
            <span className='bg-white flex flex-col w-1/2 h-1/2 min-w-fit rounded-3xl justify-center place-items-center'>
                <Typography variant="h4" className="mb-4">Money Tracker</Typography>
                
                <span className="mb-4">
                    <TextField label="Email" sx={{width: '20rem'}} disabled={loggingIn} onChange={(e) => setEmail(e.target.value)} variant="outlined" />
                </span>
                
                <span className="mb-4">
                    <TextField label="Password" type="password" sx={{width: '20rem'}} disabled={loggingIn} onChange={(e) => setPassword(e.target.value)} variant="outlined" />
                </span>

                {
                    loggingIn ?
                        <CircularProgress />
                        :
                        <>
                            <Button variant="outlined" className="mb-4" onClick={submitLogin}>Login</Button>
                            <Link href="/signup"><u>Sign Up</u></Link>
                        </>
                }
            </span>
        </UnprotectedRouteConcealer>
    );
};