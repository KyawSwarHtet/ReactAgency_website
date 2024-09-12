import React from 'react';
import aboutImg from '../assets/aboutus/Frame35.png'
import {motion} from 'framer-motion'

// varriants
import {fadeIn} from '../variants'

export default function About() {
  return (
    <div>
        {/* about text */}

      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8' id='about'>
            <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                <motion.div variants={fadeIn('right',0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='w-[250px]'>
                    
                    <img src={aboutImg} alt="about1" className='w-full'/>
                </motion.div> 

                <motion.div variants={fadeIn('left',0.2)} initial="hidden" whileInView={"show"} viewport={{once:false, amount:0.7}} className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>The unseen of spending three years at Pixelgrade</h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat nemo reprehenderit architecto, et alias possimus impedit magnam vitae quasi, voluptatibus blanditiis, ipsa dolor quae optio fugiat quidem omnis. Alias iure nesciunt dicta, laudantium veritatis voluptas consectetur qui dolores cum aspernatur!</p>
                <button className='btn-register'>Learn More</button>
            </motion.div>
        </div>
      </div>

    {/* company stats */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
                <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>Helping the local <br/>
                <span className='text-brandPrimary'> business reinvent itself</span></h2>
                <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>We reached here with our hard work and dedication</p>
            </div>

            {/* stats */}
            <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12'>
                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/aboutus/icons/abouticon1.png" alt="" />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                            <p>Members</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/aboutus/icons/abouticon2.png" alt="" />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>46,345</h4>
                            <p>Clubs</p>
                        </div>
                    </div>

                </div>

                <div className='space-y-8'>
                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/aboutus/icons/abouticon3.png" alt="" />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>832,345</h4>
                            <p>Evnent Bookings</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <img src="/src/assets/aboutus/icons/abouticon4.png" alt="" />
                        <div>
                            <h4 className='text-2xl text-neutralDGrey font-semibold'>1,926,346</h4>
                            <p>Payments</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
