import { ProfileUser } from "@/interfaces/userInterface";
import Menu from "./Menu/Menu";
import classes from './UserDashboard.module.scss';
import Chat from "../Chat/Chat";
import Channel from "../Chat/Channel";

const UserDashboard = () => {

    const { dashboardContainer } = classes;

    return (
        <>
            <section className={dashboardContainer}>
                <Menu />
                <Chat />
                <Channel />
            </section>
        </>

    );
};

export default UserDashboard;