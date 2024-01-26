import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Title from './SectionTitle'
import Button from '../../Button/Button'
import PropTypes from 'prop-types'

function Benefit() {

    const benefits = [
        {
            num: "01",
            label: "Flexible Learning Schedule",
            subLabel: "Fit your coursework around your existing commitments and obligations.",
        },
        {
            num: "02",
            label: "Expert Instruction",
            subLabel: "Learn from industry experts who have hands-on experience in designs",
        },
        {
            num: "03",
            label: "Diverse Course Offerings",
            subLabel: "Explore a wide range of design and development courses",
        },
        {
            num: "04",
            label: "Updated Curriculum",
            subLabel: "Access courses with up-to-date content reflecting the latest trends",
        },
        {
            num: "05",
            label: "Practical Projects",
            subLabel: "Develop a portfolio showcasing your skills and abilities to potential employers.",
        },
        {
            num: "06",
            label: "Interactive Learning",
            subLabel: "Collaborate with fellow learners and exchanging ideas",
        },
    ]

    return (
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto mt-[50px] overflow-hidden">
            <div className='flex flex-col lg:flex-row lg:items-center'>
                <Title
                    title="Benefits"
                    subTitle="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
                />
                <Button
                    label="View All"
                    type="button"
                    styles="border border-[#F1F1F3] bg-[#FCFCFD] rounded-[8px] py-[14px] px-[24px] font-[500] text-[16px] text-[262626] w-[130px] lg:ms-[200px] mt-6 lg:mt-0  hover:bg-[#eaeaeb] transition ease-in-out duration-500"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-[70px]">
                {benefits.map(benefit => {
                    return (
                        <BenefitCard
                            key={benefit.num}
                            benefitCard={benefit}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function BenefitCard({
    benefitCard
}) {

    const {
        num,
        label,
        subLabel,
    } = benefitCard

    return (
        <div>
            <div className="bg-white rounded-[12px] py-[30px] px-[25px] benefit-card" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-duration="1000" data-aos-once="true">
                <div className="flex justify-end">
                    <span className="font-[700] text-[60px] my-0">{num}</span>
                </div>
                <div className="mb-[30px]">
                    <h5 className="font-[700] text-[18px] text-[#333] pb-4">{label}</h5>
                    <p className="font-[400] text-[14px] text-[#4C4C4D]">{subLabel}</p>
                </div>
                <div className='flex justify-end'>
                    <div className='border border-[#F1F1F3] bg-[#FCFCFD] rounded-[8px] p-[15px] w-[22%] h-[22%] flex justify-center items-center'>
                        <FontAwesomeIcon icon={faArrowRight} className='rote text-[#FF9500]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

BenefitCard.propTypes = {
    benefitCard: PropTypes.exact({
        num: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        subLabel: PropTypes.string.isRequired,
        benefit: PropTypes.arrayOf(PropTypes.string.isRequired)
    })
}

export default Benefit;