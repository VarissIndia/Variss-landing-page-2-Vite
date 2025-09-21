import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Wallet, PiggyBank, TrendingUp, Shield, Brain, Smartphone } from 'lucide-react'

const Features = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const features = [
    {
      icon: Wallet,
      title: 'Unified Wallet',
      description: 'Manage all your accounts in one secure platform',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: PiggyBank,
      title: 'Smart Savings',
      description: 'AI-powered recommendations for optimal savings',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: TrendingUp,
      title: 'Investment Tracking',
      description: 'Real-time portfolio monitoring and analytics',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: '256-bit encryption and multi-factor authentication',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Brain,
      title: 'AI Insights',
      description: 'Personalized financial advice powered by AI',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Access your finances anywhere, anytime',
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          ref={ref}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to take control of your financial future
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icon Container */}
              <div className="mb-6 relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300`}></div>
                <div className="relative glass-card w-16 h-16 rounded-xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>

              {/* Hover Effect Line */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.color}`}
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features