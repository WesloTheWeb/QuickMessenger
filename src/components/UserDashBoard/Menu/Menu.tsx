import Link from 'next/link';
import classes from './Menu.module.scss';

const Menu = ({ }) => {

    const { menuContainer } = classes;

    const menu_options = [
        {
            actionName: 'Home',
            urlPath: '/'
        },
        {
            actionName: 'User Settings',
            urlPath: '/profile'
        },
        // {
        //     actionName: 'Channels',
        //     url: '#'
        // }
    ];

    return (
        <section className={menuContainer}>
            {
                menu_options.map((menuAction, index) => {
                    return (
                        <Link
                            key={index}
                            href={menuAction.urlPath}>
                            <button key={index}>{menuAction.actionName}</button>
                        </Link>
                    );
                })
            }
        </section>
    );
};

export default Menu;