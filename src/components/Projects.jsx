import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Agricrops MD",
      category: "Enterprise Software",
      description: "Enterprise-grade agricultural management system deployed across Batangas, Tarlac, Los Baños, BGC, and QC. Full-stack application with cloud infrastructure on AWS/GCP.",
      tags: ["AWS", "GCP", "Odoo", "Full-Stack", "Enterprise"],
      featured: true
    },
    {
      title: "WAIZ Chatbot",
      category: "AI/ML",
      description: "AI-powered chatbot for Exoasia with advanced NLP capabilities. Integrated backend systems with Vertex-AI for intelligent customer interactions.",
      tags: ["AI", "NLP", "Vertex-AI", "Python", "Backend"],
      featured: true
    },
    {
      title: "BOB - Business Analytics Chatbot",
      category: "AI/ML",
      description: "AI-driven business analytics chatbot for Philtech Albertsons. Engineered real-world datasets for NLP processing with secure AI pipelines using nemoguardrails.",
      tags: ["AI", "NLP", "PostgreSQL", "Analytics", "Vertex-AI"],
      featured: true
    },
    {
      title: "PetPulse & VetScribe",
      category: "Healthcare Tech",
      description: "Backend systems for pet healthcare management and veterinary documentation. Cloud-based architecture with complete database normalization.",
      tags: ["Backend", "Cloud", "Healthcare", "Database"],
      featured: true
    },
    {
      title: "PAWNEC Applications",
      category: "Enterprise Software",
      description: "Full production deployment with DevOps and CI/CD pipelines. Managed complete cloud infrastructure and system architecture.",
      tags: ["DevOps", "CI/CD", "Cloud", "Full-Stack"],
      featured: false
    },
    {
      title: "ARIMA Forecasting Models",
      category: "Data Science",
      description: "Developed statistical forecasting models for academic research. Time series analysis and predictive modeling.",
      tags: ["Python", "Data Science", "Machine Learning"],
      link: "https://github.com/j0ycod3z",
      featured: false
    },
    {
      title: "Head-Pose Estimation Program",
      category: "Computer Vision",
      description: "Computer vision application for real-time head pose detection and tracking using MediaPipe and TensorFlow.",
      tags: ["Python", "TensorFlow", "MediaPipe", "CV"],
      link: "https://github.com/j0ycod3z/Research-Head-Pose-Modeling",
      github: "https://github.com/j0ycod3z/Research-Head-Pose-Modeling",
      featured: false
    },
    {
      title: "Genetic Kit Platform API",
      category: "Backend Development",
      description: "Secure API endpoints for genetic kit platform with backend-database integration. Focus on data security and performance.",
      tags: ["API", "Backend", "Security", "Database"],
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="projects" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Enterprise solutions and AI-powered applications I've built</p>
      </motion.div>

      <div className="featured-projects">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card featured"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-header">
              <div className="project-icon">
                <FiCode size={30} />
              </div>
              <span className="project-category">{project.category}</span>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="project-tag">{tag}</span>
              ))}
            </div>
            {(project.github || project.link) && (
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiGithub /> Code
                  </a>
                )}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink /> View
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="other-projects-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="other-projects-title">Other Notable Projects</h3>
        <div className="other-projects">
          {otherProjects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card small"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="project-header-small">
                <FiCode size={24} />
                {(project.github || project.link) && (
                  <div className="project-links-small">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub size={20} />
                      </a>
                    )}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <FiExternalLink size={20} />
                      </a>
                    )}
                  </div>
                )}
              </div>
              <h4 className="project-title-small">{project.title}</h4>
              <p className="project-description-small">{project.description}</p>
              <div className="project-tags-small">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag-small">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

