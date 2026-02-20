"use client";
import {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FormEvent
} from "react";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select, { SingleValue } from "react-select";
import countryList from "react-select-country-list";
import { TrackEvent } from "./TrackEvent";

const apiUrl =
  "https://apitest.fracspace.com/api/v1/webApi/altaira/enquiryFormWithInvestmentOptions";

interface CountryOption {
  label: string;
  value: string;
}

type InvestmentBudget =
  | "$100,000 - $250,000"
  | "$250,000 - $500,000"
  | "$500,000+";

type EnquiryPurpose = "BUY_VILLA" | "INVEST_IN_RESORT";

interface FormData {
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNumber: string;
  countryCode: string;
  message: string;
  investmentBudget: InvestmentBudget;
  purpose: EnquiryPurpose;
}

const InvestmentForm = () => {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<CountryOption | null>(null);
  const [options, setOptions] = useState<CountryOption[]>([]);
  const [isSubmittedInvestmentForm, setSubmittedInvestmentForm] =
    useState(false);

  // const budgetRanges: string[] = [
  //     "$100,000 - $250,000",
  //     "$250,000 - $500,000",
  //     "$500,000+"
  // ]

  const budgetRanges: { label: string; value: InvestmentBudget }[] = [
    { label: "$100,000 - $250,000", value: "$100,000 - $250,000" },
    { label: "$250,000 - $500,000", value: "$250,000 - $500,000" },
    { label: "$500,000+", value: "$500,000+" }
  ];

  // const purposeOptions: string[]=[
  //     "Explore Investment Options",
  //     "Buy a Villa",
  //     "Invest in Resort"
  // ]

  const purposeOptions: { label: string; value: EnquiryPurpose }[] = [
    // { label: "Explore Investment Options", value: "EXPLORE_INVESTMENT" },
    { label: "Buy a Villa", value: "BUY_VILLA" },
    { label: "Invest in Resort", value: "INVEST_IN_RESORT" }
  ];

  useEffect(() => {
    const countryOptions = countryList().getData() as CountryOption[];
    setOptions(countryOptions);
  }, []);

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    countryCode: "",
    message: "",
    investmentBudget: "$100,000 - $250,000",
    purpose: "BUY_VILLA"
  });

  const changeHandler = useCallback((selected: SingleValue<CountryOption>) => {
    setValue(selected);
    setFormData((prev) => ({
      ...prev,
      country: selected?.label ?? ""
    }));
  }, []);

  const handleInputChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.emailId,
        countryCode: formData.countryCode,
        phoneNumber: formData.phoneNumber,
        budget: formData.investmentBudget,
        option: formData.purpose,
        message: formData.message
      };

      const response = await axios.post(apiUrl, payload, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Fracspace@2024"
        }
      });

      //console.log("form data", payload);
      // alert("Form data submitted successfully");
      if (response.status === 200 || response.status === 201) {
        TrackEvent(
          "Investments Related Contact Enquiry",
          "CTA",
          "Contact Page"
        );
        setSubmittedInvestmentForm(true);
        setFormData({
          firstName: "",
          lastName: "",
          emailId: "",
          phoneNumber: "",
          countryCode: "",
          investmentBudget: "$100,000 - $250,000",
          purpose: "BUY_VILLA",
          message: ""
        });
      }
    } catch (error) {
      console.log(error, "error while submitting form");
    } finally {
      setIsLoading(false);
    }
  };

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
            <div className="flex flex-col md:w-[50vw] lg:w-[25vw] gap-2">
              <label htmlFor="firstName">First Name</label>
              <input
                name="firstName"
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name*"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder:text-[rgba(0,0,0,0.5)] dark:text-black dark:bg-white dark:placeholder-black"
              />
            </div>
            <div className="flex flex-col md:w-[50vw] lg:w-[25vw] gap-2">
              <label htmlFor="lastName">Last Name</label>
              <input
                name="lastName"
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name*"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder:text-[rgba(0,0,0,0.5)] dark:text-black dark:bg-white dark:placeholder-black"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="emailId">Email ID</label>
            <input
              name="emailId"
              type="email"
              id="emailId"
              value={formData.emailId}
              onChange={handleInputChange}
              placeholder="Email Id*"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 placeholder:text-[rgba(0,0,0,0.5)] dark:text-black dark:bg-white dark:placeholder-black"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="phone">Phone</label>
            <PhoneInput
              country="in"
              enableSearch
              searchClass="text-black bg-white dark:text-black dark:bg-gray-800"
              searchStyle={{
                color: "black",
                backgroundColor: "white"
              }}
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
              inputClass="!w-full px-4 py-2 rounded-md border border-gray-300 placeholder:text-[rgba(0,0,0,0.5)]"
              containerClass="w-full"
              containerStyle={{ width: "100%" }}
              inputStyle={{
                width: "100%",
                color: "black",
                backgroundColor: "white"
              }}
              dropdownStyle={{
                backgroundColor: "white",
                color: "black"
              }}
              buttonClass="bg-white border border-gray-300"
              dropdownClass="dark:bg-gray-900 text-black dark:text-black text-sm"
            />
          </div>
          {/* <div className="flex flex-col w-full gap-2">
                        <label htmlFor="investmentBudget">Investment Budget Range</label>
                        <select
                            name="investmentBudget"
                            required
                            value={formData.investmentBudget}
                            onChange={handleInputChange}
                            className="!w-full px-4 py-2 rounded-md border border-gray-300 text-black"
                        >
                            <option value="" disabled>
                                Investment Budget Range
                            </option>
                            {budgetRanges.map((range) => (
                                <option key={range.value} value={range.value}>
                                    {range.label}
                                </option>
                            ))}
                        </select>
                    </div> */}

          <label htmlFor="investmentBudget">Investment Budget Ranges</label>

          <Select<{ label: string; value: InvestmentBudget }>
            options={budgetRanges}
            required
            value={budgetRanges.find(
              (opt) => opt.value === formData.investmentBudget
            )}
            onChange={(option) =>
              setFormData((prev) => ({
                ...prev,
                investmentBudget: option?.value ?? "$100,000 - $250,000"
              }))
            }
            className="react-select-container w-full text-sm"
            classNamePrefix="react-select"
            placeholder="Select Budget Range*"
            styles={{
              placeholder: (base) => ({ ...base, color: "black" }),
              input: (base) => ({
                ...base,
                color: "black"
              }),
              menu: (base) => ({
                ...base,
                color: "black"
              })
            }}
          />

          {/* <div className="flex flex-col w-full gap-2">
                        <label htmlFor="investmentOptions">Explore Investment Options</label>
                        <select
                            name="investmentOptions"
                            required
                            value={formData.purpose}
                            onChange={handleInputChange}
                            className="!w-full px-4 py-2 rounded-md border border-gray-300 text-black"
                        >
                            <option value="" disabled>
                                Investment Purpose
                            </option>
                            {purposeOptions.map((investmentOption) => (
                                <option key={investmentOption} value={investmentOption}>
                                    {investmentOption}
                                </option>
                            ))}
                        </select>
                    </div> */}

          <label htmlFor="purpose">Explore Investment Options</label>

          <Select<{ label: string; value: EnquiryPurpose }>
            options={purposeOptions}
            required
            value={purposeOptions.find((opt) => opt.value === formData.purpose)}
            onChange={(option) =>
              setFormData((prev) => ({
                ...prev,
                purpose: option?.value ?? "BUY_VILLA"
              }))
            }
            className="react-select-container w-full text-sm"
            classNamePrefix="react-select"
            placeholder="Select Purpose*"
            styles={{
              placeholder: (base) => ({ ...base, color: "black" }),
              input: (base) => ({
                ...base,
                color: "black"
              }),
              menu: (base) => ({
                ...base,
                color: "black"
              })
            }}
          />
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="message">Message/Query</label>
            <textarea
              name="message"
              rows={4}
              cols={10}
              id="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us about your interest in Altaira..."
              className="border border-gray-400 placeholder:text-[rgba(0,0,0,0.5)] dark:text-black dark:bg-white dark:placeholder-black rounded-md p-3"
            ></textarea>
          </div>
          {isSubmittedInvestmentForm && (
            <div className="mt-4">
              Thank you for reaching out! We've received your inquiry and our
              team is already on it.
            </div>
          )}
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
  );
};

export default InvestmentForm;
