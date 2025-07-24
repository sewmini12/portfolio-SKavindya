import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = {
    webDevelopment: {
      title: "Web Development",
      icon: "🌐",
      skills: [
        "HTML5", "CSS3", "JavaScript", "React.js", "Node.js", 
        "Express.js", "MongoDB", "MySQL", "REST APIs", "GraphQL"
      ]
    },
    uiDesign: {
      title: "UI/UX Design",
      icon: "🎨",
      skills: [
        "Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator",
        "Wireframing", "Prototyping", "User Research", "Design Systems", "Responsive Design"
      ],
      hasPrototypes: true,
      prototypes: [
        { 
          title: "Hello Santa - E-commerce App", 
          image: "/images/hellosanta.png", // Changed from .jpg to .png
          description: "Christmas season e-commerce mobile app for hunting santa",
          figmaLink: "https://www.figma.com/proto/qOFc596iPsTecSUOyMvQG3/first-mobile-ui?page-id=0%3A1&node-id=1-2&viewport=-41%2C-341%2C0.69&t=m32hlxAUAwMZnMGZ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2"
        },
        { 
          title: "CropGuard - Farmer Assistant App", 
          image: "/images/cropguard.png", // Changed from .jpg to .png
          description: "Mobile application designed to help farmers with crop management and protection.made by our team zyntacs for idealize 2025",
          figmaLink: "https://www.figma.com/proto/BfJC6yEluw3kjOjHkXtOO2/cropguard?page-id=0%3A1&node-id=572-256&viewport=781%2C-2094%2C0.58&t=VbKjuarZK441m5TQ-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2&show-proto-sidebar=1"
        }
      ]
    },
    teamCollaboration: {
      title: "Team Collaboration",
      icon: "👥",
      skills: [
        "Git & GitHub", "Agile/Scrum", "Jira", "Slack", "Microsoft Teams",
        "Code Reviews", "Project Management", "Communication", "Leadership", "Mentoring"
      ]
    },
    others: {
      title: "Other Skills",
      icon: "⚡",
      skills: [
        "Python", "Java", "C++", "Docker", "AWS", 
        "Linux", "Testing", "DevOps", "Problem Solving", "Time Management"
      ]
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <p className="skills-intro">
          Here are the technologies and skills I've developed throughout my journey as a developer
        </p>
        
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([key, category]) => (
            <div key={key} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Prototype showcase with images */}
              {category.hasPrototypes && (
                <div className="prototypes-section">
                  <h4>My Figma Prototypes</h4>
                  <div className="prototypes-grid">
                    {category.prototypes.map((prototype, index) => (
                      <div key={index} className="prototype-item">
                        <div className="prototype-image-container">
                          <img 
                            src={prototype.image} 
                            alt={prototype.title}
                            className="prototype-image"
                          />
                          <div className="prototype-overlay">
                            <a 
                              href={prototype.figmaLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="view-prototype-btn"
                            >
                              View Live Prototype
                            </a>
                          </div>
                        </div>
                        <h5>{prototype.title}</h5>
                        <p>{prototype.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <h3>Always Learning</h3>
          <p>
            Technology evolves rapidly, and I'm committed to continuous learning and staying 
            up-to-date with the latest trends and best practices in web development and design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
