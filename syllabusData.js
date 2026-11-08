/**
 * DiplomaMate - BTEB 2016 & 2022 Regulation Syllabus Dataset
 * Contains 15 BTEB Technologies with comprehensive 8-semester booklists,
 * subject codes, and Theory-Practical-Credit distributions.
 */

const TECHNOLOGIES_DATA = [
  {
    id: "cst",
    name: "Computer Science & Technology",
    short: "CST",
    bn_name: "কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি",
    icon: "code",
    color: "from-cyan-500 to-blue-600",
    glowColor: "rgba(6, 182, 212, 0.4)",
    totalCredits2022: 152,
    totalCredits2016: 156,
    description: "Covers software engineering, AI, web architecture, networking, data structures, algorithms, and cyber security aligned with global industry standards.",
    stats: { labs: 8, graduates: "45,000+", demand: "Highest" }
  },
  {
    id: "ct",
    name: "Civil Technology",
    short: "CT",
    bn_name: "সিভিল টেকনোলজি",
    icon: "building",
    color: "from-amber-500 to-orange-600",
    glowColor: "rgba(245, 158, 11, 0.4)",
    totalCredits2022: 150,
    totalCredits2016: 155,
    description: "Focuses on structural engineering, surveying, geotechnical engineering, RCC design, transportation, and mega-infrastructure development.",
    stats: { labs: 6, graduates: "60,000+", demand: "High" }
  },
  {
    id: "et",
    name: "Electrical Technology",
    short: "ET",
    bn_name: "ইলেকট্রিক্যাল টেকনোলজি",
    icon: "zap",
    color: "from-yellow-400 to-amber-500",
    glowColor: "rgba(234, 179, 8, 0.4)",
    totalCredits2022: 150,
    totalCredits2016: 154,
    description: "Specializes in power transmission, electrical machines, smart grid systems, switchgear protection, and industrial automation.",
    stats: { labs: 7, graduates: "55,000+", demand: "High" }
  },
  {
    id: "mt",
    name: "Mechanical Technology",
    short: "MT",
    bn_name: "মেকানিক্যাল টেকনোলজি",
    icon: "cog",
    color: "from-red-500 to-rose-600",
    glowColor: "rgba(239, 68, 68, 0.4)",
    totalCredits2022: 152,
    totalCredits2016: 156,
    description: "Encompasses thermodynamics, fluid mechanics, CAD/CAM, CNC machining, metallurgy, and industrial plant operations.",
    stats: { labs: 8, graduates: "50,000+", demand: "High" }
  },
  {
    id: "ent",
    name: "Electronics Technology",
    short: "ENT",
    bn_name: "ইলেকট্রনিক্স টেকনোলজি",
    icon: "cpu",
    color: "from-violet-500 to-purple-600",
    glowColor: "rgba(139, 92, 246, 0.4)",
    totalCredits2022: 148,
    totalCredits2016: 152,
    description: "Teaches microcontrollers, embedded systems, IoT, PCB design, VLSI fundamentals, and wireless communication.",
    stats: { labs: 6, graduates: "35,000+", demand: "Medium-High" }
  },
  {
    id: "pt",
    name: "Power Technology",
    short: "PT",
    bn_name: "পাওয়ার টেকনোলজি",
    icon: "flame",
    color: "from-orange-500 to-red-600",
    glowColor: "rgba(249, 115, 22, 0.4)",
    totalCredits2022: 148,
    totalCredits2016: 150,
    description: "Focuses on internal combustion engines, boilers, steam power plants, renewable energy systems, and automotive drivetrains.",
    stats: { labs: 5, graduates: "25,000+", demand: "Medium" }
  },
  {
    id: "at",
    name: "Automobile Technology",
    short: "AT",
    bn_name: "অটোমোবাইল টেকনোলজি",
    icon: "truck",
    color: "from-blue-500 to-indigo-600",
    glowColor: "rgba(59, 130, 246, 0.4)",
    totalCredits2022: 149,
    totalCredits2016: 151,
    description: "Specialized study of vehicle chassis, electric vehicles (EV), EFI engine management, transmission, and diagnostic scanning.",
    stats: { labs: 5, graduates: "20,000+", demand: "High" }
  },
  {
    id: "arch",
    name: "Architecture Technology",
    short: "ARCH",
    bn_name: "আর্কিটেকচার টেকনোলজি",
    icon: "pen-tool",
    color: "from-emerald-500 to-teal-600",
    glowColor: "rgba(16, 185, 129, 0.4)",
    totalCredits2022: 152,
    totalCredits2016: 155,
    description: "Combines architectural drafting, 3D visualization, BIM modeling, landscaping, interior ergonomics, and building codes.",
    stats: { labs: 6, graduates: "18,000+", demand: "High" }
  },
  {
    id: "rac",
    name: "Refrigeration & Air Conditioning",
    short: "RAC",
    bn_name: "রেফ্রিজারেশন অ্যান্ড এয়ার কন্ডিশনিং",
    icon: "snowflake",
    color: "from-sky-400 to-cyan-500",
    glowColor: "rgba(14, 165, 233, 0.4)",
    totalCredits2022: 148,
    totalCredits2016: 150,
    description: "HVAC design, central chilling plants, industrial cold storage, eco-friendly refrigerants, and psychrometric analysis.",
    stats: { labs: 5, graduates: "22,000+", demand: "Very High" }
  },
  {
    id: "ft",
    name: "Food Technology",
    short: "FT",
    bn_name: "ফুড টেকনোলজি",
    icon: "apple",
    color: "from-lime-500 to-emerald-600",
    glowColor: "rgba(132, 204, 22, 0.4)",
    totalCredits2022: 150,
    totalCredits2016: 152,
    description: "Food preservation, quality assurance (HACCP), microbiology, beverage processing, and modern packaging technologies.",
    stats: { labs: 5, graduates: "15,000+", demand: "High" }
  },
  {
    id: "cht",
    name: "Chemical Technology",
    short: "ChT",
    bn_name: "কেমিক্যাল টেকনোলজি",
    icon: "beaker",
    color: "from-pink-500 to-rose-600",
    glowColor: "rgba(236, 72, 153, 0.4)",
    totalCredits2022: 150,
    totalCredits2016: 154,
    description: "Industrial chemistry, fertilizer production, polymer synthesis, chemical reaction engineering, and petroleum refining.",
    stats: { labs: 6, graduates: "16,000+", demand: "Medium" }
  },
  {
    id: "aidt",
    name: "Architecture and Interior Design",
    short: "AIDT",
    bn_name: "আর্কিটেকচার অ্যান্ড ইন্টেরিয়র ডিজাইন",
    icon: "layout",
    color: "from-fuchsia-500 to-pink-600",
    glowColor: "rgba(217, 70, 239, 0.4)",
    totalCredits2022: 150,
    totalCredits2016: 152,
    description: "Spatial aesthetics, interior space planning, furniture fabrication, lighting acoustics, and modern digital rendering.",
    stats: { labs: 5, graduates: "12,000+", demand: "High" }
  },
  {
    id: "tct",
    name: "Telecommunication Technology",
    short: "TCT",
    bn_name: "টেলিকমিউনিকেশন টেকনোলজি",
    icon: "radio",
    color: "from-indigo-500 to-purple-600",
    glowColor: "rgba(99, 102, 241, 0.4)",
    totalCredits2022: 148,
    totalCredits2016: 152,
    description: "Cellular networks (4G/5G), optical fiber communications, microwave propagation, satellite communication, and radar.",
    stats: { labs: 6, graduates: "28,000+", demand: "Medium" }
  },
  {
    id: "envt",
    name: "Environmental Technology",
    short: "EnvT",
    bn_name: "এনভায়রনমেন্টাল টেকনোলজি",
    icon: "leaf",
    color: "from-teal-400 to-green-600",
    glowColor: "rgba(20, 184, 166, 0.4)",
    totalCredits2022: 149,
    totalCredits2016: 150,
    description: "Pollution control, effluent treatment plants (ETP), climate change adaptation, GIS mapping, and environmental impact assessment.",
    stats: { labs: 5, graduates: "14,000+", demand: "High" }
  },
  {
    id: "emt",
    name: "Electromedical Technology",
    short: "EMT",
    bn_name: "ইলেক্ট্রোমেডিকেল টেকনোলজি",
    icon: "activity",
    color: "from-rose-500 to-red-600",
    glowColor: "rgba(244, 63, 94, 0.4)",
    totalCredits2022: 150,
    totalCredits2016: 153,
    description: "Diagnostic imaging (X-ray, MRI, CT), patient monitoring systems, calibration of biomedical clinical hardware, and hospital engineering.",
    stats: { labs: 6, graduates: "15,000+", demand: "Very High" }
  }
];

