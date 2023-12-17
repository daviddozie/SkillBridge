import PropTypes from 'prop-types'

function Button({
    label,
    type,
    styles,
    handleEvent
}) {
    return (
        <div>
            <button typeof={type} className={styles} onClick={handleEvent}>{label}</button>
        </div>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    styles: PropTypes.string.isRequired
}

export default Button;