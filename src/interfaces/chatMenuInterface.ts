export interface MenuOption {
    actionName: string;
    urlPath: string;
    icon?: string;
    implemented: boolean;
};

export type MenuOptions = MenuOption[];