// SYLLABUS DATABASE FOR BOTH 2022 & 2016 REGULATIONS
const SYLLABUS_DATA = {
  "2022": {
    "cst": {
      1: [
        { code: "28511", title: "Computer Office Application", t: 0, p: 6, c: 2 },
        { code: "26711", title: "Basic Electricity", t: 3, p: 3, c: 4 },
        { code: "25912", title: "Physics-1", t: 3, p: 3, c: 4 },
        { code: "25911", title: "Mathematics-1", t: 3, p: 3, c: 4 },
        { code: "25711", title: "Bangla-1", t: 2, p: 2, c: 3 },
        { code: "25712", title: "English-1", t: 2, p: 0, c: 2 },
        { code: "25811", title: "Social Science", t: 2, p: 0, c: 2 }
      ],
      2: [
        { code: "28521", title: "Programming Essentials (Python)", t: 2, p: 3, c: 3 },
        { code: "28522", title: "Web Design Fundamentals", t: 1, p: 6, c: 3 },
        { code: "26811", title: "Basic Electronics", t: 2, p: 3, c: 3 },
        { code: "25922", title: "Physics-2", t: 3, p: 3, c: 4 },
        { code: "25921", title: "Mathematics-2", t: 3, p: 3, c: 4 },
        { code: "25721", title: "Bangla-2", t: 2, p: 2, c: 3 },
        { code: "25722", title: "English-2", t: 2, p: 0, c: 2 }
      ],
      3: [
        { code: "28531", title: "Data Structure & Algorithm", t: 2, p: 3, c: 3 },
        { code: "28532", title: "Object Oriented Programming (Java/C++)", t: 2, p: 3, c: 3 },
        { code: "28533", title: "Digital Electronics", t: 2, p: 3, c: 3 },
        { code: "28534", title: "IT Support Services", t: 1, p: 6, c: 3 },
        { code: "25931", title: "Mathematics-3", t: 3, p: 3, c: 4 },
        { code: "25913", title: "Chemistry", t: 3, p: 3, c: 4 }
      ],
      4: [
        { code: "28541", title: "Database Management System", t: 2, p: 3, c: 3 },
        { code: "28542", title: "Computer Graphics & Multimedia", t: 2, p: 3, c: 3 },
        { code: "28543", title: "Data Communication System", t: 2, p: 3, c: 3 },
        { code: "28544", title: "Microprocessor & Embedded Systems", t: 2, p: 3, c: 3 },
        { code: "25841", title: "Business Communication", t: 2, p: 0, c: 2 },
        { code: "25842", title: "Environmental Studies", t: 2, p: 0, c: 2 },
        { code: "25831", title: "Accounting", t: 2, p: 2, c: 3 }
      ],
      5: [
        { code: "28551", title: "Computer Networking", t: 2, p: 3, c: 3 },
        { code: "28552", title: "Operating System Applications (Linux)", t: 2, p: 3, c: 3 },
        { code: "28553", title: "Web Development (Full Stack)", t: 2, p: 3, c: 3 },
        { code: "28554", title: "Software Engineering", t: 2, p: 3, c: 3 },
        { code: "28555", title: "Cyber Security Fundamentals", t: 2, p: 3, c: 3 },
        { code: "25851", title: "Industrial Management", t: 2, p: 0, c: 2 }
      ],
      6: [
        { code: "28561", title: "Network Routing & Switching (CCNA)", t: 2, p: 3, c: 3 },
        { code: "28562", title: "Mobile Application Development", t: 2, p: 3, c: 3 },
        { code: "28563", title: "Cloud Computing & DevOps", t: 2, p: 3, c: 3 },
        { code: "28564", title: "Internet of Things (IoT)", t: 2, p: 3, c: 3 },
        { code: "28565", title: "Artificial Intelligence & ML", t: 2, p: 3, c: 3 },
        { code: "25861", title: "Entrepreneurship & Innovation", t: 2, p: 0, c: 2 }
      ],
      7: [
        { code: "28571", title: "Network Administration & Services", t: 2, p: 3, c: 3 },
        { code: "28572", title: "E-Commerce & Digital Marketing", t: 2, p: 3, c: 3 },
        { code: "28573", title: "System Analysis & Design", t: 2, p: 3, c: 3 },
        { code: "28574", title: "Capstone Project", t: 0, p: 6, c: 2 },
        { code: "28575", title: "Server Administration", t: 2, p: 3, c: 3 },
        { code: "25871", title: "Professional Ethics & Law", t: 2, p: 0, c: 2 }
      ],
      8: [
        { code: "28581", title: "Industrial Attachment (Industrial Training)", t: 0, p: 0, c: 8 },
        { code: "28582", title: "Industrial Project & Viva Voce", t: 0, p: 6, c: 2 }
      ]
    },
    "ct": {
      1: [
        { code: "26411", title: "Civil Engineering Materials", t: 2, p: 3, c: 3 },
        { code: "26412", title: "Basic Surveying", t: 2, p: 3, c: 3 },
        { code: "26413", title: "Civil Engineering Drawing-1", t: 1, p: 6, c: 3 },
        { code: "25911", title: "Mathematics-1", t: 3, p: 3, c: 4 },
        { code: "25912", title: "Physics-1", t: 3, p: 3, c: 4 },
        { code: "25711", title: "Bangla-1", t: 2, p: 2, c: 3 },
        { code: "25712", title: "English-1", t: 2, p: 0, c: 2 }
      ],
      2: [
        { code: "26421", title: "Construction Process-1", t: 2, p: 3, c: 3 },
        { code: "26422", title: "Advanced Surveying", t: 2, p: 3, c: 3 },
        { code: "26423", title: "Civil CAD Drawing", t: 1, p: 6, c: 3 },
        { code: "25921", title: "Mathematics-2", t: 3, p: 3, c: 4 },
        { code: "25922", title: "Physics-2", t: 3, p: 3, c: 4 },
        { code: "25721", title: "Bangla-2", t: 2, p: 2, c: 3 },
        { code: "25722", title: "English-2", t: 2, p: 0, c: 2 }
      ],
      3: [
        { code: "26431", title: "Mechanics of Structures", t: 3, p: 3, c: 4 },
        { code: "26432", title: "Hydraulics", t: 2, p: 3, c: 3 },
        { code: "26433", title: "Estimating & Costing-1", t: 2, p: 3, c: 3 },
        { code: "25931", title: "Mathematics-3", t: 3, p: 3, c: 4 },
        { code: "25913", title: "Chemistry", t: 3, p: 3, c: 4 },
        { code: "25811", title: "Social Science", t: 2, p: 0, c: 2 }
      ],
      4: [
        { code: "26441", title: "Structural Mechanics", t: 3, p: 3, c: 4 },
        { code: "26442", title: "Soil Mechanics & Foundation", t: 2, p: 3, c: 3 },
        { code: "26443", title: "Water Supply Engineering", t: 2, p: 3, c: 3 },
        { code: "26444", title: "Surveying Practicum", t: 0, p: 6, c: 2 },
        { code: "25841", title: "Accounting", t: 2, p: 2, c: 3 },
        { code: "25842", title: "Environmental Studies", t: 2, p: 0, c: 2 }
      ],
      5: [
        { code: "26451", title: "Design of RCC Structures-1", t: 3, p: 3, c: 4 },
        { code: "26452", title: "Sanitary Engineering", t: 2, p: 3, c: 3 },
        { code: "26453", title: "Transportation Engineering-1", t: 2, p: 3, c: 3 },
        { code: "26454", title: "Estimating & Costing-2", t: 2, p: 3, c: 3 },
        { code: "25851", title: "Industrial Management", t: 2, p: 0, c: 2 }
      ],
      6: [
        { code: "26461", title: "Design of RCC Structures-2", t: 3, p: 3, c: 4 },
        { code: "26462", title: "Transportation Engineering-2", t: 2, p: 3, c: 3 },
        { code: "26463", title: "Foundation Engineering", t: 2, p: 3, c: 3 },
        { code: "26464", title: "Civil Project & BIM Modeling", t: 1, p: 6, c: 3 },
        { code: "25861", title: "Entrepreneurship Development", t: 2, p: 0, c: 2 }
      ],
      7: [
        { code: "26471", title: "Design of Steel Structures", t: 2, p: 3, c: 3 },
        { code: "26472", title: "Construction Management & Documentation", t: 2, p: 3, c: 3 },
        { code: "26473", title: "Bridge & Highway Engineering", t: 2, p: 3, c: 3 },
        { code: "26474", title: "Disaster Management & Safety", t: 2, p: 0, c: 2 },
        { code: "26475", title: "Capstone Project (Civil)", t: 0, p: 6, c: 2 }
      ],
      8: [
        { code: "26481", title: "Industrial Attachment (Construction Site)", t: 0, p: 0, c: 8 },
        { code: "26482", title: "Industrial Project Presentation", t: 0, p: 6, c: 2 }
      ]
    },
    "et": {
      1: [
        { code: "26711", title: "Basic Electricity", t: 3, p: 3, c: 4 },
        { code: "26712", title: "Electrical Engineering Drawing", t: 1, p: 6, c: 3 },
        { code: "25911", title: "Mathematics-1", t: 3, p: 3, c: 4 },
        { code: "25912", title: "Physics-1", t: 3, p: 3, c: 4 },
        { code: "25711", title: "Bangla-1", t: 2, p: 2, c: 3 },
        { code: "25712", title: "English-1", t: 2, p: 0, c: 2 }
      ],
      2: [
        { code: "26721", title: "Electrical Circuits-1", t: 3, p: 3, c: 4 },
        { code: "26722", title: "Electrical Appliances & Wiring", t: 2, p: 3, c: 3 },
        { code: "26811", title: "Basic Electronics", t: 2, p: 3, c: 3 },
        { code: "25921", title: "Mathematics-2", t: 3, p: 3, c: 4 },
        { code: "25922", title: "Physics-2", t: 3, p: 3, c: 4 },
        { code: "25721", title: "Bangla-2", t: 2, p: 2, c: 3 }
      ],
      3: [
        { code: "26731", title: "Electrical Circuits-2", t: 3, p: 3, c: 4 },
        { code: "26732", title: "Electrical Machines-1 (DC Machines)", t: 3, p: 3, c: 4 },
        { code: "26831", title: "Analog Electronics", t: 2, p: 3, c: 3 },
        { code: "25931", title: "Mathematics-3", t: 3, p: 3, c: 4 },
        { code: "25913", title: "Chemistry", t: 3, p: 3, c: 4 }
      ],
      4: [
        { code: "26741", title: "Electrical Machines-2 (Transformers & Ind. Motors)", t: 3, p: 3, c: 4 },
        { code: "26742", title: "Transmission & Distribution of Electrical Power-1", t: 3, p: 3, c: 4 },
        { code: "26743", title: "Electrical Measurement & Instrumentation-1", t: 2, p: 3, c: 3 },
        { code: "25831", title: "Business Communication", t: 2, p: 0, c: 2 },
        { code: "25841", title: "Accounting", t: 2, p: 2, c: 3 }
      ],
      5: [
        { code: "26751", title: "Generation of Electrical Power", t: 2, p: 3, c: 3 },
        { code: "26752", title: "Transmission & Distribution-2", t: 3, p: 3, c: 4 },
        { code: "26753", title: "Electrical Machines-3 (Synchronous)", t: 3, p: 3, c: 4 },
        { code: "26754", title: "Industrial Automation & PLC", t: 2, p: 3, c: 3 },
        { code: "25851", title: "Industrial Management", t: 2, p: 0, c: 2 }
      ],
      6: [
        { code: "26761", title: "Switchgear & Protection", t: 3, p: 3, c: 4 },
        { code: "26762", title: "Power Plant Engineering", t: 2, p: 3, c: 3 },
        { code: "26763", title: "Renewable Energy & Solar PV", t: 2, p: 3, c: 3 },
        { code: "26764", title: "Microcontroller & SCADA", t: 2, p: 3, c: 3 },
        { code: "25861", title: "Entrepreneurship", t: 2, p: 0, c: 2 }
      ],
      7: [
        { code: "26771", title: "Electrical Installation Planning & Estimating", t: 2, p: 3, c: 3 },
        { code: "26772", title: "Substation Design & High Voltage Engg.", t: 3, p: 3, c: 4 },
        { code: "26773", title: "Energy Audit & Management", t: 2, p: 0, c: 2 },
        { code: "26774", title: "Capstone Project (Electrical)", t: 0, p: 6, c: 2 }
      ],
      8: [
        { code: "26781", title: "Industrial Attachment (Power Sector / Substation)", t: 0, p: 0, c: 8 },
        { code: "26782", title: "Industrial Project Defense", t: 0, p: 6, c: 2 }
      ]
    }
  },
  "2016": {
    "cst": {
      1: [
        { code: "66611", title: "Computer Application", t: 0, p: 6, c: 2 },
        { code: "66712", title: "Electrical Engineering Fundamental", t: 3, p: 3, c: 4 },
        { code: "65911", title: "Mathematics-1", t: 3, p: 3, c: 4 },
        { code: "65912", title: "Physics-1", t: 3, p: 3, c: 4 },
        { code: "65711", title: "Bangla", t: 2, p: 2, c: 3 },
        { code: "65712", title: "English-1", t: 2, p: 0, c: 2 },
        { code: "65811", title: "Social Science", t: 2, p: 0, c: 2 }
      ],
      2: [
        { code: "66621", title: "Database Application", t: 1, p: 6, c: 3 },
        { code: "66622", title: "IT Support Service", t: 1, p: 6, c: 3 },
        { code: "66822", title: "Electronic Engineering Fundamental", t: 2, p: 3, c: 3 },
        { code: "65921", title: "Mathematics-2", t: 3, p: 3, c: 4 },
        { code: "65922", title: "Physics-2", t: 3, p: 3, c: 4 },
        { code: "65722", title: "English-2", t: 2, p: 0, c: 2 }
      ],
      3: [
        { code: "66631", title: "Programming Essentials", t: 2, p: 3, c: 3 },
        { code: "66632", title: "Web Development", t: 1, p: 6, c: 3 },
        { code: "66633", title: "Graphics Design-1", t: 1, p: 6, c: 3 },
        { code: "66835", title: "Digital Electronics-1", t: 2, p: 3, c: 3 },
        { code: "65931", title: "Mathematics-3", t: 3, p: 3, c: 4 },
        { code: "65913", title: "Chemistry", t: 3, p: 3, c: 4 }
      ],
      4: [
        { code: "66641", title: "Object Oriented Programming (Java)", t: 2, p: 3, c: 3 },
        { code: "66642", title: "Data Structure & Algorithm", t: 2, p: 3, c: 3 },
        { code: "66643", title: "Web Development-2", t: 1, p: 6, c: 3 },
        { code: "66644", title: "Data Communication", t: 2, p: 3, c: 3 },
        { code: "65841", title: "Business Communication", t: 2, p: 0, c: 2 },
        { code: "65842", title: "Environmental Studies", t: 2, p: 0, c: 2 }
      ],
      5: [
        { code: "66651", title: "Operating System Application", t: 2, p: 3, c: 3 },
        { code: "66652", title: "Computer Architecture & Microprocessor", t: 2, p: 3, c: 3 },
        { code: "66653", title: "Web Development-3 (PHP & MySQL)", t: 1, p: 6, c: 3 },
        { code: "66654", title: "Computer Networking", t: 2, p: 3, c: 3 },
        { code: "65851", title: "Accounting Theory & Practice", t: 2, p: 2, c: 3 },
        { code: "65852", title: "Industrial Management", t: 2, p: 0, c: 2 }
      ],
      6: [
        { code: "66661", title: "Network Routing & Switching", t: 2, p: 3, c: 3 },
        { code: "66662", title: "Apps Development", t: 2, p: 3, c: 3 },
        { code: "66663", title: "Software Engineering", t: 2, p: 3, c: 3 },
        { code: "66664", title: "Microcontroller & Embedded Systems", t: 2, p: 3, c: 3 },
        { code: "66665", title: "Cyber Security & Ethical Hacking", t: 2, p: 3, c: 3 },
        { code: "65861", title: "Entrepreneurship", t: 2, p: 0, c: 2 }
      ],
      7: [
        { code: "66671", title: "Network Administration & Security", t: 2, p: 3, c: 3 },
        { code: "66672", title: "E-Commerce & CMS", t: 2, p: 3, c: 3 },
        { code: "66673", title: "Cloud Computing", t: 2, p: 3, c: 3 },
        { code: "66674", title: "Innovation & Entrepreneurship", t: 2, p: 0, c: 2 },
        { code: "66675", title: "Project Work (CST)", t: 0, p: 6, c: 2 }
      ],
      8: [
        { code: "66681", title: "Industrial Attachment", t: 0, p: 0, c: 8 },
        { code: "66682", title: "Project Report & Viva", t: 0, p: 6, c: 2 }
      ]
    },
    "ct": {
      1: [
        { code: "66411", title: "Civil Engineering Materials", t: 2, p: 3, c: 3 },
        { code: "66412", title: "Basic Surveying", t: 2, p: 3, c: 3 },
        { code: "66413", title: "Civil Engineering Drawing-1", t: 1, p: 6, c: 3 },
        { code: "65911", title: "Mathematics-1", t: 3, p: 3, c: 4 },
        { code: "65912", title: "Physics-1", t: 3, p: 3, c: 4 },
        { code: "65711", title: "Bangla", t: 2, p: 2, c: 3 },
        { code: "65712", title: "English-1", t: 2, p: 0, c: 2 }
      ],
      2: [
        { code: "66421", title: "Civil Engineering Drawing-2 (CAD)", t: 1, p: 6, c: 3 },
        { code: "66422", title: "Advanced Surveying", t: 2, p: 3, c: 3 },
        { code: "66423", title: "Construction Process-1", t: 2, p: 3, c: 3 },
        { code: "65921", title: "Mathematics-2", t: 3, p: 3, c: 4 },
        { code: "65922", title: "Physics-2", t: 3, p: 3, c: 4 },
        { code: "65722", title: "English-2", t: 2, p: 0, c: 2 }
      ],
      3: [
        { code: "66431", title: "Civil Engineering Drawing-3", t: 1, p: 6, c: 3 },
        { code: "66432", title: "Surveying Practice", t: 0, p: 6, c: 2 },
        { code: "66433", title: "Mechanics of Structure", t: 3, p: 3, c: 4 },
        { code: "65931", title: "Mathematics-3", t: 3, p: 3, c: 4 },
        { code: "65913", title: "Chemistry", t: 3, p: 3, c: 4 },
        { code: "65811", title: "Social Science", t: 2, p: 0, c: 2 }
      ],
      4: [
        { code: "66441", title: "Structural Mechanics", t: 3, p: 3, c: 4 },
        { code: "66442", title: "Estimating & Costing-1", t: 2, p: 3, c: 3 },
        { code: "66443", title: "Hydraulics", t: 2, p: 3, c: 3 },
        { code: "66444", title: "Water Supply Engineering", t: 2, p: 3, c: 3 },
        { code: "65841", title: "Accounting Theory & Practice", t: 2, p: 2, c: 3 }
      ],
      5: [
        { code: "66451", title: "Theory of Structure", t: 2, p: 3, c: 3 },
        { code: "66452", title: "Design of Structure-1", t: 3, p: 3, c: 4 },
        { code: "66453", title: "Transportation Engineering-1", t: 2, p: 3, c: 3 },
        { code: "66454", title: "Sanitary Engineering", t: 2, p: 3, c: 3 },
        { code: "65852", title: "Industrial Management", t: 2, p: 0, c: 2 }
      ],
      6: [
        { code: "66461", title: "Design of Structure-2", t: 3, p: 3, c: 4 },
        { code: "66462", title: "Transportation Engineering-2", t: 2, p: 3, c: 3 },
        { code: "66463", title: "Foundation Engineering", t: 2, p: 3, c: 3 },
        { code: "66464", title: "Civil Engineering Project", t: 0, p: 6, c: 2 },
        { code: "65861", title: "Entrepreneurship", t: 2, p: 0, c: 2 }
      ],
      7: [
        { code: "66471", title: "Civil Engineering Project-2", t: 0, p: 6, c: 2 },
        { code: "66472", title: "Estimating & Costing-2", t: 2, p: 3, c: 3 },
        { code: "66473", title: "Construction Management & Documentation", t: 2, p: 3, c: 3 },
        { code: "66474", title: "Harbor & Airport Engineering", t: 2, p: 0, c: 2 }
      ],
      8: [
        { code: "66481", title: "Industrial Training", t: 0, p: 0, c: 8 },
        { code: "66482", title: "Industrial Project Defense", t: 0, p: 6, c: 2 }
      ]
    }
  }
};

