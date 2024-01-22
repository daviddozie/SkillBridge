import Input from "./Input"
import TextArea from "./TextArea"
import Button from "../../Button/Button"
import { useState } from "react"

const submitForm = async () => {
    // Simulate an asynchronous form submission
    return new Promise((resolve) => {
        setTimeout(() => {
            // Assuming the form submission is successful after a delay
            console.log("Form submitted successfully!");
            resolve();
        }, 3000); // Adjust the delay as needed
    });
};

export default function Form() {

    const [isLoading, setIsLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        subject: "",
        message: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        const isValid = validateForm();

        if (isValid) {
            console.log("Form is valid. Submitting...");
            setIsLoading(true);

            try {
                // Simulate an asynchronous form submission (you can replace this with your actual form submission logic)
                await submitForm();
                setShowModal(true);
                document.getElementById('myForm').reset();

                // After successful submission, you can redirect or perform any other action

            } catch (error) {
                console.error("Error submitting the form:", error);

                // Handle error if needed
            } finally {
                // Hide loading spinner whether the submission was successful or not
                setIsLoading(false);
                window.addEventListener('click', () => {
                    setShowModal(false);
                })
            }

        } else {
            console.log("Form is invalid. Please check for errors.");
        }
    };

    const validateForm = () => {
        const newErrors = {};

        newErrors.firstname = firstnameValidation(formData.firstname);
        newErrors.lastname = lastnameValidation(formData.lastname);
        newErrors.email = emailValidation(formData.email);
        newErrors.phonenumber = phonenumberValidation(formData.phonenumber);
        newErrors.subject = subjectValidation(formData.subject);
        newErrors.message = messageValidation(formData.message);

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
            case "firstname":
                newErrors.firstname = firstnameValidation(formData.firstname);
                break;
            case "lastname":
                newErrors.lastname = lastnameValidation(formData.lastname);
                break;
            case "email":
                newErrors.email = emailValidation(formData.email);
                break;
            case "phonenumber":
                newErrors.phonenumber = phonenumberValidation(formData.phonenumber);
                break;
            case "subject":
                newErrors.subject = subjectValidation(formData.subject);
                break;
            case "message":
                newErrors.message = messageValidation(formData.message);
                break;
            default:
                break;
        }

        setErrors(newErrors);
    };

    const firstnameValidation = (firstname) => {
        if (firstname === "") {
            return "Please enter your first name!";
        }
        return "";
    };

    const lastnameValidation = (lastname) => {
        if (lastname === "") {
            return "Please enter your last name!";
        }
        return "";
    };

    const emailValidation = (email) => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email === "") {
            return "Please enter your email address!";
        } else if (!emailRegex.test(email)) {
            return "Please enter a valid email address!";
        }
        return "";
    };

    const phonenumberValidation = (phonenumber) => {
        const phoneNumberRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        if (phonenumber === "") {
            return "Please enter your phone number!";
        } else if (!phoneNumberRegex.test(phonenumber)) {
            return "Please enter a valid phone number!"
        }
        return "";
    };

    const subjectValidation = (subject) => {
        if (subject === "") {
            return "Please enter your subject!";
        }
        return "";
    };

    const messageValidation = (message) => {
        if (message === "") {
            return "Please enter your message!";
        }
        return "";
    };


    return (
        <>
            <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto mb-[80px]" data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
                <div className="bg-white rounded-[8px] p-[20px] md:p-[50px]">
                    <form id="myForm" onSubmit={handleSubmit}>
                        <div className="grid-wrapper">
                            <div>
                                <Input
                                    label="First Name"
                                    labelFor="firstname"
                                    inputType="text"
                                    placeholder="Enter first name"
                                    inputName="firstname"
                                    value={formData.firstname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.firstname}
                                />
                                <span className='text-[12px] text-[red] font-[500]'>{errors.firstname}</span>
                            </div>
                            <div>
                                <Input
                                    label="Last Name"
                                    labelFor="lastname"
                                    inputType="text"
                                    placeholder="Enter last name"
                                    inputName="lastname"
                                    value={formData.lastname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.lastname}
                                />
                                <span className='text-[12px] text-[red] font-[500]'>{errors.lastname}</span>
                            </div>
                            <div>
                                <Input
                                    label="Email"
                                    labelFor="email"
                                    inputType="text"
                                    placeholder="Enter your email address"
                                    inputName="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.email}
                                />
                                <span className='text-[12px] text-[red] font-[500]'>{errors.email}</span>
                            </div>
                            <div>
                                <Input
                                    label="Phone Number"
                                    labelFor="phonenumber"
                                    inputType="text"
                                    placeholder="Enter your phone number"
                                    inputName="phonenumber"
                                    value={formData.phonenumber}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.phonenumber}
                                />
                                <span className='text-[12px] text-[red] font-[500]'>{errors.phonenumber}</span>
                            </div>
                            <div className="last--Item">
                                <Input
                                    label="Subject"
                                    labelFor="subject"
                                    inputType="text"
                                    placeholder="Enter subject"
                                    inputName="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.subject}
                                />
                                <span className='text-[12px] text-[red] font-[500]'>{errors.subject}</span>
                            </div>
                            <div className="item1">
                                <TextArea
                                    areaName="message"
                                    id="message"
                                    labelFor="message"
                                    label="Message"
                                    placeholder="Enter your Message here....."
                                    value={formData.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    error={errors.message}
                                />
                                <span className='text-[12px] text-[red] font-[500]'>{errors.message}</span>
                            </div>
                        </div>
                        <div className="flex justify-center pt-[35px]">
                            <Button
                                type="submit"
                                label="Send Your Message"
                                styles="bg-[#FF9500] py-[14px] px-[20px] rounded-md text-[14px] font-[500] text-white"
                            />
                        </div>
                    </form>
                </div>
            </div>
            {isLoading && (
                <div className="load">
                    <div className="load-content"></div>
                </div>
            )}
            {showModal && (
                <div class="modal">
                    <div class="modal-content">
                        <div class="w-full flex justify-center">
                            <div class="mark-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 151 150" fill="none">
                                    <circle cx="75.5" cy="75" r="75" fill="#f7f7f8" />
                                    <path d="M109.167 52L63.3333 97.8334L42.5 77" stroke="#FF9500" stroke-width="6"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </div>
                        </div>
                        <div class="flex justify-center items-center mt-5 mb-4">
                            <p className="font-[700] text-b text-[15px]">Sent!</p>
                        </div>
                        <div className="text-black font-[400] text-[14px] md:text-[19px]">
                            <p className="text-center">Thank you</p>
                            <p className="text-center">{formData.firstname} {formData.lastname} </p>
                            <p className="text-center">for contacting SkillBridge</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
