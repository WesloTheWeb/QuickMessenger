import classes from './Chatbox.module.scss';

const { chatboxContainer } = classes;

const Chatbox = ({}) => {
    return (
        <textarea 
            className={chatboxContainer}
        />
    );
};

export default Chatbox;