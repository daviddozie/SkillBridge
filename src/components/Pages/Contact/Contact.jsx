import Header from "../../Header/Header"
import Subheader from "../../Subheader/Subheader"
import Button from "../../Button/Button"
import Form from "./Form"
import Footer from "../../Footer/Footer"

export default function Contact() {
    return (
        <>
            <Header
                headerText="Free Courses 🌟 Sale Ends"
                headerLogo="/images/header_Logo.jpg"
                logo="header_logo"
                signUp="Sign Up"
            />
            <Subheader
                focusText="Contact Us"
                subText="Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements."
            />
            <Form />
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