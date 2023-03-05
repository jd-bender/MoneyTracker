import WithSuspense from './WithSuspense';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyProfile from './MyProfile';
import Header from './Header';

const Dashboard = () => {
    return (
        <>
            <Header className="mb-4" />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/myProfile" element={<MyProfile />} />
            </Routes>
        </>
    );
};

export default WithSuspense(Dashboard, <div>Loading...</div>);
