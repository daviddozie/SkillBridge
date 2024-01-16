import PropTypes from 'prop-types'

function Input({
    field
}) {

    const {
        labelFor,
        label,
        inputType,
        inputName,
        placeholder,
    } = field

    const gridClasses = {
        "Subject": ["last--Item"],
        "FirstName": ["grid--Item"],
        "LastName": ["grid--Item"],
        "Phone": ["grid--Item"],
        "Email": ["grid--Item"]
    }

    const gridClass = gridClasses[inputName];

    return (
        <div className={`${gridClass}`}>
            <label htmlFor={labelFor} className="text-[14px] font-[500] text-[#262626] block mb-3">{label}</label>
            <input typeof={inputType} name={inputName} placeholder={placeholder} className="bg-[#FCFCFD] w-full border border-[#F1F1F3] rounded-md p-5 text-[#656567] text-[14px] font-[400]" />
        </div>
    )
}

Input.propTypes = {
    field: PropTypes.exact({
        labelFor: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        inputType: PropTypes.string.isRequired,
        inputName: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
    })
}

export default Input