import PropTypes, { object, objectOf, string } from 'prop-types'

function AboutSec({
    secTitle,
    secPara,
    cards
}) {
    return (
        <>
            <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
                <h4 className="text-[35px] text-[#333] font-[500]">{secTitle}</h4>
                <span className="text-[15px] text-[#59595A] font-[400]">{secPara}</span>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] pt-[70px] pb-[70px]">
                    {cards.map(card => {
                        return (
                            <div className="bg-white rounded-[12px] md:p-[40px] p-[20px]" key={card.cardTitle}>
                                <div>
                                    <div className="mb-5 flex justify-center items-center w-[60px] bg-[#FFF9F0] h-[60px] border border-[#FFEACC] rounded-[8px]">
                                        <img src={card.Icon} />
                                    </div>
                                    <h4 className="text-[20px] text-[#262626] font-[600] mb-2">{card.cardTitle}</h4>
                                    <p className="text-[#59595A] font-[400] text-[15px]">{card.cardDescription}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

AboutSec.propTypes = {
    secTitle: PropTypes.string.isRequired,
    secPara: PropTypes.string.isRequired,
    cards: PropTypes.arrayOf(objectOf(string).isRequired).isRequired,
}

export default AboutSec;