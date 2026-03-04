"use client";

import React, { ReactNode, useState } from "react";
import FloatingEnquiryIcon from "./FloatingEnquiryIcon";
import PopupForm from "../PopupForm/PopupForm";

interface LayoutClientWrapperProps {
  children: ReactNode;
}

function LayoutClientWrapper({ children }: LayoutClientWrapperProps) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <FloatingEnquiryIcon onClick={() => setShowPopup(true)} />
      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      {children}
    </div>
  );
}

export default LayoutClientWrapper;
