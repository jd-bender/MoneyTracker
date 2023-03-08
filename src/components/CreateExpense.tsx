import WithSuspense from './WithSuspense';
import { useAppSelector } from '../hooks';
import { useState } from 'react';
import MultiSelect from './UI/MultiSelect';

const CreateExpense = () => {
    const [amount, setAmount] = useState(0);
    const [note, setNote] = useState('');
    const [selectedExpenseTags, setSelectedExpenseTags] = useState<string[]>(
        []
    );

    const expenseTags = useAppSelector((state) => state.expenseTags);

    const submitExpense = () => {};

    const handleChange = (event: any) => {
        const {
            target: { value }
        } = event;
        setSelectedExpenseTags(
            typeof value === 'string' ? value.split(',') : value
        );
    };

    const checkIfEnterKeyPressed = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === 'Enter') {
            submitExpense();
        }
    };

    return (
        <>
            <div className="container h-96 mx-auto bg-slate-400 flex flex-row items-center space-y-4 shadow-2xl rounded-2xl">
                <div className="flex flex-col items-center mx-auto">
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

                    <MultiSelect
                        items={expenseTags}
                        selectedItems={selectedExpenseTags}
                        title="Expense Tags"
                        handleChange={handleChange}
                    />
                </div>
            </div>
        </>
    );
};

export default WithSuspense(CreateExpense, <div>Loading...</div>);
