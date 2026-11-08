/**
 * DiplomaMate - Official BTEB 2016 & 2022 Regulation Syllabus Dataset
 * Verified against official BTEB curriculum frameworks (bteb.gov.bd) and
 * uploaded authentic BTEB curriculum files.
 *
 * Covers all 15 BTEB Engineering Technologies across all 8 Semesters with:
 * - Exact BTEB Course Codes (2XXXX for 2022, 6XXXX for 2016)
 * - Complete Subject Names
 * - Theory Contact Hours (T), Practical Contact Hours (P), Credits (C)
 * - Total Subject Marks
 */

const TECHNOLOGIES_DATA = [
  {
    "id": "arch",
    "code": "61",
    "name": "Architecture Technology",
    "short": "ARCH",
    "bn_name": "আর্কিটেকচার টেকনোলজি",
    "icon": "compass",
    "color": "from-pink-500 to-rose-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 155,
    "totalCredits2016": 71,
    "description": "Architectural drafting, 3D modeling, BIM, urban spatial planning, building acoustics, interior design aesthetics, and landscaping.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "at",
    "code": "62",
    "name": "Automobile Technology",
    "short": "AT",
    "bn_name": "অটোমোবাইল টেকনোলজি",
    "icon": "car",
    "color": "from-violet-500 to-purple-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 160,
    "totalCredits2016": 71,
    "description": "Automotive internal combustion engines, electronic fuel injection (EFI), hybrid/EV drivetrains, transmission systems, and computerized diagnostics.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "cht",
    "code": "63",
    "name": "Chemical Technology",
    "short": "ChT",
    "bn_name": "কেমিক্যাল টেকনোলজি",
    "icon": "beaker",
    "color": "from-teal-500 to-cyan-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 160,
    "totalCredits2016": 76,
    "description": "Industrial chemical operations, refinery unit processes, organic/inorganic syntheses, stoichiometric balances, plant safety, and pollution control.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "ct",
    "code": "64",
    "name": "Civil Technology",
    "short": "CT",
    "bn_name": "সিভিল টেকনোলজি",
    "icon": "building-2",
    "color": "from-emerald-500 to-teal-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 159,
    "totalCredits2016": 100,
    "description": "Structural engineering, surveying, RCC design, foundation analysis, road & bridge construction, geotechnical testing, and CAD.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "cst",
    "code": "85",
    "name": "Computer Science & Technology",
    "short": "CST",
    "bn_name": "কম্পিউটার সায়েন্স অ্যান্ড টেকনোলজি",
    "icon": "laptop",
    "color": "from-blue-500 to-indigo-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 154,
    "totalCredits2016": 110,
    "description": "Software engineering, Java, Python, data structures, algorithms, cloud computing, database management, web design, and network infrastructure.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "const",
    "code": "88",
    "name": "Construction Technology",
    "short": "CONST",
    "bn_name": "কনস্ট্রাকশন টেকনোলজি",
    "icon": "hammer",
    "color": "from-yellow-500 to-amber-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 159,
    "totalCredits2016": 78,
    "description": "Heavy construction techniques, reinforced concrete building execution, site estimation, construction surveying, scaffolding safety, and project management.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "et",
    "code": "67",
    "name": "Electrical Technology",
    "short": "ET",
    "bn_name": "ইলেকট্রিক্যাল টেকনোলজি",
    "icon": "zap",
    "color": "from-amber-500 to-orange-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 159,
    "totalCredits2016": 84,
    "description": "Power generation, high-voltage transmission, smart grid distribution, AC/DC machines, industrial switchgear, and substation automation.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "emt",
    "code": "86",
    "name": "Electromedical Technology",
    "short": "EMT",
    "bn_name": "ইলেক্ট্রোমেডিকেল টেকনোলজি",
    "icon": "activity",
    "color": "from-red-500 to-pink-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 158,
    "totalCredits2016": 74,
    "description": "Biomedical diagnostic instruments, hospital ICU/radiology machinery, ECG/MRI/CT scanners, patient monitoring sensors, and medical equipment calibration.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "ent",
    "code": "68",
    "name": "Electronics Technology",
    "short": "ENT",
    "bn_name": "ইলেকট্রনিক্স টেকনোলজি",
    "icon": "cpu",
    "color": "from-cyan-500 to-blue-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 160,
    "totalCredits2016": 76,
    "description": "Semiconductor devices, microcontrollers, embedded systems, PCB fabrication, robotics, IoT, and automated control systems.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "envt",
    "code": "90",
    "name": "Environmental Technology",
    "short": "EnvT",
    "bn_name": "এনভায়রনমেন্টাল টেকনোলজি",
    "icon": "leaf",
    "color": "from-lime-500 to-green-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 160,
    "totalCredits2016": 73,
    "description": "Water & wastewater treatment systems, air quality monitoring, solid hazardous waste disposal, environmental impact assessments (EIA), and ecology.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "ft",
    "code": "69",
    "name": "Food Technology",
    "short": "FT",
    "bn_name": "ফুড টেকনোলজি",
    "icon": "utensils",
    "color": "from-green-500 to-emerald-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 160,
    "totalCredits2016": 76,
    "description": "Food chemistry, industrial preservation, beverage & dairy processing, microbiological quality assurance, HACCP standards, and packaging technology.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "mt",
    "code": "70",
    "name": "Mechanical Technology",
    "short": "MT",
    "bn_name": "মেকানিক্যাল টেকনোলজি",
    "icon": "cog",
    "color": "from-rose-500 to-red-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 158,
    "totalCredits2016": 82,
    "description": "Thermodynamics, fluid mechanics, CNC machining, metallurgy, CAD/CAM manufacturing, boiler operations, and plant maintenance.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "pt",
    "code": "71",
    "name": "Power Technology",
    "short": "PT",
    "bn_name": "পাওয়ার টেকনোলজি",
    "icon": "flame",
    "color": "from-orange-500 to-amber-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 158,
    "totalCredits2016": 72,
    "description": "Thermal & hydroelectric power plants, steam & gas turbines, renewable solar/wind generation, IC engines, and grid synchronization.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "rac",
    "code": "72",
    "name": "Refrigeration & Air Conditioning",
    "short": "RAC",
    "bn_name": "রেফ্রিজারেশন অ্যান্ড এয়ার কন্ডিশনিং টেকনোলজি",
    "icon": "snowflake",
    "color": "from-sky-400 to-cyan-500",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 160,
    "totalCredits2016": 72,
    "description": "HVAC engineering, central chiller plants, industrial cold storages, eco-friendly refrigerants, psychrometrics, and climate automation.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  },
  {
    "id": "tct",
    "code": "94",
    "name": "Telecommunication Technology",
    "short": "TCT",
    "bn_name": "টেলিকমিউনিকেশন টেকনোলজি",
    "icon": "radio",
    "color": "from-indigo-500 to-purple-600",
    "glowColor": "rgba(59, 130, 246, 0.4)",
    "totalCredits2022": 160,
    "totalCredits2016": 67,
    "description": "Cellular wireless networks (4G/5G/6G), optical fiber communications, microwave satellite relays, digital signal processing, and telecom switching.",
    "stats": {
      "labs": 6,
      "graduates": "25,000+",
      "demand": "Very High"
    }
  }
];

const SYLLABUS_DATA = {
  "2022": {
  "arch": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26111",
        "name": "Creativity and Concept Development",
        "title": "Creativity and Concept Development",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26121",
        "name": "Architectural Design-I",
        "title": "Architectural Design-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      },
      {
        "code": "26411",
        "name": "Civil Engineering Materials",
        "title": "Civil Engineering Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "3": [
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26131",
        "name": "Architectural Design-II",
        "title": "Architectural Design-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26132",
        "name": "Architectural Graphics",
        "title": "Architectural Graphics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26133",
        "name": "Working Drawing-I",
        "title": "Working Drawing-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "26134",
        "name": "Climatology",
        "title": "Climatology",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26135",
        "name": "Computer Aided Drawing -I",
        "title": "Computer Aided Drawing -I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "4": [
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26141",
        "name": "Architectural Design-III",
        "title": "Architectural Design-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      },
      {
        "code": "26142",
        "name": "History of Architecture-I",
        "title": "History of Architecture-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26143",
        "name": "Working Drawing -II",
        "title": "Working Drawing -II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26144",
        "name": "Computer Aided Drawing -II",
        "title": "Computer Aided Drawing -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26434",
        "name": "Basic Construction Process",
        "title": "Basic Construction Process",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26447",
        "name": "Basic Estimating & Costing",
        "title": "Basic Estimating & Costing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26151",
        "name": "Architectural Design-IV",
        "title": "Architectural Design-IV",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      },
      {
        "code": "26152",
        "name": "History of Architecture-II",
        "title": "History of Architecture-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26153",
        "name": "Model Making",
        "title": "Model Making",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26154",
        "name": "Presentation and Visual Technique",
        "title": "Presentation and Visual Technique",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26431",
        "name": "Structural Mechanics",
        "title": "Structural Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26457",
        "name": "Water Supply and Sanitary Engineering",
        "title": "Water Supply and Sanitary Engineering",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "6": [
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26161",
        "name": "Architectural Design-V",
        "title": "Architectural Design-V",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "26162",
        "name": "Computer Rendering and Animation-I",
        "title": "Computer Rendering and Animation-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26163",
        "name": "Landscape Design",
        "title": "Landscape Design",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "26164",
        "name": "Modern Architecture",
        "title": "Modern Architecture",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26165",
        "name": "Interior Design -I",
        "title": "Interior Design -I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "26464",
        "name": "Design of Structure-I",
        "title": "Design of Structure-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26171",
        "name": "Architectural Project",
        "title": "Architectural Project",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "26172",
        "name": "Computer Rendering and Animation-II",
        "title": "Computer Rendering and Animation-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26173",
        "name": "Urban Planning",
        "title": "Urban Planning",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26174",
        "name": "Professional Practice",
        "title": "Professional Practice",
        "credit": 3,
        "c": 3,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 0,
        "p": 0,
        "marks": 150
      },
      {
        "code": "26175",
        "name": "Interior Design -II",
        "title": "Interior Design -II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27821",
        "name": "Basic Surveying",
        "title": "Basic Surveying",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "26181",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "26181",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "at": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26211",
        "name": "Automobile Fundamentals",
        "title": "Automobile Fundamentals",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26221",
        "name": "Automotive Engine System-I",
        "title": "Automotive Engine System-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27011",
        "name": "Basic Workshop Practice",
        "title": "Basic Workshop Practice",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      }
    ],
    "3": [
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26231",
        "name": "Automotive Engine System-II",
        "title": "Automotive Engine System-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27012",
        "name": "Machine Shop Practice-I",
        "title": "Machine Shop Practice-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "27031",
        "name": "Mechanical Engineering Materials",
        "title": "Mechanical Engineering Materials",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "4": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26241",
        "name": "Automotive Body Building",
        "title": "Automotive Body Building",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27041",
        "name": "Engineering Mechanics",
        "title": "Engineering Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27043",
        "name": "Metallurgy",
        "title": "Metallurgy",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27131",
        "name": "Engineering Thermodynamics",
        "title": "Engineering Thermodynamics",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27142",
        "name": "Fuels & Lubricants",
        "title": "Fuels & Lubricants",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26251",
        "name": "Automobile Air- Conditioning",
        "title": "Automobile Air- Conditioning",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26252",
        "name": "Advance Automotive Mechanisms",
        "title": "Advance Automotive Mechanisms",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27051",
        "name": "Fluid Mechanics & Machineries",
        "title": "Fluid Mechanics & Machineries",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27052",
        "name": "Mechanical Estimating & Costing",
        "title": "Mechanical Estimating & Costing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27053",
        "name": "Advanced Welding-I",
        "title": "Advanced Welding-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      },
      {
        "code": "27055",
        "name": "Manufacturing Process",
        "title": "Manufacturing Process",
        "credit": 3,
        "c": 3,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 0,
        "p": 0,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26261",
        "name": "Engine Overhauling & Inspection",
        "title": "Engine Overhauling & Inspection",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26262",
        "name": "Suspension, Brake, Steering & Transmission System of Vehicle",
        "title": "Suspension, Brake, Steering & Transmission System of Vehicle",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26263",
        "name": "Specialized Vehicles, Two & Three Wheelers",
        "title": "Specialized Vehicles, Two & Three Wheelers",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27054",
        "name": "Foundry & Pattern Making",
        "title": "Foundry & Pattern Making",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27061",
        "name": "Strength of Materials",
        "title": "Strength of Materials",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27062",
        "name": "Mechanical Measurement & Metrology",
        "title": "Mechanical Measurement & Metrology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26271",
        "name": "Electrical, Electronic & Vehicle Networking System",
        "title": "Electrical, Electronic & Vehicle Networking System",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26272",
        "name": "Automotive Testing & Emission Control",
        "title": "Automotive Testing & Emission Control",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26273",
        "name": "Shop Equipment, Service Station Operation & Workshop Practice",
        "title": "Shop Equipment, Service Station Operation & Workshop Practice",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26274",
        "name": "Automobile Engineering Project",
        "title": "Automobile Engineering Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "27071",
        "name": "Design of Machine Elements",
        "title": "Design of Machine Elements",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "29231",
        "name": "Mechatronics & PLC",
        "title": "Mechatronics & PLC",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "8": [
      {
        "code": "26281",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "26281",
        "name": "Industrial Attachment (Project Presentation)",
        "title": "Industrial Attachment (Project Presentation)",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "cht": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26311",
        "name": "Chemical Engineering Fundamentals",
        "title": "Chemical Engineering Fundamentals",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26312",
        "name": "Safety in Chemical Industry",
        "title": "Safety in Chemical Industry",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26321",
        "name": "Basic Stoichiometry",
        "title": "Basic Stoichiometry",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26322",
        "name": "Chemical Engineering Drawing",
        "title": "Chemical Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27011",
        "name": "Basic Workshop Practice",
        "title": "Basic Workshop Practice",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      }
    ],
    "3": [
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26331",
        "name": "Chemical Engineering Operation-I",
        "title": "Chemical Engineering Operation-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26332",
        "name": "Industrial Chemistry",
        "title": "Industrial Chemistry",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26333",
        "name": "Chemical Engineering Materials",
        "title": "Chemical Engineering Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "4": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26341",
        "name": "Chemical Engineering Operation-II",
        "title": "Chemical Engineering Operation-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26342",
        "name": "Chemical Process Industries-I",
        "title": "Chemical Process Industries-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26343",
        "name": "Oil, Fats & Waxes",
        "title": "Oil, Fats & Waxes",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26344",
        "name": "Analytical Chemistry",
        "title": "Analytical Chemistry",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "27041",
        "name": "Engineering Mechanics",
        "title": "Engineering Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26351",
        "name": "Chemical Engineering Operation-III",
        "title": "Chemical Engineering Operation-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26352",
        "name": "Chemical Process Industries-II",
        "title": "Chemical Process Industries-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26353",
        "name": "Water Treatment Technology",
        "title": "Water Treatment Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26354",
        "name": "Industrial Instrumentation & Process Control",
        "title": "Industrial Instrumentation & Process Control",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26355",
        "name": "Refrigeration & Cold Storage",
        "title": "Refrigeration & Cold Storage",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26356",
        "name": "Industrial Production Engineering",
        "title": "Industrial Production Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26361",
        "name": "Chemical Engineering Operation-IV",
        "title": "Chemical Engineering Operation-IV",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26362",
        "name": "Chemical Process Industries-III",
        "title": "Chemical Process Industries-III",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26363",
        "name": "Petroleum & Petrochemicals",
        "title": "Petroleum & Petrochemicals",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26364",
        "name": "Industrial Stoichiometry & Thermodynamics",
        "title": "Industrial Stoichiometry & Thermodynamics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26365",
        "name": "Instrumental Methods of Analysis",
        "title": "Instrumental Methods of Analysis",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26366",
        "name": "Jute & Textile Technology",
        "title": "Jute & Textile Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26371",
        "name": "Chemical Engineering Operation-V",
        "title": "Chemical Engineering Operation-V",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26372",
        "name": "Chemical Process Industries-IV",
        "title": "Chemical Process Industries-IV",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26373",
        "name": "Natural Gas & Fertilizer",
        "title": "Natural Gas & Fertilizer",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26374",
        "name": "Plastic & Polymer Technology",
        "title": "Plastic & Polymer Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26375",
        "name": "Corrosion Technology",
        "title": "Corrosion Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26376",
        "name": "Chemical Engineering Project",
        "title": "Chemical Engineering Project",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "26381",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "26381",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "ct": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26411",
        "name": "Civil Engineering Materials",
        "title": "Civil Engineering Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26421",
        "name": "Civil Engineering Drawing",
        "title": "Civil Engineering Drawing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27011",
        "name": "Basic Workshop Practice",
        "title": "Basic Workshop Practice",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      }
    ],
    "3": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26431",
        "name": "Structural Mechanics",
        "title": "Structural Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26432",
        "name": "Surveying-I",
        "title": "Surveying-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26433",
        "name": "Construction Process-I",
        "title": "Construction Process-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "4": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26441",
        "name": "Construction Process-II",
        "title": "Construction Process-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26442",
        "name": "Estimating & Costing-I",
        "title": "Estimating & Costing-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26443",
        "name": "Civil CAD-I",
        "title": "Civil CAD-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "26444",
        "name": "Surveying-II",
        "title": "Surveying-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26445",
        "name": "Geotechnical Engineering",
        "title": "Geotechnical Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26446",
        "name": "Hydrology",
        "title": "Hydrology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26521",
        "name": "Wood Workshop Practice",
        "title": "Wood Workshop Practice",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      }
    ],
    "5": [
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26451",
        "name": "Foundation Engineering",
        "title": "Foundation Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26452",
        "name": "Civil CAD-II",
        "title": "Civil CAD-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "26453",
        "name": "Surveying-III",
        "title": "Surveying-III",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26454",
        "name": "Theory of Structure",
        "title": "Theory of Structure",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26455",
        "name": "Water Supply Engineering",
        "title": "Water Supply Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26456",
        "name": "Hydraulics",
        "title": "Hydraulics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "26461",
        "name": "Water Resources Engineering",
        "title": "Water Resources Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26462",
        "name": "Advance Surveying",
        "title": "Advance Surveying",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26463",
        "name": "Transportation Engineering-I",
        "title": "Transportation Engineering-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26464",
        "name": "Design of Structure-I",
        "title": "Design of Structure-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28863",
        "name": "Steel Structures",
        "title": "Steel Structures",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28861",
        "name": "Advanced Construction",
        "title": "Advanced Construction",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26471",
        "name": "Civil Engineering Project",
        "title": "Civil Engineering Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26472",
        "name": "Sanitary Engineering",
        "title": "Sanitary Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26473",
        "name": "Transportation Engineering-II",
        "title": "Transportation Engineering-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26474",
        "name": "Design of Structure-II",
        "title": "Design of Structure-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26475",
        "name": "Estimating & Costing-II",
        "title": "Estimating & Costing-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28871",
        "name": "Construction Management & Documentation",
        "title": "Construction Management & Documentation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "26481",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "26481",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "cst": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28521",
        "name": "Python Programming",
        "title": "Python Programming",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28522",
        "name": "Computer Graphics Design-I",
        "title": "Computer Graphics Design-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "3": [
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28531",
        "name": "Application Development Using Python",
        "title": "Application Development Using Python",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28532",
        "name": "Computer Graphics Design-II",
        "title": "Computer Graphics Design-II",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "28533",
        "name": "IT Support Services",
        "title": "IT Support Services",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      },
      {
        "code": "26831",
        "name": "Digital Electronics-I",
        "title": "Digital Electronics-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "28541",
        "name": "Java Programming",
        "title": "Java Programming",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28542",
        "name": "Data Structure & Algorithm",
        "title": "Data Structure & Algorithm",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28543",
        "name": "Computer Peripherals & Interfacing",
        "title": "Computer Peripherals & Interfacing",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28544",
        "name": "Web Design & Development-I",
        "title": "Web Design & Development-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "26841",
        "name": "Digital Electronics-II",
        "title": "Digital Electronics-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "28551",
        "name": "Application Development Using Java",
        "title": "Application Development Using Java",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28552",
        "name": "Web Design & Development-II",
        "title": "Web Design & Development-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "28553",
        "name": "Computer Architecture & Microprocessor",
        "title": "Computer Architecture & Microprocessor",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28554",
        "name": "Data Communication",
        "title": "Data Communication",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28555",
        "name": "Operating System",
        "title": "Operating System",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28556",
        "name": "Project Work-I",
        "title": "Project Work-I",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      }
    ],
    "6": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "28561",
        "name": "Database Management System",
        "title": "Database Management System",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28562",
        "name": "Computer Networking",
        "title": "Computer Networking",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28563",
        "name": "Sensor & IoT System",
        "title": "Sensor & IoT System",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28564",
        "name": "Microcontroller Based System Design & Development",
        "title": "Microcontroller Based System Design & Development",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      },
      {
        "code": "28565",
        "name": "Surveillance Security System",
        "title": "Surveillance Security System",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "28566",
        "name": "Web Development Project",
        "title": "Web Development Project",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      }
    ],
    "7": [
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "28571",
        "name": "Digital Marketing Technique",
        "title": "Digital Marketing Technique",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28572",
        "name": "Network Administration & Services",
        "title": "Network Administration & Services",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28573",
        "name": "Cyber Security & Ethics",
        "title": "Cyber Security & Ethics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28574",
        "name": "Apps Development Project",
        "title": "Apps Development Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "28575",
        "name": "Multimedia & Animation",
        "title": "Multimedia & Animation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28576",
        "name": "Project Work-II",
        "title": "Project Work-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "8": [
      {
        "code": "28581",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "28581",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "const": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26411",
        "name": "Civil Engineering Materials",
        "title": "Civil Engineering Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26421",
        "name": "Civil Engineering Drawing",
        "title": "Civil Engineering Drawing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27011",
        "name": "Basic Workshop Practice",
        "title": "Basic Workshop Practice",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      }
    ],
    "3": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26431",
        "name": "Structural Mechanics",
        "title": "Structural Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26432",
        "name": "Surveying-I",
        "title": "Surveying-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "28831",
        "name": "Construction Methodology-I",
        "title": "Construction Methodology-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26442",
        "name": "Estimating & Costing-I",
        "title": "Estimating & Costing-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26443",
        "name": "Civil CAD-I",
        "title": "Civil CAD-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "26444",
        "name": "Surveying-II",
        "title": "Surveying-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26445",
        "name": "Geotechnical Engineering",
        "title": "Geotechnical Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26446",
        "name": "Hydrology",
        "title": "Hydrology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28841",
        "name": "Construction Methodology-II",
        "title": "Construction Methodology-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28842",
        "name": "Construction Safety",
        "title": "Construction Safety",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      }
    ],
    "5": [
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26451",
        "name": "Foundation Engineering",
        "title": "Foundation Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26452",
        "name": "Civil CAD-II",
        "title": "Civil CAD-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "26453",
        "name": "Surveying-III",
        "title": "Surveying-III",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26454",
        "name": "Theory of Structure",
        "title": "Theory of Structure",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26455",
        "name": "Water Supply Engineering",
        "title": "Water Supply Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "26456",
        "name": "Hydraulics",
        "title": "Hydraulics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26461",
        "name": "Water Resources Engineering",
        "title": "Water Resources Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26463",
        "name": "Transportation Engineering-I",
        "title": "Transportation Engineering-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26464",
        "name": "Design of Structure-I",
        "title": "Design of Structure-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28861",
        "name": "Advanced Construction",
        "title": "Advanced Construction",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28862",
        "name": "Building Facilities & Law",
        "title": "Building Facilities & Law",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28863",
        "name": "Steel Structures",
        "title": "Steel Structures",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26472",
        "name": "Sanitary Engineering",
        "title": "Sanitary Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26473",
        "name": "Transportation Engineering-II",
        "title": "Transportation Engineering-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26474",
        "name": "Design of Structure-II",
        "title": "Design of Structure-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26475",
        "name": "Estimating & Costing-II",
        "title": "Estimating & Costing-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28871",
        "name": "Construction Management & Documentation",
        "title": "Construction Management & Documentation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28872",
        "name": "Construction Engineering Project",
        "title": "Construction Engineering Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "8": [
      {
        "code": "28881",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "28881",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "et": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26712",
        "name": "Electrical Engineering Materials",
        "title": "Electrical Engineering Materials",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26721",
        "name": "Electrical Circuits-I",
        "title": "Electrical Circuits-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26722",
        "name": "Electrical Engineering Drawing",
        "title": "Electrical Engineering Drawing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "3": [
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26731",
        "name": "Electrical Circuits-II",
        "title": "Electrical Circuits-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26732",
        "name": "Electrical Appliances",
        "title": "Electrical Appliances",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26833",
        "name": "Industrial Electronics",
        "title": "Industrial Electronics",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "4": [
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26741",
        "name": "Electrical Installation, Planning and Estimating",
        "title": "Electrical Installation, Planning and Estimating",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26742",
        "name": "DC Machine",
        "title": "DC Machine",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26743",
        "name": "Electrical Engineering Project-I",
        "title": "Electrical Engineering Project-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26845",
        "name": "Digital Electronics",
        "title": "Digital Electronics",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27044",
        "name": "Applied Mechanics",
        "title": "Applied Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26751",
        "name": "Generation of Electrical Power",
        "title": "Generation of Electrical Power",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26752",
        "name": "Electrical & Electronic Measurements-I",
        "title": "Electrical & Electronic Measurements-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26753",
        "name": "Testing and Maintenance of Electrical Equipments",
        "title": "Testing and Maintenance of Electrical Equipments",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26754",
        "name": "Electrical Engineering Project-II",
        "title": "Electrical Engineering Project-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26853",
        "name": "Microprocessor & Microcontroller",
        "title": "Microprocessor & Microcontroller",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "6": [
      {
        "code": "28567",
        "name": "Programming in C",
        "title": "Programming in C",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26761",
        "name": "AC Machine-I",
        "title": "AC Machine-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26762",
        "name": "Transmission and Distribution of Electrical Power-I",
        "title": "Transmission and Distribution of Electrical Power-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26763",
        "name": "Electrical & Electronic Measurements-II",
        "title": "Electrical & Electronic Measurements-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26842",
        "name": "Communication Engineering",
        "title": "Communication Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26771",
        "name": "AC Machine-II",
        "title": "AC Machine-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26772",
        "name": "Transmission and Distribution of Electrical Power-II",
        "title": "Transmission and Distribution of Electrical Power-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26773",
        "name": "Switch Gear and Protection",
        "title": "Switch Gear and Protection",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26774",
        "name": "Electrical Engineering Project-III",
        "title": "Electrical Engineering Project-III",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26875",
        "name": "Automation Engineering & PLC",
        "title": "Automation Engineering & PLC",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "8": [
      {
        "code": "26781",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "26781",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "emt": {
    "1": [
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28611",
        "name": "Human Anatomy and Physiology",
        "title": "Human Anatomy and Physiology",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26721",
        "name": "Electrical Circuits-I",
        "title": "Electrical Circuits-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28621",
        "name": "Basic Biomedical Engineering",
        "title": "Basic Biomedical Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "3": [
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26731",
        "name": "Electrical Circuits-II",
        "title": "Electrical Circuits-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28631",
        "name": "Medical transducer and Sensors",
        "title": "Medical transducer and Sensors",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28632",
        "name": "Operating Room Equipment",
        "title": "Operating Room Equipment",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      }
    ],
    "4": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26741",
        "name": "Electrical Installation, Planning and Estimating",
        "title": "Electrical Installation, Planning and Estimating",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26742",
        "name": "DC Machine",
        "title": "DC Machine",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26752",
        "name": "Electrical & Electronic Measurements-I",
        "title": "Electrical & Electronic Measurements-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26845",
        "name": "Digital Electronics",
        "title": "Digital Electronics",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28641",
        "name": "Dental Equipment",
        "title": "Dental Equipment",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "28642",
        "name": "Anesthesia and Respiratory Equipment",
        "title": "Anesthesia and Respiratory Equipment",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "28567",
        "name": "Programming in C",
        "title": "Programming in C",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26761",
        "name": "AC Machine-I",
        "title": "AC Machine-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26763",
        "name": "Electrical & Electronic Measurements-II",
        "title": "Electrical & Electronic Measurements-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28651",
        "name": "Radiology and Imaging Equipment",
        "title": "Radiology and Imaging Equipment",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28652",
        "name": "Fibre Optics and Laser in Medical Field",
        "title": "Fibre Optics and Laser in Medical Field",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28653",
        "name": "Physiotherapy and Rehabilitation Devices",
        "title": "Physiotherapy and Rehabilitation Devices",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      }
    ],
    "6": [
      {
        "code": "26764",
        "name": "Transmission and Distribution of Electrical Power",
        "title": "Transmission and Distribution of Electrical Power",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26771",
        "name": "AC Machine-II",
        "title": "AC Machine-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28661",
        "name": "Diagnostic and Laboratory Equipment",
        "title": "Diagnostic and Laboratory Equipment",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28662",
        "name": "Microprocessor and Biomedical Application",
        "title": "Microprocessor and Biomedical Application",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28663",
        "name": "Testing and Maintenance Biomedical Equipment",
        "title": "Testing and Maintenance Biomedical Equipment",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "28664",
        "name": "CAD in Biomedical Engineering",
        "title": "CAD in Biomedical Engineering",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26773",
        "name": "Switch Gear and Protection",
        "title": "Switch Gear and Protection",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28671",
        "name": "Advance Biomedical Equipment",
        "title": "Advance Biomedical Equipment",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28672",
        "name": "ICU and CCU Equipment",
        "title": "ICU and CCU Equipment",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28673",
        "name": "Biomedical Engineering Project",
        "title": "Biomedical Engineering Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "28674",
        "name": "Medical Physics and Nuclear Instruments",
        "title": "Medical Physics and Nuclear Instruments",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "28681",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "28681",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "ent": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26721",
        "name": "Electrical Circuits-I",
        "title": "Electrical Circuits-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26821",
        "name": "Electronic Devices and Circuits",
        "title": "Electronic Devices and Circuits",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26731",
        "name": "Electrical Circuits-II",
        "title": "Electrical Circuits-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26831",
        "name": "Digital Electronics-I",
        "title": "Digital Electronics-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26832",
        "name": "Power Electronics",
        "title": "Power Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26741",
        "name": "Electrical Installation, Planning and Estimating",
        "title": "Electrical Installation, Planning and Estimating",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26742",
        "name": "DC Machine",
        "title": "DC Machine",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26841",
        "name": "Digital Electronics-II",
        "title": "Digital Electronics-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26842",
        "name": "Communication Engineering",
        "title": "Communication Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26843",
        "name": "Networks, Filters and Transmission lines",
        "title": "Networks, Filters and Transmission lines",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26844",
        "name": "Electronic servicing",
        "title": "Electronic servicing",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      }
    ],
    "5": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "28567",
        "name": "Programming in C",
        "title": "Programming in C",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26751",
        "name": "Generation of Electrical Power",
        "title": "Generation of Electrical Power",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26752",
        "name": "Electrical & Electronic Measurements-I",
        "title": "Electrical & Electronic Measurements-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26851",
        "name": "Television Engineering",
        "title": "Television Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26852",
        "name": "Electronic Appliances",
        "title": "Electronic Appliances",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "28654",
        "name": "Bio-Medical Instruments",
        "title": "Bio-Medical Instruments",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "26761",
        "name": "AC Machine-I",
        "title": "AC Machine-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26764",
        "name": "Transmission and Distribution of Electrical Power",
        "title": "Transmission and Distribution of Electrical Power",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26763",
        "name": "Electrical & Electronic Measurements-II",
        "title": "Electrical & Electronic Measurements-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26861",
        "name": "TV Studio and Broadcasting",
        "title": "TV Studio and Broadcasting",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26862",
        "name": "Microcontroller and Embedded System",
        "title": "Microcontroller and Embedded System",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26863",
        "name": "PCB Design and Prototyping",
        "title": "PCB Design and Prototyping",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26771",
        "name": "AC Machine-II",
        "title": "AC Machine-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26871",
        "name": "Microwave Radar and Navigation Aids",
        "title": "Microwave Radar and Navigation Aids",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26872",
        "name": "Industrial Automation and PLC",
        "title": "Industrial Automation and PLC",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26873",
        "name": "Control System and Robotics",
        "title": "Control System and Robotics",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26874",
        "name": "Electronic Project",
        "title": "Electronic Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "8": [
      {
        "code": "26881",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "26881",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "envt": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "29011",
        "name": "Basic Environmental Engineering",
        "title": "Basic Environmental Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26421",
        "name": "Civil Engineering Drawing",
        "title": "Civil Engineering Drawing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "3": [
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26411",
        "name": "Civil Engineering Materials",
        "title": "Civil Engineering Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26432",
        "name": "Surveying-I",
        "title": "Surveying-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26433",
        "name": "Construction Process-I",
        "title": "Construction Process-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27011",
        "name": "Basic Workshop Practice",
        "title": "Basic Workshop Practice",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "29031",
        "name": "Water Quality Engineering",
        "title": "Water Quality Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26431",
        "name": "Structural Mechanics",
        "title": "Structural Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26442",
        "name": "Estimating & Costing-I",
        "title": "Estimating & Costing-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26443",
        "name": "Civil CAD-I",
        "title": "Civil CAD-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "26444",
        "name": "Surveying-II",
        "title": "Surveying-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26445",
        "name": "Geotechnical Engineering",
        "title": "Geotechnical Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29042",
        "name": "Environmental Chemistry",
        "title": "Environmental Chemistry",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26441",
        "name": "Construction Process-II",
        "title": "Construction Process-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26454",
        "name": "Theory of Structure",
        "title": "Theory of Structure",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26455",
        "name": "Water Supply Engineering",
        "title": "Water Supply Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29051",
        "name": "Water and Waste Water Engineering",
        "title": "Water and Waste Water Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29052",
        "name": "Environmental Microbiology",
        "title": "Environmental Microbiology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29053",
        "name": "Geographic Information System (GIS) & Remote Sensing",
        "title": "Geographic Information System (GIS) & Remote Sensing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26456",
        "name": "Hydraulics",
        "title": "Hydraulics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26463",
        "name": "Transportation Engineering-I",
        "title": "Transportation Engineering-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26464",
        "name": "Design of Structure-I",
        "title": "Design of Structure-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29061",
        "name": "Environmental Impact Assessment (EIA) & Environmental Regulation",
        "title": "Environmental Impact Assessment (EIA) & Environmental Regulation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29062",
        "name": "Air Pollution & Control Engineering",
        "title": "Air Pollution & Control Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29063",
        "name": "Environmental Auditing",
        "title": "Environmental Auditing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "29064",
        "name": "Health, Safety & Environment",
        "title": "Health, Safety & Environment",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26472",
        "name": "Sanitary Engineering",
        "title": "Sanitary Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26475",
        "name": "Estimating & Costing-II",
        "title": "Estimating & Costing-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28871",
        "name": "Construction Management & Documentation",
        "title": "Construction Management & Documentation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29071",
        "name": "Energy & Environmental Engineering",
        "title": "Energy & Environmental Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29072",
        "name": "Solid and Hazardous Waste Engineering",
        "title": "Solid and Hazardous Waste Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29073",
        "name": "Climate Change and Adaptability",
        "title": "Climate Change and Adaptability",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "29081",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "29081",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "ft": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26911",
        "name": "Food Engineering Fundamentals",
        "title": "Food Engineering Fundamentals",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26912",
        "name": "Food Safety & Hygiene Management",
        "title": "Food Safety & Hygiene Management",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26921",
        "name": "Food Science & Nutrition",
        "title": "Food Science & Nutrition",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26922",
        "name": "Food Plant Layout & Design",
        "title": "Food Plant Layout & Design",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "27011",
        "name": "Basic Workshop Practice",
        "title": "Basic Workshop Practice",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      }
    ],
    "3": [
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26931",
        "name": "Catering Management",
        "title": "Catering Management",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26932",
        "name": "Food Industrial Chemistry",
        "title": "Food Industrial Chemistry",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26941",
        "name": "Food Microbiology-I",
        "title": "Food Microbiology-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26942",
        "name": "Food Preservation-I",
        "title": "Food Preservation-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26943",
        "name": "Food Chemistry",
        "title": "Food Chemistry",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26944",
        "name": "Food Packaging",
        "title": "Food Packaging",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26945",
        "name": "Dairy Products",
        "title": "Dairy Products",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27041",
        "name": "Engineering Mechanics",
        "title": "Engineering Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26355",
        "name": "Refrigeration & Cold Storage",
        "title": "Refrigeration & Cold Storage",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26951",
        "name": "Food Microbiology-II",
        "title": "Food Microbiology-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26952",
        "name": "Food Preservation-II",
        "title": "Food Preservation-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26953",
        "name": "Food Biotechnology",
        "title": "Food Biotechnology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26954",
        "name": "Food & Beverage Products",
        "title": "Food & Beverage Products",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26955",
        "name": "Food Industrial Instrumentation & Process Control",
        "title": "Food Industrial Instrumentation & Process Control",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "26364",
        "name": "Industrial Stoichiometry & Thermodynamics",
        "title": "Industrial Stoichiometry & Thermodynamics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26365",
        "name": "Instrumental Methods of Analysis",
        "title": "Instrumental Methods of Analysis",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26961",
        "name": "Food Engineering Operation-I",
        "title": "Food Engineering Operation-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26962",
        "name": "Food Process Industries-I",
        "title": "Food Process Industries-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26963",
        "name": "Bakery Products",
        "title": "Bakery Products",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26964",
        "name": "Food Adulteration & Toxicology",
        "title": "Food Adulteration & Toxicology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26971",
        "name": "Food Engineering Operation-II",
        "title": "Food Engineering Operation-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26972",
        "name": "Food Process Industries-II",
        "title": "Food Process Industries-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26973",
        "name": "Food Quality Control & Assurance",
        "title": "Food Quality Control & Assurance",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26974",
        "name": "Confectionery Products",
        "title": "Confectionery Products",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26975",
        "name": "Food Analysis",
        "title": "Food Analysis",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26976",
        "name": "Food Engineering Project",
        "title": "Food Engineering Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "8": [
      {
        "code": "26981",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "26981",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "mt": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27011",
        "name": "Basic Workshop Practice",
        "title": "Basic Workshop Practice",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "27012",
        "name": "Machine Shop Practice-I",
        "title": "Machine Shop Practice-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27021",
        "name": "Mechanical Engineering Drawing",
        "title": "Mechanical Engineering Drawing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      }
    ],
    "3": [
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27031",
        "name": "Mechanical Engineering Materials",
        "title": "Mechanical Engineering Materials",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "27032",
        "name": "Machine Shop Practice-II",
        "title": "Machine Shop Practice-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "27231",
        "name": "RAC Cycles and Components",
        "title": "RAC Cycles and Components",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "4": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27041",
        "name": "Engineering Mechanics",
        "title": "Engineering Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27042",
        "name": "Machine Shop Practice III",
        "title": "Machine Shop Practice III",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "27043",
        "name": "Metallurgy",
        "title": "Metallurgy",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27131",
        "name": "Engineering Thermodynamics",
        "title": "Engineering Thermodynamics",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "27051",
        "name": "Fluid Mechanics & Machineries",
        "title": "Fluid Mechanics & Machineries",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27052",
        "name": "Mechanical Estimating & Costing",
        "title": "Mechanical Estimating & Costing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27053",
        "name": "Advanced Welding-I",
        "title": "Advanced Welding-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      },
      {
        "code": "27054",
        "name": "Foundry & Pattern Making",
        "title": "Foundry & Pattern Making",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27055",
        "name": "Manufacturing Process",
        "title": "Manufacturing Process",
        "credit": 3,
        "c": 3,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 0,
        "p": 0,
        "marks": 150
      },
      {
        "code": "28567",
        "name": "Programming in C",
        "title": "Programming in C",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26211",
        "name": "Automobile Fundamentals",
        "title": "Automobile Fundamentals",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27061",
        "name": "Strength of Materials",
        "title": "Strength of Materials",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27062",
        "name": "Mechanical Measurement & Metrology",
        "title": "Mechanical Measurement & Metrology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27063",
        "name": "CAD & CAM",
        "title": "CAD & CAM",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "27064",
        "name": "Advanced Welding-II",
        "title": "Advanced Welding-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27065",
        "name": "Plant Engineering & Maintainance",
        "title": "Plant Engineering & Maintainance",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "27071",
        "name": "Design of Machine Elements",
        "title": "Design of Machine Elements",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27072",
        "name": "Tool Design",
        "title": "Tool Design",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27073",
        "name": "Heat Treatment of Metal",
        "title": "Heat Treatment of Metal",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27074",
        "name": "Mechanical Engineering Project",
        "title": "Mechanical Engineering Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "27075",
        "name": "Production Planning & Control",
        "title": "Production Planning & Control",
        "credit": 3,
        "c": 3,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 0,
        "p": 0,
        "marks": 150
      },
      {
        "code": "29231",
        "name": "Mechatronics & PLC",
        "title": "Mechatronics & PLC",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "8": [
      {
        "code": "27081",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "27081",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "pt": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27111",
        "name": "Power Engineering Fundamental",
        "title": "Power Engineering Fundamental",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27011",
        "name": "Basic Workshop Practice",
        "title": "Basic Workshop Practice",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "27121",
        "name": "Power Equipment Management & Safety",
        "title": "Power Equipment Management & Safety",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "3": [
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27012",
        "name": "Machine Shop Practice-I",
        "title": "Machine Shop Practice-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "27131",
        "name": "Engineering Thermodynamics",
        "title": "Engineering Thermodynamics",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27231",
        "name": "RAC Cycles and Components",
        "title": "RAC Cycles and Components",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "27041",
        "name": "Engineering Mechanics",
        "title": "Engineering Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27043",
        "name": "Metallurgy",
        "title": "Metallurgy",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27141",
        "name": "IC Engine Details",
        "title": "IC Engine Details",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      },
      {
        "code": "27142",
        "name": "Fuels & Lubricants",
        "title": "Fuels & Lubricants",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26262",
        "name": "Suspension, Brake, Steering & Transmission System of Vehicle",
        "title": "Suspension, Brake, Steering & Transmission System of Vehicle",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28567",
        "name": "Programming in C",
        "title": "Programming in C",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26241",
        "name": "Automotive Body Building",
        "title": "Automotive Body Building",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27051",
        "name": "Fluid Mechanics & Machineries",
        "title": "Fluid Mechanics & Machineries",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27053",
        "name": "Advanced Welding-I",
        "title": "Advanced Welding-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      },
      {
        "code": "27151",
        "name": "Automotive Electricity, Electronics & Automation",
        "title": "Automotive Electricity, Electronics & Automation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27152",
        "name": "Power Plant Engineering",
        "title": "Power Plant Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "26764",
        "name": "Transmission and Distribution of Electrical Power",
        "title": "Transmission and Distribution of Electrical Power",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27061",
        "name": "Strength of Materials",
        "title": "Strength of Materials",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27062",
        "name": "Mechanical Measurement & Metrology",
        "title": "Mechanical Measurement & Metrology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27065",
        "name": "Plant Engineering & Maintainance",
        "title": "Plant Engineering & Maintainance",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27161",
        "name": "Engine Overhauling, Inspection & Testing",
        "title": "Engine Overhauling, Inspection & Testing",
        "credit": 4,
        "c": 4,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 6,
        "p": 6,
        "marks": 200
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "27071",
        "name": "Design of Machine Elements",
        "title": "Design of Machine Elements",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27073",
        "name": "Heat Treatment of Metal",
        "title": "Heat Treatment of Metal",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27171",
        "name": "Service Station Operation & Estimating",
        "title": "Service Station Operation & Estimating",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27172",
        "name": "Hybrid & Electric Vehicle",
        "title": "Hybrid & Electric Vehicle",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27173",
        "name": "Power Engineering Project",
        "title": "Power Engineering Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "8": [
      {
        "code": "27181",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "27181",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "rac": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27011",
        "name": "Basic Workshop Practice",
        "title": "Basic Workshop Practice",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "27211",
        "name": "RAC Fundamental",
        "title": "RAC Fundamental",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27021",
        "name": "Mechanical Engineering Drawing",
        "title": "Mechanical Engineering Drawing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "27031",
        "name": "Mechanical Engineering Materials",
        "title": "Mechanical Engineering Materials",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "3": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26211",
        "name": "Automobile Fundamentals",
        "title": "Automobile Fundamentals",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27131",
        "name": "Engineering Thermodynamics",
        "title": "Engineering Thermodynamics",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27231",
        "name": "RAC Cycles and Components",
        "title": "RAC Cycles and Components",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "27012",
        "name": "Machine Shop Practice-I",
        "title": "Machine Shop Practice-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "27041",
        "name": "Engineering Mechanics",
        "title": "Engineering Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27241",
        "name": "Circuits and Electrical Machine in RAC",
        "title": "Circuits and Electrical Machine in RAC",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27242",
        "name": "Transport RAC",
        "title": "Transport RAC",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "5": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "27043",
        "name": "Metallurgy",
        "title": "Metallurgy",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27051",
        "name": "Fluid Mechanics & Machineries",
        "title": "Fluid Mechanics & Machineries",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27052",
        "name": "Mechanical Estimating & Costing",
        "title": "Mechanical Estimating & Costing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27251",
        "name": "Heating Ventilation & Air Conditioning (HVAC)",
        "title": "Heating Ventilation & Air Conditioning (HVAC)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27252",
        "name": "Commercial & Industrial RAC",
        "title": "Commercial & Industrial RAC",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28567",
        "name": "Programming in C",
        "title": "Programming in C",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "27055",
        "name": "Manufacturing Process",
        "title": "Manufacturing Process",
        "credit": 3,
        "c": 3,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 0,
        "p": 0,
        "marks": 150
      },
      {
        "code": "27061",
        "name": "Strength of Materials",
        "title": "Strength of Materials",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27063",
        "name": "CAD & CAM",
        "title": "CAD & CAM",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "27065",
        "name": "Plant Engineering & Maintainance",
        "title": "Plant Engineering & Maintainance",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27261",
        "name": "Cooling & Heating Load Calculation",
        "title": "Cooling & Heating Load Calculation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27262",
        "name": "RAC Plant Installation Maintenance & Operation",
        "title": "RAC Plant Installation Maintenance & Operation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "27075",
        "name": "Production Planning & Control",
        "title": "Production Planning & Control",
        "credit": 3,
        "c": 3,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 0,
        "p": 0,
        "marks": 150
      },
      {
        "code": "27271",
        "name": "RAC System Analysis",
        "title": "RAC System Analysis",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27272",
        "name": "RAC Project",
        "title": "RAC Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "27273",
        "name": "Advance RAC",
        "title": "Advance RAC",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "27274",
        "name": "RAC for Food Preservation",
        "title": "RAC for Food Preservation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29231",
        "name": "Mechatronics & PLC",
        "title": "Mechatronics & PLC",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "8": [
      {
        "code": "27281",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "27281",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "tct": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "29411",
        "name": "Basics of Telecommunication",
        "title": "Basics of Telecommunication",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26721",
        "name": "Electrical Circuits-I",
        "title": "Electrical Circuits-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "3": [
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "26731",
        "name": "Electrical Circuits-II",
        "title": "Electrical Circuits-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26821",
        "name": "Electronic Devices and Circuits",
        "title": "Electronic Devices and Circuits",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "29431",
        "name": "Telecom Workshop and Outside Plant",
        "title": "Telecom Workshop and Outside Plant",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "28567",
        "name": "Programming in C",
        "title": "Programming in C",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26741",
        "name": "Electrical Installation, Planning and Estimating",
        "title": "Electrical Installation, Planning and Estimating",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26845",
        "name": "Digital Electronics",
        "title": "Digital Electronics",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "29441",
        "name": "Radio and TV Engineering",
        "title": "Radio and TV Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29442",
        "name": "IT Support and IoT Basics",
        "title": "IT Support and IoT Basics",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "29443",
        "name": "Data Communications and Networking",
        "title": "Data Communications and Networking",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26742",
        "name": "DC Machine",
        "title": "DC Machine",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26751",
        "name": "Generation of Electrical Power",
        "title": "Generation of Electrical Power",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26752",
        "name": "Electrical & Electronic Measurements-I",
        "title": "Electrical & Electronic Measurements-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26853",
        "name": "Microprocessor & Microcontroller",
        "title": "Microprocessor & Microcontroller",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "29451",
        "name": "Multimedia and Webpage Design",
        "title": "Multimedia and Webpage Design",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "26761",
        "name": "AC Machine-I",
        "title": "AC Machine-I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26763",
        "name": "Electrical & Electronic Measurements-II",
        "title": "Electrical & Electronic Measurements-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26764",
        "name": "Transmission and Distribution of Electrical Power",
        "title": "Transmission and Distribution of Electrical Power",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29462",
        "name": "Wireless and Mobile Communication",
        "title": "Wireless and Mobile Communication",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29463",
        "name": "Signals and Switching System",
        "title": "Signals and Switching System",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26771",
        "name": "AC Machine-II",
        "title": "AC Machine-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26773",
        "name": "Switch Gear and Protection",
        "title": "Switch Gear and Protection",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "29471",
        "name": "Microwave Engineering and Antennas",
        "title": "Microwave Engineering and Antennas",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29472",
        "name": "Optical Fiber Communication",
        "title": "Optical Fiber Communication",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29473",
        "name": "Satellite Communication and RADAR",
        "title": "Satellite Communication and RADAR",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "26781",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "26781",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  },
  "aidt": {
    "1": [
      {
        "code": "21011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "25711",
        "name": "Bangla-I",
        "title": "Bangla-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25712",
        "name": "English-I",
        "title": "English-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25911",
        "name": "Mathematics -I",
        "title": "Mathematics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26411",
        "name": "Civil Engineering Materials",
        "title": "Civil Engineering Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "25721",
        "name": "Bangla -II",
        "title": "Bangla -II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25722",
        "name": "English-II",
        "title": "English-II",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25812",
        "name": "Physical Education & Life Skills Development",
        "title": "Physical Education & Life Skills Development",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      },
      {
        "code": "25912",
        "name": "Physics -I",
        "title": "Physics -I",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25921",
        "name": "Mathematics-II",
        "title": "Mathematics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26421",
        "name": "Civil Engineering Drawing",
        "title": "Civil Engineering Drawing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "26811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "27011",
        "name": "Basic Workshop Practice",
        "title": "Basic Workshop Practice",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      }
    ],
    "3": [
      {
        "code": "25831",
        "name": "Business Communication",
        "title": "Business Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25922",
        "name": "Physics-II",
        "title": "Physics-II",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "25931",
        "name": "Mathematics-III",
        "title": "Mathematics-III",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "26431",
        "name": "Structural Mechanics",
        "title": "Structural Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26432",
        "name": "Surveying-I",
        "title": "Surveying-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28511",
        "name": "Computer Office Application",
        "title": "Computer Office Application",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "28831",
        "name": "Construction Methodology-I",
        "title": "Construction Methodology-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "25841",
        "name": "Accounting",
        "title": "Accounting",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26442",
        "name": "Estimating & Costing-I",
        "title": "Estimating & Costing-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26443",
        "name": "Civil CAD-I",
        "title": "Civil CAD-I",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      },
      {
        "code": "26444",
        "name": "Surveying-II",
        "title": "Surveying-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26445",
        "name": "Geotechnical Engineering",
        "title": "Geotechnical Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26446",
        "name": "Hydrology",
        "title": "Hydrology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28841",
        "name": "Construction Methodology-II",
        "title": "Construction Methodology-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28842",
        "name": "Construction Safety",
        "title": "Construction Safety",
        "credit": 2,
        "c": 2,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 3,
        "p": 3,
        "marks": 100
      }
    ],
    "5": [
      {
        "code": "25852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26451",
        "name": "Foundation Engineering",
        "title": "Foundation Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26452",
        "name": "Civil CAD-II",
        "title": "Civil CAD-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 1,
        "t": 1,
        "practical_per_week": 6,
        "p": 6,
        "marks": 150
      },
      {
        "code": "26453",
        "name": "Surveying-III",
        "title": "Surveying-III",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26454",
        "name": "Theory of Structure",
        "title": "Theory of Structure",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26455",
        "name": "Water Supply Engineering",
        "title": "Water Supply Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "29041",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "26456",
        "name": "Hydraulics",
        "title": "Hydraulics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26461",
        "name": "Water Resources Engineering",
        "title": "Water Resources Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26463",
        "name": "Transportation Engineering-I",
        "title": "Transportation Engineering-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26464",
        "name": "Design of Structure-I",
        "title": "Design of Structure-I",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28861",
        "name": "Advanced Construction",
        "title": "Advanced Construction",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28862",
        "name": "Building Facilities & Law",
        "title": "Building Facilities & Law",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28863",
        "name": "Steel Structures",
        "title": "Steel Structures",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "25851",
        "name": "Principles of Marketing",
        "title": "Principles of Marketing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "25853",
        "name": "Innovation & Entrepreneurship",
        "title": "Innovation & Entrepreneurship",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "26472",
        "name": "Sanitary Engineering",
        "title": "Sanitary Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26473",
        "name": "Transportation Engineering-II",
        "title": "Transportation Engineering-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26474",
        "name": "Design of Structure-II",
        "title": "Design of Structure-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "26475",
        "name": "Estimating & Costing-II",
        "title": "Estimating & Costing-II",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28871",
        "name": "Construction Management & Documentation",
        "title": "Construction Management & Documentation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "28872",
        "name": "Construction Engineering Project",
        "title": "Construction Engineering Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "8": [
      {
        "code": "28881",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      },
      {
        "code": "28881",
        "name": "Project Presentation",
        "title": "Project Presentation",
        "credit": 4,
        "c": 4,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 12,
        "p": 12,
        "marks": 200
      }
    ]
  }
},
  "2016": {
  "arch": {
    "1": [
      {
        "code": "66111",
        "name": "Architectural Graphics-1",
        "title": "Architectural Graphics-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66112",
        "name": "Basic Design",
        "title": "Basic Design",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65712",
        "name": "English",
        "title": "English",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "2": [
      {
        "code": "66121",
        "name": "Architectural Graphics-2",
        "title": "Architectural Graphics-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66122",
        "name": "Building Construction-1",
        "title": "Building Construction-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "66131",
        "name": "Architectural Design-1",
        "title": "Architectural Design-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66132",
        "name": "History of Architecture-1",
        "title": "History of Architecture-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66133",
        "name": "Building Materials",
        "title": "Building Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "66141",
        "name": "Architectural Design-2",
        "title": "Architectural Design-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66142",
        "name": "Computer Aided Architectural Drawing",
        "title": "Computer Aided Architectural Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "66143",
        "name": "Climatology",
        "title": "Climatology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "66151",
        "name": "Architectural Design-3",
        "title": "Architectural Design-3",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66152",
        "name": "Urban Planning Basics",
        "title": "Urban Planning Basics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66153",
        "name": "Landscape Architecture",
        "title": "Landscape Architecture",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "66161",
        "name": "Architectural Design-4",
        "title": "Architectural Design-4",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66162",
        "name": "Interior Architecture",
        "title": "Interior Architecture",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66163",
        "name": "Building Services & Acoustics",
        "title": "Building Services & Acoustics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "7": [
      {
        "code": "66171",
        "name": "Comprehensive Architectural Project",
        "title": "Comprehensive Architectural Project",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66172",
        "name": "Professional Practice & Building Codes",
        "title": "Professional Practice & Building Codes",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "66181",
        "name": "Professional Internship",
        "title": "Professional Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "at": {
    "1": [
      {
        "code": "66211",
        "name": "Automotive Workshop",
        "title": "Automotive Workshop",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66212",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "66221",
        "name": "Internal Combustion Engine-1",
        "title": "Internal Combustion Engine-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66222",
        "name": "Automotive Fuel Systems",
        "title": "Automotive Fuel Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "66231",
        "name": "Internal Combustion Engine-2",
        "title": "Internal Combustion Engine-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66232",
        "name": "Automotive Transmission",
        "title": "Automotive Transmission",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66233",
        "name": "Auto Electricity",
        "title": "Auto Electricity",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "66241",
        "name": "Automotive Steering & Suspension",
        "title": "Automotive Steering & Suspension",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66242",
        "name": "Automotive Brake Systems",
        "title": "Automotive Brake Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66243",
        "name": "Vehicle Dynamics",
        "title": "Vehicle Dynamics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "66251",
        "name": "Automotive Electronics & ECU",
        "title": "Automotive Electronics & ECU",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66252",
        "name": "Electric & Hybrid Vehicles",
        "title": "Electric & Hybrid Vehicles",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66253",
        "name": "Diesel Injection Systems",
        "title": "Diesel Injection Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "66261",
        "name": "Vehicle Testing & Diagnostics",
        "title": "Vehicle Testing & Diagnostics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66262",
        "name": "Motor Vehicle Regulations & Inspection",
        "title": "Motor Vehicle Regulations & Inspection",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "66271",
        "name": "Automobile Trouble Shooting & Overhauling",
        "title": "Automobile Trouble Shooting & Overhauling",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66272",
        "name": "Auto CAD & Design",
        "title": "Auto CAD & Design",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "8": [
      {
        "code": "66281",
        "name": "Industrial Internship",
        "title": "Industrial Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "cht": {
    "1": [
      {
        "code": "66311",
        "name": "Inorganic Chemistry",
        "title": "Inorganic Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "66312",
        "name": "Chemical Process Calculations",
        "title": "Chemical Process Calculations",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "66321",
        "name": "Organic Chemistry",
        "title": "Organic Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "66322",
        "name": "Unit Operations-1 (Fluid Mechanics)",
        "title": "Unit Operations-1 (Fluid Mechanics)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "66331",
        "name": "Physical Chemistry",
        "title": "Physical Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "66332",
        "name": "Unit Operations-2 (Heat Transfer)",
        "title": "Unit Operations-2 (Heat Transfer)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66333",
        "name": "Chemical Thermodynamics",
        "title": "Chemical Thermodynamics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "66341",
        "name": "Mass Transfer Operations",
        "title": "Mass Transfer Operations",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66342",
        "name": "Chemical Reaction Engineering",
        "title": "Chemical Reaction Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66343",
        "name": "Process Control",
        "title": "Process Control",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "66351",
        "name": "Fertilizer & Polymer Technology",
        "title": "Fertilizer & Polymer Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66352",
        "name": "Petroleum Refining & Gas Processing",
        "title": "Petroleum Refining & Gas Processing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66353",
        "name": "Corrosion Science",
        "title": "Corrosion Science",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "66361",
        "name": "Industrial Safety & Hazard Control",
        "title": "Industrial Safety & Hazard Control",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66362",
        "name": "Effluent Treatment (ETP)",
        "title": "Effluent Treatment (ETP)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "66371",
        "name": "Chemical Plant Design & Economics",
        "title": "Chemical Plant Design & Economics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66372",
        "name": "Biochemical Technology",
        "title": "Biochemical Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "66381",
        "name": "Chemical Plant Internship",
        "title": "Chemical Plant Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "ct": {
    "1": [
      {
        "code": "66411",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "66412",
        "name": "Civil Engineering Materials",
        "title": "Civil Engineering Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65712",
        "name": "English",
        "title": "English",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "2": [
      {
        "code": "66421",
        "name": "Surveying-1",
        "title": "Surveying-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66422",
        "name": "Construction Process-1",
        "title": "Construction Process-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "3": [
      {
        "code": "66431",
        "name": "Surveying-2",
        "title": "Surveying-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66432",
        "name": "Mechanics of Structures",
        "title": "Mechanics of Structures",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66433",
        "name": "Construction Process-2",
        "title": "Construction Process-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65931",
        "name": "Mathematics-3",
        "title": "Mathematics-3",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "4": [
      {
        "code": "66441",
        "name": "Structural Mechanics",
        "title": "Structural Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66442",
        "name": "Theory of Structure",
        "title": "Theory of Structure",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "69054",
        "name": "Environmental Studies",
        "title": "Environmental Studies",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66444",
        "name": "Estimating & Costing-1",
        "title": "Estimating & Costing-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "66451",
        "name": "Foundation Engineering",
        "title": "Foundation Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66452",
        "name": "Design of Structure-1",
        "title": "Design of Structure-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66453",
        "name": "Transportation Engineering-1",
        "title": "Transportation Engineering-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66454",
        "name": "Water Resources Engineering",
        "title": "Water Resources Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "66461",
        "name": "Design of Structure-2",
        "title": "Design of Structure-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66462",
        "name": "Transportation Engineering-2",
        "title": "Transportation Engineering-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66463",
        "name": "Estimating & Costing-2",
        "title": "Estimating & Costing-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66464",
        "name": "Civil Project & Internship",
        "title": "Civil Project & Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ],
    "7": [
      {
        "code": "66471",
        "name": "Civil Engineering Drawing-3 (CAD)",
        "title": "Civil Engineering Drawing-3 (CAD)",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "66472",
        "name": "Design of Steel Structure",
        "title": "Design of Steel Structure",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66473",
        "name": "Construction Management",
        "title": "Construction Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "8": [
      {
        "code": "66481",
        "name": "Industrial Training / Internship",
        "title": "Industrial Training / Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "cst": {
    "1": [
      {
        "code": "66611",
        "name": "Computer Fundamentals & Application",
        "title": "Computer Fundamentals & Application",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "61011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65712",
        "name": "English",
        "title": "English",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "65711",
        "name": "Bangla",
        "title": "Bangla",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "2": [
      {
        "code": "66621",
        "name": "Programming Essentials (Python/C)",
        "title": "Programming Essentials (Python/C)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66622",
        "name": "Computer Graphics",
        "title": "Computer Graphics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65812",
        "name": "Physical Education",
        "title": "Physical Education",
        "credit": 1,
        "c": 1,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 3,
        "p": 3,
        "marks": 50
      }
    ],
    "3": [
      {
        "code": "66631",
        "name": "Data Structures & Algorithm",
        "title": "Data Structures & Algorithm",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66831",
        "name": "Digital Electronics",
        "title": "Digital Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66632",
        "name": "Object Oriented Programming (Java)",
        "title": "Object Oriented Programming (Java)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65931",
        "name": "Mathematics-3",
        "title": "Mathematics-3",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65811",
        "name": "Social Science",
        "title": "Social Science",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "4": [
      {
        "code": "66641",
        "name": "Database Management System",
        "title": "Database Management System",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "66642",
        "name": "Computer Peripherals & Interfacing",
        "title": "Computer Peripherals & Interfacing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66643",
        "name": "Data Communication",
        "title": "Data Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "66644",
        "name": "Web Development-1",
        "title": "Web Development-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "66651",
        "name": "Operating System",
        "title": "Operating System",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66652",
        "name": "Computer Architecture",
        "title": "Computer Architecture",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66653",
        "name": "Java Programming",
        "title": "Java Programming",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66654",
        "name": "Software Engineering",
        "title": "Software Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66655",
        "name": "Microcontroller Systems",
        "title": "Microcontroller Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "66661",
        "name": "Web Development Project",
        "title": "Web Development Project",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66662",
        "name": "Microprocessor & Interfacing",
        "title": "Microprocessor & Interfacing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66663",
        "name": "Surveillance & Security System",
        "title": "Surveillance & Security System",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66664",
        "name": "Database Management System",
        "title": "Database Management System",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "66665",
        "name": "Data Communication & Networking",
        "title": "Data Communication & Networking",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "66671",
        "name": "System Analysis & Design",
        "title": "System Analysis & Design",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66672",
        "name": "Network Administration & Security",
        "title": "Network Administration & Security",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66673",
        "name": "Mobile Application Development",
        "title": "Mobile Application Development",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66674",
        "name": "Cloud Computing & Cyber Security",
        "title": "Cloud Computing & Cyber Security",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66675",
        "name": "Project & Presentation",
        "title": "Project & Presentation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "66681",
        "name": "Industrial Attachment / Internship",
        "title": "Industrial Attachment / Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "const": {
    "1": [
      {
        "code": "68511",
        "name": "Construction Materials",
        "title": "Construction Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "61011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "68521",
        "name": "Building Construction Process-1",
        "title": "Building Construction Process-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68522",
        "name": "Construction Surveying-1",
        "title": "Construction Surveying-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "68531",
        "name": "Building Construction Process-2",
        "title": "Building Construction Process-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68532",
        "name": "Concrete Technology",
        "title": "Concrete Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66441",
        "name": "Structural Mechanics",
        "title": "Structural Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65931",
        "name": "Mathematics-3",
        "title": "Mathematics-3",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "4": [
      {
        "code": "68541",
        "name": "Construction Estimating & Costing-1",
        "title": "Construction Estimating & Costing-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68542",
        "name": "Geotechnical & Foundation Engineering",
        "title": "Geotechnical & Foundation Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68543",
        "name": "CAD for Construction",
        "title": "CAD for Construction",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "5": [
      {
        "code": "68551",
        "name": "Reinforced Concrete Design (RCC)",
        "title": "Reinforced Concrete Design (RCC)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68552",
        "name": "Construction Equipment & Safety",
        "title": "Construction Equipment & Safety",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68553",
        "name": "Highway & Bridge Construction",
        "title": "Highway & Bridge Construction",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "68561",
        "name": "Construction Project Management",
        "title": "Construction Project Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "68562",
        "name": "Construction Estimating & Costing-2",
        "title": "Construction Estimating & Costing-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "68571",
        "name": "Quality Control & Tendering in Construction",
        "title": "Quality Control & Tendering in Construction",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68572",
        "name": "Comprehensive Construction Capstone Project",
        "title": "Comprehensive Construction Capstone Project",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "68581",
        "name": "Construction Site Industrial Internship",
        "title": "Construction Site Industrial Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "et": {
    "1": [
      {
        "code": "66711",
        "name": "Basic Electricity",
        "title": "Basic Electricity",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66712",
        "name": "Electrical Engineering Drawing",
        "title": "Electrical Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65712",
        "name": "English",
        "title": "English",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "2": [
      {
        "code": "66721",
        "name": "Electrical Circuits-1",
        "title": "Electrical Circuits-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66722",
        "name": "Electrical Appliances",
        "title": "Electrical Appliances",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "66731",
        "name": "Electrical Circuits-2",
        "title": "Electrical Circuits-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66732",
        "name": "Electrical Machines-1",
        "title": "Electrical Machines-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66831",
        "name": "Electronics-1",
        "title": "Electronics-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65931",
        "name": "Mathematics-3",
        "title": "Mathematics-3",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "4": [
      {
        "code": "66741",
        "name": "Electrical Machines-2",
        "title": "Electrical Machines-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66742",
        "name": "Generation of Electrical Power",
        "title": "Generation of Electrical Power",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66842",
        "name": "Industrial Electronics",
        "title": "Industrial Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "66751",
        "name": "Transmission & Distribution-1",
        "title": "Transmission & Distribution-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66752",
        "name": "Switchgear & Protection",
        "title": "Switchgear & Protection",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66753",
        "name": "AC Machines",
        "title": "AC Machines",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "66761",
        "name": "Transmission & Distribution-2",
        "title": "Transmission & Distribution-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66762",
        "name": "Electrical Substation Design",
        "title": "Electrical Substation Design",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "66771",
        "name": "Power System Protection",
        "title": "Power System Protection",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66772",
        "name": "Smart Grid Technology",
        "title": "Smart Grid Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66773",
        "name": "Energy Audit & Management",
        "title": "Energy Audit & Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "8": [
      {
        "code": "66781",
        "name": "Industrial Attachment / Internship",
        "title": "Industrial Attachment / Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "emt": {
    "1": [
      {
        "code": "68611",
        "name": "Human Anatomy & Physiology-1",
        "title": "Human Anatomy & Physiology-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68612",
        "name": "Basic Electricity & Electronics",
        "title": "Basic Electricity & Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "68621",
        "name": "Human Anatomy & Physiology-2",
        "title": "Human Anatomy & Physiology-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68622",
        "name": "Electronic Circuits in Healthcare",
        "title": "Electronic Circuits in Healthcare",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "68631",
        "name": "Bioelectric Potential & Electrodes",
        "title": "Bioelectric Potential & Electrodes",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68632",
        "name": "Diagnostic Medical Equipment (ECG/EEG)",
        "title": "Diagnostic Medical Equipment (ECG/EEG)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68633",
        "name": "Sensors & Transducers",
        "title": "Sensors & Transducers",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "60000",
        "name": "Therapeutic Medical Equipment (Defibrillator",
        "title": "Therapeutic Medical Equipment (Defibrillator",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68641",
        "name": "Diathermy)",
        "title": "Diathermy)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "60000",
        "name": "Medical Imaging-1 (X-Ray",
        "title": "Medical Imaging-1 (X-Ray",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68642",
        "name": "Ultrasound)",
        "title": "Ultrasound)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "60000",
        "name": "Medical Imaging-2 (CT",
        "title": "Medical Imaging-2 (CT",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68651",
        "name": "MRI)",
        "title": "MRI)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68652",
        "name": "Clinical Laboratory Instruments",
        "title": "Clinical Laboratory Instruments",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68653",
        "name": "Hospital Safety & Radiation",
        "title": "Hospital Safety & Radiation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "68661",
        "name": "Biomedical Signal Processing",
        "title": "Biomedical Signal Processing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68662",
        "name": "ICU & OT Equipment Maintenance",
        "title": "ICU & OT Equipment Maintenance",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "68671",
        "name": "Hospital Equipment Management & Project",
        "title": "Hospital Equipment Management & Project",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "68672",
        "name": "Telemedicine & Biomechanics",
        "title": "Telemedicine & Biomechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "68681",
        "name": "Hospital Internship & Biomedical Training",
        "title": "Hospital Internship & Biomedical Training",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "ent": {
    "1": [
      {
        "code": "66811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66711",
        "name": "Electrical Circuits-1",
        "title": "Electrical Circuits-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "66821",
        "name": "Electronic Devices & Circuits",
        "title": "Electronic Devices & Circuits",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66822",
        "name": "Digital Electronics-1",
        "title": "Digital Electronics-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "66831",
        "name": "Digital Electronics-2",
        "title": "Digital Electronics-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66832",
        "name": "Analog Communication",
        "title": "Analog Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "66731",
        "name": "Electrical Measurement",
        "title": "Electrical Measurement",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "66841",
        "name": "Microcontroller & Embedded Systems",
        "title": "Microcontroller & Embedded Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66842",
        "name": "Power Electronics",
        "title": "Power Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66843",
        "name": "PCB Design",
        "title": "PCB Design",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "66851",
        "name": "Digital Communication",
        "title": "Digital Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "66852",
        "name": "Robotics & Automation",
        "title": "Robotics & Automation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66853",
        "name": "Biomedical Electronics",
        "title": "Biomedical Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "66861",
        "name": "Wireless & Mobile Communication",
        "title": "Wireless & Mobile Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "66862",
        "name": "VLSI Design Basics",
        "title": "VLSI Design Basics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "66871",
        "name": "Optical Fiber Communication",
        "title": "Optical Fiber Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "66872",
        "name": "Sensor & Instrumentation",
        "title": "Sensor & Instrumentation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66873",
        "name": "Project",
        "title": "Project",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "66881",
        "name": "Industrial Internship",
        "title": "Industrial Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "envt": {
    "1": [
      {
        "code": "69011",
        "name": "Ecology & Environment",
        "title": "Ecology & Environment",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "69012",
        "name": "Environmental Chemistry",
        "title": "Environmental Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "69021",
        "name": "Water Supply Engineering",
        "title": "Water Supply Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "69022",
        "name": "Environmental Microbiology",
        "title": "Environmental Microbiology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "69031",
        "name": "Wastewater Engineering & ETP",
        "title": "Wastewater Engineering & ETP",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "69032",
        "name": "Air Pollution & Control",
        "title": "Air Pollution & Control",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "69033",
        "name": "Environmental Hydrology",
        "title": "Environmental Hydrology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "69041",
        "name": "Solid Waste Management",
        "title": "Solid Waste Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "69042",
        "name": "Hazardous Waste & Noise Control",
        "title": "Hazardous Waste & Noise Control",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "69043",
        "name": "GIS in Environmental Science",
        "title": "GIS in Environmental Science",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "69051",
        "name": "Environmental Impact Assessment (EIA)",
        "title": "Environmental Impact Assessment (EIA)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "69052",
        "name": "Climate Change & Disaster Mitigation",
        "title": "Climate Change & Disaster Mitigation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "69053",
        "name": "Renewable Resources",
        "title": "Renewable Resources",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "69061",
        "name": "Industrial Ecology & Cleaner Production",
        "title": "Industrial Ecology & Cleaner Production",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "69062",
        "name": "Environmental Law & Policy",
        "title": "Environmental Law & Policy",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "69071",
        "name": "Environmental Monitoring & Project",
        "title": "Environmental Monitoring & Project",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "69072",
        "name": "Remote Sensing & Modeling",
        "title": "Remote Sensing & Modeling",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "69081",
        "name": "Environmental Field Attachment",
        "title": "Environmental Field Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "ft": {
    "1": [
      {
        "code": "66911",
        "name": "Food Chemistry-1",
        "title": "Food Chemistry-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "66912",
        "name": "Food Microbiology-1",
        "title": "Food Microbiology-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "66921",
        "name": "Food Chemistry-2",
        "title": "Food Chemistry-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "66922",
        "name": "Food Preservation Principles",
        "title": "Food Preservation Principles",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66923",
        "name": "Food Engineering Drawing",
        "title": "Food Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "3": [
      {
        "code": "66931",
        "name": "Fruit & Vegetable Processing",
        "title": "Fruit & Vegetable Processing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66932",
        "name": "Cereal & Bakery Technology",
        "title": "Cereal & Bakery Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66933",
        "name": "Food Quality Assurance",
        "title": "Food Quality Assurance",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "66941",
        "name": "Dairy & Beverage Technology",
        "title": "Dairy & Beverage Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "60000",
        "name": "Meat",
        "title": "Meat",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66942",
        "name": "Poultry & Fish Processing",
        "title": "Poultry & Fish Processing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66943",
        "name": "Food Packaging Technology",
        "title": "Food Packaging Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "66951",
        "name": "Food Analysis & Instrumentation",
        "title": "Food Analysis & Instrumentation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66952",
        "name": "HACCP & Food Safety Standards",
        "title": "HACCP & Food Safety Standards",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66953",
        "name": "Fermentation Technology",
        "title": "Fermentation Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "66961",
        "name": "Food Plant Sanitation & Waste Disposal",
        "title": "Food Plant Sanitation & Waste Disposal",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66962",
        "name": "Edible Oil & Fat Technology",
        "title": "Edible Oil & Fat Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "66971",
        "name": "Food Product Development Project",
        "title": "Food Product Development Project",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66972",
        "name": "Food Laws & BSTI Regulations",
        "title": "Food Laws & BSTI Regulations",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "66981",
        "name": "Food Processing Plant Internship",
        "title": "Food Processing Plant Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "mt": {
    "1": [
      {
        "code": "67011",
        "name": "Mechanical Workshop Practice",
        "title": "Mechanical Workshop Practice",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67012",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "67021",
        "name": "Machine Shop Practice-1",
        "title": "Machine Shop Practice-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67022",
        "name": "Foundry & Pattern Making",
        "title": "Foundry & Pattern Making",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "67031",
        "name": "Machine Shop Practice-2",
        "title": "Machine Shop Practice-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67032",
        "name": "Thermodynamics",
        "title": "Thermodynamics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67033",
        "name": "Strength of Materials",
        "title": "Strength of Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65931",
        "name": "Mathematics-3",
        "title": "Mathematics-3",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "4": [
      {
        "code": "67041",
        "name": "Hydraulics & Fluid Mechanics",
        "title": "Hydraulics & Fluid Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67042",
        "name": "Manufacturing Process",
        "title": "Manufacturing Process",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67043",
        "name": "CAD in Mechanical",
        "title": "CAD in Mechanical",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "5": [
      {
        "code": "67051",
        "name": "Power Plant Engineering",
        "title": "Power Plant Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67052",
        "name": "Tool Design",
        "title": "Tool Design",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67053",
        "name": "Metrology & Quality Control",
        "title": "Metrology & Quality Control",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "67061",
        "name": "Heat Engine & Thermal Power",
        "title": "Heat Engine & Thermal Power",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67062",
        "name": "Automotive Systems",
        "title": "Automotive Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "67071",
        "name": "Refrigeration & Heat Transfer",
        "title": "Refrigeration & Heat Transfer",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67072",
        "name": "Mechatronics Systems",
        "title": "Mechatronics Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67073",
        "name": "Mechanical Project",
        "title": "Mechanical Project",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "67081",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "pt": {
    "1": [
      {
        "code": "67111",
        "name": "Basic Power Plant",
        "title": "Basic Power Plant",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67112",
        "name": "Mechanical Drawing",
        "title": "Mechanical Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "67121",
        "name": "Thermal Power Generation",
        "title": "Thermal Power Generation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67122",
        "name": "Electrical Machines",
        "title": "Electrical Machines",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "67131",
        "name": "Boiler & Steam Turbine",
        "title": "Boiler & Steam Turbine",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67132",
        "name": "Gas Turbine & Combined Cycle",
        "title": "Gas Turbine & Combined Cycle",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67133",
        "name": "Fluid Mechanics",
        "title": "Fluid Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "67141",
        "name": "Renewable Energy Systems",
        "title": "Renewable Energy Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67142",
        "name": "Solar & Wind Power",
        "title": "Solar & Wind Power",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67143",
        "name": "Power Station Instrumentation",
        "title": "Power Station Instrumentation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "67151",
        "name": "Nuclear Power Basics",
        "title": "Nuclear Power Basics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67152",
        "name": "Hydroelectric Engineering",
        "title": "Hydroelectric Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67153",
        "name": "Substation & Grid Operations",
        "title": "Substation & Grid Operations",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "67161",
        "name": "Power Plant Economics & Safety",
        "title": "Power Plant Economics & Safety",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67162",
        "name": "Transmission Engineering",
        "title": "Transmission Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "67171",
        "name": "Smart Grid & Energy Storage",
        "title": "Smart Grid & Energy Storage",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67172",
        "name": "Power Project & Simulation",
        "title": "Power Project & Simulation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "67181",
        "name": "Power Station Industrial Internship",
        "title": "Power Station Industrial Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "rac": {
    "1": [
      {
        "code": "67211",
        "name": "Fundamentals of RAC",
        "title": "Fundamentals of RAC",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67212",
        "name": "RAC Workshop",
        "title": "RAC Workshop",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "67221",
        "name": "Domestic Refrigerators & Freezers",
        "title": "Domestic Refrigerators & Freezers",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67222",
        "name": "Thermodynamics of RAC",
        "title": "Thermodynamics of RAC",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "67231",
        "name": "Commercial Refrigeration Systems",
        "title": "Commercial Refrigeration Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67232",
        "name": "Psychrometry & Air Distribution",
        "title": "Psychrometry & Air Distribution",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67233",
        "name": "RAC Electrical Controls",
        "title": "RAC Electrical Controls",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "67241",
        "name": "Central Air Conditioning Systems",
        "title": "Central Air Conditioning Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67242",
        "name": "Chilled Water & Cooling Towers",
        "title": "Chilled Water & Cooling Towers",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67243",
        "name": "HVAC Duct Design",
        "title": "HVAC Duct Design",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "67251",
        "name": "VRF/VRV Air Conditioning",
        "title": "VRF/VRV Air Conditioning",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67252",
        "name": "Cold Storage & Food Preservation",
        "title": "Cold Storage & Food Preservation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67253",
        "name": "RAC Troubleshooting",
        "title": "RAC Troubleshooting",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "67261",
        "name": "Energy Efficient HVAC Systems",
        "title": "Energy Efficient HVAC Systems",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67262",
        "name": "Building Management System (BMS)",
        "title": "Building Management System (BMS)",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "67271",
        "name": "Industrial RAC Project & Load Calculation",
        "title": "Industrial RAC Project & Load Calculation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67272",
        "name": "Clean Room & Hospital HVAC",
        "title": "Clean Room & Hospital HVAC",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "67281",
        "name": "Industrial Attachment",
        "title": "Industrial Attachment",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "tct": {
    "1": [
      {
        "code": "67311",
        "name": "Basic Telecommunication",
        "title": "Basic Telecommunication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "66811",
        "name": "Basic Electronics",
        "title": "Basic Electronics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65712",
        "name": "English",
        "title": "English",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "2": [
      {
        "code": "67321",
        "name": "Transmission Lines & Waveguides",
        "title": "Transmission Lines & Waveguides",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67322",
        "name": "Electromagnetic Waves",
        "title": "Electromagnetic Waves",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "67331",
        "name": "Digital Telephony & Switching",
        "title": "Digital Telephony & Switching",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67332",
        "name": "Microwave Engineering",
        "title": "Microwave Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67333",
        "name": "Signal Processing",
        "title": "Signal Processing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "4": [
      {
        "code": "67341",
        "name": "Cellular & Mobile Communication",
        "title": "Cellular & Mobile Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "67342",
        "name": "Satellite Communication",
        "title": "Satellite Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "67343",
        "name": "Antenna & Propagation",
        "title": "Antenna & Propagation",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "5": [
      {
        "code": "67351",
        "name": "Optical Fiber Systems & DWDM",
        "title": "Optical Fiber Systems & DWDM",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67352",
        "name": "Broadband & LTE/5G Networks",
        "title": "Broadband & LTE/5G Networks",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67353",
        "name": "Network Routing",
        "title": "Network Routing",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "67361",
        "name": "Telecom Regulation & Standards",
        "title": "Telecom Regulation & Standards",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67362",
        "name": "VoIP & Unified Communication",
        "title": "VoIP & Unified Communication",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "67371",
        "name": "Telecom Network Planning & Project",
        "title": "Telecom Network Planning & Project",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "67372",
        "name": "Next Generation Networks (NGN)",
        "title": "Next Generation Networks (NGN)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "67381",
        "name": "Telecom Operator Internship",
        "title": "Telecom Operator Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  },
  "aidt": {
    "1": [
      {
        "code": "68511",
        "name": "Construction Materials",
        "title": "Construction Materials",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "61011",
        "name": "Engineering Drawing",
        "title": "Engineering Drawing",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      },
      {
        "code": "65911",
        "name": "Mathematics-1",
        "title": "Mathematics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65912",
        "name": "Physics-1",
        "title": "Physics-1",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "2": [
      {
        "code": "68521",
        "name": "Building Construction Process-1",
        "title": "Building Construction Process-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68522",
        "name": "Construction Surveying-1",
        "title": "Construction Surveying-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65921",
        "name": "Mathematics-2",
        "title": "Mathematics-2",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      },
      {
        "code": "65913",
        "name": "Chemistry",
        "title": "Chemistry",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "3": [
      {
        "code": "68531",
        "name": "Building Construction Process-2",
        "title": "Building Construction Process-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68532",
        "name": "Concrete Technology",
        "title": "Concrete Technology",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "66441",
        "name": "Structural Mechanics",
        "title": "Structural Mechanics",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65931",
        "name": "Mathematics-3",
        "title": "Mathematics-3",
        "credit": 4,
        "c": 4,
        "theory_per_week": 3,
        "t": 3,
        "practical_per_week": 3,
        "p": 3,
        "marks": 200
      }
    ],
    "4": [
      {
        "code": "68541",
        "name": "Construction Estimating & Costing-1",
        "title": "Construction Estimating & Costing-1",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68542",
        "name": "Geotechnical & Foundation Engineering",
        "title": "Geotechnical & Foundation Engineering",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68543",
        "name": "CAD for Construction",
        "title": "CAD for Construction",
        "credit": 2,
        "c": 2,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 6,
        "p": 6,
        "marks": 100
      }
    ],
    "5": [
      {
        "code": "68551",
        "name": "Reinforced Concrete Design (RCC)",
        "title": "Reinforced Concrete Design (RCC)",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68552",
        "name": "Construction Equipment & Safety",
        "title": "Construction Equipment & Safety",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68553",
        "name": "Highway & Bridge Construction",
        "title": "Highway & Bridge Construction",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "6": [
      {
        "code": "68561",
        "name": "Construction Project Management",
        "title": "Construction Project Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      },
      {
        "code": "68562",
        "name": "Construction Estimating & Costing-2",
        "title": "Construction Estimating & Costing-2",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "65852",
        "name": "Industrial Management",
        "title": "Industrial Management",
        "credit": 2,
        "c": 2,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 0,
        "p": 0,
        "marks": 100
      }
    ],
    "7": [
      {
        "code": "68571",
        "name": "Quality Control & Tendering in Construction",
        "title": "Quality Control & Tendering in Construction",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      },
      {
        "code": "68572",
        "name": "Comprehensive Construction Capstone Project",
        "title": "Comprehensive Construction Capstone Project",
        "credit": 3,
        "c": 3,
        "theory_per_week": 2,
        "t": 2,
        "practical_per_week": 3,
        "p": 3,
        "marks": 150
      }
    ],
    "8": [
      {
        "code": "68581",
        "name": "Construction Site Industrial Internship",
        "title": "Construction Site Industrial Internship",
        "credit": 8,
        "c": 8,
        "theory_per_week": 0,
        "t": 0,
        "practical_per_week": 24,
        "p": 24,
        "marks": 400
      }
    ]
  }
}
};

/**
 * Accessor function returning normalized semester booklist
 */
function getDepartmentSyllabus(reg, deptId, semester) {
  const r = (reg === "2016" || reg === 2016) ? "2016" : "2022";
  const sem = String(semester);
  const id = String(deptId).toLowerCase();

  // Primary lookup
  if (SYLLABUS_DATA[r] && SYLLABUS_DATA[r][id] && SYLLABUS_DATA[r][id][sem]) {
    return SYLLABUS_DATA[r][id][sem];
  }

  // Alias lookup for aidt / const
  if (id === 'aidt' && SYLLABUS_DATA[r] && SYLLABUS_DATA[r]['const'] && SYLLABUS_DATA[r]['const'][sem]) {
    return SYLLABUS_DATA[r]['const'][sem];
  }
  if (id === 'const' && SYLLABUS_DATA[r] && SYLLABUS_DATA[r]['aidt'] && SYLLABUS_DATA[r]['aidt'][sem]) {
    return SYLLABUS_DATA[r]['aidt'][sem];
  }

  // Code match lookup
  const tech = TECHNOLOGIES_DATA.find(t => t.id === id || t.code === id || t.short.toLowerCase() === id);
  if (tech && SYLLABUS_DATA[r] && SYLLABUS_DATA[r][tech.id] && SYLLABUS_DATA[r][tech.id][sem]) {
    return SYLLABUS_DATA[r][tech.id][sem];
  }

  // Safe fallback to CST
  if (SYLLABUS_DATA[r] && SYLLABUS_DATA[r]["cst"] && SYLLABUS_DATA[r]["cst"][sem]) {
    return SYLLABUS_DATA[r]["cst"][sem];
  }

  return [];
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TECHNOLOGIES_DATA, SYLLABUS_DATA, getDepartmentSyllabus };
}
