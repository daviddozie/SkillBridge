import Input from "./input"
import TextArea from "./TextArea"
import Button from "../../Button/Button"

export default function Form() {

    const Inputs = [
        {
            labelFor: "FirstName",
            label: "First Name",
            inputType: "text",
            inputName: "FirstName",
            placeholder: "Enter First Name",
        },
        {
            labelFor: "LastName",
            label: "Last Name",
            inputType: "text",
            inputName: "LastName",
            placeholder: "Enter Last Name",
        },
        {
            labelFor: "Email",
            label: "Email",
            inputType: "text",
            inputName: "Email",
            placeholder: "Enter your Email Address",
        },
        {
            labelFor: "Phone",
            label: "Phone",
            inputType: "text",
            inputName: "Phone",
            placeholder: "Enter Phone Number",
        },
        {
            labelFor: "Subject",
            label: "Subject",
            inputType: "text",
            inputName: "Subject",
            placeholder: "Enter Subject",
        },
    ]

    return (
        <>
            <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto mb-[80px]">
                <div className="bg-white rounded-[8px] p-[20px] md:p-[50px]">
                    <div className="grid-wrapper">
                        {Inputs.map(input => {
                            return (
                                <Input
                                    key={input.label}
                                    field={input}
                                />
                            )
                        })}
                        <div className="item1">
                            <TextArea
                                areaName="Message"
                                id="Message"
                                labelFor="Message"
                                label="Message"
                                placeholder="Enter your Message here....."
                            />
                        </div>
                    </div>
                    <div className="flex justify-center pt-[35px]">
                        <Button
                            type="submit"
                            label="Send Your Message"
                            styles="bg-[#FF9500] py-[14px] px-[20px] rounded-md text-[14px] font-[500] text-white"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}