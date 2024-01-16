import Header from "../../Header/Header"
import Hero from "./Hero"
import Benefit from "./Benefit"
import Courses from "./Courses"
import Testmonial from "./Testmonial"
import Pricing from "./Pricing"
import Footer from "../../Footer/Footer"
import FAQ from "../../FAQ/FAQ"

export default function Home() {

    return (
        <>
            <div>
                <Header
                    headerText="Free Courses 🌟 Sale Ends"
                    headerLogo="/images/header_Logo.jpg"
                    logo="header_logo"
                    signUp="Sign Up"
                />
                <Hero
                    spark="/images/spark.png"
                    sparkAlt="spark"
                    flashIcon="/images/flash_Icon.png"
                    flashIconAlt="flash_icon"
                    subHeroTitle="Unlock"
                    heroTitle="Your Creative Potential"
                    heroNtitle="with Online Design and Development Courses."
                    heroText="Learn from Industry Experts and Enhance Your Skills."
                    heroImg="/images/hero_img.png"
                    heroAlt='heroImg'
                />
                <Benefit />
                <Courses />
                <Testmonial />
                <Pricing />
                <FAQ
                    title='Frequently'
                    brTitle="Asked Questions"
                    subTitle='Still you have any questions? Contact our Team via support@skillbridge.com'
                    step="See All FAQ’s"
                />
                <Footer
                    imgLogo="/images/header_Logo.jpg"
                    logoAlt="logo"
                    mail="hello@skillbridge.com"
                    contact="+91 91813 23 2309"
                    location="Somewhere in the World"
                    title="Social Profiles"
                    copyRight="© 2023 Skillbridge. All rights reserved."
                />
            </div>
        </>
    )
}