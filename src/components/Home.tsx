import { useNavigate } from 'react-router-dom';
import WithSuspense from './WithSuspense';

const Home = () => {
    const navigate = useNavigate();

    const createExpense = () => {
        navigate('/createExpense');
    };

    const createExpenseTag = () => {
        navigate('/createExpenseTag');
    };

    return (
        <>
            <button
                className="mt-8 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={createExpense}
            >
                Create Expense
            </button>
            <button
                className="mt-8 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={createExpenseTag}
            >
                Create Expense Tag
            </button>
        </>
    );
};

export default WithSuspense(Home, <div>Loading...</div>);
