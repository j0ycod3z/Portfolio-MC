import { motion } from 'framer-motion';
import { FiAward, FiCheck } from 'react-icons/fi';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      name: "Cyber Ops Associate",
      issuer: "CISCO",
      date: "April 28, 2024",
      category: "Cybersecurity",
      icon: "🛡️"
    },
    {
      name: "Scrum Foundation Professional Certification (SFPC)",
      issuer: "Scrum Institute",
      date: "March 13, 2024",
      category: "Project Management",
      icon: "📋"
    },
    {
      name: "Foundations of Operationalizing MITRE ATT&CK v13",
      issuer: "MITRE",
      date: "August 27, 2023",
      category: "Cybersecurity",
      icon: "🔐"
    },
    {
      name: "Design Thinking Class Certificate",
      issuer: "FLExPHD",
      date: "February 2023",
      category: "Design & Innovation",
      icon: "💡"
    },
    {
      name: "Google Certification of Python Engineering",
      issuer: "Google",
      date: "2023",
      category: "Programming",
      icon: "🐍"
    },
    {
      name: "Google Certification of Git",
      issuer: "Google",
      date: "2023",
      category: "Version Control",
      icon: "📦"
    },
    {
      name: "Adamson University Incubatee Certificate",
      issuer: "Adamson University",
      date: "2023",
      category: "Entrepreneurship",
      icon: "🚀"
    }
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section className="certifications" id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Certifications & Training</h2>
        <p className="section-subtitle">Professional certifications and continuous learning</p>
      </motion.div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="cert-icon-wrapper">
              <span className="cert-icon">{cert.icon}</span>
            </div>
            <div className="cert-content">
              <span className="cert-category">{cert.category}</span>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">
                <FiAward className="inline-icon" /> {cert.issuer}
              </p>
              <p className="cert-date">{cert.date}</p>
            </div>
            <div className="cert-verified">
              <FiCheck /> Verified
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="cert-stats"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="stat-item">
          <span className="stat-number">{certifications.length}+</span>
          <span className="stat-label">Certifications</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">{categories.length}</span>
          <span className="stat-label">Specializations</span>
        </div>
        <div className="stat-divider"></div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Completion Rate</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;

