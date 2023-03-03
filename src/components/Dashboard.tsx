import WithSuspense from './WithSuspense';
import Header from './Header';

const Dashboard = () => {
    return (
        <>
            <Header />
        </>
    );
};

export default WithSuspense(Dashboard, <div>Loading...</div>);
