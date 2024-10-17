import classes from './Overlay.module.scss';

interface OverlayProps {
    children: React.ReactNode;
    onClose: () => void;
    onClick?: () => void;
}

const Overlay = ({ children, onClose }: OverlayProps) => {
    return (
        <div className={classes.overlay} onClick={onClose}>
            {children}
        </div>
    );
};

export default Overlay;