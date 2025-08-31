'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiCode, FiDatabase, FiGlobe, FiLayers, 
  FiServer, FiSmartphone, FiTool, FiZap 
} from 'react-icons/fi'

const SkillsPage = () => {
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

  const skillCategories = [
     {
      title: 'Programming Languages',
      icon: <FiLayers className="text-purple-600" size={24} />,
      skills: [
        { name: 'Java', proficiency: 95 },
        { name: 'C++', proficiency: 70 },
        { name: 'Python', proficiency: 70 },
       
      ]
    },
    {
      title: 'Frontend',
      icon: <FiLayers className="text-purple-600" size={24} />,
      skills: [
        { name: 'HTML/CSS', proficiency: 90 },
        { name: 'JavaScript', proficiency: 85 },
        { name: 'React.js', proficiency: 80 },
        { name: 'Next.js', proficiency: 75 },
        { name: 'Tailwind CSS', proficiency: 85 },
      ]
    },
    {
      title: 'Backend',
      icon: <FiServer className="text-purple-600" size={24} />,
      skills: [
        { name: 'Node.js', proficiency: 80 },
        { name: 'Express.js', proficiency: 75 },
        { name: 'Python', proficiency: 70 },
        { name: 'Django', proficiency: 65 },
        { name: 'RESTful APIs', proficiency: 85 },
      ]
    },
    {
      title: 'Database',
      icon: <FiDatabase className="text-purple-600" size={24} />,
      skills: [
        { name: 'MongoDB', proficiency: 80 },
        { name: 'MySQL', proficiency: 75 },

      ]
    },
    {
      title: 'Tools & Others',
      icon: <FiTool className="text-purple-600" size={24} />,
      skills: [
        { name: 'Git & GitHub', proficiency: 85 },
        { name: 'Data Structures And Algorithms', proficiency: 85 },
        { name: 'Google Cloud', proficiency: 65 },
        { name: 'WordPress', proficiency: 85 },

      ]
    },
  ]

  const technologies = [
    { icon: <FiCode />, name: 'JavaScript' },
    { icon: <FiCode />, name: 'TypeScript' },
    { icon: <FiCode />, name: 'Python' },
    { icon: <FiGlobe />, name: 'React.js' },
    { icon: <FiGlobe />, name: 'Next.js' },
    { icon: <FiSmartphone />, name: 'HTML5' },
    { icon: <FiSmartphone />, name: 'CSS3' },
    { icon: <FiZap />, name: 'Tailwind CSS' },
    { icon: <FiServer />, name: 'Node.js' },
    { icon: <FiServer />, name: 'Express.js' },
    { icon: <FiServer />, name: 'Django' }, 
    { icon: <FiDatabase />, name: 'MongoDB' },
    { icon: <FiDatabase />, name: 'MySQL' },

   
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
            My Skills
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the skills and technologies I&apos;ve worked with over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-sm"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">{category.title}</h2>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1, delay: 0.5 + (skillIndex * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Technologies I&apos;ve Worked With
          </h2>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <motion.div 
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-purple-600 dark:text-purple-400 mb-2">
                  {tech.icon}
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SkillsPage