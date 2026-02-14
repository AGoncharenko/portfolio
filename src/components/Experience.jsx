const experiences = [
  {
    company: "Secureframe, Inc.",
    location: "Remote",
    title: "Software Engineer",
    period: "04/2025 - 01/2026",
    highlights: [
      "Played a key role in shaping backend architecture for a Custom Data Platform, designing scalable data pipelines, schemas, and external APIs.",
      "Drove integration strategy by extending the Integration Builder to support complex APIs (e.g., Microsoft Azure Cloud, Google Workspace, Datadog) and future platform growth.",
      "Navigated ambiguous requirements by guiding technical direction, refactoring systems, and aligning solutions with business goals.",
      "Influenced cross-team execution through early technical scoping, architecture alignment, and clear communication.",
      "Improved platform reliability and developer velocity by addressing technical debt, promoting reusable patterns, and mentoring teammates."
    ],
  },
  {
    company: "Clearbox Decisions inc",
    location: "Remote",
    title: "Staff Software Engineer/Architect",
    period: "03/2023 - 04/2025",
    highlights: [
      "Led the architecture design and delivery of scalable web applications using Ruby on Rails, React, and Flask.",
      "Oversaw code reviews, compliance, and functional validation, ensuring adherence to best practices.",
      "Successfully integrated a custom LLM into a production Rails application to enhance automation and intelligence features.",
      "Championed modular, maintainable, and test-driven development practices.",
    ],
  },
  {
    company: "SmartBiz Loans",
    location: "Remote",
    title: "Senior Software Engineer",
    period: "08/2020 - 03/2023",
    highlights: [
      "Built resilient, distributed systems to handle user growth at scale.",
      "Developed and maintained Ruby on Rails application to support SMB loans operations, ensuring reliability, security, and scalability.",
      "Engineered React system capable of handling large-scale user interactions.",
      "Integrated Flask microservices within a distributed system architecture.",
      "Assisted in automating and executing deployment processes.",
    ],
  },
  {
    company: "Loansnap Inc",
    location: "San Francisco",
    title: "Full-Stack Engineer",
    period: "06/2019 - 03/2020",
    highlights: [
      "Built Django + React fintech applications, improving feature velocity and reliability.",
      "Integrated multiple third-party APIs, optimizing workflows and reducing operational overhead.",
    ],
  },
  {
    company: "Cloverpop Inc",
    location: "San Francisco",
    title: "Ruby on Rails Developer",
    period: "12/2013 - 06/2019",
    highlights: [
      "Delivered front-end enhancements and maintained a robust automated test suite (RSpec, Capybara).",
      "Built the admin side of the application using ActiveAdmin, enabling efficient internal operations management.",
      "Improved UI/UX and site performance through iterative optimization.",
    ],
  },
];

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="experience-header">
              <div>
                <h3>{exp.company}</h3>
                <p className="job-title">
                  {exp.location} — <strong>{exp.title}</strong>
                </p>
              </div>
              <p className="period">{exp.period}</p>
            </div>
            <ul>
              {exp.highlights.map((highlight, i) => (
                <li key={i}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
