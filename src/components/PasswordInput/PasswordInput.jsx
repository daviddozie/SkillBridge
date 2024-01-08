import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

function PasswordInput({
    labelFor,
    label,
    inputType,
    inputName,
    placeholder,
}) {
    return (
        <div>
            <label htmlFor={labelFor} className="text-[14px] font-[500] text-[#262626] block mb-3">{label}</label>
            <div className='flex items-center bg-[#FCFCFD] border border-[#F1F1F3] w-full px-5 rounded-md'>
                <input type={inputType} name={inputName} placeholder={placeholder} className="bg-[#FCFCFD] w-full text-[#656567] text-[14px] font-[400] py-5" />
                <FontAwesomeIcon icon={faEye} className='pl-5 cursor-pointer'/>
            </div>
        </div>
    )
}

export default PasswordInput;