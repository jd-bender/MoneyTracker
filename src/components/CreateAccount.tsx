import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { createUserAccount, setDB } from '../databaseActions';
import { setUser } from '../reducers/userSlice';
import WithSuspense from './WithSuspense';
import Spinner from './Spinner';

const CreateAccount = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    const dispatch = useAppDispatch();

    const submitAccountDetails = () => {
        setIsCreatingAccount(true);

        createUserAccount(email, password)
            .then((userData) => {
                setDB(`users/${userData.user.uid}`, {
                    firstName,
                    lastName,
                    email
                })
                    .then(() => {
                        dispatch(
                            setUser({
                                uid: userData.user.uid,
                                firstName,
                                lastName,
                                email
                            })
                        );

                        setIsCreatingAccount(false);
                    })
                    .catch((e) => {
                        setIsCreatingAccount(false);
                    });
            })
            .catch((e) => {
                setIsCreatingAccount(false);
            });
    };

    const checkIfEnterKeyPressed = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === 'Enter') {
            submitAccountDetails();
        }
    };

    return (
        <div className="h-screen flex flex-row items-center bg-gradient-to-b from-blue-200 to-green-500">
            <div className="container h-96 mx-auto bg-slate-100 flex flex-row items-center space-y-4 shadow-2xl rounded-2xl">
                <div className="flex flex-col items-center mx-auto">
                    <p className="mx-auto text-3xl mb-6">Create Account</p>

                    <span className="w-auto flex flex-col">
                        <span className="mb-4 self-end">
                            <label htmlFor="firstName" className="mr-2">
                                First Name:
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                onKeyDown={checkIfEnterKeyPressed}
                            />
                        </span>
                        <span className="mb-4 self-end">
                            <label htmlFor="lastName" className="mr-2">
                                Last Name:
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                onKeyDown={checkIfEnterKeyPressed}
                            />
                        </span>
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
                        <span className="mb-4 self-end">
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
                        <span>
                            <label htmlFor="confirmPassword" className="mr-2">
                                Confirm Password:
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                onKeyDown={checkIfEnterKeyPressed}
                            />
                        </span>
                    </span>

                    {isCreatingAccount ? (
                        <Spinner className="mt-8" />
                    ) : (
                        <button
                            className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2"
                            onClick={submitAccountDetails}
                        >
                            Submit
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default WithSuspense(CreateAccount, <div>Loading...</div>);
