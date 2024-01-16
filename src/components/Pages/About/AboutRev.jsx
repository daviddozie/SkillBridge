import Button from "../../Button/Button";
import PropTypes from 'prop-types'
import { NavLink } from "react-router-dom";

function AboutRev({
    shape,
    fTitle,
    Title,
    parag,
}) {
    return (
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto mb-[100px]">
            <div className="bg-[#fff] rounded-[12px] p-[20px] md:p-[50px] relative">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <div className="z-[20] mb-4">
                        <h2 className="font-[700] text-[35px] leading-[120%] pb-4"> <span className="text-[#FF9500]">{fTitle}</span>{Title}</h2>
                        <p className="font-[400] text-[15px] text-[#4C4C4D]">{parag}</p>
                    </div>
                    <div>
                        <NavLink to="/contact">
                            <Button
                                type="button"
                                label="Join Now"
                                styles="bg-[#FF9500] py-[18px] px-[24px] rounded-[8px] text-[16px] font-[600] text-white w-[120px]"
                            />
                        </NavLink>
                    </div>
                </div>
                <img src={shape} className="w-[25%] absolute top-0 right-[200px] z-[1] hidden lg:block" />
            </div>
        </div>
    )
}

AboutRev.propTypes = {
    shape: PropTypes.string.isRequired,
    fTitle: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    parag: PropTypes.string.isRequired,
}

export default AboutRev;