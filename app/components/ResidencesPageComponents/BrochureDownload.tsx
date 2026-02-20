"use client";

import axios from "axios";
import React from "react";
import { useState, useCallback, ChangeEvent, FormEvent } from "react";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { SingleValue } from "react-select";
import countryList from "react-select-country-list";

import { TrackEvent } from "../GlobalComponents/TrackEvent";

interface CountryOption {
  label: string;
  value: string;
}

interface FormData {
  name: string;
  emailId: string;
  phoneNumber: string;
  countryCode: string;
}

interface BrochureDownloadProps {
  onClose: () => void;
}

function BrochureDownload({ onClose }: BrochureDownloadProps) {
  const [formSubmit, setFormSubmit] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>();
  const [verifyingOtp, setVerifyingOtp] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    emailId: "",
    phoneNumber: "",
    countryCode: ""
  });

  const SUBMIT_FORM =
    "https://apitest.fracspace.com/api/v1/webApi/altaira/altairaConceptPlanViewerOTP";

  const VERIFY_OTP =
    "https://apitest.fracspace.com/api/v1/webApi/altaira/verifyAltairaConceptPlanViewerOTP";

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
      // console.log("form data", formData);

      const response = await axios.post(
        SUBMIT_FORM,
        {
          email: formData.emailId,
          phoneNumber: formData.phoneNumber,
          countryCode: formData.countryCode,
          fullName: formData.name
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024"
          }
        }
      );

      // console.log("resp is", response);

      setFormSubmit(true);
      TrackEvent("Downloaded Brochure", "CTA", "Residences Page");
      alert("Form data submitted successfully");
    } catch (error) {
      console.log(error, "error while submitting form");
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    setVerifyingOtp(true);
    try {
      const response = await axios.post(
        VERIFY_OTP,
        {
          email: formData.emailId,
          otp: otp
        },
        {
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Fracspace@2024"
          }
        }
      );

      // console.log("response is", response);
      if (response?.data?.success) {
        setFormData({
          name: "",
          emailId: "",
          phoneNumber: "",
          countryCode: ""
        });
        setOtp("");
        onClose();
        window.open("/docs/villa.pdf", "_blank");
      } else {
        alert("Invalid OTP,Please enter valid otp!");
      }
    } catch (error) {
      // console.log("error is", error);
      alert("Invalid OTP,Please enter valid otp!");
    } finally {
      setVerifyingOtp(false);
    }
  };

  return (
    <div className="flex max-w-7xl rounded-lg bg-white">
      {!formSubmit ? (
        <form onSubmit={onSubmit} className="flex flex-col gap-3 pb-4">
          <div className="text-center mt-9 mb-2 text-[#AD9273]">
            Please Fill This Form To Download Brochure
          </div>
          <div className="flex flex-row gap-3">
            <div className="flex flex-col w-[60vw] md:w-[25vw] gap-2">
              <label className="text-[#AD9273]" htmlFor="firstName">
                Name
              </label>
              <input
                name="name"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name*"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <label className="text-[#AD9273]" htmlFor="emailId">
              Email ID
            </label>
            <input
              name="emailId"
              type="email"
              id="emailId"
              value={formData.emailId}
              onChange={handleInputChange}
              placeholder="Email Id*"
              required
              className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
            />
          </div>

          <div className="flex flex-col w-full gap-2">
            <label className="text-[#AD9273]" htmlFor="phone">
              Phone
            </label>
            <PhoneInput
              country="in"
              enableSearch
              searchClass="text-black bg-white dark:text-black dark:bg-gray-800"
              searchStyle={{ color: "black", backgroundColor: "white" }}
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
              buttonClass="bg-white border border-gray-300"
              dropdownClass="dark:bg-gray-900 text-black dark:text-black text-sm"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className=" cursor-pointer px-10 py-2 bg-[#AD9273] rounded-md
    font-inter font-semibold text-white
    transition-all duration-300 ease-out
    hover:bg-[#9C8266]
    hover:shadow-lg hover:shadow-[#AD927350]
    hover:-translate-y-[1px]
    active:translate-y-0
    disabled:opacity-60
    disabled:hover:bg-[#AD9273]
    disabled:hover:shadow-none
    disabled:hover:translate-y-0"
            >
              {isLoading ? "Please wait..." : "Submit"}
            </button>
          </div>
        </form>
      ) : (
        <div className=" w-[60vw] md:w-[25vw] py-6">
          <form>
            <div className="flex flex-col w-full gap-2">
              <label className="text-[#AD9273]" htmlFor="emailId">
                Enter OTP Sent to the Email
              </label>
              <input
                name="otp"
                type="text"
                id="otp"
                // value={formData.emailId}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP"
                required
                className="w-full px-4 py-2 rounded-md border border-gray-300 text-black"
              />
            </div>
            <div className="mt-4 flex items-center justify-center">
              <button
                onClick={() => verifyOtp()}
                type="button"
                disabled={isLoading}
                className="cursor-pointer px-10 py-2 bg-[#AD9273] rounded-md font-inter font-semibold text-white disabled:opacity-60"
              >
                {verifyingOtp ? "verifying...." : "verify"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default BrochureDownload;
