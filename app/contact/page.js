'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const ContactPage = () => {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  const contactInfo = [
    {
      icon: <FiMail className="text-purple-600" size={24} />,
      title: 'Email',
      details: 'shripadpawar.skn.comp@gmail.com'
      
    },
    {
      icon: <FiPhone className="text-purple-600" size={24} />,
      title: 'Phone',
      details: '+91 8010292853',
      link: 'tel:8010292853'
    },
    {
      icon: <FiMapPin className="text-purple-600" size={24} />,
      title: 'Location',
      details: 'India,Pune',
      link: 'https://maps.google.com/?q=Pune'
    }
  ]

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen py-20 px-6 md:px-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
            Get In Touch
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out via email or phone. I&apos;m always open to discussing new opportunities and collaborations!
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="max-w-md w-full space-y-6"
            variants={itemVariants}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{info.title}</h3>
                    <a 
                      href={info.link}
                      className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {info.details}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </motion.div>
  )
}

export default ContactPage