import Button from "../../Button/Button"
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom"

function Hero({
    spark,
    sparkAlt,
    flashIcon,
    flashIconAlt,
    heroTitle,
    subHeroTitle,
    heroNtitle,
    heroText,
    heroImg,
    heroAlt,
}) {

    const brands = [
        {
            image: "../images/zapier.png",
            imageAlt: "zapierLogo"
        },
        {
            image: "../images/spotify.png",
            imageAlt: "spotityLogo"
        },
        {
            image: "../images/zoom.png",
            imageAlt: "zoomLogo"
        },
        {
            image: "../images/amazon.png",
            imageAlt: "amazonLogo"
        },
        {
            image: "../images/adobe.png",
            imageAlt: "adobeLogo"
        },
        {
            image: "../images/notion.png",
            imageAlt: "notionLogo"
        },
        {
            image: "../images/netflix.png",
            imageAlt: "netflixLogo"
        },
    ]

    return (
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto flex justify-center mt-[100px]">
            <div className="w-[100%]">
                <div className="flex justify-center">
                    <div className="flex items-center border border-[#F1F1F3] rounded-[11px] bg-[#FCFCFD] py-2 md:py-3.5 px-[10px] md:px-[30px] relative">
                        <img src={spark} alt={sparkAlt} className="absolute top-[-15px] left-[-15px] md:top-[-25px] md:left-[-25px]" />
                        <div className="bg-[#FFF4E5] p-3.5 rounded-[6px] me-4">
                            <img src={flashIcon} alt={flashIconAlt} />
                        </div>
                        <span className="font-[600] noBreak text-[15px] md:text-[30px] lg:text-[38px]"><span className="text-[#FF9500]">{subHeroTitle}</span> {heroTitle}</span>
                    </div>
                </div>
                <div className="mt-5 md:mt-0" data-aos="fade-up" data-aos-delay="75" data-aos-duration="500" data-aos-easing="ease-in-out" data-aos-once="true">
                    <p className="text-[28px] font-[500] text-[#262626] text-center mb-0 pt-4 pb-1">{heroNtitle}</p>
                    <p className="text-[16px] font-[400] text-[#262626] text-center">{heroText}</p>
                </div>
                <div className="flex justify-center items-center gap-2 mt-[50px]">
                    <NavLink to="./courses">
                        <Button
                            label="Explore Courses"
                            type="button"
                            styles="font-[600] text-[16px] py-[18px] px-[24px] rounded-[8px] bg-[#FF9500] text-white hover:bg-[#ff9500f3] transition ease-in-out duration-200"
                        />
                    </NavLink>
                    <NavLink to="./pricing">
                        <Button
                            label="View Pricing"
                            type="button"
                            styles="font-[600] text-[16px] py-[18px] px-[24px] rounded-[8px] bg-[#fff] border border-[#F1F1F3]"
                        />
                    </NavLink>
                </div>
                <div className="border border-[#F1F1F3] bg-[#FCFCFD] rounded-[12px] flex justify-center gap-[60px] items-center px-[30px] py-[50px] my-[90px] flex-wrap">
                    {brands.map(brand => {
                        return (
                            <img src={brand.image} alt={brand.imageAlt} key={brand.imageAlt} />
                        )
                    })}
                </div>
                <div>
                    <img src={heroImg} alt={heroAlt} />
                </div>
            </div>
        </div>
    )
}

Hero.propTypes = {
    spark: PropTypes.string.isRequired,
    sparkAlt: PropTypes.string.isRequired,
    flashIcon: PropTypes.string.isRequired,
    flashIconAlt: PropTypes.string.isRequired,
    heroTitle: PropTypes.string.isRequired,
    subHeroTitle: PropTypes.string.isRequired,
    heroNtitle: PropTypes.string.isRequired,
    heroText: PropTypes.string.isRequired,
    heroImg: PropTypes.string.isRequired,
    heroAlt: PropTypes.string.isRequired,
}

export default Hero;