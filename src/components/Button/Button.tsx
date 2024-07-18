import classes from './Button.module.scss';

interface ButtonProps {
    buttonType: ButtonTypes;
    handleClick?: () => void;
    disabled?: boolean;
}

// ? button types, handles type
export enum ButtonTypes {
    REGISTER = 'register',
    CANCEL = 'cancel',
}

// ? handles CSS of button
const buttonPaths = {
    [ButtonTypes.REGISTER]: classes.registerButton,
    [ButtonTypes.CANCEL]: classes.cancelButton,
};

// ? handles the text of button.
const buttonTexts = {
    [ButtonTypes.REGISTER]: 'Register',
    [ButtonTypes.CANCEL]: 'Cancel',
};

const Button: React.FC<ButtonProps> = ({ buttonType, handleClick, disabled }) => {
    const buttonClass = buttonPaths[buttonType];
    const buttonText = buttonTexts[buttonType];

    return (
        <button className={buttonClass} onClick={handleClick} disabled={disabled}>
            {buttonText}
        </button>
    );
};

export default Button;
