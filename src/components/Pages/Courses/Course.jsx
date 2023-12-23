import Header from "../../Header/Header"
import CourseCard from "./CourseCard"
import Footer from "../../Footer/Footer"
import Subheader from "../../Subheader/Subheader"

export default function Course() {

    const cards = [
        {
            courseTrack: "Web Design Fundamentals",
            courseDes: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.",
            courseImages: [
                "/images/course_card1(1).png",
                "/images/course_card1(2).png",
                "/images/course_card1(3).png"
            ],
            courseDurationStatus: [
                "4 Weeks",
                "Beginnner"
            ],
            courseTrainer: "By John Smith",
            courseProcess: "Curriculum",
            semiCards: [
                {
                    courseNums: "01",
                    courseNumTitles: "Introduction to HTML",
                },
                {
                    courseNums: "02",
                    courseNumTitles: "Styling with CSS",
                },
                {
                    courseNums: "03",
                    courseNumTitles: "Introduction to Responsive Design",
                },
                {
                    courseNums: "04",
                    courseNumTitles: "Design Principles for Web",
                },
                {
                    courseNums: "05",
                    courseNumTitles: "Building a Basic Website",
                },
            ],
        },
        {
            courseTrack: "UI/UX Design",
            courseDes: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.",
            courseImages: [
                "/images/course_card2(1).png",
                "/images/course_card2(2).png",
                "/images/course_card2(3).png"
            ],
            courseDurationStatus: [
                "6 Weeks",
                "Intermediate"
            ],
            courseTrainer: "By Emily Johnson",
            courseProcess: "Curriculum",
            semiCards: [
                {
                    courseNums: "01",
                    courseNumTitles: "Introduction to UI/UX Design",
                },
                {
                    courseNums: "02",
                    courseNumTitles: "User Research and Personas",
                },
                {
                    courseNums: "03",
                    courseNumTitles: "Wireframing and Prototyping",
                },
                {
                    courseNums: "04",
                    courseNumTitles: "Visual Design and Branding",
                },
                {
                    courseNums: "05",
                    courseNumTitles: "Usability Testing and Iteration",
                },
            ],
        },
        {
            courseTrack: "Mobile App Development",
            courseDes: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.",
            courseImages: [
                "/images/course_card3(1).png",
                "/images/course_card3(2).png",
                "/images/course_card3(3).png"
            ],
            courseDurationStatus: [
                "8 Weeks",
                "Intermediate"
            ],
            courseTrainer: "By David Brown",
            courseProcess: "Curriculum",
            semiCards: [
                {
                    courseNums: "01",
                    courseNumTitles: "Introduction to Mobile App Development",
                },
                {
                    courseNums: "02",
                    courseNumTitles: "Fundamentals of Swift Programming (iOS)",
                },
                {
                    courseNums: "03",
                    courseNumTitles: "Fundamentals of Kotlin Programming (Android)",
                },
                {
                    courseNums: "04",
                    courseNumTitles: "Building User Interfaces",
                },
                {
                    courseNums: "05",
                    courseNumTitles: "App Deployment and Testing",
                },
            ],
        },
        {
            courseTrack: "Graphic Design for Beginners",
            courseDes: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media.",
            courseImages: [
                "/images/course_card4(1).png",
                "/images/course_card4(2).png",
                "/images/course_card4(3).png"
            ],
            courseDurationStatus: [
                "10 Weeks",
                "Beginnner"
            ],
            courseTrainer: "By Sarah Thompson",
            courseProcess: "Curriculum",
            semiCards: [
                {
                    courseNums: "01",
                    courseNumTitles: "Introduction to Graphic Design",
                },
                {
                    courseNums: "02",
                    courseNumTitles: "Typography and Color Theory",
                },
                {
                    courseNums: "03",
                    courseNumTitles: "Layout Design and Composition",
                },
                {
                    courseNums: "04",
                    courseNumTitles: "Image Editing and Manipulation",
                },
                {
                    courseNums: "05",
                    courseNumTitles: "Designing for Print and Digital Media",
                },
            ],
        },
        {
            courseTrack: "Front-End Web Development",
            courseDes: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites.",
            courseImages: [
                "/images/course_card5(1).png",
                "/images/course_card5(2).png",
                "/images/course_card5(3).png"
            ],
            courseDurationStatus: [
                "10 Weeks",
                "Intermediate"
            ],
            courseTrainer: "By Michael Adams",
            courseProcess: "Curriculum",
            semiCards: [
                {
                    courseNums: "01",
                    courseNumTitles: "HTML Fundamentals",
                },
                {
                    courseNums: "02",
                    courseNumTitles: "CSS Styling and Layouts",
                },
                {
                    courseNums: "03",
                    courseNumTitles: "JavaScript Basics",
                },
                {
                    courseNums: "04",
                    courseNumTitles: "Building Responsive Websites",
                },
                {
                    courseNums: "05",
                    courseNumTitles: "Introduction to Bootstrap and React",
                },
            ],
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
                focusText="Online Courses on Design and Development"
                subText="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
            />
            <div className="gap-[50px] grid grid-cols-1">
                {cards.map(card => {
                    return (
                        <CourseCard
                            key={card.courseTrack}
                            card={card}
                        />
                    )
                })}
            </div>
            <div className="mt-[100px]">
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