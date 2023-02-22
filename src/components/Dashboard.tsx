import WithSuspense from "./WithSuspense";

const Dashboard = () => {
    console.log("running dashboard");
    return <></>;
}

export default WithSuspense(Dashboard, <div>Loading...</div>);
