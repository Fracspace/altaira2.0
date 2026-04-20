"use client";

import React, { ReactNode, useState } from "react";
import FloatingEnquiryIcon from "./FloatingEnquiryIcon";

import PopupProvider from "./PopupProvider";
import { ExchangeProvider } from "../../context/ExchangeContext";

interface LayoutClientWrapperProps {
  children: ReactNode;
  usdRate: number;
}

function LayoutClientWrapper({ children ,usdRate}: LayoutClientWrapperProps) {
  return (
    <>
      <ExchangeProvider usdRate={usdRate}>
        <PopupProvider>{children}</PopupProvider>
      </ExchangeProvider>
    </>
  );
}

export default LayoutClientWrapper;
