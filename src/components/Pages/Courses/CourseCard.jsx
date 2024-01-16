import Button from "../../Button/Button";
import PropTypes, { object, objectOf, string } from 'prop-types'

function CourseCard({
    card
}) {

    const {
        courseTrack,
        courseDes,
        courseImages,
        courseDurationStatus,
        courseTrainer,
        courseProcess,
        semiCards,
    } = card

    return (
        <div className={`w-[95%] md:w-[90%] lg:w-[80%] mx-auto`}>
            <div className="bg-white rounded-[12px] p-[20px] md:p-[40px]" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                <div>
                    <div className="flex flex-col lg:flex-row lg:items-center">
                        <div>
                            <h5 className="text-[20px] text-[#262626] font-[700]">{courseTrack}</h5>
                            <p className="text-[#59595A] font-[400] text-[14px] py-[20px]">{courseDes}</p>
                        </div>
                        <Button
                            type="button"
                            label="View Courses"
                            styles="border border-[#F1F1F3] bg-[#FCFCFD] rounded-[8px] py-[14px] px-[14px] font-[500] text-[16px] text-[262626] w-[140px] lg:ms-[200px] mt-0 mb-[30px] lg:mt-0"
                        />
                    </div>
                    <div className="grid grid-cols-3 gap-[10px] md:gap-[30px] relative overflow-hidden rounded-[6px]">
                        {courseImages.map(courseImage => {
                            return (
                                <img key={courseImage} src={courseImage} className="rounded-[6px] imgScale" />
                            )
                        })}
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-[50px]">
                        <div className="flex gap-3 pt-[25px]">
                            {courseDurationStatus.map(eachLevel => {
                                return (
                                    <span key={eachLevel} className="text-[#59595A] text-[16px] font-[400] border border-[#F1F1F3] rounded-[8px] py-[10px] px-[16px]">{eachLevel}</span>
                                )
                            })}
                        </div>
                        <div className="mt-4">
                            <span className="text-[16px] font-[500] text-[#262626]">{courseTrainer}</span>
                        </div>
                    </div>
                    <div className="border border-[#F1F1F3] rounded-tl-[12px] rounded-tr-[12px] py-[24px] px-[25px]">
                        <h4 className="text-[18px] font-[700] text-[#262626]">{courseProcess}</h4>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-5 border border-[#F1F1F3] rounded-bl-[12px] rounded-br-[12px] px-[25px] py-[24px] border-t-0 gap-[25px]">
                        {semiCards.map(semiCard => {
                            return (
                                <div className="border-b-[1px] lg:border-b-[0px] lg:border-r-[1px] pb-[20px] lg:pb-[0px] lg:px-1" key={semiCard.courseNums}>
                                    <h1 className="font-[800] text-[40px] text-[#262626]">{semiCard.courseNums}</h1>
                                    <p className="text-[15px] font-[500] text-[#333]" >{semiCard.courseNumTitles}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

CourseCard.propTypes = {
    card: PropTypes.exact({
        courseTrack: PropTypes.string.isRequired,
        courseDes: PropTypes.string.isRequired,
        courseImages: PropTypes.arrayOf(string).isRequired,
        courseDurationStatus: PropTypes.arrayOf(string).isRequired,
        courseTrainer: PropTypes.string.isRequired,
        courseProcess: PropTypes.string.isRequired,
        semiCards: PropTypes.arrayOf(objectOf(string)).isRequired,
    })
}

export default CourseCard;