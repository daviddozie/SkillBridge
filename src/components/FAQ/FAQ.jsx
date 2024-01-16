import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function FAQ({
    title,
    brTitle,
    subTitle,
    step,
    qest,
    ans,
}) {

    const [showAnsClicked, setShowAnsClicked] = useState(true);

    const handleToggle = () => {
        setShowAnsClicked(!showAnsClicked);
    }

    return (
        <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto mb-[100px]">
            <div className="bg-[#fff] rounded-[12px] p-[50px]">
                <div className="flex gap-[30px]">
                    <div className="w-[38%]">
                        <h2 className="text-[38px] font-[600] text-[#262626] leading-normal">{title}</h2>
                        <h2 className="text-[38px] font-[600] text-[#262626] leading-[35px]">{brTitle}</h2>
                        <p className="mt-[20px] text-[14px] text-[#333] font-[400]">{subTitle}</p>
                        <div className="border border-[#F1F1F3] rounded-[8px] bg-[#fff] py-[16px] px-[18px] flex justify-content-center items-center max-w-[136px] mt-[50px]">
                            <p className="text-[15px] text-[#262626] font-[500]">{step}</p>
                        </div>
                    </div>
                    <div className="border border-[#F1F1F3] rounded-[12px] p-[30px] w-[62%]">
                        <div className="border border-[#F1F1F3] rounded-[12px] p-[20px]">
                            <div className='flex justify-between items-center'>
                                <p>{qest}</p>
                                <FontAwesomeIcon
                                    icon={showAnsClicked ? faPlus : faXmark}
                                    className='text-[#262626] bg-[#FFF4E5] px-[12px] py-[10px] rounded-[5px] cursor-pointer'
                                    onClick={handleToggle}
                                />
                            </div>
                            <div className='mt-[20px] invisible'>
                                <hr />
                                <p className='text-[14px] text-[#4C4C4D] font-[400] mt-[40px]'>{ans}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;