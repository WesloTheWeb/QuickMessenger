import classes from './Chat.module.scss';
import Chatbox from './ChatBox';

const { chatContainer } = classes;

const Chat = ({ }) => {

    return (
        <section className={chatContainer}>
            <Chatbox />
        </section>
    );
};

export default Chat;