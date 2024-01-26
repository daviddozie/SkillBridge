import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import PropTypes from 'prop-types'

function Accordion({
    qest,
    ans,
}) {

    const [accordionOpen, setAccordionOpen] = useState(false);

    const handleToggle = () => {
        setAccordionOpen(!accordionOpen)
    }

    return (
        <div className="border border-[#F1F1F3] rounded-[12px] pt-3 px-3 md:pt-5 md:px-5 mb-[15px] md:mb-[30px]">
            <div className='flex justify-between items-center gap-2 md:gap-6'>
                <p className='text-[16px] text-[#262626] font-[500]'>{qest}</p>
                <FontAwesomeIcon
                    icon={accordionOpen ? faXmark : faPlus}
                    className='text-[#262626] bg-[#FFF4E5] px-[12px] py-[10px] rounded-[5px] cursor-pointer text-[15px]'
                    onClick={handleToggle}
                />
            </div>
            <div className={`pt-5 grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen ? "grid-rows-[1fr] opacity-100"
                : "grid-rows-[0fr] opacity-0"}`}>
                <div className='overflow-hidden'>
                    <hr />
                    <p className='text-[15px] text-[#4C4C4D] font-[400] mt-[40px] overflow-hidden pb-3 md:pb-5'>{ans}</p>
                </div>
            </div>
        </div>
    )
}

Accordion.propTypes = {
    qest: PropTypes.string.isRequired,
    ans: PropTypes.string.isRequired,
}

export default Accordion;