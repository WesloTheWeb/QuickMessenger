import classes from './LandingHeader.module.scss';

const { landingHeader } = classes;

const LandingHeader = ({ }) => {
    return (
        <section className={landingHeader}>
            <h2>A new way to chat</h2>
            <p>
                Introducing <b>Quick Messenger</b> – Your go-to chatroom for spontaneous conversations, interactive communities,
                and endless fun! Whether you&apos;re looking to hang out with friends or connect with new people,
                We are here to keep you engaged like the mid 00s of chatrooms with friends and people you have not
                met yet!
            </p>
            <h2>Features</h2>
            <div>
                <p>An interactive chatroom upon signing up. Choose from a variety of chat channels.</p>
                <ul>
                    <li>Custom Profiles – Personalize your profile to express yourself in style.</li>
                    <li>Engaging Chat Channels – Explore channels for every interest and vibe.</li>
                    <li>Real-time Messaging – Say goodbye to delays; chat live and stay in the moment.</li>
                    <li>Entertainment News & Updates – Stay in the loop with the latest trends and events.</li>
                    <li>Secure Conversations – Your privacy, our priority.</li>
                    <li>Guest Chat Channels <i>(Coming Soon!)</i> – Join the fun, no account needed.</li>
                </ul>
            </div>
            <h3>Why Quick Messenger?</h3>
            <div>
                <p>
                    Step into a world where conversations flow freely. Whether you’re looking for deep discussions 
                    or casual chatter,
                    Quick Messenger is the space for you. It’s fast, interactive, and designed for everyone—anytime, anywhere.
                </p>
                <p>
                    Join the chat and experience Quick Messenger today. Make connections, find your community, and never be bored again! 🎉
                </p>
            </div>
        </section>
    );
}

export default LandingHeader;