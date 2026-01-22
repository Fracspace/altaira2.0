"use client"

import Image from "next/image"
import { useEffect, useState, useRef, useCallback, ChangeEvent, FormEvent } from "react"
import location from '../../../public/images/contact/location.webp'
import phoneIcon from '../../../public/images/contact/phoneIcon.webp'
import emailIcon from "../../../public/images/contact/emailIcon.webp"
import hours from "../../../public/images/contact/hours.webp"

// import gsap from "gsap"
// import { useGSAP } from "@gsap/react"

import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"

import Select, { SingleValue } from "react-select"
import countryList from "react-select-country-list"

interface CountryOption {
    label: string,
    value: string,
}

interface FormData {
    firstName: string,
    lastName: string,
    emailId: string,
    phoneNumber: string,
    countryCode: string,
    message: string,
    // country: string
}

const Contact = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [value, setValue] = useState<CountryOption | null>(null);
    const [options, setOptions] = useState<CountryOption[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("general");
    const contactUsRef =useRef<HTMLDivElement>(null);
    // useGSAP(()=>{
    //     gsap.from(".contact-item",{
    //         opacity:0,
    //         y:60,
    //         duration:0.7,
    //         ease:"power3.out",
    //         scrollTrigger:{
    //             trigger:contactUsRef.current,
    //             start:"top 75%",
    //             once:true
    //         }
    //     })
    // })
    useEffect(() => {
        const countryOptions = countryList().getData() as CountryOption[];
        setOptions(countryOptions);
    }, [])
    const [formData, setFormData] = useState<FormData>({
        firstName: "",
        lastName: "",
        emailId: "",
        phoneNumber: "",
        countryCode: "",
        message: "",
        // country: ""
    })
    const changeHandler = useCallback((selected: SingleValue<CountryOption>) => {
        setValue(selected);
        setFormData((prev) => ({
            ...prev,
            country: selected?.label ?? ""
        }))
    }, [])

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }, [])
    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const payload = {
                ...formData,
                // phone: `${formData.countryCode}${formData.phoneNumber}`
            }
            console.log("form data", payload);
            alert("Form data submitted successfully");
            setFormData({
                firstName:"",
                lastName:"",
                emailId:"",
                phoneNumber:"",
                countryCode:"",
                message:"",
            })
        } catch (error) {
            console.log(error, "error while submitting form")
        } finally {
            setIsLoading(false);
        }
    }
    const handleCategoryChange = (selectedCategory: string) => {
        setSelectedCategory(selectedCategory);
    }
    return (
        <div className="rounded-md shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-5 md:p-10">
                <div className="flex md:w-[50vw] rounded-md shadow-md flex-col gap-5 p-10">
                    <h2 className="font-inter text-base">I'm interested in</h2>
                    <div className="flex flex-row gap-1 md:gap-3 overflow-x-auto md:overflow-x-visible">
                        <button onClick={() => handleCategoryChange("general")} className={`rounded-full min-w-[48%] md:min-w-fit  ${selectedCategory !== "general" ? "bg-[#ffffff] text-black border boder-black-200" : "bg-[#AD9273] text-white"} cursor-pointer px-4 py-2`}>
                            <p className="font-inter text-base">General</p>
                        </button>
                        <button onClick={() => handleCategoryChange("investment")} className={`rounded-full min-w-[48%] md:min-w-fit px-4 ${selectedCategory === "investment" ? "bg-[#AD9273] text-white" : "bg-[#ffffff]"} cursor-pointer py-2 border`}>
                            <p className="font-inter text-base">Investment</p>
                        </button>
                        <button onClick={() => handleCategoryChange("agents")} className={`rounded-full px-4 ${selectedCategory === "agents" ? "bg-[#AD9273] text-white" : "bg-[#ffffff]"} cursor-pointer py-2 border`}>
                            <p className="font-inter text-base">Agents</p>
                        </button>
                    </div>
                    <form onSubmit={onSubmit}>
                        {error && (
                            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                                {error}
                            </div>
                        )}
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-row gap-3">
                                <div className="flex flex-col md:w-[25vw] gap-2">
                                    <label htmlFor="firstName">First Name</label>
                                    <input name="firstName" type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} placeholder="First Name*" required className="w-full px-4 py-2 rounded-md border border-gray-300 text-black" />
                                </div>
                                <div className="flex flex-col md:w-[25vw] gap-2">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input name="lastName" type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Last Name*" required className="w-full px-4 py-2 rounded-md border border-gray-300 text-black" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="emailId">Email ID</label>
                                <input name="emailId" type="email" id="emailId" value={formData.emailId} onChange={handleInputChange} placeholder="Email Id*" required className="w-full px-4 py-2 rounded-md border border-gray-300 text-black" />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="phone">Phone</label>
                                <PhoneInput
                                    country="in"
                                    enableSearch
                                    value={`${formData.countryCode}${formData.phoneNumber}`}
                                    onChange={(value: string, data: { dialCode?: string }) => {
                                        const dialCode = data?.dialCode ?? "91";
                                        const digitsOnly = value.replace(/\D/g, "");
                                        const phoneNumber = digitsOnly.startsWith(dialCode)
                                            ? digitsOnly.slice(dialCode.length)
                                            : digitsOnly;

                                        setFormData((prev) => ({
                                            ...prev,
                                            phoneNumber,
                                            countryCode: `+${dialCode}`
                                        }));
                                    }}
                                    placeholder="Mobile*"
                                    inputProps={{
                                        id: "phone",
                                        name: "phone"
                                    }}
                                    inputClass="!w-full px-4 py-2 rounded-md border border-gray-300 text-black"
                                    containerClass="w-full"
                                    containerStyle={{ width: "100%" }}
                                    inputStyle={{
                                        width: "100%",
                                    }}
                                    buttonClass="bg-white border border-gray-300"
                                    dropdownClass="text-sm"
                                />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="message">Message/Query</label>
                                <textarea name="message" rows={4} cols={10} id="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us about your interest in Altaira..." className="border border-gray-400 rounded-md p-3"></textarea>
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="cursor-pointer px-10 py-2 bg-[#AD9273] rounded-md font-inter font-semibold text-white disabled:opacity-60"
                                >
                                    {isLoading ? "Submitting..." : "Submit"}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div ref={contactUsRef} className="md:w-[50vw] flex flex-col gap-5">
                    <h2 className="font-inter text-[#AD9273]">CONTACT US</h2>
                    <p className="font-cormorant text-xl font-bold md:text-4xl">We'd Love to Hear From You</p>
                    <p className="font-normal font-inter text-gray-500 leading-loose">Whether you're interested in staying, investing, or <br /> hosting an event, our team is here to help you explore all possibilities at Altaira.</p>
                    <div className="space-y-10">
                        <div className="contact-item flex flex-row items-center gap-5">
                            <div className="w-10 h-10 rounded-full bg-[#AD927399] flex items-center justify-center">
                                <Image src={location} className="w-5 h-5 object-contain" alt="location" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="font-inter font-normal text-gray-500">Location</h2>
                                <p className="font-inter">Bulathkohupitiya, Sri Lanka</p>
                            </div>
                        </div>
                        <div className="contact-item flex flex-row items-center gap-5">
                            <div className="w-10 h-10 rounded-full bg-[#AD927399] flex items-center justify-center">
                                <Image src={phoneIcon} className="w-5 h-5 object-contain" alt="phone" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="font-inter font-normal text-gray-500">Phone</h2>
                                <p className="font-inter">+94 77 123 4567</p>
                            </div>
                        </div>
                        <div className="contact-item flex flex-row items-center gap-5">
                            <div className="w-10 h-10 rounded-full bg-[#AD927399] flex items-center justify-center">
                                <Image src={emailIcon} className="w-5 h-5 object-contain" alt="email" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="font-inter font-normal text-gray-500">Email</h2>
                                <p onClick={() => window.open("mailto:altaira@fracspace.com")} className="font-inter cursor-pointer">altaira@fracspace.com</p>
                            </div>
                        </div>
                        <div className="contact-item flex flex-row items-center gap-5">
                            <div className="w-10 h-10 rounded-full bg-[#AD927399] flex items-center justify-center">
                                <Image src={hours} className="w-5 h-5 object-contain" alt="hours" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="font-inter font-normal text-gray-500">Hours</h2>
                                <p className="font-inter">Mon - Sun:  9:00 AM to 7:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:h-[40vh] h-[50vh] responsiveMapWidth responsiveMapHeight lg:h-[70vh] p-10 pt-0 rounded-md">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7918.357570206037!2d80.3310226383134!3d7.1052682180792655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae30efe5a2e1cab%3A0x66e4b8966396e2ea!2sBulathkohupitiya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sin!4v1764817133800!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "10px", filter: "invert(90%) hue-rotate(180deg)" }}
                    allowFullScreen={true}
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location Map"
                />
            </div>
        </div>
    )
}

export default Contact