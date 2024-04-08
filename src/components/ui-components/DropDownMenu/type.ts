export type DropDownType = {
    id: number,
    className: string,
    menu: string;
    submenu: string[];
    isEqualIndex: boolean;
    toggleMenu: (id: number) => React.MouseEventHandler<HTMLLIElement>
};
