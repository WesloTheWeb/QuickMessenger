import classes from './LandingHeader.module.scss';

const { landingHeader } = classes;

const LandingHeader = ({ }) => {
    return (
        <section className={landingHeader}>
            <h2>A new way to chat</h2>
            <p>
                Introducing <b>Quick Messenger</b>! A place to connect with friends or strangers when you are
                bored.
            </p>
            <h2>Features</h2>
            <div>
                An interactive chatroom upon signing up. Choose from a variety of chat channels.
                <ul>
                    <li>Custom profiles</li>
                    <li>Engaging chat channels</li>
                    <li>Latest on entertainments</li>
                    <li>Guest chat channels *Coming soon</li>
                    <li>and more...!</li>
                </ul>
            </div>
        </section>
    );
}

export default LandingHeader;