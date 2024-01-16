import Title from "./SectionTitle";
import Button from "../../Button/Button";
import PropTypes from 'prop-types'

function Testmonial() {

    const testimonies = [
        {
            id: 1,
            testimony: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
            profile: "../images/testimonial1.png",
            profileAlt: "profile1",
            profileName: "Sarah L"
        },
        {
            id: 2,
            testimony: "The UI/UX design course exceeded my expectations. The instructor's expertise and practical assignments helped me improve my design skills. I feel more confident in my career now. Thank you!",
            profile: "../images/testimonial2.png",
            profileAlt: "profile2",
            profileName: "Jason M"
        },
        {
            id: 3,
            testimony: "The mobile app development course was fantastic! The step-by-step tutorials and hands-on projects helped me grasp the concepts easily. I'm now building my own app. Great course!",
            profile: "../images/testimonial3.png",
            profileAlt: "profile3",
            profileName: "Emily R"
        },
        {
            id: 4,
            testimony: "I enrolled in the graphic design course as a beginner, and it was the perfect starting point. The instructor's guidance and feedback improved my design abilities significantly.",
            profile: "../images/testimonial4.png",
            profileAlt: "profile4",
            profileName: "Michael K"
        },
    ]

    return (
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center">
                <Title
                    title="Our Testmonials"
                    subTitle="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
                />
                <Button
                    label="View All"
                    type="button"
                    styles="border border-[#F1F1F3] bg-[#FCFCFD] rounded-[8px] py-[14px] px-[24px] font-[500] text-[16px] text-[262626] w-[130px] lg:ms-[200px] mt-6 lg:mt-0  hover:bg-[#eaeaeb] transition ease-in-out duration-500"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] my-[70px]">
                {testimonies.map(testimony => {
                    return (
                        <TestmonialCard
                            key={testimony.id}
                            textCard={testimony}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function TestmonialCard({
    textCard
}) {

    const {testimony, profile, profileAlt, profileName,} = textCard

    return (
        <div className="bg-[#FFF] rounded-[8px] benefit-card" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
            <div className="p-[15px] lg:p-[30px]">
                <span className="text-[15px] text-[#4C4C4D] font-[400]">{testimony}</span>
            </div>
            <div className="border border-[#F1F1F3] bg-[#FCFCFD] p-[15px] lg:p-[30px] rounded-bl-[8px] rounded-br-[8px] flex justify-between items-end">
                <div className="flex items-center gap-3">
                    <img src={profile} alt={profileAlt} />
                    <span className="font-[600] text-[15px] text-[#333]">{profileName}</span>
                </div>
                <Button
                    label="Read Full Story"
                    type="button"
                    styles="py-[14px] px-[18px] lg:py-[18px] lg:px-[24px] border border-[#F1F1F3] bg-[#F7F7F8] rounded-[8px] text-[15px] font-[500] text-[#262626] hover:bg-[#eaeaeb] transition ease-in-out duration-500"
                />
            </div>
        </div>
    )
}

TestmonialCard.propTypes = {
    textCard: PropTypes.exact({
        testimony: PropTypes.string.isRequired,
        profile: PropTypes.string.isRequired,
        profileAlt: PropTypes.string.isRequired,
        profileName: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })
}

export default Testmonial;