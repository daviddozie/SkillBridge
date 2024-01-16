import Input from "../Contact/Input";
import PasswordInput from "../../PasswordInput/PasswordInput";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import PropTypes, { objectOf, string } from 'prop-types';

function LoginSec({
    title,
    des,
    terms,
    bridge,
    or,
    log,
}) {

    const inputs = [
        {
            labelFor: "Email",
            label: "Email",
            inputType: "text",
            inputName: "Email",
            placeholder: "Enter Your Email Address",
        },
    ]

    return (
        <div className="bg-white rounded-[8px] p-[10px] md:p-[40px]">
            <div>
                <h1 className="text-[38px] font-[600] text-[#262626] text-center">{title}</h1>
                <p className="text-[#4C4C4D] text-[14px] font-[400] text-center mb-9">{des}</p>
                {inputs.map(input => {
                    return (
                        <div className="mb-6">
                            <Input
                                key={input.label}
                                field={input}
                            />
                        </div>
                    )
                })}
                <PasswordInput
                    labelFor="Password"
                    label="Password"
                    inputType="password"
                    inputName="Password"
                    placeholder="Enter Your Password"
                />
                <p className="text-end text-[#4C4C4D] text-[15px] font-[500] py-4">Forgot Password?</p>
                <div className="flex items-center gap-3 py-4">
                    <input type="checkbox" className="checkbox" />
                    <span className="text-[15px] font-[500] text-[#59595A]">{terms}</span>
                </div>
                <Button
                    label="Login"
                    type="submit"
                    styles="bg-[#FF9500] rounded-[10px] px-[20px] py-[18px] text-white text-[14px] font-[500] w-full"
                />
                <div className="flex items-center text-[#98989A] my-6 gap-3">
                    <span className="border w-full"></span>
                    {or}
                    <span className="border w-full"></span>
                </div>
                <Button
                    label="Sign Up With Google"
                    type="submit"
                    styles="bg-[#F7F7F8] border border-[#F1F1F3] rounded-[10px] px-[20px] py-[18px] text-black text-[14px] font-[500] w-full"
                />
                <div className="flex items-center justify-center gap-1 pt-6 text-[#262626]">
                    <span>{bridge}</span>
                    <Link to="/Sign Up" className="underline">{log}</Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                        <path d="M6.50005 19.5L19.5 6.49996M19.5 6.49996V18.98M19.5 6.49996H7.02005" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

LoginSec.propTypes = {
    title: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    terms: PropTypes.string.isRequired,
    bridge: PropTypes.string.isRequired,
    or: PropTypes.string.isRequired,
    log: PropTypes.string.isRequired,
    inputs: PropTypes.arrayOf(objectOf(string)),
}

export default LoginSec;