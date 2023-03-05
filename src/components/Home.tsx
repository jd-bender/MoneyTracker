import WithSuspense from './WithSuspense';

const Home = () => {
    return (
        <>
            <h1>home</h1>
        </>
    );
};

export default WithSuspense(Home, <div>Loading...</div>);
