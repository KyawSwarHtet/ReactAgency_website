
import { useState } from 'react'
import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import { ContactUs } from './components/ContactUs'
import MyFooter from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Product from './components/Product'
import Service from './components/Service'
import i18n from './i18n'
import LocaleContext from './LocaleContext'

function App() {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged',(lng)=> setLocale(lng));

   const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLocale(language); 
  };

  return (
    <>
      <LocaleContext.Provider value={{locale, setLocale, handleChangeLanguage }}>
      <Navbar/>
      <Home/>
      <Service/>
      <About/>
      <Product/>
      <Blog/>
      <Newsletter/>
      <ContactUs/>
      <MyFooter/>
      </LocaleContext.Provider>
    </>
  )
}

export default App
