import Header from "../../Header/Header"
import Subheader from "../../Subheader/Subheader"
import AboutSec from "./AboutSec"
import AboutRev from "./AboutRev"
import Footer from "../../Footer/Footer"

export default function About() {

    const sections = [
        {
            secTitle: "Achievements",
            secPara: "Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements",
            cards: [
                {
                    Icon: "images/about_card1(1).png",
                    cardTitle: "Trusted by Thousands",
                    cardDescription: "We have successfully served thousands of students, helping them unlock their potential and achieve their career goals."
                },
                {
                    Icon: "images/about_card1(2).png",
                    cardTitle: "Award-Winning Courses",
                    cardDescription: "Our courses have received recognition and accolades in the industry for their quality, depth of content, and effective teaching methodologies."
                },
                {
                    Icon: "images/about_card1(3).png",
                    cardTitle: "Positive Student Feedback",
                    cardDescription: "We take pride in the positive feedback we receive from our students, who appreciate the practicality and relevance of our course materials."
                },
                {
                    Icon: "images/about_card1(4).png",
                    cardTitle: "Industry Partnerships",
                    cardDescription: "We have established strong partnerships with industry leaders, enabling us to provide our students with access to the latest tools and technologies"
                },
            ]
        },
        {
            secTitle: "Our Goals",
            secPara: "At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.Through our carefully crafted courses, we aim to",
            cards: [
                {
                    Icon: "images/about_card2(1).png",
                    cardTitle: "Provide Practical Skills",
                    cardDescription: "We focus on delivering practical skills that are relevant to the current industry demands. Our courses are designed to equip learners with the knowledge and tools needed to excel in their chosen field."
                },
                {
                    Icon: "images/about_card2(2).png",
                    cardTitle: "Foster Creative Problem-Solving",
                    cardDescription: "We encourage creative thinking and problem-solving abilities, allowing our students to tackle real-world challenges with confidence and innovation."
                },
                {
                    Icon: "images/about_card2(3).png",
                    cardTitle: "Promote Collaboration and Community",
                    cardDescription: "We believe in the power of collaboration and peer learning. Our platform fosters a supportive and inclusive community where learners can connect, share insights, and grow together."
                },
                {
                    Icon: "images/about_card2(4).png",
                    cardTitle: "Stay Ahead of the Curve",
                    cardDescription: "We have successfully served thousands of studentThe digital landscape is constantly evolving, and we strive to stay at the forefront of industry trends. We regularly update our course content to ensure our students receive the latest knowledge and skills."
                },
            ]
        },
    ]

    return (
        <>
            <Header
                headerText="Free Courses 🌟 Sale Ends"
                headerLogo="/images/header_Logo.jpg"
                logo="header_logo"
                signUp="Sign Up"
            />
            <Subheader
                focusText="About Skillbridge"
                subText="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
            />
            {sections.map(section => {
                return (
                    <AboutSec
                        key={section.secTitle}
                        secTitle={section.secTitle}
                        secPara={section.secPara}
                        cards={section.cards}
                    />
                )
            })}
            <AboutRev
                fTitle='Together'
                Title=", let's shape the future of digital innovation"
                parag="Join us on this exciting learning journey and unlock your potential in design and development."
                shape="/images/About_Shape.png"
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
        </>
    )
}