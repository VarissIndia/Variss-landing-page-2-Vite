import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Shield,
  Zap,
  Lock,
  TrendingUp,
  DollarSign,
  BarChart3,
} from "lucide-react";
import HeroImage from "../images/hero-image.png";

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // const floatingIcons = [
  //   { Icon: DollarSign, delay: 0, x: -200, y: -100 },
  //   { Icon: BarChart3, delay: 0.5, x: 200, y: -150 },
  //   { Icon: Lock, delay: 1, x: -150, y: 100 },
  //   { Icon: TrendingUp, delay: 1.5, x: 180, y: 80 }
  // ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
      </div> */}

      {/* Floating Icons */}
      {/* {floatingIcons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ 
            opacity: 0.3, 
            x: [0, x/2, x, x/2, 0],
            y: [0, y/2, y, y/2, 0]
          }}
          transition={{
            duration: 20,
            delay,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
          className="absolute hidden lg:block"
          style={{ top: '50%', left: '50%' }}
        >
          <Icon className="w-12 h-12 text-primary-400/30" />
        </motion.div>
      ))} */}

      <div ref={ref} className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">VARISS</span>
            <span className="text-white">.IN</span>
          </motion.h1> */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#1b368c] to-[#31e3f8] bg-clip-text text-transparent"
          >
            Your Financial Clarity Network
          </motion.p>

          {/* Main Shield Animation */}
          <div className="flex items-center justify-center">
            <img src={HeroImage} alt="Variss" className="object-cover" />
          </div>
          {/* <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={inView ? { scale: 1, rotate: 0 } : {}}
            transition={{ duration: 1, type: 'spring', bounce: 0.4 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative glass-card p-8 rounded-2xl">
                <Shield className="w-24 h-24 text-primary-400" />
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-2xl opacity-30 blur animate-pulse"></div>
              </div>
            </div>
          </motion.div> */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg font-bold bg-gradient-to-r from-[#1b368c] to-[#31e3f8] bg-clip-text text-transparent max-w-2xl mx-auto"
          >
            Secure, intelligent, and comprehensive financial management platform
            that brings all your accounts, investments, and financial goals into one unified dashboard.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(22, 119, 255, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-[#1b368c] to-[#31e3f8] rounded-full font-semibold text-lg flex items-center justify-center space-x-2 group"
            >
              <span>Get Started</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card rounded-full font-semibold text-lg border border-primary-500/50 hover:border-primary-400 transition-colors"
            >
              Watch Demo
            </motion.button>
          </motion.div>
        </div>

        {/* Animated Network Lines */}
        {/* <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
          <motion.path
            d="M0,400 Q250,350 500,400 T1000,400"
            stroke="url(#gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1677ff" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#00d4ff" stopOpacity="1" />
              <stop offset="100%" stopColor="#1677ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg> */}
      </div>
    </section>
  );
};

export default Hero;
