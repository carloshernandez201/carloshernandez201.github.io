// All site content lives here. Edit this file to update the site.

export const profile = {
  name: "Carlos Hernandez",
  role: "Software Engineer · ML & Systems",
  tagline: "CS @ University of Florida. I build data pipelines, GPU tooling, and ML systems.",
  about:
    "CS student at UF, into the layer where machine learning meets infrastructure. Previously interned at Google and JPMorgan Chase.",
  links: {
    github: "https://github.com/carloshernandez201",
  },
};

export type Job = {
  title: string;
  company: string;
  dates: string;
  summary: string;
  tags: string[];
};

export const experience: Job[] = [
  {
    title: "Software Engineering Intern",
    company: "Google",
    dates: "2026",
    summary: "Built production SQL + Python pipelines tracking GPU fleet data for ML program managers.",
    tags: ["Python", "SQL", "BigQuery"],
  },
  {
    title: "Software Engineering Intern",
    company: "JPMorgan Chase",
    dates: "2025",
    summary: "Shipped FastAPI and React features that cut dataset retrieval time by 60%.",
    tags: ["FastAPI", "React"],
  },
  {
    title: "Undergraduate Researcher",
    company: "University of Florida",
    dates: "2025",
    summary: "Built a Gemini-powered multi-agent chatbot platform for HCI research.",
    tags: ["Gemini", "LLMs"],
  },
];

export type ProjectTag = "ML" | "Systems" | "Full-stack" | "Finance" | "Contribution";

export type Project = {
  name: string;
  repo: string;
  summary: string;
  stack: string[];
  tags: ProjectTag[];
  featured?: boolean;
  link?: { label: string; href: string };
};

const gh = (repo: string) => `https://github.com/carloshernandez201/${repo}`;

export const projects: Project[] = [
  {
    name: "GPU Training Profiler",
    repo: gh("MLTraining_GPU-MetadataTracker"),
    summary: "Real-time profiling for multi-GPU PyTorch training on Slurm: NVML telemetry, CUDA kernel stats, and step-phase breakdowns.",
    stack: ["C++", "CUDA", "PyTorch", "Slurm"],
    tags: ["ML", "Systems"],
    featured: true,
  },
  {
    name: "TheChaosWall",
    repo: gh("chaoswall"),
    summary: "Predicting a chaotic double pendulum: LSTM vs. an energy-conserving Hamiltonian Neural Network, trained on 3M+ simulated points.",
    stack: ["Python", "PyTorch", "HNN"],
    tags: ["ML"],
    featured: true,
    link: { label: "GatorAI", href: "https://www.ufgatorai.info" },
  },
  {
    name: "Gemini RAG Agent",
    repo: gh("GeminiRAG-Embedding-OrchestrationE2E"),
    summary: "PDF question-answering with Gemini, a Qdrant vector store, and Inngest-orchestrated ingest workflows.",
    stack: ["FastAPI", "Qdrant", "Docker", "Kubernetes"],
    tags: ["ML", "Systems"],
    featured: true,
  },
  {
    name: "MarketIQ",
    repo: gh("MarketIQ-AI-Driven-Market-Simulation-and-News"),
    summary: "Investment simulator with live prices, AI-summarized news, and LSTM forecasting.",
    stack: ["React", "FastAPI", "LangChain"],
    tags: ["Finance", "ML", "Full-stack"],
    featured: true,
  },
  {
    name: "Adversarial Federated Learning",
    repo: gh("AdversarialFedLearning"),
    summary: "FedAvg under attack from malicious clients.",
    stack: ["PyTorch", "Flower"],
    tags: ["ML", "Systems"],
  },
  {
    name: "Mutual Fund Predictor",
    repo: gh("MutualFundInvestmentPredictor"),
    summary: "Full-stack mutual fund prediction app.",
    stack: ["Next.js", "Flask"],
    tags: ["Finance", "Full-stack"],
  },
  {
    name: "Payment Microservices",
    repo: gh("PaymentProcessorThruMicroservices"),
    summary: "Java + C++ services over gRPC with payment deduplication.",
    stack: ["Java", "C++", "gRPC"],
    tags: ["Systems", "Finance"],
  },
  {
    name: "Fantasy Football Luck Tracker",
    repo: gh("FantasyFootballLuckTracker"),
    summary: "Ranks teams by schedule-adjusted expected record.",
    stack: ["Flask", "MongoDB"],
    tags: ["Full-stack"],
  },
  {
    name: "Algo Pathfinder",
    repo: gh("Algo-Pathfinder-Simulations"),
    summary: "A* and Dijkstra grid visualizer.",
    stack: ["Python"],
    tags: ["Systems"],
  },
  {
    name: "ROS Gazebo Robot",
    repo: gh("ROS-Gazebo-Moving-Robot"),
    summary: "Mobile robot simulation in ROS 2 and Gazebo.",
    stack: ["ROS 2", "Gazebo"],
    tags: ["Systems"],
  },
  {
    name: "ColorStack Oyster",
    repo: gh("OYSTER-Contribution-Issue-243"),
    summary: "Open-source contribution to ColorStack's monorepo.",
    stack: ["TypeScript"],
    tags: ["Contribution", "Full-stack"],
  },
  {
    name: "Bloomberg Producer–Consumer Lab",
    repo: gh("Bloomberg-Producer-Consumer-Tech-Lab"),
    summary: "Concurrency lab from Bloomberg's BBIT series.",
    stack: ["Python"],
    tags: ["Contribution", "Systems"],
  },
];

export const skills = ["Python", "C++", "Java", "Go", "SQL", "PyTorch", "CUDA", "Kubernetes", "Docker", "FastAPI", "React"];
