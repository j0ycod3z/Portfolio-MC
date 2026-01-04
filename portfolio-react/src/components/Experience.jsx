import { motion } from 'framer-motion';
import { 
  SiPython, SiJavascript, SiPostgresql, SiVuedotjs, 
  SiTensorflow, SiDocker, SiAmazonwebservices, SiGooglecloud, SiReact 
} from 'react-icons/si';
import { FaBriefcase, FaMapMarkerAlt, FaHashtag } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "CEO & Founder",
      company: "Stappl",
      location: "Philippines",
      period: "2023 - Present",
      description: "Founded technology-driven startup delivering enterprise-grade software systems. Designed and deployed Agricrops MD across multiple regions. Architected cloud systems (AWS/GCP), managed DevOps, CI/CD, and full production deployments.",
      highlights: [
        "Led system architecture and project execution using Odoo, Miro, Slack",
        "Developed WAIZ chatbot for Exoasia with AI integration",
        "Managed backend systems for PetPulse, VetScribe, and PAWNEC",
        "Led complete database normalization and data engineering"
      ]
    },
    {
      title: "AI Engineer / Backend-Frontend Developer",
      company: "Philtech Albertsons",
      location: "Philippines",
      period: "2023",
      description: "Backend development for BOB, an AI-driven business analytics chatbot. Built intuitive frontend interfaces and backend logic for seamless user experience.",
      highlights: [
        "Engineered real-world datasets for NLP processing",
        "Developed multiple Vertex-AI powered chatbots",
        "Implemented nemoguardrails for secure AI pipelines",
        "Utilized PostgreSQL for structured data ingestion and AI-ready transformation"
      ]
    },
    {
      title: "Project Manager Intern",
      company: "AWB",
      location: "Philippines",
      period: "2022 - 2023",
      description: "Oversaw multiple projects, managed client communication, and prepared detailed documentation.",
      highlights: [
        "Managed cross-functional project workflows",
        "Automated reporting workflows using Google Sheets scripts",
        "Completed Scrum foundation certification",
        "Prepared comprehensive project documentation"
      ]
    },
    {
      title: "Software Developer Intern / Game Dev",
      company: "SpeedGrow",
      location: "Philippines",
      period: "2022",
      description: "Led end-to-end game development and built complete web application for company-wide data management.",
      highlights: [
        "Developed full-stack web application",
        "Led complete game development lifecycle",
        "Implemented data ingestion and extraction systems"
      ]
    }
  ];

  const skills = {
    "Languages": [
      { name: "Python", icon: <SiPython />, level: "Expert" },
      { name: "JavaScript", icon: <SiJavascript />, level: "Advanced" },
      { name: "C#", icon: <FaHashtag />, level: "Advanced" },
      { name: "SQL", icon: <SiPostgresql />, level: "Advanced" }
    ],
    "Frameworks & Tools": [
      { name: "React", icon: <SiReact />, level: "Advanced" },
      { name: "Vue", icon: <SiVuedotjs />, level: "Intermediate" },
      { name: "TensorFlow", icon: <SiTensorflow />, level: "Intermediate" },
      { name: "Docker", icon: <SiDocker />, level: "Advanced" }
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: <SiAmazonwebservices />, level: "Advanced" },
      { name: "GCP", icon: <SiGooglecloud />, level: "Advanced" },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: "Advanced" }
    ]
  };

  return (
    <section className="experience" id="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Work Experience</h2>
        <p className="section-subtitle">My professional journey and technical expertise</p>
      </motion.div>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="experience-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <div className="experience-company">
                    <FaBriefcase /> {exp.company}
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-location">
                    <FaMapMarkerAlt /> {exp.location}
                  </span>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="skills-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="skills-heading">Technical Skills</h3>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              className="skills-category"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="category-title">{category}</h4>
              <div className="skills-list">
                {categorySkills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="skill-item"
                    whileHover={{ scale: 1.05, y: -3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;

