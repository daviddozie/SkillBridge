import Input from "../Contact/Input";
import PasswordInput from "../../PasswordInput/PasswordInput";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { useState } from "react";

const submitForm = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Form submitted successfully!");
            resolve();
        }, 3000);
    });
};

function SignUpForm({
    title,
    des,
    terms,
    bridge,
    or,
    log,
}) {

    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            console.log("Form is valid. Submitting...");
            setIsLoading(true);

            try {
                await submitForm();
                document.getElementById('form').reset();

                navigate('/');

            } catch (error) {
                console.error("Error submitting the form:", error);

            } finally {
                setIsLoading(false);
            }

        } else {
            console.log("Form is invalid. Please check for errors.");
        }
    };

    const validateForm = () => {
        const newErrors = {};

        newErrors.fullname = fullnameValidation(formData.fullname);
        newErrors.email = emailValidation(formData.email);
        newErrors.password = passwordValidation(formData.password);

        setErrors(newErrors);

        return Object.values(newErrors).every((error) => !error);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;

        const newErrors = { ...errors };
        switch (name) {
            case "fullname":
                newErrors.fullname = fullnameValidation(formData.fullname);
                break;
            case "email":
                newErrors.email = emailValidation(formData.email);
                break;
            case "password":
                newErrors.password = passwordValidation(formData.password);
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const fullnameValidation = (fullname) => {
        if (fullname === "") {
            return "Please enter your full name!"
        }
        return "";
    }

    const emailValidation = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email === "") {
            return "Please enter your email address!";
        } else if (!emailRegex.test(email)) {
            return "Please enter a valid email address!";
        }
        return "";
    };

    const passwordValidation = (password) => {
        const pwdRegex = /^(?=.*[A-Z])(?=.*[@*+%$#&])(?=.*\d).{6,}$/;
        if (password === "") {
            return "Please enter your password";
        }
        else if (!pwdRegex.test(password)) {
            return "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @*$#&+% and 1 number."
        }
        return "";
    }

    return (
        <>
            <div className="bg-white rounded-[8px] p-[10px] md:p-[40px]" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                <form id="form" onSubmit={handleSubmit}>
                    <div>
                        <h1 className="text-[38px] font-[600] text-[#262626] text-center">{title}</h1>
                        <p className="text-[#4C4C4D] text-[14px] font-[400] text-center mb-9">{des}</p>
                        <div className="mb-4">
                            <Input
                                labelFor="fullname"
                                label="Full Name"
                                inputType="text"
                                inputName="fullname"
                                placeholder="Enter your name"
                                value={formData.fullname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.fullname}
                            />
                            <span className='text-[12px] text-[red] font-[500]'>{errors.fullname}</span>
                        </div>
                        <div className="mb-4">
                            <Input
                                labelFor="email"
                                label="Email"
                                inputType="text"
                                inputName="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.email}
                            />
                            <span className='text-[12px] text-[red] font-[500]'>{errors.email}</span>
                        </div>
                        <div>
                            <PasswordInput
                                labelFor="password"
                                label="Password"
                                inputType="password"
                                inputName="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={errors.password}
                            />
                            <span className='text-[12px] text-[red] font-[500]'>{errors.password}</span>
                        </div>
                        <div className="flex items-center gap-3 py-4">
                            <input type="checkbox" className="checkbox" />
                            <span className="text-[15px] font-[500] text-[#59595A]">{terms}</span>
                        </div>
                        <Button
                            label="Sign Up"
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
                            type="button"
                            styles="bg-[#F7F7F8] border border-[#F1F1F3] rounded-[10px] px-[20px] py-[18px] text-black text-[14px] font-[500] w-full"
                        />
                        <div className="flex items-center justify-center gap-1 pt-6 text-[#262626]">
                            <span>{bridge}</span>
                            <Link to="/Log In" className="underline">{log}</Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M6.50005 19.5L19.5 6.49996M19.5 6.49996V18.98M19.5 6.49996H7.02005" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </form>
            </div>
            {isLoading && (
                <div className="load">
                    <div className="load-content"></div>
                </div>
            )}
        </>
    )
}

SignUpForm.propTypes = {
    title: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    terms: PropTypes.string.isRequired,
    bridge: PropTypes.string.isRequired,
    or: PropTypes.string.isRequired,
    log: PropTypes.string.isRequired,
}

export default SignUpForm;