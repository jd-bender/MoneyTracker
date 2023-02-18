import React, { useRef } from 'react';
import './main.css';

type myProps = {
    teststr: string;
};

const MoneyTracker = (props: myProps) => {
    const textRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={submitHandler}>
            <p className="bg-red-900 text-white">Money Trackerr</p>
            <input type="text" ref={textRef} />
        </form>
    );
};

export default MoneyTracker;
