'use client'


import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout, FiServer, FiFileText } from 'react-icons/fi'


const AboutPage = () => {
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

  const skills = [
    { 
      icon: <FiCode className="text-purple-600" size={24} />, 
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces using modern frameworks and libraries.'
    },
    { 
      icon: <FiServer className="text-purple-600" size={24} />, 
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs to power web applications.'
    },
    { 
      icon: <FiDatabase className="text-purple-600" size={24} />, 
      title: 'Database Management',
      description: 'Designing and optimizing database structures for efficient data storage and retrieval.'
    },
    { 
      icon: <FiLayout className="text-purple-600" size={24} />, 
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user experiences that delight users.'
    },
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
            About Me
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Get to know more about me, my background, and what I do.
          </p>
          
          <motion.div
            className="flex justify-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="/final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 font-medium rounded-lg shadow-md hover:shadow-lg border border-purple-200 dark:border-purple-800/30 transition-all"
            >
              <FiFileText className="mr-2" />
              View Resume
            </a>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-800 dark:text-gray-200"
              variants={itemVariants}
            >
              Who I Am
            </motion.h2>
            
            <motion.div
              className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto lg:mx-0 mb-6 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl"
              variants={itemVariants}
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
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              I'm a passionate Full Stack Developer with a strong focus on creating modern, responsive, and user-friendly web applications. With several years of experience in the field, I've developed a deep understanding of both frontend and backend technologies.  
            </motion.p>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              My journey in web development began when I was in college, where I discovered my passion for coding and problem-solving. Since then, I've been continuously learning and improving my skills to stay up-to-date with the latest technologies and best practices.
            </motion.p>
            
            <motion.p 
              className="text-gray-600 dark:text-gray-400"
              variants={itemVariants}
            >
              I believe in writing clean, maintainable code and creating intuitive user experiences. My goal is to build applications that not only look great but also perform exceptionally well.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-2xl font-bold text-gray-800 dark:text-gray-200"
              variants={itemVariants}
            >
              My Expertise
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                      {skill.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{skill.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-sm"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Education & Experience</h2>
          
          <div className="space-y-8">
            <motion.div 
              className="relative pl-8 border-l-2 border-purple-500"
              variants={itemVariants}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Frontend Developer</h3>
              <p className="text-purple-600 dark:text-purple-400">Notamedia | 2023</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Leading the development of web applications, mentoring junior developers, and implementing best practices for code quality and performance.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative pl-8 border-l-2 border-purple-500"
              variants={itemVariants}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Team Leader</h3>
              <p className="text-purple-600 dark:text-purple-400">Winzera | 2023 - 2024</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
              Achieved a turnover of ₹2–3 lakhs in the direct selling industry at Winzera  and successfully leaded a team of 10+ members.
              </p>
            </motion.div>
            
            <motion.div 
              className="relative pl-8 border-l-2 border-purple-500"
              variants={itemVariants}
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Bachelor's Degree in Computer Science</h3>
              <p className="text-purple-600 dark:text-purple-400">Pune University | 2022 - 2026</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
             Studied Computer Science with a focus on Web Development and Software Engineering, consistently maintaining a 9+ CGPA, while actively participating in various coding competitions and hackathons.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutPage
// app/about/page.js


