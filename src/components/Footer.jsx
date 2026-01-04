import { motion } from 'framer-motion';
import { FiHeart, FiCode } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-main"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="footer-brand">
            <h3 className="footer-logo">Joshua Joy Crucis</h3>
            <p className="footer-tagline">
              Building innovative solutions with AI, cloud, and full-stack technologies
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <nav className="footer-nav">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="footer-link"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="footer-divider"></div>
          <div className="footer-copyright">
            <p>
              © {currentYear} Joshua Joy Crucis. All rights reserved.
            </p>
            <p className="footer-built">
              Built with <FiHeart className="heart-icon" /> and <FiCode className="code-icon" /> using React
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

