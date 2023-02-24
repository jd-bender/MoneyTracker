import WithSuspense from './WithSuspense';
import Header from './Header';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Dashboard = () => {
    const logout = () => {
        signOut(auth);
    };

    return (
        <>
            <Header />
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default WithSuspense(Dashboard, <div>Loading...</div>);
