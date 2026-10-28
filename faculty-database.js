// faculty-database.js

const facultyDatabase = [
  // ==========================================
  // 1. ARTIFICIAL INTELLIGENCE (5 Members)
  // ==========================================
  {
    id: "ai-01",
    name: "Dr. Sarah Chen",
    title: "Professor & Head of Department",
    department: "Artificial Intelligence",
    departmentId: "ai",
    age: 44,
    email: "sarah.chen@university.edu",
    phone: "+1 (555) 019-2831",
    office: "AI Wing, Room 401",
    tags: ["machine learning", "deep learning", "neural networks", "python", "pytorch"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ai-02",
    name: "Dr. Marcus Vance",
    title: "Associate Professor",
    department: "Artificial Intelligence",
    departmentId: "ai",
    age: 39,
    email: "marcus.vance@university.edu",
    phone: "+1 (555) 019-2832",
    office: "AI Wing, Room 403",
    tags: ["computer vision", "opencv", "image processing", "autonomous systems"],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ai-03",
    name: "Dr. Elena Rostova",
    title: "Assistant Professor",
    department: "Artificial Intelligence",
    departmentId: "ai",
    age: 34,
    email: "elena.rostova@university.edu",
    phone: "+1 (555) 019-2833",
    office: "AI Wing, Room 405",
    tags: ["natural language processing", "nlp", "llms", "transformers", "bert"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ai-04",
    name: "Dr. Rajesh Kothari",
    title: "Assistant Professor",
    department: "Artificial Intelligence",
    departmentId: "ai",
    age: 37,
    email: "rajesh.kothari@university.edu",
    phone: "+1 (555) 019-2834",
    office: "AI Wing, Room 408",
    tags: ["reinforcement learning", "robotics", "q-learning", "simulation"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ai-05",
    name: "Prof. David Miller",
    title: "Senior Lecturer",
    department: "Artificial Intelligence",
    departmentId: "ai",
    age: 48,
    email: "david.miller@university.edu",
    phone: "+1 (555) 019-2835",
    office: "AI Wing, Room 410",
    tags: ["ai ethics", "explainable ai", "xai", "cognitive computing"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 2. COMPUTER SCIENCE (5 Members)
  // ==========================================
  {
    id: "cs-01",
    name: "Dr. Aris Thorne",
    title: "Professor & Chair",
    department: "Computer Science",
    departmentId: "cs",
    age: 51,
    email: "aris.thorne@university.edu",
    phone: "+1 (555) 028-3910",
    office: "CS Building, Room 201",
    tags: ["algorithms", "data structures", "computational complexity", "c++"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cs-02",
    name: "Dr. Nina Patel",
    title: "Associate Professor",
    department: "Computer Science",
    departmentId: "cs",
    age: 41,
    email: "nina.patel@university.edu",
    phone: "+1 (555) 028-3911",
    office: "CS Building, Room 204",
    tags: ["cybersecurity", "cryptography", "network security", "ethical hacking"],
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cs-03",
    name: "Dr. Jonathan Reyes",
    title: "Associate Professor",
    department: "Computer Science",
    departmentId: "cs",
    age: 43,
    email: "jonathan.reyes@university.edu",
    phone: "+1 (555) 028-3912",
    office: "CS Building, Room 208",
    tags: ["operating systems", "distributed systems", "concurrency", "linux kernel"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cs-04",
    name: "Dr. Mei-Ling Zhou",
    title: "Assistant Professor",
    department: "Computer Science",
    departmentId: "cs",
    age: 33,
    email: "meiling.zhou@university.edu",
    phone: "+1 (555) 028-3913",
    office: "CS Building, Room 212",
    tags: ["software engineering", "agile", "system design", "microservices"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "cs-05",
    name: "Prof. Kenneth Brooks",
    title: "Senior Lecturer",
    department: "Computer Science",
    departmentId: "cs",
    age: 46,
    email: "kenneth.brooks@university.edu",
    phone: "+1 (555) 028-3914",
    office: "CS Building, Room 215",
    tags: ["compiler design", "programming languages", "java", "assembly"],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 3. INFORMATION TECHNOLOGY (5 Members)
  // ==========================================
  {
    id: "it-01",
    name: "Dr. Robert Sterling",
    title: "Professor & Department Head",
    department: "Information Technology",
    departmentId: "it",
    age: 52,
    email: "robert.sterling@university.edu",
    phone: "+1 (555) 037-4820",
    office: "IT Center, Room 101",
    tags: ["cloud computing", "aws", "devops", "virtualization"],
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "it-02",
    name: "Dr. Priya Sundaram",
    title: "Associate Professor",
    department: "Information Technology",
    departmentId: "it",
    age: 38,
    email: "priya.sundaram@university.edu",
    phone: "+1 (555) 037-4821",
    office: "IT Center, Room 105",
    tags: ["database management", "sql", "nosql", "system architecture"],
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "it-03",
    name: "Prof. Carlos Gomez",
    title: "Assistant Professor",
    department: "Information Technology",
    departmentId: "it",
    age: 36,
    email: "carlos.gomez@university.edu",
    phone: "+1 (555) 037-4822",
    office: "IT Center, Room 109",
    tags: ["web technologies", "fullstack", "javascript", "react", "node"],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "it-04",
    name: "Dr. Hannah Abbott",
    title: "Assistant Professor",
    department: "Information Technology",
    departmentId: "it",
    age: 35,
    email: "hannah.abbott@university.edu",
    phone: "+1 (555) 037-4823",
    office: "IT Center, Room 112",
    tags: ["enterprise systems", "sap", "it governance", "cyber law"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "it-05",
    name: "Prof. Samuel Wright",
    title: "Lecturer",
    department: "Information Technology",
    departmentId: "it",
    age: 31,
    email: "samuel.wright@university.edu",
    phone: "+1 (555) 037-4824",
    office: "IT Center, Room 115",
    tags: ["mobile application development", "flutter", "android", "ios"],
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 4. INTERNET OF THINGS (IoT) (5 Members)
  // ==========================================
  {
    id: "iot-01",
    name: "Dr. Vikram Sethi",
    title: "Professor & Chair",
    department: "Internet of Things",
    departmentId: "iot",
    age: 47,
    email: "vikram.sethi@university.edu",
    phone: "+1 (555) 046-5730",
    office: "Innovation Hub, Room 301",
    tags: ["embedded systems", "raspberry pi", "arduino", "sensor networks"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "iot-02",
    name: "Dr. Chloe Bennett",
    title: "Associate Professor",
    department: "Internet of Things",
    departmentId: "iot",
    age: 40,
    email: "chloe.bennett@university.edu",
    phone: "+1 (555) 046-5731",
    office: "Innovation Hub, Room 304",
    tags: ["wireless sensor networks", "zigbee", "lorawan", "edge computing"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "iot-03",
    name: "Dr. Tariq Al-Mansoor",
    title: "Assistant Professor",
    department: "Internet of Things",
    departmentId: "iot",
    age: 37,
    email: "tariq.almansoor@university.edu",
    phone: "+1 (555) 046-5732",
    office: "Innovation Hub, Room 307",
    tags: ["smart cities", "iot security", "mqtt", "industrial iot"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "iot-04",
    name: "Dr. Laura Lindqvist",
    title: "Assistant Professor",
    department: "Internet of Things",
    departmentId: "iot",
    age: 33,
    email: "laura.lindqvist@university.edu",
    phone: "+1 (555) 046-5733",
    office: "Innovation Hub, Room 310",
    tags: ["wearable technology", "biomedical sensors", "low power design"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "iot-05",
    name: "Prof. Ethan Cross",
    title: "Lecturer",
    department: "Internet of Things",
    departmentId: "iot",
    age: 29,
    email: "ethan.cross@university.edu",
    phone: "+1 (555) 046-5734",
    office: "Innovation Hub, Room 312",
    tags: ["microcontrollers", "rtos", "hardware programming", "c"],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 5. DATA SCIENCE (5 Members)
  // ==========================================
  {
    id: "ds-01",
    name: "Dr. Ananya Roy",
    title: "Professor & Lead Scientist",
    department: "Data Science",
    departmentId: "data-science",
    age: 45,
    email: "ananya.roy@university.edu",
    phone: "+1 (555) 055-6640",
    office: "Data Center, Room 501",
    tags: ["big data", "hadoop", "spark", "predictive analytics", "r"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ds-02",
    name: "Dr. Benjamin Hayes",
    title: "Associate Professor",
    department: "Data Science",
    departmentId: "data-science",
    age: 42,
    email: "benjamin.hayes@university.edu",
    phone: "+1 (555) 055-6641",
    office: "Data Center, Room 504",
    tags: ["data visualization", "d3.js", "tableau", "statistical modeling"],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ds-03",
    name: "Dr. Sophia Martinez",
    title: "Assistant Professor",
    department: "Data Science",
    departmentId: "data-science",
    age: 36,
    email: "sophia.martinez@university.edu",
    phone: "+1 (555) 055-6642",
    office: "Data Center, Room 508",
    tags: ["business intelligence", "data mining", "pandas", "numpy"],
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ds-04",
    name: "Dr. Oliver Taylor",
    title: "Assistant Professor",
    department: "Data Science",
    departmentId: "data-science",
    age: 38,
    email: "oliver.taylor@university.edu",
    phone: "+1 (555) 055-6643",
    office: "Data Center, Room 510",
    tags: ["time series analysis", "forecasting", "econometrics"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ds-05",
    name: "Prof. Grace Kim",
    title: "Lecturer",
    department: "Data Science",
    departmentId: "data-science",
    age: 30,
    email: "grace.kim@university.edu",
    phone: "+1 (555) 055-6644",
    office: "Data Center, Room 514",
    tags: ["data wrangling", "sql analytics", "python data science"],
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 6. ELECTRICAL ENGINEERING (5 Members)
  // ==========================================
  {
    id: "ee-01",
    name: "Dr. Harold Finch",
    title: "Professor & Chair",
    department: "Electrical Engineering",
    departmentId: "electrical",
    age: 56,
    email: "harold.finch@university.edu",
    phone: "+1 (555) 064-7750",
    office: "Engineering East, Room 101",
    tags: ["power systems", "grid modernization", "high voltage", "renewable energy"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ee-02",
    name: "Dr. Sunita Rao",
    title: "Associate Professor",
    department: "Electrical Engineering",
    departmentId: "electrical",
    age: 43,
    email: "sunita.rao@university.edu",
    phone: "+1 (555) 064-7751",
    office: "Engineering East, Room 105",
    tags: ["control systems", "matlab", "simulink", "automation"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ee-03",
    name: "Dr. Patrick O'Connor",
    title: "Assistant Professor",
    department: "Electrical Engineering",
    departmentId: "electrical",
    age: 39,
    email: "patrick.oconnor@university.edu",
    phone: "+1 (555) 064-7752",
    office: "Engineering East, Room 108",
    tags: ["electric vehicles", "battery management", "power electronics"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ee-04",
    name: "Dr. Maria Santos",
    title: "Assistant Professor",
    department: "Electrical Engineering",
    departmentId: "electrical",
    age: 36,
    email: "maria.santos@university.edu",
    phone: "+1 (555) 064-7753",
    office: "Engineering East, Room 112",
    tags: ["smart grids", "energy harvesting", "solar electronics"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ee-05",
    name: "Prof. Arthur Pendelton",
    title: "Senior Instructor",
    department: "Electrical Engineering",
    departmentId: "electrical",
    age: 50,
    email: "arthur.pendelton@university.edu",
    phone: "+1 (555) 064-7754",
    office: "Engineering East, Room 115",
    tags: ["circuit design", "pcb layout", "analog circuits"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 7. ELECTRONICS & COMMUNICATION (5 Members)
  // ==========================================
  {
    id: "ece-01",
    name: "Dr. George Takahashi",
    title: "Professor & Department Chair",
    department: "Electronics & Communication",
    departmentId: "electronics",
    age: 49,
    email: "george.takahashi@university.edu",
    phone: "+1 (555) 073-8860",
    office: "ECE Building, Room 301",
    tags: ["vlsi design", "semiconductors", "fpga", "verilog"],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ece-02",
    name: "Dr. Amara Nwosu",
    title: "Associate Professor",
    department: "Electronics & Communication",
    departmentId: "electronics",
    age: 42,
    email: "amara.nwosu@university.edu",
    phone: "+1 (555) 073-8861",
    office: "ECE Building, Room 304",
    tags: ["5g networks", "wireless communication", "rf engineering", "antennas"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ece-03",
    name: "Dr. Lucas Meyer",
    title: "Assistant Professor",
    department: "Electronics & Communication",
    departmentId: "electronics",
    age: 35,
    email: "lucas.meyer@university.edu",
    phone: "+1 (555) 073-8862",
    office: "ECE Building, Room 308",
    tags: ["digital signal processing", "dsp", "audio filtering", "telecom"],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ece-04",
    name: "Dr. Fatima Al-Hassan",
    title: "Assistant Professor",
    department: "Electronics & Communication",
    departmentId: "electronics",
    age: 37,
    email: "fatima.alhassan@university.edu",
    phone: "+1 (555) 073-8863",
    office: "ECE Building, Room 311",
    tags: ["photonics", "optical communication", "fiber optics"],
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ece-05",
    name: "Prof. Daniel Larson",
    title: "Lecturer",
    department: "Electronics & Communication",
    departmentId: "electronics",
    age: 32,
    email: "daniel.larson@university.edu",
    phone: "+1 (555) 073-8864",
    office: "ECE Building, Room 315",
    tags: ["microprocessors", "arm architecture", "embedded c"],
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 8. CIVIL ENGINEERING (5 Members)
  // ==========================================
  {
    id: "ce-01",
    name: "Dr. Arthur Pendelton",
    title: "Professor & Chair",
    department: "Civil Engineering",
    departmentId: "civil",
    age: 54,
    email: "arthur.civil@university.edu",
    phone: "+1 (555) 082-9970",
    office: "Civil Complex, Room 101",
    tags: ["structural engineering", "concrete mechanics", "bridges", "earthquake design"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ce-02",
    name: "Dr. Kavita Verma",
    title: "Associate Professor",
    department: "Civil Engineering",
    departmentId: "civil",
    age: 41,
    email: "kavita.verma@university.edu",
    phone: "+1 (555) 082-9971",
    office: "Civil Complex, Room 104",
    tags: ["geotechnical engineering", "soil mechanics", "foundations"],
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ce-03",
    name: "Dr. Liam Gallagher",
    title: "Assistant Professor",
    department: "Civil Engineering",
    departmentId: "civil",
    age: 38,
    email: "liam.gallagher@university.edu",
    phone: "+1 (555) 082-9972",
    office: "Civil Complex, Room 108",
    tags: ["transportation engineering", "traffic modeling", "urban planning"],
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ce-04",
    name: "Dr. Hannah Schmidt",
    title: "Assistant Professor",
    department: "Civil Engineering",
    departmentId: "civil",
    age: 35,
    email: "hannah.schmidt@university.edu",
    phone: "+1 (555) 082-9973",
    office: "Civil Complex, Room 112",
    tags: ["environmental engineering", "water treatment", "hydrology"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "ce-05",
    name: "Prof. Richard Vance",
    title: "Senior Lecturer",
    department: "Civil Engineering",
    departmentId: "civil",
    age: 49,
    email: "richard.vance@university.edu",
    phone: "+1 (555) 082-9974",
    office: "Civil Complex, Room 115",
    tags: ["construction management", "surveying", "autocad civil 3d"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 9. MECHANICAL ENGINEERING (5 Members)
  // ==========================================
  {
    id: "me-01",
    name: "Prof. Alan Marcus",
    title: "Professor & Department Head",
    department: "Mechanical Engineering",
    departmentId: "mechanical",
    age: 53,
    email: "alan.marcus@university.edu",
    phone: "+1 (555) 091-1080",
    office: "Tech Hall, Room 112",
    tags: ["thermodynamics", "fluid mechanics", "heat transfer", "camd", "cad"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "me-02",
    name: "Dr. Beatrice Dupont",
    title: "Associate Professor",
    department: "Mechanical Engineering",
    departmentId: "mechanical",
    age: 44,
    email: "beatrice.dupont@university.edu",
    phone: "+1 (555) 091-1081",
    office: "Tech Hall, Room 116",
    tags: ["robotics", "kinematics", "mechatronics", "solidworks"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "me-03",
    name: "Dr. Kevin Zhang",
    title: "Assistant Professor",
    department: "Mechanical Engineering",
    departmentId: "mechanical",
    age: 36,
    email: "kevin.zhang@university.edu",
    phone: "+1 (555) 091-1082",
    office: "Tech Hall, Room 120",
    tags: ["materials science", "finite element analysis", "fea", "ansys"],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "me-04",
    name: "Dr. Rachel Green",
    title: "Assistant Professor",
    department: "Mechanical Engineering",
    departmentId: "mechanical",
    age: 34,
    email: "rachel.green@university.edu",
    phone: "+1 (555) 091-1083",
    office: "Tech Hall, Room 124",
    tags: ["aerodynamics", "cfd", "combustion engines", "propulsion"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "me-05",
    name: "Prof. Thomas Brody",
    title: "Senior Instructor",
    department: "Mechanical Engineering",
    departmentId: "mechanical",
    age: 47,
    email: "thomas.brody@university.edu",
    phone: "+1 (555) 091-1084",
    office: "Tech Hall, Room 128",
    tags: ["manufacturing processes", "cnc machining", "3d printing"],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 10. PHYSICS (5 Members)
  // ==========================================
  {
    id: "phy-01",
    name: "Dr. Priya Sharma",
    title: "Professor & Chair",
    department: "Physics",
    departmentId: "physics",
    age: 42,
    email: "priya.sharma@university.edu",
    phone: "+1 (555) 100-2190",
    office: "Science Complex, Room 208",
    tags: ["quantum mechanics", "optics", "laser physics", "photonics"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "phy-02",
    name: "Dr. Edward Hastings",
    title: "Associate Professor",
    department: "Physics",
    departmentId: "physics",
    age: 48,
    email: "edward.hastings@university.edu",
    phone: "+1 (555) 100-2191",
    office: "Science Complex, Room 212",
    tags: ["astrophysics", "cosmology", "general relativity", "gravitational waves"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "phy-03",
    name: "Dr. Isabella Rossi",
    title: "Assistant Professor",
    department: "Physics",
    departmentId: "physics",
    age: 35,
    email: "isabella.rossi@university.edu",
    phone: "+1 (555) 100-2192",
    office: "Science Complex, Room 216",
    tags: ["condensed matter", "superconductors", "nanotechnology"],
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "phy-04",
    name: "Dr. Christopher Lee",
    title: "Assistant Professor",
    department: "Physics",
    departmentId: "physics",
    age: 37,
    email: "christopher.lee@university.edu",
    phone: "+1 (555) 100-2193",
    office: "Science Complex, Room 220",
    tags: ["nuclear physics", "particle acceleration", "quantum electrodynamics"],
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "phy-05",
    name: "Prof. Diana Prince",
    title: "Lecturer",
    department: "Physics",
    departmentId: "physics",
    age: 32,
    email: "diana.prince@university.edu",
    phone: "+1 (555) 100-2194",
    office: "Science Complex, Room 224",
    tags: ["classical mechanics", "electromagnetism", "thermodynamics"],
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 11. CHEMISTRY (5 Members)
  // ==========================================
  {
    id: "chem-01",
    name: "Dr. Alexander Wright",
    title: "Professor & Chair",
    department: "Chemistry",
    departmentId: "chemistry",
    age: 50,
    email: "alexander.wright@university.edu",
    phone: "+1 (555) 109-3200",
    office: "Chem Building, Room 102",
    tags: ["organic chemistry", "synthesis", "pharmaceutical chemistry", "nmr"],
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "chem-02",
    name: "Dr. Natasha Romanova",
    title: "Associate Professor",
    department: "Chemistry",
    departmentId: "chemistry",
    age: 41,
    email: "natasha.romanova@university.edu",
    phone: "+1 (555) 109-3201",
    office: "Chem Building, Room 106",
    tags: ["inorganic chemistry", "catalysis", "coordination compounds"],
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "chem-03",
    name: "Dr. Samuel Jackson",
    title: "Assistant Professor",
    department: "Chemistry",
    departmentId: "chemistry",
    age: 38,
    email: "samuel.jackson@university.edu",
    phone: "+1 (555) 109-3202",
    office: "Chem Building, Room 110",
    tags: ["physical chemistry", "spectroscopy", "quantum chemistry"],
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "chem-04",
    name: "Dr. Mei-Ling Huang",
    title: "Assistant Professor",
    department: "Chemistry",
    departmentId: "chemistry",
    age: 34,
    email: "meiling.huang@university.edu",
    phone: "+1 (555) 109-3203",
    office: "Chem Building, Room 114",
    tags: ["biochemistry", "enzymology", "protein folding"],
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "chem-05",
    name: "Prof. Oliver Queen",
    title: "Lecturer",
    department: "Chemistry",
    departmentId: "chemistry",
    age: 33,
    email: "oliver.queen@university.edu",
    phone: "+1 (555) 109-3204",
    office: "Chem Building, Room 118",
    tags: ["analytical chemistry", "chromatography", "mass spectrometry"],
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80"
  },

  // ==========================================
  // 12. MATHEMATICS (5 Members)
  // ==========================================
  {
    id: "math-01",
    name: "Dr. Alan Turing Jr.",
    title: "Professor & Chair",
    department: "Mathematics",
    departmentId: "mathematics",
    age: 52,
    email: "alan.math@university.edu",
    phone: "+1 (555) 118-4310",
    office: "Math Hall, Room 301",
    tags: ["pure mathematics", "number theory", "algebraic geometry", "topology"],
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "math-02",
    name: "Dr. Maryam Mirzakhani Lab",
    title: "Associate Professor",
    department: "Mathematics",
    departmentId: "mathematics",
    age: 43,
    email: "maryam.lab@university.edu",
    phone: "+1 (555) 118-4311",
    office: "Math Hall, Room 305",
    tags: ["applied mathematics", "differential equations", "dynamical systems"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "math-03",
    name: "Dr. Carl Friedrich Gauss",
    title: "Assistant Professor",
    department: "Mathematics",
    departmentId: "mathematics",
    age: 36,
    email: "carl.gauss@university.edu",
    phone: "+1 (555) 118-4312",
    office: "Math Hall, Room 309",
    tags: ["linear algebra", "matrix theory", "vector calculus", "fourier analysis"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "math-04",
    name: "Dr. Ada Lovelace Institute",
    title: "Assistant Professor",
    department: "Mathematics",
    departmentId: "mathematics",
    age: 35,
    email: "ada.lovelace@university.edu",
    phone: "+1 (555) 118-4313",
    office: "Math Hall, Room 312",
    tags: ["probability theory", "stochastic processes", "statistics"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80"
  },
  {
    id: "math-05",
    name: "Prof. Isaac Newton",
    title: "Senior Lecturer",
    department: "Mathematics",
    departmentId: "mathematics",
    age: 46,
    email: "isaac.newton@university.edu",
    phone: "+1 (555) 118-4314",
    office: "Math Hall, Room 316",
    tags: ["multivariable calculus", "real analysis", "complex analysis"],
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80"
  }
];

// Helper query function for searching & filtering
function searchFaculty({ query = "", departmentId = "all", limit = 60 } = {}) {
  const searchTerm = query.trim().toLowerCase();

  return facultyDatabase.filter(person => {
    // Check Department Match
    const matchesDept = departmentId === "all" || person.departmentId === departmentId;

    // Check Search Query Match (Name, Title, Department, Tags, Email)
    const matchesQuery = !searchTerm || 
      person.name.toLowerCase().includes(searchTerm) ||
      person.title.toLowerCase().includes(searchTerm) ||
      person.department.toLowerCase().includes(searchTerm) ||
      person.email.toLowerCase().includes(searchTerm) ||
      person.tags.some(tag => tag.toLowerCase().includes(searchTerm));

    return matchesDept && matchesQuery;
  }).slice(0, limit);
}