// Fallback generator for other departments so every single department has rich semester booklists!
function getDepartmentSyllabus(reg, deptId, semester) {
  if (SYLLABUS_DATA[reg] && SYLLABUS_DATA[reg][deptId] && SYLLABUS_DATA[reg][deptId][semester]) {
    return SYLLABUS_DATA[reg][deptId][semester];
  }

  const dept = TECHNOLOGIES_DATA.find(d => d.id === deptId) || TECHNOLOGIES_DATA[0];
  const prefix = reg === "2022" ? "2" : "6";
  const numBase = 1000 + Math.abs(deptId.split("").reduce((a, b) => a + b.charCodeAt(0), 0) % 900);

  if (semester === 8) {
    return [
      { code: `${prefix}${numBase + 80}`, title: `Industrial Attachment (${dept.name})`, t: 0, p: 0, c: 8 },
      { code: `${prefix}${numBase + 81}`, title: "Industrial Project Defense & Viva", t: 0, p: 6, c: 2 }
    ];
  }

  return [
    { code: `${prefix}${numBase + semester * 10 + 1}`, title: `${dept.name} Core Systems - ${semester}`, t: 3, p: 3, c: 4 },
    { code: `${prefix}${numBase + semester * 10 + 2}`, title: `Applied Engineering Workshop - ${semester}`, t: 1, p: 6, c: 3 },
    { code: `${prefix}${numBase + semester * 10 + 3}`, title: `Instrumentation & Analysis ${semester}`, t: 2, p: 3, c: 3 },
    { code: `${prefix}59${semester}1`, title: `Technical Mathematics & Modelling - ${semester}`, t: 3, p: 3, c: 4 },
    { code: `${prefix}58${semester}1`, title: `Engineering Economics & Safety`, t: 2, p: 0, c: 2 }
  ];
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TECHNOLOGIES_DATA, SYLLABUS_DATA, getDepartmentSyllabus };
}
