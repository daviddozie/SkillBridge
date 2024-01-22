import PropTypes from 'prop-types'

function Input({
    label,
    labelFor,
    inputType,
    placeholder,
    inputName,
    onChange,
    onBlur,
    error,
}) {

    const borderColor = error ? 'border-[red] border-[2px]' : 'border';

    return (
        <div>
            <label htmlFor={labelFor} className="text-[14px] font-[500] text-[#262626] block mb-3">{label}</label>
            <input
                type={inputType}
                placeholder={placeholder}
                name={inputName}
                onChange={onChange}
                onBlur={onBlur}
                className={` bg-[#FCFCFD] w-full border  ${borderColor} border-[#F1F1F3] rounded-md p-5 text-[#656567] text-[14px] font-[400] inputs`}
            />
        </div>
    )
}

Input.propTypes = {
    labelFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    inputType: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default Input