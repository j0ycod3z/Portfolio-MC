import { motion } from 'framer-motion';
import { FiStar, FiAward, FiTarget } from 'react-icons/fi';
import { FaTrophy } from 'react-icons/fa';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "3rd Place - Startup Challenge 7",
      organization: "NCR Division",
      year: "2024",
      icon: <FaTrophy />,
      color: "#f59e0b",
      description: "Secured 3rd place in the prestigious Startup Challenge 7 competition in the National Capital Region division."
    },
    {
      title: "Silver Awardee - StartUp QC",
      organization: "Quezon City Government",
      year: "2024",
      icon: <FiAward />,
      color: "#94a3b8",
      description: "Recognized with Silver Award at StartUp QC for innovative technology solutions and business model."
    },
    {
      title: "1st Runner Up - UNIIC Demo Day",
      organization: "Telkom University Indonesia",
      year: "2024",
      icon: <FiStar />,
      color: "#8b5cf6",
      description: "First Runner Up among 13 teams from ASEAN countries at the UNIIC Demo Day international competition."
    },
    {
      title: "Philippine Start Up Week 2024",
      organization: "National Exhibitor",
      year: "2024",
      icon: <FiTarget />,
      color: "#ec4899",
      description: "Selected as exhibitor for Philippine Start Up Week 2024, showcasing innovative solutions to national audience."
    },
    {
      title: "Tech Planter Philippines 2024",
      organization: "UST Ferati Hall",
      year: "2024",
      icon: <FiAward />,
      color: "#10b981",
      description: "Participated in Tech Planter Philippines, a prestigious tech startup competition and showcase event."
    },
    {
      title: "FlexPHD - Stage 3 Qualifier",
      organization: "Low Quality Fidelity Hackathon",
      year: "2023",
      icon: <FiStar />,
      color: "#6366f1",
      description: "Successfully qualified for Stage 3 in the FlexPHD Low Quality Fidelity Hackathon and pitching competition."
    }
  ];

  const seminars = [
    "Hyper Interdisciplinary Conference in the Philippines 2023 - UST",
    "CS Projects Exhibit and Research Presentation - Adamson University",
    "SIKLAB: Embracing New Beginnings - CS Society",
    "The Hatch - 6 week training program for technological innovation",
    "Circular Campus Programme",
    "Talk-N-Tech 2022",
    "InSTEMsify - Adamson University"
  ];

  return (
    <section className="achievements" id="achievements">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Achievements & Recognition</h2>
        <p className="section-subtitle">Awards, competitions, and professional development</p>
      </motion.div>

      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -10, scale: 1.02 }}
          >
            <div className="achievement-icon" style={{ color: achievement.color }}>
              {achievement.icon}
            </div>
            <div className="achievement-content">
              <span className="achievement-year">{achievement.year}</span>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-org">{achievement.organization}</p>
              <p className="achievement-description">{achievement.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="seminars-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <h3 className="seminars-title">Professional Development & Seminars</h3>
        <div className="seminars-list">
          {seminars.map((seminar, index) => (
            <motion.div
              key={index}
              className="seminar-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ x: 10 }}
            >
              <div className="seminar-bullet"></div>
              <span className="seminar-text">{seminar}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="achievements-summary"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="summary-card">
          <FaTrophy className="summary-icon" />
          <div className="summary-content">
            <h4 className="summary-number">6+</h4>
            <p className="summary-label">Competition Awards</p>
          </div>
        </div>
        <div className="summary-card">
          <FiStar className="summary-icon" />
          <div className="summary-content">
            <h4 className="summary-number">10+</h4>
            <p className="summary-label">Seminars & Conferences</p>
          </div>
        </div>
        <div className="summary-card">
          <FiTarget className="summary-icon" />
          <div className="summary-content">
            <h4 className="summary-number">100%</h4>
            <p className="summary-label">Commitment to Excellence</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;

