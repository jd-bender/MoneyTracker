type listItem = {
    children: any;
    onClick: any;
};

const ListItem = (props: listItem) => (
    <li
        onClick={props.onClick}
        className="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal cursor-pointer text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600"
    >
        {props.children}
    </li>
);

export default ListItem;
