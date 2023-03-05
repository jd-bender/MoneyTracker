import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { setDB } from '../databaseActions';
import { setUser } from '../reducers/userSlice';
import { Link } from 'react-router-dom';
import Spinner from './Spinner';
import WithSuspense from './WithSuspense';
import UserProfileEditor from './UserProfileEditor';

const MyProfile = () => {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const [isSavingAccountDetails, setIsSavingAccountDetails] = useState(false);
    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setValues({ ...values, ...user });
    }, []);

    const handleFieldChange = (fieldId: string, value: string) => {
        setValues({ ...values, [fieldId]: value });
    };

    const submitAccountDetails = () => {
        setIsSavingAccountDetails(true);

        const { email, firstName, lastName } = values;

        setDB(`users/${user.uid}`, {
            firstName,
            lastName,
            email
        })
            .then(() => {
                dispatch(
                    setUser({
                        uid: user.uid,
                        firstName,
                        lastName,
                        email
                    })
                );

                setIsSavingAccountDetails(false);
            })
            .catch((e) => {
                setIsSavingAccountDetails(false);
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
        <div className="container h-96 mx-auto bg-slate-100 flex flex-row items-center space-y-4 shadow-2xl rounded-2xl">
            <div className="flex flex-col items-center mx-auto">
                <h1 className="mb-4">My Profile</h1>

                <UserProfileEditor
                    checkIfEnterKeyPressed={checkIfEnterKeyPressed}
                    onChange={handleFieldChange}
                />

                {isSavingAccountDetails ? (
                    <Spinner className="mt-8" />
                ) : (
                    <button
                        className="mt-8 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2"
                        onClick={submitAccountDetails}
                    >
                        Save Changes
                    </button>
                )}

                <Link to="/">
                    <span className="underline">Return</span>
                </Link>
            </div>
        </div>
    );
};

export default WithSuspense(MyProfile, <div>Loading...</div>);
