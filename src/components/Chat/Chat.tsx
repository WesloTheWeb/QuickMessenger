import classes from './Chat.module.scss';
import Chatbox from './Chatbox';

const { chatContainer } = classes;

const Chat = ({ }) => {

    return (
        <section className={chatContainer}>
            <Chatbox />
        </section>
    );
};

export default Chat;