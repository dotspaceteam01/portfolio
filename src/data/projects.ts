export interface Project {
  id: number;
  title: string;
  problem: string;
  summary: string;
  highlights: string[];
  techStack: string;
  link?: string;
  credentials?: { username: string; password: string };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Conversational Learning Platform",
    problem: "Students using generic AI chat tools lacked structured, visual, and context-aware learning support tailored to academic needs. There was a need for a dedicated conversational platform that could provide interactive explanations, visual aids, and flexible LLM-powered assistance in one unified system.",
    summary: "An AI-powered conversational learning platform designed specifically for students, enabling interactive learning through chat-based AI agents with rich visual, explanatory tools and flexible LLM selection.",
    highlights: [
      "Built an LLM-driven conversational learning system tailored for student use cases.",
      "Allowed users to select the LLM of their choice for learning interactions.",
      "Enabled AI-assisted tools of: Graphs and line charts, Flowcharts and mind maps, Quizzes, Code explanations with step-by-step breakdowns",
      "Implemented PDF explanation functionality for uploaded study material.",
      "Added YouTube video explanation by simply providing video links.",
      "Designed memory and context handling."
    ],
    techStack: "LLMs, Langchain, Python, FastAPI, data pipelines, React + MUI",
    link: "https://chat.guruvr.ai/",
    credentials: { username: "test001@gmail.com", password: "test@123" }
  },
  {
    id: 2,
    title: "Creator Platform",
    problem: "Creating VR games typically requires extensive technical knowledge, documentation effort, and manual project coordination, making it difficult for creators to bring ideas to life efficiently. There was a need for an AI-driven platform that could automate game design, task management, and workflow processes to significantly reduce development complexity and time-to-launch.",
    summary: "An AI-assisted VR platform enabling users to create and upload VR games with minimal manual effort through intelligent guidance and automation.",
    highlights: [
      "Built AI tools to generate game design documents including CD / SCD / NSD using simple prompt-based inputs.",
      "Enabled dynamic parameter tuning allowing users to modify values and regenerate outputs.",
      "Developed an AI-based task creation system where admins input sprint backlogs and tasks are automatically generated on the sprint board.",
      "Implemented an AI-powered retrospective agent that: Fetched user data, sprint details, personal goals, and submissions from database. Generated structured retrospective insights.",
      "Built backend-driven team management system for project and role coordination.",
      "Automated Git repository creation based on project requirements."
    ],
    techStack: "LLMs, Langchain, Python, FastAPI, data pipelines, React + MUI, workflow automation, prompt-driven workflows",
    link: "https://creator.guruvr.ai",
    credentials: { username: "test001@gmail.com", password: "test@123" }
  },
  {
    id: 3,
    title: "LLM-Based Sales Automation Agent System",
    problem: "Traditional sales processes rely heavily on manual outreach, lead qualification, and follow-ups, leading to inefficiencies, delayed responses, and lost opportunities. There was a need for an intelligent automated system capable of managing the end-to-end sales funnel while maintaining personalized context-aware customer interactions.",
    summary: "An AI-driven multi-agent system designed to automate the entire sales workflow from lead qualification to closing and human handoff.",
    highlights: [
      "Built multi-agent architecture handling different stages of the sales funnel.",
      "Lead Qualification Agent",
      "Initial Outreach Agent",
      "Objection Handling Agent",
      "Agents configured with product knowledge.",
      "Multiple AI Agents: Email automation agent, Lead scoring agent"
    ],
    techStack: "LLMs, prompt engineering, Python, FastAPI, Langchain"
  },
  {
    id: 4,
    title: "AI Bot in XR Games",
    problem: "Users in XR environments often struggle with onboarding and discovering relevant experiences due to static tutorials and lack of personalized guidance.",
    summary: "AI-powered behavior analysis system improving onboarding and engagement in XR environments.",
    highlights: [
      "Tracked user behavior patterns inside VR environments.",
      "Interpreted user actions using AI-driven logic.",
      "Delivered context-aware guidance instead of static tutorials.",
      "Recommended: Next activities, Relevant experiences, Platform features to explore"
    ],
    techStack: "C#, Unity, LLMs, AI voice models, chat management"
  },
  {
    id: 5,
    title: "AI Tools for Unity Based Game Development",
    problem: "Unity game development involves manual asset selection and scene creation which slows down production.",
    summary: "AI tools designed to assist and accelerate Unity-based game development.",
    highlights: [
      "Asset Assistance AI Agent for selecting and placing assets.",
      "AI-assisted tools for: 3D asset generation, Environment creation, Scene building"
    ],
    techStack: "C#, Unity, 3D AI models, API integration"
  },
  {
    id: 6,
    title: "XR Glasses – Computer Vision & Augmented Reality System",
    problem: "XR glasses require integrated hardware and software pipelines capable of stereoscopic vision, 3D mapping, and AR rendering.",
    summary: "End-to-end XR glasses system combining custom electronics, computer vision, and AR rendering.",
    highlights: [
      "Designed electronics architecture for XR glasses.",
      "Integrated dual cameras with onboard processor.",
      "Implemented camera hardware pipeline including: Camera interfacing and synchronization, Image capture and processing, Sensor data pipelines",
      "Developed processor-level code for real-time vision workloads.",
      "Implemented real-time 3D environment mapping.",
      "Developed spatial AR overlays aligned with real-world geometry."
    ],
    techStack: "Dual cameras, embedded processors, stereoscopic vision, OpenCV, camera SDKs, processor-level programming"
  },
  {
    id: 7,
    title: "SaaS Platform for Therapists & Users",
    problem: "Therapists and users lack a centralized secure system for managing appointments, payments, and communication.",
    summary: "Full-stack SaaS platform connecting therapists and users.",
    highlights: [
      "Role-based access control for therapists, users, and admins.",
      "Feed system and appointment management.",
      "Razorpay payment integration.",
      "Real-time chat system."
    ],
    techStack: "Python, FastAPI, React"
  },
  {
    id: 8,
    title: "Fine-Tuned Mistral 7B Physics Chat Model",
    problem: "General LLMs lack depth in engineering-level physics topics.",
    summary: "Fine-tuned Mistral 7B model trained on domain-specific physics datasets.",
    highlights: [
      "Created custom dataset in JSON format.",
      "Fine-tuned Mistral 7B model.",
      "Built chat interface for testing.",
      "Compared outputs with base model."
    ],
    techStack: "Mistral 7B, Python, ML frameworks, LoRA training format"
  }
];
