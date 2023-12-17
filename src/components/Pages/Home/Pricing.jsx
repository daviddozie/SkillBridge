import Title from "./SectionTitle";
import Button from "../../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

function Pricing() {

    const priceCards = [
        {
            id: 1,
            label: "Free Plan",
            num: "$0",
            date: "/month",
            status: "Avaliable Features",
            benefits: [
                "Access to selected free courses.",
                "Limited course materials and resources.",
                "Basic community support.",
                "No certification upon completion.",
                "Ad-supported platform.",
                "Access to exclusive Pro Plan community forums.",
                "Early access to new courses and updates.",
            ]
        },
        {
            id: 2,
            label: "Pro Plan",
            num: "$79",
            date: "/month",
            status: "Avaliable Features",
            benefits: [
                "Unlimited access to all courses.",
                "Unlimited course materials and resources.",
                "Priority support from instructors.",
                "Course completion certificates.",
                "Ad-free experience.",
                "Access to exclusive Pro Plan community forums.",
                "Early access to new courses and updates.",
            ]
        },
    ];

    return (
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center">
                <Title
                    title="Our Pricing"
                    subTitle="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
                />
                <div className="bg-[#FFF] p-[12px] rounded-[8px] flex items-center justify-center w-[260px] h-[80px] mx-auto mt-9 lg:mt-0">
                    <Button
                        label="Monthly"
                        type="button"
                        styles="bg-[#FF9500] py-[14px] px-[30px] rounded-[6px] font-[500] text-[15px] text-[#fff]"
                    />
                    <Button
                        label="Yearly"
                        type="button"
                        styles="py-[14px] px-[30px] rounded-[6px] font-[500] text-[15px] text-[#4C4C4D]"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] bg-white p-[20px] md:p-[50px] rounded-[12px] my-[70px]">
                {priceCards.map((priceCard) => {
                    return (
                        <PricingCard
                            key={priceCard.id}
                            card={priceCard}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function PricingCard({
    card
}) {

    const {
        label,
        num,
        status,
        date,
        benefits
    } = card


    function check(params) {
        alert('Successful')
    }

    return (
        <div>
            <div className="border border-[#F1F1F3] bg-[#FCFCFD] rounded-[12px] py-[20px] px-[10px] md:py-[40px] md:px-[25px]">
                <div className="border border-[#FFEACC] rounded-[6px] bg-[#FFF9F0]  py-[12px] px-[22px] flex justify-center">
                    <span className="font-[500] text-[18px] text-[#262626]">{label}</span>
                </div>
                <div className="flex justify-center my-5">
                    <span className="text-[60px] font-[700]">{num}<span className="font-[500] text-[16px]">{date}</span></span>
                </div>
                <div className="border border-[#F1F1F3] rounded-[14px] pt-[20px] bg-white">
                    <div className="flex justify-center mb-5 px-[20px]">
                        <span className="font-[500] text-[18px] text-[#262626]">{status}</span>
                    </div>
                    <div className="flex justify-center p-[10px] md:px-[20px]">
                        <ul>
                            <div>
                                {benefits.map((benefit, index) => {
                                    return (
                                        <div className="flex items-center border border-[#F1F1F3] rounded-[8px] p-[8px] md:p-[14px] gap-3 mb-5">
                                            <FontAwesomeIcon icon={faCheck} className="bg-[#FFF9F0] p-2 rounded-[6px] text-[#262626]" />
                                            <li key={index}>{benefit}</li>
                                        </div>
                                    )
                                })}
                            </div>
                        </ul>
                    </div>
                    <Button
                    handleEvent={check}
                        label="Get Started"
                        type='button'
                        styles="bg-[#FF9500] py-[20px] rounded-bl-[8px] rounded-br-[8px] w-[100%] text-white text-[15px] font-[600]"
                    />
                </div>
            </div>
        </div>
    )
}

PricingCard.propTypes = {
    card: PropTypes.exact({
        label: PropTypes.string.isRequired,
        num: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
        benefits: PropTypes.arrayOf(PropTypes.string.isRequired),
    })
}

export default Pricing;