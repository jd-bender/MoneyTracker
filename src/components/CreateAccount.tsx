import { useState } from 'react';
import { useAppDispatch } from '../hooks';
import { Link } from 'react-router-dom';
import { createUserAccount, setDB } from '../databaseActions';
import { setUser } from '../reducers/userSlice';
import WithSuspense from './WithSuspense';
import UserProfileEditor from './UserProfileEditor';
import Spinner from './Spinner';

const CreateAccount = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    const handleFieldChange = (fieldId: string, value: string) => {
        setValues({ ...values, [fieldId]: value });
    };

    const dispatch = useAppDispatch();

    const submitAccountDetails = () => {
        setIsCreatingAccount(true);

        const { email, password, firstName, lastName } = values;

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

                    <UserProfileEditor
                        onChange={handleFieldChange}
                        checkIfEnterKeyPressed={checkIfEnterKeyPressed}
                    />

                    {isCreatingAccount ? (
                        <Spinner className="mt-8" />
                    ) : (
                        <button
                            className="mt-8 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2"
                            onClick={submitAccountDetails}
                        >
                            Submit
                        </button>
                    )}

                    <Link to="/">
                        <span className="underline">Return</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WithSuspense(CreateAccount, <div>Loading...</div>);
