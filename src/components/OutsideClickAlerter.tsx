import { useRef, useEffect, ReactNode } from 'react';

function useOutsideClickAlerter(ref: any, callback: any) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
                //alert('You clicked outside of me!');
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}

type alertType = {
    children: ReactNode;
    callback: () => void;
};

export default function OutsideClickAlerter(props: alertType) {
    const wrapperRef = useRef(null);
    useOutsideClickAlerter(wrapperRef, props.callback);

    return <div ref={wrapperRef}>{props.children}</div>;
}
