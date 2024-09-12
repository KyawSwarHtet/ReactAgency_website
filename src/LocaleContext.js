import { createContext } from "react";

const defaultValue = {
    locale:'en',
    setLocale:() =>{},
    handleChangeLanguage: (language) => {}
}

export default createContext(defaultValue)