'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin, FiTwitter, FiFileText } from 'react-icons/fi'

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const socialLinks = [
    // { icon: <FiGithub size={20} />, url: 'https://github.com/shripawar334', label: 'GitHub' },
    // { icon: <FiLinkedin size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' },
   
  ]

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col justify-center py-20 px-6 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <motion.div className="space-y-8" variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            <span className="block">Hi, I&apos;m</span>
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Shripad Pawar</span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl"
            variants={itemVariants}
          >
            A passionate <span className="font-semibold text-purple-600 dark:text-purple-400">Full Stack Developer</span> creating modern and responsive web applications with cutting-edge technologies.
          </motion.p>
          
         
          
          <motion.div
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            variants={itemVariants}
          >
            <motion.div
              className="w-full sm:w-auto sm:flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <span>Contact Me</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              className="w-full sm:w-auto sm:flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/project"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium rounded-lg shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all"
              >
                View Projects
              </Link>
            </motion.div>

            <motion.div
              className="w-full sm:w-auto sm:flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/final.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 font-medium rounded-lg shadow-md hover:shadow-lg border border-purple-200 dark:border-purple-800/30 transition-all"
              >
                <FiFileText className="mr-2" />
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] order-first lg:order-last flex items-center justify-center"
          variants={itemVariants}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-500/20 dark:from-purple-600/30 dark:to-blue-500/30 blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          </div>

          <motion.div
            className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex items-center justify-center z-10"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-full h-full relative rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <Image
                src="/photo.jpeg"
                alt="Profile Photo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-0 right-0 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div 
          className="animate-bounce p-2 bg-white dark:bg-gray-800 rounded-full shadow-md"
          whileHover={{ scale: 1.2 }}
        >
          <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default HomePage