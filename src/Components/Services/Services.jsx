import React from 'react'
import { motion, stagger } from 'framer-motion'
import coffee1 from '../../assets/coffee/coffee1.png';
import coffee3 from '../../assets/coffee/coffee3.png';
import { div } from 'motion/react-client';

const servicesData = [
  {
    id: 1,
    image: coffee1,
    title: "Black Coffee",
    subtitle: "lorem  Iste, quibusdam tempora molestias neq"

  },
  {
    id: 2,
    image: coffee3,
    title: "Hot Coffee",
    subtitle: "lorem  Iste, quibusdam tempora molestias neq"

  },
  {
    id: 3,
    image: coffee1,
    title: " Cold Coffee",
    subtitle: "lorem  Iste, quibusdam tempora molestias neq"

  },
]
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 10,
      ease: 'easeInOut'
    },
  },
};

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.6,
      staggerChildren: 0.3,
    },
  }
};

const Services = () => {
  return (
    <div className='container my-10 space-y-4'>
      {/* Header Section */}
      <div className='text-center max-w-lg mx-auto space-y-2'>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.2,
          }}
          className='text-3xl font-bold text-lightGray'>
          Fresh and  <span className='text-primary'>Tasty Coffee</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 10,
            delay: 0.4,
          }}

          className='text-sm opacity-50'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quibusdam fuga sed a earum. Accusamus incidunt doloribus
          repudiandae dolorum. Iure reiciendis iste nihil ipsa commodi
          Exercitationem mollitia quia reiciendis ad.
        </motion.p>
      </div>

      {/* Cards Section */}
      <motion.div variants={containerVariants}
        initial="hidden"
        whileInView={"visible"}
        viewport={{ amount: 0.8 }}
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        
        {servicesData.map((service) => (
          <motion.div variants={cardVariants} className='text-center p-4 space-y-6' >
            <img src={service.image}
              alt='' className='img-shadow2 max-w-[200px] mx-auto hover:scale-110 duration-300 cursor-pointer' />
            <div className='space-y-2'>
              <h1 className='text-2xl font-bold text-primary '>{service.title}</h1>
              <p className='text-darkGary'>{service.subtitle}</p>

            </div>
          </motion.div>

        ))}

      </motion.div>
    </div>
  )
}

export default Services;