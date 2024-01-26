import Button from "../../Button/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import PropTypes, { objectOf, string } from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SwiperSec({
    title,
    subTitle,
}) {

    const testimonies = [
        {
            id: 1,
            testimony: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
            profile: "../images/testimonial5.png",
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
        <div className="mt-[150px]" data-aos="zoom-in" data-aos-once="true" data-aos-duration="1000">
            <div className="mb-[70px]">
                <h4 className="text-[30px] font-[600] text-[#262626]">{title}</h4>
                <p className="text-[14px] font-[400] text-[#59595A]">{subTitle}</p>
            </div>
            <Swiper
                className="swiper"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                loop={{ swiper: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                {testimonies.map(testimony => {
                    return (
                        <SwiperSlide key={testimony.id}>
                            <div className="bg-[#FFF] rounded-[8px]">
                                <div className="p-[15px] lg:p-[30px]">
                                    <span className="text-[15px] text-[#4C4C4D] font-[400]">{testimony.testimony}</span>
                                </div>
                                <div className="border border-[#F1F1F3] bg-[#FCFCFD] p-[15px] lg:p-[30px] rounded-bl-[8px] rounded-br-[8px] flex justify-between items-end">
                                    <div className="flex items-center gap-3">
                                        <img src={testimony.profile} alt={testimony.profileAlt} />
                                        <span className="font-[600] text-[15px] text-[#333]">{testimony.profileName}</span>
                                    </div>
                                    <Button
                                        label="Read More"
                                        type="button"
                                        styles="py-[14px] px-[18px] lg:py-[18px] lg:px-[24px] border border-[#F1F1F3] bg-[#F7F7F8] rounded-[8px] text-[15px] font-[500] text-[#262626] hover:bg-[#eaeaeb] transition ease-in-out duration-500"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
                <div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
                <FontAwesomeIcon icon={faArrowLeft}  className="arrowleftNav"/>
                <FontAwesomeIcon icon={faArrowRight} className="arrowrightNav"/>
            </Swiper>
        </div>
    )
}

SwiperSec.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    testimonies: PropTypes.arrayOf(objectOf(string)),
}

export default SwiperSec;