export const navLinks = [
  { id: "about", title: "About" },
  { id: "expertise", title: "Expertise" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
  { id: "leadership", title: "Leadership" },
  { id: "education", title: "Education" },
  { id: "certifications", title: "Certifications" },
  { id: "contact", title: "Contact" },
];

// --- About / positioning cards ---
export const positioning = [
  {
    title: "Software Engineering",
    desc: "Full-stack application development using Java, Spring Boot, Angular, REST APIs and relational databases.",
    icon: "code",
  },
  {
    title: "Artificial Intelligence",
    desc: "Development and integration of AI-based solutions using Python, machine learning, deep learning and intelligent document processing.",
    icon: "cpu",
  },
  {
    title: "Core Banking Systems",
    desc: "Development, integration and maintenance of complex banking systems using Temenos Transact T24, TAFJ and jBASE.",
    icon: "landmark",
  },
  {
    title: "Quality Engineering",
    desc: "Unit, API, integration, functional and regression testing, with incident analysis and application troubleshooting.",
    icon: "shield",
  },
  {
    title: "Technical Leadership",
    desc: "Task coordination, progress monitoring, technical support, Agile collaboration and communication with management and business teams.",
    icon: "users",
  },
];

// --- Technical expertise, grouped ---
export const expertise = [
  {
    group: "Full-Stack Development",
    items: ["Java", "Spring Boot", "Spring Data JPA", "Hibernate", "Spring Security", "JWT", "Angular", "Angular Material", "TypeScript", "HTML", "CSS", "JavaScript", "REST APIs", "Maven"],
  },
  {
    group: "Artificial Intelligence & Data",
    items: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Deep Learning", "Data Analysis", "AI Integration"],
  },
  {
    group: "Databases",
    items: ["MySQL", "PostgreSQL", "SQL", "MongoDB"],
  },
  {
    group: "Testing & Quality",
    items: ["JUnit", "Postman", "Unit Testing", "API Testing", "Integration Testing", "Functional Testing", "Regression Testing", "User Acceptance Testing", "Defect Analysis"],
  },
  {
    group: "Core Banking",
    items: ["Temenos Transact T24", "TAFJ", "jBASE / InfoBasic", "OFS", "COB Processing", "REST Web Services", "SOAP Web Services", "Batch Processing", "File Exchange", "Data Mapping", "JasperReports"],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "GitLab", "Docker", "Linux", "Shell", "MobaXterm", "Jira"],
  },
  {
    group: "Management & Methodologies",
    items: ["Agile", "Scrum", "Task Planning", "Team Coordination", "Progress Monitoring", "Requirement Analysis", "Functional Specifications", "Technical Specifications", "Technical Documentation"],
  },
];

// --- Experience timeline ---
export const experiences = [
  {
    title: "Technical Consultant / Software & AI Engineer",
    company_name: "BCP Technologies",
    date: "September 2024 - Present",
    intro: "Contributing to the design, development, integration, testing and maintenance of enterprise applications and complex information systems.",
    points: [
      "Analysed client requirements and contributed to detailed functional and technical specifications.",
      "Developed and configured T24 processes for ordering, receiving, delivering, blocking and destroying trade finance instruments.",
      "Implemented business controls for accounts, customers, branches, statuses, user permissions and instrument numbers.",
      "Developed batch processes and services for managing operation lifecycles and status changes.",
      "Integrated T24 with external systems through web services, interfaces and file exchanges.",
      "Prepared and executed functional, integration and regression tests; analysed defects and supported UAT.",
    ],
  },
  {
    title: "Task Force Assignment — Corrective & Enhancement Maintenance",
    company_name: "BCP Technologies",
    date: "September 2024 - Present",
    intro: "Worked within a technical task force responsible for resolving incidents, implementing improvements and supporting client requests.",
    points: [
      "Managed corrective, enhancement and incident tickets across Limits, Funds Transfer, Account and Customer modules.",
      "Developed and adapted routines, services, controls, enquiries and application interfaces.",
      "Participated in Close of Business execution and monitoring; analysed application logs and restarted failed processes.",
      "Performed functional, integration and regression testing.",
      "Documented corrections and monitored tickets until client approval.",
    ],
  },
  {
    title: "Document Generation & Reporting",
    company_name: "JasperReports — BCP Technologies",
    date: "September 2024 - Present",
    intro: "Contributed to the design, integration and testing of business documents using JasperReports.",
    points: [
      "Configured data sources, parameters, fields and display rules.",
      "Integrated generated documents with system data and application processes.",
      "Tested reports and corrected data and layout issues in collaboration with functional teams.",
    ],
  },
];

