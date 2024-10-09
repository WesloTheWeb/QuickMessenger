import { ProfileUser } from "@/interfaces/userInterface";

interface DummyUSerInformationProps {
    userInformation: ProfileUser;
};

const DummyUserInformation = ({userInformation}: DummyUSerInformationProps) => {

    console.log('Prop of userInformation', userInformation)

    // firstName: string;
    // lastName?: string;
    // gender: string;
    // age: number;
    // country: string;
    // email: string;
    // userName: string;

    return (
        <>
        <section>
            <h3>User Information</h3>
            <div>
                Name: {userInformation.firstName} 
            </div>
        </section>
        </>
    );
};

export default DummyUserInformation;