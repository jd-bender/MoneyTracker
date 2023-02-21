import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { child, get, ref } from 'firebase/database';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const dispatch = useAppDispatch();

    return <></>;
}
