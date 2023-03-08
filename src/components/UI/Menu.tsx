import { ReactNode } from 'react';
import OutsideAlerter from './OutsideClickAlerter';

type menu = {
    children: ReactNode;
    callback: () => void;
};

const Menu = (props: menu) => (
    <OutsideAlerter callback={props.callback}>
        <ul className="absolute right-0 z-[1000] float-right m-0 min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700">
            {props.children}
        </ul>
    </OutsideAlerter>
);

export default Menu;
