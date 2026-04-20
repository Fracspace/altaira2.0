"use client"

import React from 'react'
import { createContext,useContext } from 'react'

 type PopupContextType = {
        openPopup:()=>void;
        closePopup:()=>void;
    }

export const PopupContext = createContext<PopupContextType | null>(null);

export const usePopup = () =>{
    const context = useContext(PopupContext);
    if(!context){
        throw new Error("usePopup should be used within PopupProvider!")
    }
    return context;
}