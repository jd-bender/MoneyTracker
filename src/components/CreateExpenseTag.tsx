import WithSuspense from './WithSuspense';
import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks';
import { pushDB } from '../databaseActions';
import { addExpenseTag } from '../reducers/expenseTagsSlice';
import Spinner from './Spinner';

const CreateExpenseTag = () => {
    const [name, setName] = useState('');
    const [isCreatingExpenseTag, setIsCreatingExpenseTag] = useState(false);

    const user = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

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

                setIsCreatingExpenseTag(false);
            })
            .catch((e) => {
                setIsCreatingExpenseTag(false);
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
                <button
                    className="mt-8 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-1/2"
                    onClick={submitExpenseTag}
                >
                    Create Expense Tag
                </button>
            )}
        </>
    );
};

export default WithSuspense(CreateExpenseTag, <div>Loading...</div>);
