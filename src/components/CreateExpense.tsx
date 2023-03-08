import WithSuspense from './WithSuspense';
import { useAppSelector, useAppDispatch } from '../hooks';
import { useState } from 'react';

const CreateExpense = () => {
    const [amount, setAmount] = useState(0);
    const [note, setNote] = useState('');

    const expenseTags = useAppSelector((state) => state.expenseTags);

    const dispatch = useAppDispatch();

    const submitExpense = () => {};

    const checkIfEnterKeyPressed = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === 'Enter') {
            submitExpense();
        }
    };

    return (
        <>
            <span className="mb-4 self-end">
                <label htmlFor="amount" className="mr-2">
                    Amount:
                </label>
                <input
                    type="text"
                    name="amount"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    onKeyDown={checkIfEnterKeyPressed}
                />
            </span>

            <span className="mb-4 self-end">
                <label htmlFor="note" className="mr-2">
                    Note:
                </label>
                <input
                    type="text"
                    name="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    onKeyDown={checkIfEnterKeyPressed}
                />
            </span>
        </>
    );
};

export default WithSuspense(CreateExpense, <div>Loading...</div>);
