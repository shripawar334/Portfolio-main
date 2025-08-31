'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub, FiTag } from 'react-icons/fi'

const ProjectsPage = () => {
  const [filter, setFilter] = useState('all')
  
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

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product management, cart functionality, user authentication, and payment processing.',
       image: '/ecom.png',
      tags: ['Web App', 'React', 'Node.js', 'MongoDB'],
      demoLink: 'https://ecommerce-app-ten-lemon.vercel.app/',
      githubLink: 'https://github.com/shripawar334/ecommerce_app',
      category: 'web'
    },
     {
      id: 3,
      title: 'Smart EV Charging-Booking System',
      description: 'A web application that allows users to book and manage electric vehicle charging stations with real-time availability and payment integration.',
       image: '/ev.png',
      tags: ['Web App', 'React', 'Node.js', 'MongoDB'],
      demoLink: 'https://example.com',
      githubLink: 'https://github.com/shripawar334/Booking-EV-Charging-Slot-System',
      category: 'web'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity app for managing tasks, projects, and deadlines with team collaboration features.',
       image: '/todo2.png',
      tags: ['Web App', 'React', 'Firebase'],
      demoLink: 'https://todoapp-chi-wheat.vercel.app/',
      githubLink: 'https://github.com/shripawar334/Todo',
      category: 'web'
    },

    {
      id: 6,
      title: 'URL Shortener',
      description: 'A simple and efficient URL shortening service with analytics and custom alias support.',
      image: '/url.png',
      tags: ['Blockchain', 'Solidity', 'Web3.js'],
      demoLink: '',
      githubLink: 'https://github.com/shripawar334/url',
      category: 'web'
    },
       {
      id: 7,
      title: 'Personal Portfolio',
      description: 'A modern and responsive personal portfolio website to showcase projects, skills, and experience.',
      image: '/folio.png',
      tags: ['Blockchain', 'Solidity', 'Web3.js'],
      demoLink: '',
      githubLink: '',
      category: 'web'
    },
    {
      id: 8,
      title: 'Divine Connect',
      description: ' Developed a web application using Next.js that centralizes information about great devotees, providing detailed profiles and multimedia integration. Created a unified digital hub to enhance accessibility and engagement for spiritual knowledge seekers.',
      image: '/devotee.png',
      tags: ['Blockchain', 'Solidity', 'Web3.js'],
      demoLink: '',
      githubLink: 'https://github.com/shripawar334/url',
      category: 'web'
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
            My Projects
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Feel free to explore and check out the live demos or code repositories.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('web')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'web' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            Web
          </button>
          <button
            onClick={() => setFilter('mobile')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'mobile' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            Mobile
          </button>
          <button
            onClick={() => setFilter('ai')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'ai' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            AI/ML
          </button>
          <button
            onClick={() => setFilter('blockchain')}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'blockchain' ? 'bg-purple-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'}`}
          >
            Blockchain
          </button>
        </motion.div>

        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden group">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                    <div className="flex space-x-3">
                      {project.demoLink && (
                        <a 
                          href={project.demoLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        >
                          <FiExternalLink className="text-white" size={18} />
                        </a>
                      )}
                      {project.githubLink && (
                        <a 
                          href={project.githubLink} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-colors"
                        >
                          <FiGithub className="text-white" size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full"
                      >
                        <FiTag className="mr-1" size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              No projects found in this category. Please try another filter.
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectsPage