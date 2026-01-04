import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiAward } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "joshuajoy27@gmail.com",
      link: "mailto:joshuajoy27@gmail.com",
      color: "#ec4899"
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+639919458636",
      link: "tel:+639919458636",
      color: "#8b5cf6"
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "3135 Floravista, Peacock St. North Commonwealth, Philippines",
      link: null,
      color: "#6366f1"
    }
  ];

  const socialLinks = [
    {
      icon: <FiGithub size={32} />,
      label: "GitHub",
      username: "@j0ycod3z",
      link: "https://github.com/j0ycod3z",
      color: "#333"
    },
    {
      icon: <FiLinkedin size={32} />,
      label: "LinkedIn",
      username: "Joshua Crucis",
      link: "https://www.linkedin.com/in/joshua-crucis-770bb8256",
      color: "#0077b5"
    },
    {
      icon: <FiAward size={32} />,
      label: "Credly",
      username: "View Badges",
      link: "https://www.credly.com/users/joshua-crucis/badges",
      color: "#ff6b00"
    }
  ];

  return (
    <section className="contact" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Let's discuss your next project or opportunity</p>
      </motion.div>

      <div className="contact-container">
        <motion.div
          className="contact-info-section"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="contact-intro">
            <h3 className="contact-heading">Let's Connect!</h3>
            <p className="contact-text">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Whether you need a full-stack developer, AI specialist, or tech consultant, feel free to reach out!
            </p>
          </div>

          <div className="contact-details">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }}
              >
                <div className="contact-icon" style={{ color: info.color }}>
                  {info.icon}
                </div>
                <div className="contact-content">
                  <span className="contact-label">{info.label}</span>
                  {info.link ? (
                    <a href={info.link} className="contact-value link">
                      {info.value}
                    </a>
                  ) : (
                    <span className="contact-value">{info.value}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-social-section"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="social-card">
            <h3 className="social-heading">Find Me Online</h3>
            <p className="social-text">
              Check out my work, certifications, and professional network
            </p>

            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="social-icon-large" style={{ color: social.color }}>
                    {social.icon}
                  </div>
                  <div className="social-content-full">
                    <span className="social-label-large">{social.label}</span>
                    <span className="social-username-large">{social.username}</span>
                  </div>
                </motion.a>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

