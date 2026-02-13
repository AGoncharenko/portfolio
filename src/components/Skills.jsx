import { getYearsExperience } from "../helpers/experience";

const skills = [
  {
    category: "Languages",
    items: ["Ruby", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Frameworks",
    items: [
      `Ruby on Rails (${getYearsExperience()}+ years)`,
      "React",
      "React Native",
      "Node.js",
      "Django",
      "Flask",
    ],
  },
  {
    category: "Frontend",
    items: ["HTML", "CSS", "SASS", "JavaScript ES6", "Apollo"],
  },
  {
    category: "Testing",
    items: [
      "RSpec",
      "Capybara",
      "Cypress",
      "Jest",
      "React Testing Library",
      "Postman",
    ],
  },
  {
    category: "Databases",
    items: ["Postgres", "MySQL", "MariaDB"],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (S3, SNS, SQS, Lambda, MediaConvert)",
      "Docker",
      "Heroku",
      "CI/CD",
    ],
  },
  {
    category: "APIs",
    items: ["RESTful", "GraphQL", "3rd-party integrations (JavaScript & Ruby)"],
  },
  {
    category: "Toolchain",
    items: ["Redis", "Git", "Jira", "Datadog"],
  },
];

function Skills() {
  return (
    <section className="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h3>{skill.category}</h3>
            <div className="skill-items">
              {skill.items.map((item, i) => (
                <span key={i} className="skill-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
