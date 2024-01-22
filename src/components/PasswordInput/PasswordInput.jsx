import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function PasswordInput({
    labelFor,
    label,
    inputName,
    placeholder,
    onChange,
    onBlur,
    error,
}) {

    const borderColor = error ? 'border-[red] border-[2px]' : 'border';
    const [isPasswordClicked, setIsPasswordClicked] = useState(false);

    const inputType = isPasswordClicked ? 'text' : 'password';

    const handleToggle = () => {
        setIsPasswordClicked(!isPasswordClicked)
    }

    return (
        <div>
            <label htmlFor={labelFor} className="text-[14px] font-[500] text-[#262626] block mb-3">{label}</label>
            <div className={`flex items-center bg-[#FCFCFD] border border-[#F1F1F3] w-full px-5 rounded-md ${borderColor}`}>
                <input type={inputType} name={inputName} placeholder={placeholder} onChange={onChange} onBlur={onBlur} className={`bg-[#FCFCFD] w-full text-[#656567] text-[14px] font-[400] py-5`} />
                <FontAwesomeIcon
                    icon={isPasswordClicked ? faEyeSlash : faEye}
                    className='pl-5 cursor-pointer'
                    onClick={handleToggle}
                />
            </div>
        </div>
    )
}

export default PasswordInput;