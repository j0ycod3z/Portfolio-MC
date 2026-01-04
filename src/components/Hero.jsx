import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiAward } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Hi, I'm <span className="gradient-text">Joshua Joy Crucis</span>
        </motion.h1>

        <motion.h2 variants={itemVariants} className="hero-subtitle">
          Software Engineer & AI Specialist
        </motion.h2>

        <motion.p variants={itemVariants} className="hero-description">
          Dynamic innovation-driven professional with extensive experience in backend development,
          cloud architecture, and machine learning. CEO of Stappl, delivering enterprise-grade
          AI-powered solutions and scalable systems.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-tags">
          <span className="tag">Backend Development</span>
          <span className="tag">AI/ML</span>
          <span className="tag">Cloud Architecture</span>
          <span className="tag">Full-Stack</span>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <a href="#contact" className="btn btn-primary">
            <FiMail style={{ fontSize: '1.2rem' }} /> Get in Touch
          </a>
          <a href="/assets/Crucis_CV.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-socials">
          <motion.a
            href="https://github.com/j0ycod3z"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
            title="GitHub"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiGithub size={26} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/joshua-crucis-770bb8256"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
            title="LinkedIn"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiLinkedin size={26} />
          </motion.a>
          <motion.a
            href="https://www.credly.com/users/joshua-crucis/badges"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Credly"
            title="Credly Badges"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiAward size={26} />
          </motion.a>
          <motion.a
            href="mailto:joshuajoy27@gmail.com"
            className="social-link"
            aria-label="Email"
            title="Email Me"
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiMail size={26} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="hero-image-wrapper">
          <img src="/assets/profile.png" alt="Joshua Joy Crucis" />
        </div>
      </motion.div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;

