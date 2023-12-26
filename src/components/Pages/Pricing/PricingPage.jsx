import Header from "../../Header/Header"
import Subheader from "../../Subheader/Subheader"
import Button from "../../Button/Button"
import PricingCard from "../../PricingCard/PricingCard"
import Footer from "../../Footer/Footer"

export default function PricingPage() {

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
        <>
            <Header
                headerText="Free Courses 🌟 Sale Ends"
                headerLogo="/images/header_Logo.jpg"
                logo="header_logo"
                signUp="Sign Up"
            />
            <Subheader
                focusText="Our Pricings"
                subText="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
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
            <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
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
            <Footer
                imgLogo="/images/header_Logo.jpg"
                logoAlt="logo"
                mail="hello@skillbridge.com"
                contact="+91 91813 23 2309"
                location="Somewhere in the World"
                title="Social Profiles"
                copyRight="© 2023 Skillbridge. All rights reserved."
            />
        </>
    )
}