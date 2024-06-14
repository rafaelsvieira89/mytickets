"use client"
import {createContext, ReactNode, useState} from "react";

interface ModalContextData{
    visible:boolean
    handleModalVisible: () => void
}

export const ModalContext = createContext({} as ModalContextData)
export const ModalProvider = ({children}:{children: ReactNode}) => {

    const [visible, setVisible] = useState(false);
    function handleModalVisible(){
        setVisible(!visible)
    }
    return(
        <ModalContext.Provider value={{visible, handleModalVisible}}>
            {children}
        </ModalContext.Provider>
    )
}