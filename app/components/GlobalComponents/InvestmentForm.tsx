"use client"
import { useState, useEffect, useCallback, ChangeEvent, FormEvent } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Select, { SingleValue } from 'react-select'
import countryList from 'react-select-country-list'

interface CountryOption {
    label: string,
    value: string,
}

type EnquiryPurpose = "EXPLORE_INVESTMENT" | "BUY_VILLA" | "INVEST_IN_RESORT";

interface FormData {
    firstName: string,
    lastName: string,
    emailId: string,
    phoneNumber: string,
    countryCode: string,
    message: string,
    investmentBudget: string,
    purpose: EnquiryPurpose,
}

const InvestmentForm = () => {
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [value, setValue] = useState<CountryOption | null>(null);
    const [options, setOptions] = useState<CountryOption[]>([]);

    const budgetRanges: string[] = [
        "$100,000 - $250,000",
        "$250,000 - $500,000",
        "$500,000+"
    ]

    const purposeOptions: { label: string; value: EnquiryPurpose }[] = [
        { label: "Explore Investment Options", value: "EXPLORE_INVESTMENT" },
        { label: "Buy a Villa", value: "BUY_VILLA" },
        {label: "Invest in Resort", value:"INVEST_IN_RESORT"},
    ];

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
        investmentBudget: "",
        purpose: "EXPLORE_INVESTMENT"
    })

    const changeHandler = useCallback((selected: SingleValue<CountryOption>) => {
        setValue(selected);
        setFormData((prev) => ({
            ...prev,
            country: selected?.label ?? ''
        }))
    }, [])

    const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }, [])

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);
        setError(null);
        try {
            const payload = {
                ...formData
            }
            console.log("form data", payload);
            alert("Form data submitted successfully");
            setFormData({
                firstName: "",
                lastName: "",
                emailId: "",
                phoneNumber: "",
                countryCode: "",
                investmentBudget: "",
                purpose: "EXPLORE_INVESTMENT",
                message: "",
            })
        } catch (error) {
            console.log(error, "error while submitting form");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="rounded-md">
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
                        <label htmlFor="investmentBudget">Investment Budget Range</label>
                        <select
                            name="investmentBudget"
                            required
                            value={formData.investmentBudget}
                            onChange={handleInputChange}
                            className="w-full border rounded-md border-gray-200 px-3 py-2 text-sm"
                        >
                            <option value="" disabled>
                                Investment Budget Range
                            </option>
                            {budgetRanges.map((range) => (
                                <option key={range} value={range}>
                                    {range}
                                </option>
                            ))}
                        </select>
                    </div>

                    <label htmlFor="purpose">Explore Investment Options</label>
                    
                    <Select<{ label: string; value: EnquiryPurpose }>
                        options={purposeOptions}
                        required
                        value={purposeOptions.find((opt) => opt.value === formData.purpose)}
                        onChange={(option) =>
                            setFormData((prev) => ({
                                ...prev,
                                purpose: option?.value ?? "EXPLORE_INVESTMENT"
                            }))
                        }
                        className="react-select-container w-full text-sm"
                        classNamePrefix="react-select"
                        placeholder="Select Purpose*"
                    />
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
    )
}

export default InvestmentForm