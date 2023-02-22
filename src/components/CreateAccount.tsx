import WithSuspense from "./WithSuspense";

const CreateAccount = () => {
    console.log("running createaccount");
    return <></>;
}

export default WithSuspense(CreateAccount, <div>Loading...</div>);
