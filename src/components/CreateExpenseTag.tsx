import WithSuspense from './WithSuspense';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { pushDB } from '../databaseActions';
import { addExpenseTag } from '../reducers/expenseTagsSlice';
import { Link } from 'react-router-dom';
import Spinner from './UI/Spinner';
import Toast from './UI/Toast';

const CreateExpenseTag = () => {
    const [name, setName] = useState('');
    const [alertOpen, setAlertOpen] = useState(false);
    const [saveSuccessful, setSaveSuccessful] = useState(false);
    const [isCreatingExpenseTag, setIsCreatingExpenseTag] = useState(false);

    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    const handleSaveFinish = (saveSuccessful: boolean) => {
        setSaveSuccessful(saveSuccessful);
        setAlertOpen(true);
        setIsCreatingExpenseTag(false);
        setName('');
    };

    const submitExpenseTag = () => {
        pushDB(`users/${user.uid}/expenseTags`, {
            name
        })
            .then((snapshot) => {
                dispatch(
                    addExpenseTag({
                        name,
                        expenseTagId: snapshot.key
                    })
                );

                handleSaveFinish(true);
            })
            .catch((e) => {
                handleSaveFinish(false);
            });
    };

    const checkIfEnterKeyPressed = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === 'Enter') {
            submitExpenseTag();
        }
    };

    return (
        <>
            <div className="container h-96 mx-auto bg-slate-400 flex flex-row items-center space-y-4 shadow-2xl rounded-2xl">
                <div className="flex flex-col items-center mx-auto">
                    <span className="mb-4 self-end">
                        <label htmlFor="name" className="mr-2">
                            Name:
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyDown={checkIfEnterKeyPressed}
                        />
                    </span>

                    {isCreatingExpenseTag ? (
                        <Spinner className="mt-8" />
                    ) : (
                        <>
                            <button
                                className="mt-8 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                onClick={submitExpenseTag}
                            >
                                Create Expense Tag
                            </button>

                            <Link to="/">
                                <span className="underline">Return</span>
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <Toast
                alertOpen={alertOpen}
                isSuccessful={saveSuccessful}
                handleAlertClose={() => setAlertOpen(false)}
                successMessage="Account details saved successfully"
            />
        </>
    );
};

export default WithSuspense(CreateExpenseTag, <div>Loading...</div>);
