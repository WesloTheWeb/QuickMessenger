import classes from './Menu.module.scss';

const Menu = ({ }) => {

    const { menuContainer } = classes;

    const menu_options = [
        {
            actionName: 'Home',
            urlPath: '/'
        },
        // {
        //     actionName: 'Settings',
        //     urlPath: '#'
        // },
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
                        <button key={index}>{menuAction.actionName}</button>
                    );
                })
            }
        </section>
    );
};

export default Menu;