import PropTypes from 'prop-types'

function Subheader({
    focusText,
    subText
}) {
    return (
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 py-[100px] gap-[10px] lg:gap-[80px]">
                <h1 className="font-[700] text-[33px] text-[#262626]">{focusText}</h1>
                <p className="text-[14px] font-[400] text-[#59595A]">{subText}</p>
            </div>
        </div>
    )
}

Subheader.propTypes = {
    focusText: PropTypes.string.isRequired,
    subText: PropTypes.string.isRequired
}

export default Subheader;