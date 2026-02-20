"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import {
  useEffect,
  useState,
  useRef,
  useCallback,
  ChangeEvent,
  FormEvent
} from "react";
import InvestmentForm from "../GlobalComponents/InvestmentForm";

import axios from "axios";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { SingleValue } from "react-select";
import countryList from "react-select-country-list";

import { useSearchParams } from "next/navigation";

import { TrackEvent } from "../GlobalComponents/TrackEvent";

interface CountryOption {
  label: string;
  value: string;
}

interface FormData {
  firstName: string;
  lastName: string;
  emailId: string;
  phoneNumber: string;
  countryCode: string;
  message: string;
  // country: string
}

interface emailLinkProps {
  email: string;
  children?: React.ReactNode;
}

const EmailLink = ({ email, children }: emailLinkProps) => {
  return (
    <a
      href={`mailto:${email}`}
      className="font-inter xl:text-xl hover:underline"
      aria-label={`Email ${email}`}
    >
      {children || email}
    </a>
  );
};

const Contact = () => {
  const searchParams = useSearchParams();
  const source = searchParams.get("source");
  const formRef = useRef<HTMLDivElement>(null);

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [value, setValue] = useState<CountryOption | null>(null);
  const [options, setOptions] = useState<CountryOption[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("general");
  const contactUsRef = useRef<HTMLDivElement>(null);

  const [isSubmitted, setIsSubmitted] = useState(false);

  const apiUrl =
    "https://apitest.fracspace.com/api/v1/webApi/altaira/enquiryForm";

  useEffect(() => {
    if (!source) return;

    // wait for layout + hydration
    const timeout = setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 300);

    return () => clearTimeout(timeout);
  }, [source]);

  useEffect(() => {
    const countryOptions = countryList().getData() as CountryOption[];
    setOptions(countryOptions);
    setSelectedCategory("investment");
  }, []);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    emailId: "",
    phoneNumber: "",
    countryCode: "",
    message: ""
    // country: ""
  });
  const changeHandler = useCallback((selected: SingleValue<CountryOption>) => {
    setValue(selected);
    setFormData((prev) => ({
      ...prev,
      country: selected?.label ?? ""
    }));
  }, []);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        phoneNumber: formData.phoneNumber,
        countryCode: formData.countryCode,
        message: formData.message
      };
      const response = await axios.post(apiUrl, payload, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "Fracspace@2024"
        }
      });
      //console.log("response",payload);
      // alert("Form data submitted successfully");
      if (response.status === 200 || response.status === 201) {
        TrackEvent( "General Contact Enquiry",
      "CTA",
      "Contact Page")
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          emailId: "",
          phoneNumber: "",
          countryCode: "+91",
          message: ""
        });
      }
    } catch (error) {
      console.log(error, "error while submitting form");
    } finally {
      setIsLoading(false);
    }
  };
  const handleCategoryChange = (selectedCategory: string) => {
    setSelectedCategory(selectedCategory);
  };

  return (
    <div className="ml-10 mr-10 py-10">
      <div className="max-w-7xl space-y-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10">
          <div
            ref={formRef}
            className="flex lg:w-1/2 rounded-md shadow-md flex-col gap-5 px-5 md:px-10 py-10"
          >
            {/* <h2 className="font-inter xl:text-xl text-lg">I'm interested in</h2> */}
            <div className="flex flex-row gap-1 md:gap-3 overflow-x-auto lg:overflow-x-visible">
              <button
                onClick={() => handleCategoryChange("general")}
                className={`rounded-full min-w-[70%] md:min-w-fit  ${selectedCategory !== "general" ? "bg-[#ffffff] text-black border boder-black-200" : "bg-[#AD9273] text-white"} cursor-pointer px-4 py-2`}
              >
                <p className="font-inter xl:text-xl text-base">
                  General / Agents
                </p>
              </button>
              <button
                onClick={() => handleCategoryChange("investment")}
                className={`rounded-full min-w-[70%] md:min-w-fit px-4 ${selectedCategory === "investment" ? "bg-[#AD9273] text-white" : "dark:text-black bg-[#ffffff]"} cursor-pointer py-2 border`}
              >
                <p className="font-inter xl:text-xl text-base">Investment</p>
              </button>
              {/* <button
                onClick={() => handleCategoryChange("agents")}
                className={`rounded-full px-4 ${selectedCategory === "agents" ? "bg-[#AD9273] text-white" : "bg-[#ffffff]"} cursor-pointer py-2 border`}
              >
                <p className="font-inter xl:text-xl text-base">Agents</p>
              </button> */}
            </div>
            {selectedCategory === "general" ? (
              <form onSubmit={onSubmit}>
                {error && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    {error}
                  </div>
                )}
                <div className="flex flex-col gap-3">
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-col md:w-[50vw] gap-2">
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
                    <div className="flex flex-col md:w-[50vw] gap-2">
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
                      searchClass="!text-black bg-white dark:text-black dark:bg-gray-800"
                      searchStyle={{
                        color: "black",
                        backgroundColor: "white"
                      }}
                      value={`${formData.countryCode}${formData.phoneNumber}`}
                      onChange={(
                        value: string,
                        data: { dialCode?: string }
                      ) => {
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
                      inputClass="!w-full px-4 py-2 rounded-md border border-gray-300 placeholder:text-[rgba(0,0,0,0.5)] text-black"
                      containerClass="w-full"
                      containerStyle={{ width: "100%" }}
                      inputStyle={{
                        width: "100%",
                        color: "black",
                        backgroundColor: "white"
                      }}
                      buttonClass="bg-white border border-gray-300"
                      dropdownClass="bg-white dark:bg-gray-900 text-black dark:text-white text-sm"
                      dropdownStyle={{
                        backgroundColor: "white",
                        color: "black"
                      }}
                    />
                  </div>
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
                      className="border border-gray-400 rounded-md p-3 placeholder:text-[rgba(0,0,0,0.5)] dark:text-black dark:bg-white dark:placeholder-black"
                    ></textarea>
                  </div>
                  {isSubmitted && (
                    <div className="mt-4">
                      Thank you for reaching out! We've received your enquiry
                      and our team is already on it.
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
            ) : (
              <InvestmentForm />
            )}
          </div>
          <div ref={contactUsRef} className="lg:w-1/2 flex flex-col gap-5">
            <h2 className="font-inter xl:text-xl text-[#AD9273]">CONTACT US</h2>
            <p className="font-cormorant text-xl md:text-3xl lg:text-4xl">
              We'd Love to Hear From You
            </p>
            <p className="font-inter xl:text-xl text-gray-500 dark:text-white leading-relaxed">
              Whether you're interested in staying, investing, or <br /> hosting
              an event, our team is here to help you explore all possibilities
              at Altaira.
            </p>
            <div className="space-y-10">
              <div className="flex flex-row items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-[#AD927399]/20 flex items-center justify-center">
                  <MapPin style={{ color: "#AD927399" }} />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-inter font-normal dark:text-white xl:text-xl text-gray-500">
                    Location
                  </h2>
                  <p className="font-inter xl:text-xl">
                    Bulathkohupitiya, Sri Lanka
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-[#AD927399]/20 flex items-center justify-center">
                  <Phone style={{ color: "#AD927399" }} />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-inter xl:text-xl dark:text-white text-gray-500">
                    Phone
                  </h2>
                  <div className="flex flex-col md:flex-row items-center md:gap-2 gap-1">
                    <p className="font-inter xl:text-xl"> +91 9880626111, </p>
                    <p className="font-inter xl:text-xl">+94-76031 2345</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-[#AD927399]/20 dark:text-white flex items-center justify-center">
                  <Mail style={{ color: "#AD927399" }} />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-inter xl:text-xl dark:text-white text-gray-500">
                    Email
                  </h2>
                  <EmailLink email="altaira.lk@fracspace.com">
                    altaira.lk@fracspace.com
                  </EmailLink>
                </div>
              </div>
              <div className="flex flex-row items-center gap-5">
                <div className="w-10 h-10 rounded-full bg-[#AD927399]/20 flex items-center justify-center">
                  <Clock style={{ color: "#AD927399" }} />
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="font-inter xl:text-xl dark:text-white text-gray-500">
                    Hours
                  </h2>
                  <p className="font-inter xl:text-xl">
                    Mon - Sat: 9:00 AM to 5:30 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[40vh] h-[50vh] lg:h-[50vh] xl:h-[70vh] rounded-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7918.357570206037!2d80.3310226383134!3d7.1052682180792655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae30efe5a2e1cab%3A0x66e4b8966396e2ea!2sBulathkohupitiya%2C%20Sri%20Lanka!5e0!3m2!1sen!2sin!4v1764817133800!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              borderRadius: "10px",
              filter: "invert(90%) hue-rotate(180deg)"
            }}
            allowFullScreen={true}
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
