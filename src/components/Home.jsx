import React from 'react';
import { Carousel } from "flowbite-react";
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpeg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpeg'
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';

// varriants
import {fadeIn} from '../variants'

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className='bg-neutralSilver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        
        {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"> */}
      <Carousel className='w-full mx-auto'>
        <div className="my-2 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
         <motion.div variants={fadeIn('right',0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}>
            <img src={banner1} alt="banner1" />
          </motion.div>
          {/* hero text */}
           <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='md:w-1/2'>
          <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>{t('banner1_text1')} 
          <span className='text-brandPrimary leading-snug block'>{t('banner1_text2')}</span></h1>
          <p className='text-neutralGrey text-base mb-8'>{t('banner1_text3')}</p>
          <button className='btn-register'>{t('banner1_btn')}</button>
          </motion.div>
        </div>
        
        <div className="my-2 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <motion.div variants={fadeIn('down',0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}>
            <img src={banner2} alt="banner1" />
          </motion.div>
          {/* hero text */}
          <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='md:w-1/2'>
      
          <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>{t('banner2_text1')} 
          <span className='text-brandPrimary leading-snug block'>{t('banner2_text2')} </span></h1>
          <p className='text-neutralGrey text-base mb-8'>{t('banner2_text3')} </p>
          <button className='btn-register'>{t('banner1_btn')}</button>
          </motion.div>
        </div>

        <div className="my-2 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <motion.div variants={fadeIn('left',0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}>
            <img src={banner3} alt="banner1" />
          </motion.div>
          {/* hero text */}
          <motion.div variants={fadeIn('right',0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='md:w-1/2'>
          <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>{t('banner3_text1')} 
          <span className='text-brandPrimary leading-snug block'>{t('banner3_text2')} </span></h1>
          <p className='text-neutralGrey text-base mb-8'>{t('banner3_text3')} </p>
          <button className='btn-register'>{t('banner1_btn')}</button>
          </motion.div>
        </div>

        <div className="my-2 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <motion.div variants={fadeIn('up',0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}}>
            <img src={banner4} alt="banner1" />
          </motion.div>
          {/* hero text */}
           <motion.div variants={fadeIn('down',0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='md:w-1/2'>
          <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>{t('banner4_text1')} 
          <span className='text-brandPrimary leading-snug block'>{t('banner4_text2')}</span></h1>
          <p className='text-neutralGrey text-base mb-8'>{t('banner4_text3')}</p>
          <button className='btn-register'>{t('banner1_btn')}</button>
          </motion.div>
        </div>
      </Carousel>
      
      {/* </div> */}
      </div>
    </div>
  )
}
