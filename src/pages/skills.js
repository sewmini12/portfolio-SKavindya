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
