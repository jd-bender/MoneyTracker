import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { child, get, ref } from 'firebase/database';
import { auth, database as db } from '../firebase';
import { setUser } from '../reducers/userSlice';
import WithSuspense from './WithSuspense';
import Spinner from './Spinner';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggingIn, setIsLoggingIn] = useState(false);

    const dispatch = useAppDispatch();

    const login = () => {
        setIsLoggingIn(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userData) => {
                get(child(ref(db), `users/${userData.user.uid}`))
                    .then((snapshot) => {
                        const data = snapshot.val();

                        dispatch(
                            setUser({
                                uid: userData.user.uid,
                                ...data
                            })
                        );

                        setIsLoggingIn(false);
                    })
                    .catch((e) => {
                        setIsLoggingIn(false);
                    });
            })
            .catch((e) => {
                setIsLoggingIn(false);
            });
    };

    const quickLogin = () => {
        setIsLoggingIn(true);

        signInWithEmailAndPassword(auth, 'e@em.com', 'password')
            .then((userData) => {
                get(child(ref(db), `users/${userData.user.uid}`))
                    .then((snapshot) => {
                        const data = snapshot.val();

                        dispatch(
                            setUser({
                                uid: userData.user.uid,
                                ...data
                            })
                        );

                        setIsLoggingIn(false);
                    })
                    .catch((e) => {
                        setIsLoggingIn(false);
                    });
            })
            .catch((e) => {
                setIsLoggingIn(false);
            });
    };

    const checkIfEnterKeyPressed = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === 'Enter') {
            login();
        }
    };

    return (
        <div className="h-screen flex flex-row items-center bg-gradient-to-b from-blue-200 to-green-500">
            <div className="container h-96 mx-auto bg-slate-100 flex flex-row items-center space-y-4 shadow-2xl rounded-2xl">
                <div className="flex flex-col items-center mx-auto">
                    <p className="mx-auto text-3xl mb-6">Login</p>

                    <span className="w-auto flex flex-col">
                        <span className="mb-4 self-end">
                            <label htmlFor="email" className="mr-2">
                                Email:
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={checkIfEnterKeyPressed}
                            />
                        </span>
                        <span>
                            <label htmlFor="password" className="mr-2">
                                Password:
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={checkIfEnterKeyPressed}
                            />
                        </span>
                    </span>
                    {isLoggingIn ? (
                        <Spinner className="mt-8" />
                    ) : (
                        <>
                            <button
                                className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2"
                                onClick={login}
                            >
                                Submit
                            </button>
                            <button
                                className="mt-2 mb-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2"
                                onClick={quickLogin}
                            >
                                Quick Login
                            </button>
                        </>
                    )}

                    <Link to="/createAccount">
                        <span className="underline">Sign Up</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WithSuspense(Login, <div>Loading...</div>);
