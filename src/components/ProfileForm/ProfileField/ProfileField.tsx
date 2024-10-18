import classes from './ProfileField.module.scss';

const { profileInput, inputWrapper } = classes;

const ProfileField = ({ }) => {

    const handleEditClick = (evnt: React.MouseEvent<HTMLButtonElement>) => {
        evnt.preventDefault();
        evnt.stopPropagation();
        console.log('uwu')
    }

    return (
        <div className={profileInput}>
            <label htmlFor="fieldName">Field Name</label>
            <div className={inputWrapper}>
                <input 
                    type="text" 
                    placeholder='field name'
                    id="fieldName" 
                    readOnly
                 />
                <button  
                    type="button"
                    onClick={handleEditClick}>
                        Edit
                    </button>
            </div>
        </div>
    );
};

export default ProfileField;