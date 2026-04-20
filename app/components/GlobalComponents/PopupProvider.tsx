"use client";

import React from "react";
import { ReactNode, useState } from "react";
import { PopupContext } from "./PopupContext";
import PopupForm from "../PopupForm/PopupForm";
import FloatingEnquiryIcon from "./FloatingEnquiryIcon";

interface PopupProviderProps {
  children: ReactNode;
}

function PopupProvider({ children }: PopupProviderProps) {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  return (
    <PopupContext.Provider value={{ openPopup, closePopup }}>
      <FloatingEnquiryIcon onClick={() => setShowPopup(true)} />
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
        {children}
    </PopupContext.Provider>
  );
}

export default PopupProvider;