// --- Featured projects ---
export const projects = [
  {
    name: "Project & Capacity Management Platform",
    description: "A full-stack platform that helps managers and HR teams monitor projects, resources, costs, workloads and deadlines.",
    features: ["Project and task management", "Resource allocation", "Workload calculation", "Project duration estimation", "Cost tracking", "Role-based access control", "Management dashboards", "Progress monitoring"],
    tags: ["Java", "Spring Boot", "Angular", "MySQL", "REST API", "JWT", "Git"],
    source_code_link: "https://github.com/Mrzak2705",
  },
  {
    name: "AI Knowledge Assistant",
    description: "An AI-powered assistant for centralising technical documentation and helping users retrieve information from project documents using natural language.",
    features: ["Document processing", "Natural-language questions", "Contextual information retrieval", "Technical knowledge search", "Chat interface", "Source-based responses"],
    tags: ["Python", "FastAPI", "Machine Learning", "LLM", "RAG", "Angular", "Spring Boot", "REST API", "Docker"],
    source_code_link: "https://github.com/Mrzak2705",
  },
  {
    name: "Secure Full-Stack Management Application",
    description: "A secure full-stack application for managing users, projects, tasks and activities end-to-end.",
    features: ["JWT authentication", "Role-based access control", "Project and task management", "Validation and error handling", "Pagination and filtering", "API documentation", "Unit and integration tests"],
    tags: ["Java", "Spring Boot", "Spring Security", "Angular", "PostgreSQL", "JUnit", "Postman", "Docker"],
    source_code_link: "https://github.com/Mrzak2705",
  },
  {
    name: "AI Prediction Platform",
    description: "A full-stack application that exposes a machine learning model through a Python API and integrates it with a Java backend and Angular frontend.",
    features: ["Data preprocessing", "Model training and evaluation", "Prediction API", "Java and Python service integration", "Result visualisation", "Authentication and access control", "Docker deployment"],
    tags: ["Python", "Pandas", "Scikit-learn", "FastAPI", "Java", "Spring Boot", "Angular", "PostgreSQL", "Docker"],
    source_code_link: "https://github.com/Mrzak2705",
  },
];

// --- Technical leadership ---
export const leadership = {
  title: "Technical Leadership and Team Coordination",
  intro: "Alongside my technical responsibilities, I coordinate a small team and contribute to the organisation and monitoring of development activities.",
  responsibilities: [
    "Assigning tasks according to priorities and team availability.",
    "Monitoring progress and identifying delivery risks.",
    "Supporting team members in resolving technical issues.",
    "Reviewing completed work and validating test results.",
    "Coordinating communication between developers, functional teams and project management.",
    "Participating in sprint planning, daily meetings and progress reviews.",
    "Preparing project status updates for managers and directors.",
    "Contributing to workload estimation and delivery planning.",
  ],
  approach: [
    "Clear objectives",
    "Realistic workload estimation",
    "Regular progress monitoring",
    "Early identification of risks",
    "Technical support and knowledge sharing",
    "Continuous feedback",
    "Collaboration and accountability",
  ],
};

// --- Education ---
export const education = [
  {
    degree: "Master's Degree in Artificial Intelligence and Computer Engineering",
    school: "Faculty of Science and Technology, Cadi Ayyad University, Marrakesh",
    date: "2022 - 2024",
  },
  {
    degree: "Bachelor's Degree in Distributed Information Systems",
    school: "Faculty of Science and Technology, Cadi Ayyad University, Marrakesh",
    date: "2019 - 2022",
  },
  {
    degree: "High School Diploma in Physical Sciences",
    school: "Badr High School, Agadir",
    date: "2019",
  },
];

// --- Certifications ---
export const certifications = [
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM — Coursera",
  },
  {
    title: "Object-Oriented Programming in Java Specialisation",
    issuer: "IBM — Coursera",
  },
];

export const currentFocus = [
  "Advanced Spring Boot development",
  "Full-stack architecture with Angular",
  "Microservices and event-driven systems",
  "Docker and CI/CD",
  "Automated testing",
  "Generative AI and RAG",
  "Java and Python service integration",
  "Agile delivery and technical leadership",
];

export const interests = ["Swimming", "Surfing", "Guitar", "Travelling"];

export const contactInfo = {
  email: "makkas.zak@gmail.com",
  location: "Casablanca, Morocco",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/Mrzak2705",
};