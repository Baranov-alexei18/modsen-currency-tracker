export type Icon = {
    height: string;
    width: string;
    color?: string;
    handleClick?: () => void
};

export type DropDownType = {
    className: string,
    menu: string;
    openIndex: number;
    id: number;
};
