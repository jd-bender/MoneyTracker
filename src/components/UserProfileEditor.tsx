import { useState } from 'react';
import WithSuspense from './WithSuspense';
import { useAppSelector } from '../hooks';

const UserProfileEditor = (props: any) => {
    const user = useAppSelector((state) => state.user);
    const [firstName, setFirstName] = useState(user.firstName || '');
    const [lastName, setLastName] = useState(user.lastName || '');
    const [email, setEmail] = useState(user.email || '');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <span className="w-auto flex flex-col">
            <span className="mb-4 self-end">
                <label htmlFor="firstName" className="mr-2">
                    First Name:
                </label>
                <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => {
                        setFirstName(e.target.value);
                        props.onChange('firstName', e.target.value);
                    }}
                    onKeyDown={props.checkIfEnterKeyPressed}
                />
            </span>
            <span className="mb-4 self-end">
                <label htmlFor="lastName" className="mr-2">
                    Last Name:
                </label>
                <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => {
                        setLastName(e.target.value);
                        props.onChange('lastName', e.target.value);
                    }}
                    onKeyDown={props.checkIfEnterKeyPressed}
                />
            </span>
            <span className="mb-4 self-end">
                <label htmlFor="email" className="mr-2">
                    Email:
                </label>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        props.onChange('email', e.target.value);
                    }}
                    onKeyDown={props.checkIfEnterKeyPressed}
                />
            </span>
            <span className="mb-4 self-end">
                <label htmlFor="password" className="mr-2">
                    Password:
                </label>
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        props.onChange('password', e.target.value);
                    }}
                    onKeyDown={props.checkIfEnterKeyPressed}
                />
            </span>
            <span>
                <label htmlFor="confirmPassword" className="mr-2">
                    Confirm Password:
                </label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        props.onChange('confirmPassword', e.target.value);
                    }}
                    onKeyDown={props.checkIfEnterKeyPressed}
                />
            </span>
        </span>
    );
};

export default WithSuspense(UserProfileEditor, <div>Loading...</div>);
