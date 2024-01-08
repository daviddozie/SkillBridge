import Footer from "../../Footer/Footer";
import LoginSec from "./LoginSec";
import SwiperSec from "../SignUp/SwiperSec";
import Header from "../../Header/Header";

function Login() {
    return (
        <div>
            <Header
                headerText="Free Courses 🌟 Sale Ends"
                headerLogo="/images/header_Logo.jpg"
                logo="header_logo"
                signUp="Sign Up"
            />
            <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:pt-[70px] pb-[100px] gap-[70px]">
                    <SwiperSec
                        title="Students Testimonials"
                        subTitle="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
                    />
                    <LoginSec 
                        title="Login"
                        des="Welcome back! Please log in to access your account."
                        terms="Remember Me"
                        bridge="Don’t have an account?"
                        or="OR"
                        log="Sign Up"
                    />
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
        </div>
    )
}

export default Login;