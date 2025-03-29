import React from 'react';
import BgImage from '../../assets/bg-slate.png';
import BlackCoffee from '../../assets/black.png';
import Navbar from '../Navbar/Navbar';

const bgImage = {
    backgroundImage: `url(${BgImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
}

const Hero = () => {
    return (
        <main style={bgImage}>

            <section className='min-h-[750px] w-full'>
                <div className="container">
                    
                    {/* Navbar Section Here  */}
                     <Navbar/>

                    {/* Hero Section Here  */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center min-h-[850px]' >
                        {/* text content Section  */}
                        <div className='text-[var(--color-lightOrange)] mt-[100px] md:mt-0 p-4 space-y-28'>
                            <h1 className='text-7xl font-bold leading-tight ml-14' >Blvck Tumbler</h1>
                            <div className='relative'>
                                <div className='relative z-10 space-y-4'>
                                    <h1 className='text-2xl'>Black Lifestyle Lovers</h1>
                                    <h1 className='text-sm opacity-55 leading-loose'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
                                        beatae dolores. Iste, quibusdam tempora molestias neque odit eos sunt
                                         blanditiis placeat nihil
                                    </h1>
                                </div>
                                <div className='absolute -top-6 -left-10 w-[250px] h-[190px] bg-gray-700/25'></div>
                            </div>

                        </div>
                        {/* Hero Image Section  */}
                        <div className='relative'>
                            <img src={BlackCoffee} alt='' className='relative z-40 h-[400px] md:h-[700px] img-shadow' />
                           
                            {/* ring circke */}
                            <div className=' h-[180px] w-[180px] absolute top-24 -right-16 border-[var(--color-primary)] border-[20px] rounded-full z-10'></div>
                            
                             {/* Big text content section */}
                            <div className='absolute -top-10 left-[350px] z-[1]'>
                                <h1 className='text-[120px] scale-150 font-bold text-[var(--color-darkGary)]/40 leading-none]'>
                                  Blvck Tumbler
                                </h1>

                            </div>
                        </div>
                        {/* third div section */}
                        <div className='text-[var(--color-lightOrange)] mt-[100px] md:mt-0 p-4 space-y-28'>
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

                        </div>
                        
                        <div></div>
                    </div>
                </div>
            </section>

        </main>
    );
}

export default Hero