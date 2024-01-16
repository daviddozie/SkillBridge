import Accordion from "./Accordion";

function FAQ({
    title,
    brTitle,
    subTitle,
    step,
}) {

    const accordions = [
        {
            qest: "Can I enroll in multiple courses at once?",
            ans: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience.",
        },
        {
            qest: "What kind of support can I expect from instructors?",
            ans: "hands-on technical guidance, project assistance, code reviews, Q&A sessions, collaborative learning, and career support from instructors.",
        },
        {
            qest: "Are the courses self-paced or do they have specific start and end dates?",
            ans: "The courses have both specific start and end dates and a self-paced option, allowing you to choose the preferred mode.",
        },
        {
            qest: "Are there any prerequisites for the courses?",
            ans: "Yes,for each course, there are prerequisites designed to help you grasp the fundamentals specific to that track.",
        },
        {
            qest: "Can I download the course materials for offline access?",
            ans: "Yes, you can download course materials for offline access, providing flexibility in your learning experience.",
        },
    ]

    return (
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto mb-[100px]">
            <div className="bg-[#fff] rounded-[12px] p-[20px] lg:p-[50px]">
                <div className="flex gap-[30px] md:flex-row flex-col">
                    <div className="md:w-[38%]" data-aos="fade-right" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
                        <h2 className="text-[28px] md:text-[38px] font-[600] text-[#262626] leading-normal">{title}</h2>
                        <h2 className="text-[28px] md:text-[38px] font-[600] text-[#262626] leading-[35px]">{brTitle}</h2>
                        <p className="mt-[20px] text-[14px] text-[#333] font-[400]">{subTitle}</p>
                        <div className="border border-[#F1F1F3] rounded-[8px] bg-[#fff] py-[16px] px-[18px] flex justify-content-center items-center max-w-[136px] mt-[50px]">
                            <p className="text-[15px] text-[#262626] font-[500]">{step}</p>
                        </div>
                    </div>
                    <div className="border border-[#F1F1F3] rounded-[12px] px-[15px] pt-[15px] md:px-[30px] md:pt-[30px] md:w-[62%]" data-aos="zoom-in" data-aos-easing="ease-in-out" data-aos-once="true" data-aos-duration="1000">
                        {accordions.map(accordion => {
                            return (
                                <Accordion
                                    key={accordion.qest}
                                    qest={accordion.qest}
                                    ans={accordion.ans}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;