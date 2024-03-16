type Menu = {
    id: number;
    menu: string;
    submenu: Array<string>;
};

interface PropsMenu {
    menu: Menu[];
}

export { PropsMenu };
