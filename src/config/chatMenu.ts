export const menu_options = [
    {
        actionName: 'Home',
        urlPath: '/dashboard',
        icon: 'home',
        implemented: true
    },
    {
        actionName: 'User Settings',
        urlPath: '/profile',
        icon: 'settings',
        implemented: true
    },
    {
        actionName: 'Channels',
        urlPath: '#',
        icon: 'message-square',
        implemented: false
    }
] as const;