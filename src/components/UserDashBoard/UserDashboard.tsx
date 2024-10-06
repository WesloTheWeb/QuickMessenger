import DummyUserInformation from "../DummyComponents/DummyUserInformation";
import { ProfileUser } from "@/interfaces/userInterface";

const UserDashboard = () => {

    const userInfo: ProfileUser = {
        firstName: 'Harry'
    };

    return (
        <section>
            <DummyUserInformation
                userInformation={userInfo}
            />
        </section>
    );
};

export default UserDashboard;