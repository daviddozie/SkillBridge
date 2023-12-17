import PropTypes from 'prop-types'

function Title({
    title,
    subTitle
}) {
    return (
        <div>
            <h4 className="font-[600] text-[38px]">{title}</h4>
            <span className="font-[400] text-[16px] text-[#59595A]">{subTitle}</span>
        </div>
    )
}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

export default Title;