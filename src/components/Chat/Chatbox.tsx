import { useState, FormEvent } from 'react';
import classes from './Chatbox.module.scss';

const {chatboxContainer, chatInput, sendButton } = classes;

const Chatbox = () => {
    const [message, setMessage] = useState('');

    const handleSend = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (message.trim()) {
            console.log('Sending message:', message);
            // TODO: Implement actual send functionality
            setMessage('');
        };
    };

    return (
        <form className={chatboxContainer} onSubmit={handleSend}>
            <input 
                type="text"
                className={chatInput}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message here..."
            />
            <button 
                type="submit"
                className={sendButton}
            >
                Send
            </button>
        </form>
    );
};

export default Chatbox;