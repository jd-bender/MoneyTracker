import WithSuspense from './WithSuspense';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import Header from './Header';
import CreateExpense from './CreateExpense';
import CreateExpenseTag from './CreateExpenseTag';

const Dashboard = () => {
    return (
        <>
            <Header className="mb-4" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myProfile" element={<MyProfile />} />
                <Route path="/createExpense" element={<CreateExpense />} />
                <Route
                    path="/createExpenseTag"
                    element={<CreateExpenseTag />}
                />
            </Routes>
        </>
    );
};

export default WithSuspense(Dashboard, <div>Loading...</div>);
