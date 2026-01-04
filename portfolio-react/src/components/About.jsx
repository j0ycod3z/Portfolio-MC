import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCode, FiUsers } from 'react-icons/fi';
import './About.css';

const About = () => {
  const stats = [
    {
      icon: <FiBriefcase />,
      title: "Experience",
      value: "3+ Years",
      description: "Software Development & AI"
    },
    {
      icon: <FiAward />,
      title: "Certifications",
      value: "7+",
      description: "Professional Certifications"
    },
    {
      icon: <FiCode />,
      title: "Projects",
      value: "15+",
      description: "Completed Projects"
    },
    {
      icon: <FiUsers />,
      title: "Leadership",
      value: "CEO",
      description: "Stappl Founder"
    }
  ];

  return (
    <section className="about" id="about">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about my background and expertise</p>
      </motion.div>

      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="about-heading">Dynamic Innovation-Driven Professional</h3>
          <p className="about-description">
            I'm a <strong>Software Engineer and AI Specialist</strong> with extensive experience in backend 
            development, cloud architecture, and machine learning. As the <strong>CEO of Stappl</strong>, 
            I've led the development and deployment of enterprise-grade software systems across multiple 
            regions in the Philippines.
          </p>
          <p className="about-description">
            My expertise spans <strong>full-cycle product development</strong>, from system architecture 
            and cloud infrastructure (AWS/GCP) to AI-powered solutions using Vertex-AI and NLP. I've successfully 
            architected and deployed applications like <strong>Agricrops MD, WAIZ chatbot, PetPulse, and VetScribe</strong>, 
            managing complete DevOps pipelines and database engineering.
          </p>
          <p className="about-description">
            With a proven track record in startup competitions (including <strong>3rd Place in Startup Challenge 7</strong>, 
            <strong>Silver Awardee in StartUp QC</strong>, and <strong>1st Runner Up at UNIIC Demo Day</strong>), 
            I bring strong analytical, leadership, and problem-solving skills to every project.
          </p>

          <div className="about-education">
            <div className="education-item">
              <FiAward className="education-icon" />
              <div>
                <h4>Bachelor of Science in Computer Science</h4>
                <p>Adamson University • 2020 - 2024</p>
                <p className="education-note">Graduated: 2024</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-stats"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h4 className="stat-value">{stat.value}</h4>
                <p className="stat-title">{stat.title}</p>
                <p className="stat-description">{stat.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

