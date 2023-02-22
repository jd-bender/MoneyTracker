import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { child, get, ref } from 'firebase/database';
import { auth, database as db } from '../firebase';
import { setUser } from '../reducers/userSlice';
import WithSuspense from './WithSuspense';

const Login = () => {
    console.log("running login");
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
                    <p className="mx-auto text-3xl">Login</p>

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default WithSuspense(Login, <div>Loading...</div>);
