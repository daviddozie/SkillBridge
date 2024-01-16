import Title from "./SectionTitle";
import Button from "../../Button/Button";
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

function Courses() {

    const tracks = [
        {
            id: 1,
            image: "../images/course1.png",
            imageAlt: "man_write",
            cardDuration: "4 Weeks",
            cardLevel: "Beginner",
            cardName: "By John Smith",
            cardTrack: "Web Design Fundamentals",
            cardDescrption: "Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites."
        },
        {
            id: 2,
            image: "../images/course2.png",
            imageAlt: "man_type",
            cardDuration: "6 Weeks",
            cardLevel: "Intermediate",
            cardName: "By Emily Johnson",
            cardTrack: "UI/UX Design",
            cardDescrption: "Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques."
        },
        {
            id: 3,
            image: "../images/course3.png",
            imageAlt: "phone_book",
            cardDuration: "8 Weeks",
            cardLevel: "Intermediate",
            cardName: "By David Brown",
            cardTrack: "Mobile App Development",
            cardDescrption: "Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin."
        },
        {
            id: 4,
            image: "../images/course4.png",
            imageAlt: "pencil_book_tea",
            cardDuration: "10 Weeks",
            cardLevel: "Beginner",
            cardName: "By Sarah Thompson",
            cardTrack: "Graphic Design for Beginners",
            cardDescrption: "Discover the fundamentals of graphic design, including typography, color theory, layout design, and image manipulation techniques. Create visually stunning designs for print and digital media."
        },
        {
            id: 5,
            image: "../images/course5.png",
            imageAlt: "woman_type",
            cardDuration: "10 Weeks",
            cardLevel: "Intermediate",
            cardName: "By Michael Adams",
            cardTrack: "Front-End Web Development",
            cardDescrption: "Become proficient in front-end web development. Learn HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React. Build interactive and responsive websites."
        },
        {
            id: 6,
            image: "../images/course6.png",
            imageAlt: "woman_type_music",
            cardDuration: "6 Weeks",
            cardLevel: "Advance",
            cardName: "By Jennifer Wilson",
            cardTrack: "Advanced JavaScript",
            cardDescrption: "Take your JavaScript skills to the next level. Explore advanced concepts like closures, prototypes, asynchronous programming, and ES6 features. Build complex applications with confidence."
        },
    ];

    return (
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-center">
                <Title
                    title="Our Courses"
                    subTitle="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
                />
                <Button
                    label="View All"
                    type="button"
                    styles="border border-[#F1F1F3] bg-[#FCFCFD] rounded-[8px] py-[14px] px-[24px] font-[500] text-[16px] text-[262626] w-[130px] lg:ms-[200px] mt-6 lg:mt-0  hover:bg-[#eaeaeb] transition ease-in-out duration-500"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] my-[70px]">
                {tracks.map(track => {
                    return (
                        <CoursesCard
                            key={track.id}
                            courseCard={track}
                        />
                    )
                })}
            </div>
        </div>
    )
}

function CoursesCard({
    courseCard
}) {

    const {
        image,
        imageAlt,
        cardDuration,
        cardLevel,
        cardName,
        cardTrack,
        cardDescrption,
    } = courseCard

    return (
        <div>
            <div className="bg-[#fff] border border-[#F1F1F3] rounded-[12px] p-[15px] md:p-[30px] course-card">
                <div>
                    <div className="relative overflow-hidden rounded-[6px]">
                        <img src={image} alt={imageAlt} className="imgScale"/>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between py-[30px]">
                        <div className="flex items-center gap-3">
                            <div className="border border-[#F1F1F3] rounded-[12px] py-[10px] px-[16px]">
                                <span className="text-[16px] font-[400] text-[#4C4C4D]">{cardDuration}</span>
                            </div>
                            <div className="border border-[#F1F1F3] rounded-[12px] py-[10px] px-[16px]">
                                <span className="text-[16px] font-[400] text-[#4C4C4D]">{cardLevel}</span>
                            </div>
                        </div>
                        <span className="font-[600] text-[16px] text-[#262626] pt-5 md:pt-0">{cardName}</span>
                    </div>
                    <h4 className="font-[700] text-[20px] text-[#262626] pb-3">{cardTrack}</h4>
                    <div className="pb-5">
                        <span className="font-[400] text-[14px] text-[#4C4C4D]">{cardDescrption}</span>
                    </div>
                    <div>
                        <NavLink to="./courses">
                            <Button
                                label="Get it Now"
                                type="button"
                                styles="border border-[#F1F1F3] rounded-[8px] bg-[#F7F7F8] w-[100%] py-[12px] font-[500] text-[15px] hover:bg-[#eaeaeb] transition ease-in-out duration-500"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

CoursesCard.propTypes = {
    courseCard: PropTypes.exact({
        image: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
        cardDuration: PropTypes.string.isRequired,
        cardLevel: PropTypes.string.isRequired,
        cardName: PropTypes.string.isRequired,
        cardTrack: PropTypes.string.isRequired,
        cardDescrption: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    })
}

export default Courses;