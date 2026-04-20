"use client";

import React from "react";
import { createContext, useContext } from "react";

type ExchangeContextType = {
  usdRate: number;
};

const ExchangeContext = createContext<ExchangeContextType | null>(null);

export const useExchange = () => {
  const context = useContext(ExchangeContext);
//   if (!context) {
//     throw new Error("useExchange must be used within Exchange provider");
//   }
  return context;
};

export const ExchangeProvider = ({
  children,
  usdRate
}: {
  children: React.ReactNode;
  usdRate: number;
}) => {
  return <ExchangeContext.Provider value={{usdRate}}>{children}</ExchangeContext.Provider>;
};
