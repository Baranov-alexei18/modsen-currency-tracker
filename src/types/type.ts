type Menu = {
    id: number;
    menu: string;
    submenu: Array<string>;
};
type ThemesType = 'dark' | 'light';

interface PropsMenu {
    menu: Menu[];
}
interface ThemeState {
    theme: ThemesType;
}
interface Icon {
    height: string;
    width: string;
    color: string;
    onOpen: () => void
}
interface SideBarType {
  open: boolean;
  setCloseSideBar: () => void
}

export {
  Icon, PropsMenu, SideBarType,
  ThemeState, ThemesType,
};
