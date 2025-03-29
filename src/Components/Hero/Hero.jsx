import React from 'react';
import BgImage from '../../assets/bg-slate.png';
import BlackCoffee from '../../assets/black.png';
import Navbar from '../Navbar/Navbar';
import { motion } from "motion/react"

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
}

const Hero = () => {
    return (
        <main style={bgImage}>

            <section className='relative min-h-[750px] w-full'>
                <div className="container">

                    {/* Navbar Section Here  */}
                    <Navbar />

                    {/* Hero Section Here  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]' >
                        {/* text content Section  */}
                        <div className='text-[var(--color-lightOrange)] mt-[100px] md:mt-0 p-4 space-y-28'>

                            <motion.h1
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1 }}
                                className='text-7xl font-bold leading-tight ml-14' >Blvck Tumbler
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.2 }}

                                className='relative' >
                                <div className='relative z-10 space-y-4'>
                                    <h1 className='text-2xl'>Black Lifestyle Lovers</h1>
                                    <h1 className='text-sm opacity-55 leading-loose'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                                        beatae dolores. Iste, quibusdam tempora molestias neque odit eos sunt
                                        blanditiis placeat nihil
                                    </h1>
                                </div>
                                <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                            </motion.div>

                        </div>
                        {/* Hero Image Section  */}
                        <div className='relative'>
                            <motion.img  
                             initial={{ opacity: 0, scale: 0 }} 
                             animate={{ opacity: 1, scale: 1 }}
                             transition={{ 
                                    type: 'spring', 
                                    stiffness: 100, 
                                    damping: 10, delay: 0.4 
                                }} 
                              src={BlackCoffee} alt='' className='relative z-40 h-[400px] md:h-[700px] img-shadow' />

                            {/* ring circle */}
                            <motion.div 
                               initial={{ opacity: 0, y: 100 }}
                               animate={{ opacity: 1, y: 0 }}
                               transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.8 }}
                               
                            className=' h-[180px] w-[180px] absolute top-24 -right-16 border-[var(--color-primary)] border-[20px] rounded-full z-10'></motion.div>

                            {/* Big text  section */}
                            <motion.div 
                             initial={{ opacity: 0, x: -100 }}
                             animate={{ opacity: 1, x: 0 }}
                             transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.8 }}
                              
                             className='absolute -top-10 left-[350px] z-[1]'>
                                <h1 className='text-[120px] scale-150 font-bold text-[var(--color-darkGary)]/40 leading-none]'>
                                    Blvck Tumbler
                                </h1>

                            </motion.div>
                        </div>
                        {/* third div section */}
                        <motion.div 
                         initial={{ opacity: 0, y: 100 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 1.2 }}
                         
                         className='text-[var(--color-lightOrange)] mt-[100px] md:mt-0 p-4 space-y-28'>

                            <h1 className='opacity-0 text-7xl font-bold leading-tight ml-14' >Hydrate Mate</h1>
                            <div className='relative'>
                                <div className='relative z-10 space-y-4'>
                                    <h1 className='text-2xl'>Blvck Tumbler</h1>
                                    <h1 className='text-sm opacity-55 leading-loose'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                                        beatae dolores. Iste, quibusdam tempora molestias neque odit eos sunt
                                        repellat iusto nostrum perspiciatis, blanditiis placeat nihil
                                        repellat iusto nostrum perspiciatis, blanditiis placeat nihil

                                    </h1>
                                </div>
                                <div className='absolute -top-6 -right-10 w-[250px] h-[190px] bg-[var(--color-darkGary)]/50'></div>
                            </div>

                        </motion.div>

                        <div></div>
                    </div>
                </div>
                
  {/* sidebar bar menu Section  */}

            </section>

        </main>
    );
}

export default Hero