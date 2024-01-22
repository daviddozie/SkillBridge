import PropTypes from 'prop-types'

function TextArea({
    areaName,
    id,
    labelFor,
    label,
    placeholder,
    onChange,
    onBlur,
    error,
}) {
    const borderColor = error ? 'border-[red] border-[2px]' : 'border';

    return (
        <div>
            <label htmlFor={labelFor} className={`text-[14px] font-[500] text-[#262626] block mb-3`}>{label}</label>
            <textarea name={areaName} id={id} onChange={onChange} onBlur={onBlur} className={`bg-[#FCFCFD] w-full border border-[#F1F1F3] rounded-md p-5 text-[#656567] text-[14px] font-[400] h-[150px] ${borderColor}`} placeholder={placeholder}></textarea>
        </div>
    )
}

TextArea.propTypes = {
    areaName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    labelFor: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
}

export default TextArea;