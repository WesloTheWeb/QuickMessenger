import Link from 'next/link';
import { Home, Settings, MessageSquare } from 'lucide-react';
import { menu_options } from '@/config/chatMenu';
import { MenuOption } from '@/interfaces/chatMenuInterface';
import classes from './Menu.module.scss';

const { menuContainer } = classes;


const Menu = ({ }) => {

    const getIcon = (iconName: string) => {
        // CSS class name standards for Lucide icons
        const iconProps = { size: 24, className: classes.menuIcon };

        switch (iconName) {
            case 'home':
                return <Home {...iconProps} />;
            case 'settings':
                return <Settings {...iconProps} />;
            case 'message-square':
                return <MessageSquare {...iconProps} />;
            default:
                return null;
        }
    };

    // ? de-coupled the map argument:
    const renderMenuItem = ({ actionName, urlPath, icon, implemented }: MenuOption) => {
        if (!implemented) return null;

        return (
            <Link
                key={actionName}
                href={urlPath}
                className={classes.menuLink}
            >
                <button className={classes.menuButton}>
                    {icon && getIcon(icon)}
                    <span>{actionName}</span>
                </button>
            </Link>
        );
    };

    return (
        <section className={menuContainer}>
            {menu_options.map(renderMenuItem)}
        </section>
    );
};

export default Menu;
