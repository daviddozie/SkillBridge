import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import Button from '../Button/Button';

function Header({
    headerText,
    headerLogo,
    logo,
    signUp,
}) {

    const activeLink = "bg-[#F1F1F3] px-[24px] rounded-[8px] py-[14px] transition ease-in-out duration-500";
    const normalLink = "";

    const navs = [
        {
            navItem: "Home",
            route: "/",
            id: 1
        },
        {
            navItem: "Courses",
            route: "/courses",
            id: 2
        },
        {
            navItem: "About Us",
            route: "/about us",
            id: 3
        },
        {
            navItem: "Pricing",
            route: "/pricing",
            id: 4
        },
        {
            navItem: "Contact",
            route: "/contact",
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
                    <NavLink to={navs[0].route}><img src={headerLogo} alt={logo} className="cursor-pointer" /></NavLink>
                    <nav className='navLinks duration-[1s] lg:static absolute bg-[#F7F7F8] min-h-[40vh] lg:min-h-[0vh] top-[-100%] z-[100] left-0 w-full flex items-center px-5'>
                        <ul className="flex lg:items-center flex-col lg:flex-row">
                            {navs.map(nav => {
                                return (
                                    <li key={nav.id} className="cursor-pointer font-[400] text-[16px] hover:bg-[#F1F1F3] px-[24px] rounded-[8px] py-[14px] transition ease-in-out duration-500">
                                        <NavLink to={nav.route} 
                                            className={({ isActive }) => (isActive ? activeLink: normalLink)}
                                        >{nav.navItem}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <div className="flex items-center gap-3 md:gap-5 justify-end">
                    <span className="cursor-pointer font-[400] text-[16px] hover:bg-[#F1F1F3] px-[12px] rounded-[8px] py-[14px] transition ease-in-out duration-500">
                        <NavLink to='/Sign Up'
                            className={({ isActive }) => (isActive ? activeLink: normalLink)}
                        >{signUp}</NavLink>
                    </span>
                    <NavLink to='/Log In'>
                        <Button
                            label="Login"
                            type="button"
                            styles="bg-[#FF9500] py-[14px] px-[24px] md:px-[34px] rounded-[8px] text-white font-[400] text-[16px]"
                        />
                    </NavLink>
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
            <nav className={`navLinks duration-500 ease-in-out lg:static absolute bg-[#F7F7F8] min-h-[40vh] lg:min-h-[0vh] top-[28%] md:top-[16%]  z-[1000] overflow-hidden left-0 w-full flex items-center px-5 shadow-lg ${isBarsClicked ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <ul className="flex lg:items-center gap-8 flex-col lg:flex-row">
                    {navs.map(nav => (
                        <li key={nav.id} className="cursor-pointer font-[400] text-[16px]">
                            <NavLink to={nav.route}>{nav.navItem}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
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
    navs: PropTypes.arrayOf(PropTypes.object.isRequired),
}

export default Header; 