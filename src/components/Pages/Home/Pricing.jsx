import Title from "./SectionTitle";
import Button from "../../Button/Button";
import PricingCard from "../../PricingCard/PricingCard";

export default function Pricing() {

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
                        styles="bg-[#FF9500] py-[14px] px-[30px] rounded-[6px] font-[500] text-[15px] text-[#fff] hover:bg-[#ff9500f3] transition ease-in-out duration-200"
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