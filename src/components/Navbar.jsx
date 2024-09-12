import React, { useContext, useEffect, useState } from 'react'
import logo from '../assets/favicon.png'
import { Link } from 'react-scroll'

// react-icons
import {FaXmark, FaBars} from 'react-icons/fa6'
import LocaleContext from '../LocaleContext';

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const { locale,handleChangeLanguage } = useContext(LocaleContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

     const handleLanguageSelection = (event) => {
        handleChangeLanguage(event.target.value);
    };

    useEffect(() =>{
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true)
            } else {
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    });

    const navItems=[
        {link:"Home",path:"home"},
        {link:"Service",path:"service"},
        {link:"About",path:"about"},
        {link:"Product",path:"product"},
        {link:"Testimonial",path:"testimonial"},
        {link:"FAQ",path:"faq"},
        {link:"Contact",path:"contact"},
    ]

  return (
    <>
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300":""}`}>
            <div className='flex justify-around items-center text-base gap-4'>
                <a href='' className='text-2xl font-semibold flex items-center space-x-3'>
                    <img src={logo} alt='logo' className='w-10 inline-block items-center' /> <span className='text-[#263238]'>Whizmo Global</span>
                </a>

                {/* nav items for large devices */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => (
                            <Link to={path} spy={true} smooth={true} activeClass='active' offset={-100} key={path} className='block cursor-pointer text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>
                        ))
                    }
                </ul>

                 <div>
                    <select onChange={handleLanguageSelection} value={locale}>
                        <option value="en" selected>English</option>
                        <option value="fr">French</option>
                    </select>
                </div>

                {/* btn for large devices */}
                <div className='space-x-12 hidden lg:flex items-center'>
                    <a href="" className='hidden lg:flex items-center text-brandPrimary hover:text-gray900'>Login</a>
                    <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey'>Sign up</button>
                </div>

                {/* language button for only mobile devices */}
               
                <div className='md:hidden'>
                    <button onClick={toggleMenu}
                    className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGrey'/>) :(<FaBars className='h-6 w-6 text-neutralDGrey'/>)
                        }
                    </button>
                </div>
            </div>

            {/* nav items for mobile devices */}
            <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 left-0 right-0":"hidden"}`}>
                {
                        navItems.map(({link, path}) => (
                            <Link to={path} spy={true} activeClass='active' smooth={true} offset={-80} key={path} className='block text-base text-white hover:text-neutral-700 first:font-medium' onClick={toggleMenu}>{link}</Link>
                        ))
                    }
            </div>
        </nav>
    </header>
    </>
  )
}
