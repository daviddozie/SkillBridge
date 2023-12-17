import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function Header({
    headerText,
    headerLogo,
    logo,
    signUp,
}) {

    const navs = [
        {
            navItem: "Home",
            id: 1
        },
        {
            navItem: "Courses",
            id: 2
        },
        {
            navItem: "About Us",
            id: 3
        },
        {
            navItem: "Pricing",
            id: 4
        },
        {
            navItem: "Contact",
            id: 5
        },
    ];

    return (
        <div className="w-[95%] mx-auto mt-5">
            <div className="bg-[#FF9500] rounded-[8px] h-[60px] flex items-center justify-center text-[12px] font-[400] text-white gap-9 md:text-[16px]">
                <span>{headerText}</span>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            <div className="lg:w-[85%] w-[100%] mx-auto flex items-center justify-between mt-6">
                <div className="flex items-center gap-10 lg:w-auto">
                    <img src={headerLogo} alt={logo} className="cursor-pointer" />
                    <div className='navLinks duration-[1s] lg:static absolute bg-[#F7F7F8] min-h-[40vh] lg:min-h-[0vh] top-[-100%] z-[100] left-0 w-full flex items-center px-5'>
                        <ul className="flex lg:items-center gap-8 flex-col lg:flex-row">
                            {navs.map(nav => {
                                return (
                                    <li key={nav.id} className="cursor-pointer font-[400] text-[16px]">{nav.navItem}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex items-center gap-5 md:gap-8 justify-end">
                    <span className="cursor-pointer font-[400] text-[16px]">{signUp}</span>
                    <Button
                        label="Login"
                        type="button"
                        styles="bg-[#FF9500] py-[14px] px-[24px] md:px-[34px] rounded-[8px] text-white font-[400] text-[16px]"
                    />
                    <Bars navs={navs} />
                </div>
            </div>
        </div>
    )

}

function Bars({ navs }) {
    const [isBarsClicked, setIsBarsClicked] = useState(false);

    const handleToggle = () => {
        setIsBarsClicked(!isBarsClicked);
    };

    return (
        <div className={`barsSection lg:hidden`}>
            <FontAwesomeIcon
                icon={isBarsClicked ? faXmark : faBars}
                className='text-[30px] cursor-pointer lg:hidden'
                onClick={handleToggle}
            />
            <div className={`navLinks duration-500 ease-in-out lg:static absolute bg-[#F7F7F8] min-h-[40vh] lg:min-h-[0vh] top-[28%] md:top-[16%]  z-[1000] left-0 w-full flex items-center px-5 shadow-lg transition-all ${isBarsClicked ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className="flex lg:items-center gap-8 flex-col lg:flex-row">
                    {navs.map(nav => (
                        <li key={nav.id} className="cursor-pointer font-[400] text-[16px]">{nav.navItem}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

Header.propTypes = {
    headerText: PropTypes.string.isRequired,
    headerLogo: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    signUp: PropTypes.string.isRequired,
}

Bars.propTypes = {
    navs:PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default Header; 