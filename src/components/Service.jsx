import React from 'react'
import logo1 from '../assets/companylogo/Logo1.png'
import logo2 from '../assets/companylogo/Logo2.png'
import logo3 from '../assets/companylogo/Logo3.png'
import logo4 from '../assets/companylogo/Logo4.png'
import logo5 from '../assets/companylogo/Logo5.png'
import logo6 from '../assets/companylogo/Logo6.png'
import logo7 from '../assets/companylogo/Logo7.png'
import {motion} from 'framer-motion'

// varriants
import {fadeIn} from '../variants'
import { useTranslation } from 'react-i18next';

export default function Service() {

    const { t } = useTranslation();

    const services =[
        {id:1,title:"Membership Organisations", description:"Our membership management software provides full automation of membership renewals and payments",
            image:"/src/assets/servicelogo/peopele-company.png"
        },
        {id:2,title:"National Association", description:"Our membership management software provides full automation of membership renewals and payments",
            image:"/src/assets/servicelogo/companylogo.png"
        },
        {id:3,title:"Clubs and Groups", description:"Our membership management software provides full automation of membership renewals and payments",
            image:"/src/assets/servicelogo/people-hand.png"
        },
    ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='service'>
     <div className='text-center my-8'>
        <motion.div variants={fadeIn('down',0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} >
        <h2 className='text-4xl text-neutralDGrey font-semibold mb-2'>{t('service_title1')} </h2>
        <p className='text-neutralGrey'>{t('service_desc1')} </p>
        </motion.div>

        {/* Company Logo */}
         <motion.div variants={fadeIn('left',0.5)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='my-12 flex flex-wrap justify-between items-center gap-8' >
            <img src={logo1} alt="logo1" />
            <img src={logo2} alt="logo2" />
            <img src={logo3} alt="logo3" />
            <img src={logo4} alt="logo4" />
            <img src={logo5} alt="logo5" />
            <img src={logo6} alt="logo6" />
            <img src={logo7} alt="logo7" />
       </motion.div>

        {/* Services Card */}
        <motion.div variants={fadeIn('right',0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='mt-20 md:w-1/2 mx-auto text-center'>
            <h2 className='text-4xl text-neutralDGrey font-semibold mb-3'>{t('service_title2')}</h2>
            <p className='text-neutralGrey'>{t('service_desc2')}</p>
        </motion.div>

        {/* Cards */}
         <motion.div variants={fadeIn('up',0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
            {
                services.map(service => <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
                hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                    <div>
                        <div className='bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'><img src={service.image} alt='' className='ml-2'/></div>
                        <h4 className='text-2xl font-bold text-neutralDGrey mb-2 px-2'>{service.title}</h4>
                        <p className='text-sm text-neutralGrey'>{service.description}</p>
                    </div>
                </div>)
            }
       </motion.div>
     </div>
    </div>
  )
}
