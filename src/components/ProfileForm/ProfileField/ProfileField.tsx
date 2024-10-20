import classes from './ProfileField.module.scss';

const { profileInput, inputWrapper, emailBtn } = classes;

interface ProfileFieldProps {
    fieldName: string,
    fieldValue: string
};

const ProfileField = ({ fieldName, fieldValue }: ProfileFieldProps) => {

    const handleEditClick = (evnt: React.MouseEvent<HTMLButtonElement>) => {
        evnt.preventDefault();
        evnt.stopPropagation();
        console.log('uwu')
    }

    return (
        <div className={profileInput}>
            <label htmlFor="fieldName">{fieldName}</label>
            <div className={inputWrapper}>
                <input
                    type="text"
                    placeholder='field name'
                    id="fieldName"
                    value={fieldValue}
                    readOnly
                />
                <button
                    className={fieldName == 'email' ? emailBtn : ''}
                    type="button"
                    onClick={handleEditClick}>
                    Edit
                </button>
            </div>
        </div>
    );
};

export default ProfileField;