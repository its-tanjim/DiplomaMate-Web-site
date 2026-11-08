/**
 * DiplomaMate - Bangladesh Government Polytechnic Institutes Dataset
 * Covers all 8 Divisions and ~50 Government Polytechnic Institutes with verified BTEB codes,
 * GPS coordinates, seat capacities, history, and facilities.
 */

const POLYTECHNIC_DATA = [
  // --- DHAKA DIVISION ---
  {
    id: "dpi-dhaka",
    name: "Dhaka Polytechnic Institute",
    bn_name: "ঢাকা পলিটেকনিক ইনস্টিটিউট",
    code: "50117",
    eiin: "132958",
    established: 1955,
    division: "Dhaka",
    district: "Dhaka",
    coordinates: [23.7598, 90.3996],
    avatar: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    history: "১৯৫৫ সালে প্রতিষ্ঠিত ঢাকা পলিটেকনিক ইনস্টিটিউট বাংলাদেশের প্রাচীনতম ও বৃহত্তম সরকারি পলিটেকনিক ইনস্টিটিউট। তেজগাঁও শিল্প এলাকায় অবস্থিত এই প্রতিষ্ঠানটি কারিগরি শিক্ষার প্রসারে ঐতিহাসিক ভূমিকা পালন করে আসছে। স্বাধীনতার পূর্বকাল থেকে আজ অবধি এ প্রতিষ্ঠানটি দেশের প্রকৌশল খাতে হাজার হাজার দক্ষ ডিপ্লোমা ইঞ্জিনিয়ার তৈরি করেছে।",
    history_en: "Established in 1955, Dhaka Polytechnic Institute is the oldest and largest government polytechnic institute in Bangladesh. Located in the heart of Tejgaon Industrial Area, it has historically led vocational and engineering education across the nation.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Chemical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Food Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Architecture", seats: { shift1: 50, shift2: 50 } },
      { name: "Automobile Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Refrigeration & Air Conditioning", seats: { shift1: 50, shift2: 50 } },
      { name: "Environmental Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1600,
    facilities: [
      "4 Boys Hostels (Zahir Raihan, Latif, Kazi Nazrul, etc.)",
      "1 Girls Hostel (Begum Rokeya Hall)",
      "Modern Cisco Computer Labs & CNC Heavy Machine Workshop",
      "Central Library with 40,000+ technical volumes",
      "Large Central Sports Ground & Gymnasium",
      "Campus WiFi & High-speed Fiber Connectivity"
    ],
    principal: "Engr. Kazi Zakir Hossain (Principal)",
    contact: {
      address: "Tejgaon Industrial Area, Dhaka-1208",
      phone: "+880 2-8870190",
      email: "principal@dpi.gov.bd",
      website: "https://dpi.gov.bd"
    }
  },
  {
    id: "dmpi-dhaka",
    name: "Dhaka Mohila Polytechnic Institute",
    bn_name: "ঢাকা মহিলা পলিটেকনিক ইনস্টিটিউট",
    code: "50116",
    eiin: "132959",
    established: 1985,
    division: "Dhaka",
    district: "Dhaka",
    coordinates: [23.7744, 90.3653],
    avatar: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
    history: "১৯৮৫ সালে প্রতিষ্ঠিত ঢাকা মহিলা পলিটেকনিক ইনস্টিটিউট নারীদের কারিগরি ও প্রযুক্তিগত শিক্ষায় ক্ষমতায়নের উদ্দেশ্যে প্রতিষ্ঠিত বাংলাদেশের প্রথম ও ঐতিহ্যবাহী মহিলা পলিটেকনিক। শেরেবাংলা নগরে অবস্থিত এই প্রতিষ্ঠানটি শতভাগ নারী শিক্ষার্থীদের দক্ষ প্রকৌশলী হিসেবে গড়ে তুলছে।",
    history_en: "Established in 1985 at Agargaon, Dhaka Mohila Polytechnic Institute is the premier pioneer institute in Bangladesh dedicated exclusively to female technical education and engineering excellence.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Architecture", seats: { shift1: 50, shift2: 50 } },
      { name: "Electro-Medical Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 500,
    facilities: [
      "Secure On-Campus Girls Dormitory",
      "Specialized Bio-Medical Equipment Laboratory",
      "Advanced CAD & Architecture Modeling Studio",
      "Smart Interactive Classrooms & Free WiFi"
    ],
    principal: "Prof. Sultana Parveen",
    contact: {
      address: "Agargaon, Sher-e-Bangla Nagar, Dhaka-1207",
      phone: "+880 2-8181655",
      email: "info@dmpi.gov.bd",
      website: "http://dmpi.gov.bd"
    }
  },
  {
    id: "fpi-faridpur",
    name: "Faridpur Polytechnic Institute",
    bn_name: "ফরিদপুর পলিটেকনিক ইনস্টিটিউট",
    code: "46026",
    eiin: "133008",
    established: 1963,
    division: "Dhaka",
    district: "Faridpur",
    coordinates: [23.6067, 89.8406],
    avatar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬৩ সালে প্রতিষ্ঠিত ফরিদপুর পলিটেকনিক ইনস্টিটিউট পদ্মা অববাহিকার অন্যতম স্বনামধন্য প্রযুক্তি শিক্ষালয়। সুবিশাল ক্যাম্পাসে দক্ষ শিক্ষকদের তত্ত্বাবধানে সিভিল, কম্পিউটার, পাওয়ার ও মেকানিক্যাল ট্রেডে আন্তর্জাতিক মানের ডিপ্লোমা ইঞ্জিনিয়ার প্রশিক্ষিত হয়।",
    history_en: "Established in 1963, Faridpur Polytechnic Institute is a premier technical institution in the greater Faridpur region boasting lush green campus grounds and robust workshops.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 700,
    facilities: ["Student Hostels (Male/Female)", "Power Generation Labs", "Computer Labs", "Botanical Garden"],
    principal: "Engr. Md. Akramuzzaman",
    contact: {
      address: "Baitul Aman, Faridpur-7800",
      phone: "+880 631-62351",
      email: "principal_fpi@yahoo.com",
      website: "http://fpi.gov.bd"
    }
  },
  {
    id: "tpi-tangail",
    name: "Tangail Polytechnic Institute",
    bn_name: "টাঙ্গাইল পলিটেকনিক ইনস্টিটিউট",
    code: "52041",
    eiin: "132890",
    established: 1991,
    division: "Dhaka",
    district: "Tangail",
    coordinates: [24.2513, 89.9167],
    avatar: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=600&q=80",
    history: "১৯৯১ সালে প্রতিষ্ঠিত টাঙ্গাইল পলিটেকনিক ইনস্টিটিউট উত্তর-মধ্যাঞ্চলের একটি শীর্ষস্থানীয় প্রযুক্তি শিক্ষা প্রতিষ্ঠান। এটি শিক্ষার্থীদের হাতে-কলমে শিল্প কারখানার উপযোগী প্রশিক্ষণ প্রদান করে।",
    history_en: "Founded in 1991, Tangail Polytechnic Institute has been serving central Bangladesh with high-quality technical education in Computer, Telecommunication, and Electrical sectors.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Telecommunication Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 700,
    facilities: ["Modern Telecommunication Labs", "2 Hostels", "Central Seminar Hall", "Campus Mosque"],
    principal: "Engr. Mosharraf Hossain",
    contact: {
      address: "Deur, Tangail Sadar, Tangail-1900",
      phone: "+880 921-63520",
      email: "tangailpoly@gmail.com",
      website: "http://tpi.gov.bd"
    }
  },
  {
    id: "gpi-gopalganj",
    name: "Gopalganj Polytechnic Institute",
    bn_name: "গোপালগঞ্জ পলিটেকনিক ইনস্টিটিউট",
    code: "47021",
    eiin: "133189",
    established: 2001,
    division: "Dhaka",
    district: "Gopalganj",
    coordinates: [23.0053, 89.8267],
    avatar: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=600&q=80",
    history: "২০০১ সালে প্রতিষ্ঠিত গোপালগঞ্জ পলিটেকনিক ইনস্টিটিউট আধুনিক স্থাপত্য ও উন্নত ল্যাব সুবিধা সম্বলিত এক আধুনিক শিক্ষা প্রতিষ্ঠান।",
    history_en: "Established in 2001, Gopalganj Polytechnic Institute provides cutting-edge technical infrastructure and modern laboratories for engineering diploma students.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Food Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Refrigeration & Air Conditioning", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 500,
    facilities: ["Food Testing & Chemistry Labs", "Boys & Girls Dormitories", "Multi-gym"],
    principal: "Engr. Md. Mizanur Rahman",
    contact: {
      address: "Chandradigholia, Gopalganj Sadar-8100",
      phone: "+880 2-6685412",
      email: "info@gpibd.org",
      website: "http://gpi.gov.bd"
    }
  },
  {
    id: "npi-narsingdi",
    name: "Narsingdi Polytechnic Institute",
    bn_name: "নরসিংদী পলিটেকনিক ইনস্টিটিউট",
    code: "53028",
    eiin: "133245",
    established: 2006,
    division: "Dhaka",
    district: "Narsingdi",
    coordinates: [23.9322, 90.7154],
    avatar: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=600&q=80",
    history: "২০০৬ সালে স্থাপিত নরসিংদী পলিটেকনিক ইনস্টিটিউট দেশের অন্যতম সমৃদ্ধ টেক্সটাইল ও শিল্প হাব নরসিংদীতে কারিগরি মানবসম্পদ গড়তে অগ্রণী ভূমিকা পালন করছে।",
    history_en: "Established in 2006, Narsingdi Polytechnic delivers high standard engineering skills closely aligned with the vibrant industrial ecosystems of the Dhaka-Narsingdi industrial belt.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electrical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Refrigeration & Air Conditioning", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Computer Center", "RAC Heavy Test Beds", "Cafeteria & Sports Court"],
    principal: "Engr. Monirul Islam",
    contact: {
      address: "Bilandpur, Narsingdi Sadar",
      phone: "+880 2-9451711",
      email: "principal@narpoly.gov.bd",
      website: "http://narpoly.gov.bd"
    }
  },
  {
    id: "kpi-kishoreganj",
    name: "Kishoreganj Polytechnic Institute",
    bn_name: "কিশোরগঞ্জ পলিটেকনিক ইনস্টিটিউট",
    code: "54032",
    eiin: "133312",
    established: 2008,
    division: "Dhaka",
    district: "Kishoreganj",
    coordinates: [24.4449, 90.7766],
    avatar: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=600&q=80",
    history: "হাওর অঞ্চলের প্রকৌশল শিক্ষার প্রাণকেন্দ্র কিশোরগঞ্জ পলিটেকনিক ইনস্টিটিউট ২০০৮ সালে যাত্রা শুরু করে।",
    history_en: "Founded in 2008, Kishoreganj Polytechnic Institute caters to students across the Haor region, training technicians and engineers in vital technology disciplines.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Food Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Electronics Research Lab", "Library", "Student Dorms"],
    principal: "Engr. Rezaul Karim",
    contact: {
      address: "Karimganj Road, Kishoreganj",
      phone: "+880 941-62040",
      email: "info@kishpoly.gov.bd",
      website: "http://kishpoly.gov.bd"
    }
  },
  {
    id: "mpi-munshiganj",
    name: "Munshiganj Polytechnic Institute",
    bn_name: "মুন্সীগঞ্জ পলিটেকনিক ইনস্টিটিউট",
    code: "51025",
    eiin: "133280",
    established: 2006,
    division: "Dhaka",
    district: "Munshiganj",
    coordinates: [23.5422, 90.5305],
    avatar: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=80",
    history: "২০০৬ সালে পদ্মা ও মেঘনার সংযোগস্থলে অবস্থিত প্রাচীন বিক্রমপুর ভূমিতে আধুনিক কারিগরি শিক্ষার আলো ছড়িয়ে দিতে প্রতিষ্ঠিত হয়।",
    history_en: "Established in 2006 in historic Bikrampur, Munshiganj Polytechnic produces skilled engineering graduates with state-of-the-art laboratory facilities.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electromedical Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Electromedical Diagnostic Lab", "Computer Network Center", "Boys Hostel"],
    principal: "Engr. Shamim Ahmed",
    contact: {
      address: "Mirkadim, Munshiganj-1502",
      phone: "+880 2-7611400",
      email: "poly_munshi@yahoo.com",
      website: "http://mpi.edu.bd"
    }
  },
  {
    id: "spi-shariatpur",
    name: "Shariatpur Polytechnic Institute",
    bn_name: "শরীয়তপুর পলিটেকনিক ইনস্টিটিউট",
    code: "48018",
    eiin: "133400",
    established: 2001,
    division: "Dhaka",
    district: "Shariatpur",
    coordinates: [23.2106, 90.3497],
    avatar: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80",
    history: "শরীয়তপুরের বুড়িরহাটে অবস্থিত এই প্রতিষ্ঠানটি তথ্যপ্রযুক্তি এবং অবকাঠামো নির্মাণ প্রকৌশলে দক্ষ জনবল তৈরি করে চলেছে।",
    history_en: "Established in 2001, Shariatpur Polytechnic Institute is celebrated for its peaceful campus and high graduate employment track record.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Telecommunication Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Modern CAD Studio", "Hostel", "Sports Pavilion"],
    principal: "Engr. Md. Rafiqul Islam",
    contact: {
      address: "Burirhat, Shariatpur Sadar-8000",
      phone: "+880 601-61500",
      email: "info@shariatpurpoly.gov.bd",
      website: "http://shariatpurpoly.gov.bd"
    }
  },

  // --- CHATTOGRAM DIVISION ---
  {
    id: "cpi-chattogram",
    name: "Chittagong Polytechnic Institute",
    bn_name: "চট্টগ্রাম পলিটেকনিক ইনস্টিটিউট",
    code: "70047",
    eiin: "132987",
    established: 1962,
    division: "Chattogram",
    district: "Chattogram",
    coordinates: [22.3601, 91.8087],
    avatar: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬২ সালে প্রতিষ্ঠিত চট্টগ্রাম পলিটেকনিক ইনস্টিটিউট দেশের দ্বিতীয় বৃহত্তম ও বাণিজ্যিক রাজধানীর সর্বপ্রধান কারিগরি প্রতিষ্ঠান। নাসিরাবাদ পাহাড়ঘেরা ৩৫ একরের মনোরম ক্যাম্পাসে ভারী শিল্প, শিপইয়ার্ড ও বন্দর উপযোগী প্রকৌশল শিক্ষা প্রদান করা হয়।",
    history_en: "Established in 1962, Chittagong Polytechnic Institute is the prime technical institute in the port city of Chittagong. Spread over 35 acres in Nasirabad, it prepares engineers tailored for heavy marine, port, and industrial operations.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Environmental Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1200,
    facilities: [
      "Large Foundry & Machine Shops",
      "3 Student Dormitories (Bhuiyan Hall, Masterda Surya Sen Hall, Girls Hostel)",
      "Central Marine & Power Testing Center",
      "Auditorium & Massive Playing Field"
    ],
    principal: "Engr. Md. Lutfur Rahman",
    contact: {
      address: "Nasirabad, Bayezid Bostami Road, Chattogram-4209",
      phone: "+880 31-681640",
      email: "ctgpoly62@yahoo.com",
      website: "http://ctgpoly.gov.bd"
    }
  },
  {
    id: "cmpi-chattogram",
    name: "Chittagong Mohila Polytechnic Institute",
    bn_name: "চট্টগ্রাম মহিলা পলিটেকনিক ইনস্টিটিউট",
    code: "70048",
    eiin: "133011",
    established: 2005,
    division: "Chattogram",
    district: "Chattogram",
    coordinates: [22.3789, 91.8156],
    avatar: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=600&q=80",
    history: "২০০৫ সালে প্রতিষ্ঠিত চট্টগ্রাম মহিলা পলিটেকনিক বন্দর নগরীর নারী সমাজকে প্রযুক্তি ও প্রকৌশলে সাবলম্বী করতে শীর্ষ অবদান রাখছে।",
    history_en: "Founded in 2005 in Nasirabad, Chittagong Mohila Polytechnic offers women premier vocational pathways into high-growth software and architectural sectors.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Architecture", seats: { shift1: 50, shift2: 50 } },
      { name: "Garments Design & Pattern Making", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Fashion & CAD Lab", "Computer Labs", "Safe Girls Hostel", "Library"],
    principal: "Engr. Nasrin Akter",
    contact: {
      address: "South Halishahar / Nasirabad, Chattogram",
      phone: "+880 31-2550181",
      email: "cmpictg@gmail.com",
      website: "http://cmpi.gov.bd"
    }
  },
  {
    id: "compi-comilla",
    name: "Comilla Polytechnic Institute",
    bn_name: "কুমিল্লা পলিটেকনিক ইনস্টিটিউট",
    code: "68027",
    eiin: "132912",
    established: 1962,
    division: "Chattogram",
    district: "Comilla",
    coordinates: [23.4682, 91.1788],
    avatar: "https://images.unsplash.com/photo-1525921429624-479b6a26d84d?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬২ সালে প্রতিষ্ঠিত কুমিল্লা পলিটেকনিক ইনস্টিটিউট লালমাই ও ময়নামতির ঐতিহাসিক জনপদে প্রযুক্তিশিক্ষার এক অনন্য বাতিঘর। এখানকার গ্র্যাজুয়েটরা দেশ-বিদেশের শীর্ষ প্রতিষ্ঠানে কর্মরত।",
    history_en: "Established in 1962 near historic Shalban Vihara, Comilla Polytechnic Institute provides top-tier engineering diploma programs across mechanical, electrical, and computer trades.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 900,
    facilities: ["Heavy Workshop Complex", "Modern Network Lab", "Hostel Facilities", "Library"],
    principal: "Engr. Md. Rakibul Hasan",
    contact: {
      address: "Kotbari, Comilla-3503",
      phone: "+880 81-68310",
      email: "comillapoly@yahoo.com",
      website: "http://comillapoly.gov.bd"
    }
  },
  {
    id: "fenpi-feni",
    name: "Feni Polytechnic Institute",
    bn_name: "ফেনী পলিটেকনিক ইনস্টিটিউট",
    code: "69015",
    eiin: "132943",
    established: 1963,
    division: "Chattogram",
    district: "Feni",
    coordinates: [23.0159, 91.3976],
    avatar: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬৩ সালে প্রতিষ্ঠিত ফেনী পলিটেকনিক দক্ষিণ-পূর্বাঞ্চলের ঐতিহ্যমণ্ডিত প্রকৌশল শিক্ষা প্রতিষ্ঠান। সিভিল, ইলেকট্রিক্যাল ও মেকানিক্যাল বিভাগে বিশেষ সুনাম অর্জন করেছে।",
    history_en: "Established in 1963, Feni Polytechnic Institute trains dynamic engineers equipped with modern workshop skills and engineering acumen.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 800,
    facilities: ["Central Workshop", "Shahid Salam Hall (Hostel)", "Auditorium", "Green Campus"],
    principal: "Engr. Md. Delowar Hossain",
    contact: {
      address: "Masterpara, Feni Sadar-3900",
      phone: "+880 331-74125",
      email: "principal_fpi@feni.gov.bd",
      website: "http://fenipoly.gov.bd"
    }
  },
  {
    id: "fci-feni",
    name: "Feni Computer Institute",
    bn_name: "ফেনী কম্পিউটার ইনস্টিটিউট",
    code: "69020",
    eiin: "133100",
    established: 2003,
    division: "Chattogram",
    district: "Feni",
    coordinates: [23.0034, 91.4052],
    avatar: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=600&q=80",
    history: "২০০৩ সালে প্রতিষ্ঠিত বাংলাদেশ সরকারের একমাত্র বিশেষায়িত তথ্য ও যোগাযোগ প্রযুক্তি (আইসিটি) ভিত্তিক পলিটেকনিক ইনস্টিটিউট। সফটওয়্যার ডেভেলপমেন্ট ও নেটওয়ার্ক ইঞ্জিনিয়ারিংয়ে এটি অনন্য।",
    history_en: "The only dedicated ICT & Computer Polytechnic Institute established in Bangladesh (2003), dedicated exclusively to advanced software, network engineering, and telecommunications.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Data Telecommunication & Networking", seats: { shift1: 100, shift2: 100 } },
      { name: "Telecommunication Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 500,
    facilities: ["High-tech Cisco Networking Labs", "Software Incubation Center", "Hostels with Fiber Internet", "Smart Classrooms"],
    principal: "Engr. Mohammad Selim",
    contact: {
      address: "Ranirhat, Feni Sadar-3900",
      phone: "+880 331-61010",
      email: "principal@fci.gov.bd",
      website: "http://fci.gov.bd"
    }
  },
  {
    id: "cxpi-coxsbazar",
    name: "Cox's Bazar Polytechnic Institute",
    bn_name: "কক্সবাজার পলিটেকনিক ইনস্টিটিউট",
    code: "71015",
    eiin: "133276",
    established: 2004,
    division: "Chattogram",
    district: "Cox's Bazar",
    coordinates: [21.4398, 92.0089],
    avatar: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    history: "২০০৪ সালে সমুদ্র সৈকতের কোলঘেঁষে প্রতিষ্ঠিত কক্সবাজার পলিটেকনিক ইনস্টিটিউট পরিবেশ, পুরকৌশল ও খাদ্য প্রযুক্তিতে উল্লেখযোগ্য অবদান রাখছে।",
    history_en: "Established in 2004 along the world's longest natural sea beach, Cox's Bazar Polytechnic Institute leads in civil, tourism infrastructure, and environmental sciences.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Food Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Environmental Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Food Quality Testing Lab", "Environmental Analysis Lab", "Student Dormitories"],
    principal: "Engr. Nurul Alam",
    contact: {
      address: "Link Road, Cox's Bazar-4700",
      phone: "+880 341-63800",
      email: "principal_cox@yahoo.com",
      website: "http://coxpoly.gov.bd"
    }
  },
  {
    id: "bbpi-brahmanbaria",
    name: "Brahmanbaria Polytechnic Institute",
    bn_name: "ব্রাহ্মণবাড়িয়া পলিটেকনিক ইনস্টিটিউট",
    code: "67018",
    eiin: "133299",
    established: 2005,
    division: "Chattogram",
    district: "Brahmanbaria",
    coordinates: [23.9877, 91.1118],
    avatar: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    history: "২০০৫ সালে প্রতিষ্ঠিত গ্যাস সমৃদ্ধ তিতাস অববাহিকায় গড়ে ওঠা এক আধুনিক প্রকৌশল বিদ্যাপীঠ।",
    history_en: "Established in 2005 in the energy-rich Titas gas basin, Brahmanbaria Polytechnic excels in electro-medical, computer, and mechanical technologies.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electro-Medical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Architecture", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Hospital Diagnostic Equipment Lab", "Modern Drafting Room", "Library"],
    principal: "Engr. Md. Abul Kalam Azad",
    contact: {
      address: "Bijoynagar, Brahmanbaria",
      phone: "+880 851-58200",
      email: "principal_bbpi@yahoo.com",
      website: "http://bbpi.gov.bd"
    }
  },
  {
    id: "chpi-chandpur",
    name: "Chandpur Polytechnic Institute",
    bn_name: "চাঁদপুর পলিটেকনিক ইনস্টিটিউট",
    code: "66024",
    eiin: "133319",
    established: 2005,
    division: "Chattogram",
    district: "Chandpur",
    coordinates: [23.2321, 90.6631],
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    history: "২০০৫ সালে মেঘনা, পদ্মা ও ডাকাতিয়া নদীর মোহনায় ইলিশের বাড়ি চাঁদপুরে প্রতিষ্ঠিত কারিগরি প্রতিষ্ঠান।",
    history_en: "Founded in 2005 at the confluence of the Padma, Meghna and Dakatia rivers, Chandpur Polytechnic trains engineers for modern digital infrastructure.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Construction Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Modern Construction Yard", "Software Lab", "Student Cafeteria"],
    principal: "Engr. Anwar Hossain",
    contact: {
      address: "Kachua Road, Chandpur Sadar",
      phone: "+880 841-65421",
      email: "chandpurpoly@gmail.com",
      website: "http://chandpurpoly.gov.bd"
    }
  },

  // --- RAJSHAHI DIVISION ---
  {
    id: "rpi-rajshahi",
    name: "Rajshahi Polytechnic Institute",
    bn_name: "রাজশাহী পলিটেকনিক ইনস্টিটিউট",
    code: "24040",
    eiin: "132967",
    established: 1963,
    division: "Rajshahi",
    district: "Rajshahi",
    coordinates: [24.3745, 88.6042],
    avatar: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬৩ সালে প্রতিষ্ঠিত রাজশাহী পলিটেকনিক ইনস্টিটিউট শিক্ষা নগরী রাজশাহীর প্রধান সরকারি কারিগরি প্রতিষ্ঠান। পদ্মা নদীর সান্নিধ্যে সপুরা শিল্প এলাকায় গড়ে ওঠা প্রতিষ্ঠানটি উত্তরবঙ্গের মেধা ও মননের এক অসাধারণ সমন্বয়।",
    history_en: "Established in 1963 in the renowned educational city of Rajshahi, this institute spans a large green campus in Sopura, boasting elite mechanical, civil, and electrical engineering workshops.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electromedical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Chemical Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1300,
    facilities: [
      "4 Boys Hostels & 1 Girls Hostel",
      "Sophisticated Chemical & Analytical Labs",
      "State-of-the-Art Power Generation Lab",
      "Auditorium & Sports Ground"
    ],
    principal: "Engr. Md. Faruk Hossain",
    contact: {
      address: "Sopura, Boalia, Rajshahi-6203",
      phone: "+880 721-761980",
      email: "rpi_rajshahi@yahoo.com",
      website: "http://rajpoly.gov.bd"
    }
  },
  {
    id: "rmpi-rajshahi",
    name: "Rajshahi Mohila Polytechnic Institute",
    bn_name: "রাজশাহী মহিলা পলিটেকনিক ইনস্টিটিউট",
    code: "24042",
    eiin: "133020",
    established: 2004,
    division: "Rajshahi",
    district: "Rajshahi",
    coordinates: [24.3855, 88.6189],
    avatar: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
    history: "২০০৪ সালে প্রতিষ্ঠিত রাজশাহী মহিলা পলিটেকনিক উত্তরবঙ্গের নারী শিক্ষার্থীদের ইঞ্জিনিয়ারিং শিক্ষায় উচ্চতর দক্ষতায় সমৃদ্ধ করে চলেছে।",
    history_en: "Established in 2004, Rajshahi Mohila Polytechnic Institute empowers female engineers with specialized instruction in Computer, Electronics, and Garments.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Architecture", seats: { shift1: 50, shift2: 50 } },
      { name: "Garments Design & Pattern Making", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Secure Campus", "Girls Hostel", "Garments CAD Lab", "Modern Library"],
    principal: "Engr. Farhana Yasmin",
    contact: {
      address: "Naodapara, Sopura, Rajshahi-6203",
      phone: "+880 721-861540",
      email: "principal_rmpi@yahoo.com",
      website: "http://rmpi.gov.bd"
    }
  },
  {
    id: "bpi-bogura",
    name: "Bogura Polytechnic Institute",
    bn_name: "বগুড়া পলিটেকনিক ইনস্টিটিউট",
    code: "20038",
    eiin: "132924",
    established: 1962,
    division: "Rajshahi",
    district: "Bogura",
    coordinates: [24.8465, 89.3700],
    avatar: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬২ সালে প্রতিষ্ঠিত বগুড়া পলিটেকনিক উত্তরবঙ্গের প্রবেশদ্বার বগুড়ার শেরপুর রোডে অবস্থিত। শিল্প কারখানা ও কৃষি প্রযুক্তির যন্ত্রাংশ উদ্ভাবনে এই প্রতিষ্ঠান অনন্য ভূমিকা রেখে আসছে।",
    history_en: "Founded in 1962 on Sherpur Road, Bogura Polytechnic Institute is a premier hub of foundry, mechanical, civil, and software engineering in North Bengal.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Refrigeration & Air Conditioning", seats: { shift1: 50, shift2: 50 } },
      { name: "Mining & Mine Survey", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1300,
    facilities: [
      "Specialized Mining Survey Equipment",
      "Full Foundry & Machine Shop",
      "Hostels for Boys and Girls",
      "High Speed Computer Center"
    ],
    principal: "Engr. Md. Abu Bakar Siddique",
    contact: {
      address: "Colony, Sherpur Road, Bogura-5800",
      phone: "+880 51-66723",
      email: "bogurapoly@yahoo.com",
      website: "http://bpi.edu.bd"
    }
  },
  {
    id: "pabpi-pabna",
    name: "Pabna Polytechnic Institute",
    bn_name: "পাবনা পলিটেকনিক ইনস্টিটিউট",
    code: "25042",
    eiin: "132954",
    established: 1924,
    division: "Rajshahi",
    district: "Pabna",
    coordinates: [24.0063, 89.2372],
    avatar: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80",
    history: "১৯২৪ সালে 'এলিয়ট টেকনিক্যাল স্কুল' হিসেবে প্রতিষ্ঠিত ঐতিহ্যবাহী পাবনা পলিটেকনিক পরবর্তীতে ১৯৬২ সালে পূর্ণাঙ্গ পলিটেকনিক ইনস্টিটিউট হিসেবে রূপান্তরিত হয়। এটি শতবর্ষের কারিগরি ঐতিহ্যের প্রতীক।",
    history_en: "Originally established in 1924 as Elliot Technical School and upgraded in 1962, Pabna Polytechnic holds a century-long legacy in Bangladesh technical engineering.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Environmental Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1100,
    facilities: ["Historic Campus Architecture", "Century Workshop", "Hostel Blocks", "Riverfront Research Center"],
    principal: "Engr. Md. Atiqur Rahman",
    contact: {
      address: "Pabna Sadar, Pabna-6600",
      phone: "+880 731-65490",
      email: "pabnapoly@yahoo.com",
      website: "http://pabnapoly.gov.bd"
    }
  },
  {
    id: "sirpi-sirajganj",
    name: "Sirajganj Polytechnic Institute",
    bn_name: "সিরাজগঞ্জ পলিটেকনিক ইনস্টিটিউট",
    code: "26023",
    eiin: "133221",
    established: 2004,
    division: "Rajshahi",
    district: "Sirajganj",
    coordinates: [24.4533, 89.7008],
    avatar: "https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&w=600&q=80",
    history: "২০০৪ সালে যমুনার তীরে প্রতিষ্ঠিত সিরাজগঞ্জ পলিটেকনিক ইনস্টিটিউট তথ্যপ্রযুক্তি ও পুরকৌশলে আধুনিক শিক্ষা প্রদান করছে।",
    history_en: "Established in 2004 along the Jamuna River, Sirajganj Polytechnic provides rigorous training in Civil, Computer, and Electrical sciences.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electrical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Computer Center", "Civil Structural Testing Lab", "Hostel"],
    principal: "Engr. Md. Golam Mostafa",
    contact: {
      address: "Kazipur Road, Sirajganj-6700",
      phone: "+880 751-64580",
      email: "info@spi.edu.bd",
      website: "http://spi.edu.bd"
    }
  },
  {
    id: "naopi-naogaon",
    name: "Naogaon Polytechnic Institute",
    bn_name: "নওগাঁ পলিটেকনিক ইনস্টিটিউট",
    code: "22026",
    eiin: "133340",
    established: 2000,
    division: "Rajshahi",
    district: "Naogaon",
    coordinates: [24.7936, 88.9318],
    avatar: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
    history: "২০০০ সালে প্রতিষ্ঠিত নওগাঁ পলিটেকনিক ইনস্টিটিউট খাদ্যশস্য ভাণ্ডার নওগাঁ জেলায় প্রযুক্তি বিপ্লব সৃষ্টি করেছে।",
    history_en: "Founded in 2000, Naogaon Polytechnic Institute delivers high-demand technical training across Civil, CST, Architecture, and Food technology.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Architecture", seats: { shift1: 50, shift2: 50 } },
      { name: "Food Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Food Processing Pilot Plant", "CAD Lab", "Hostels"],
    principal: "Engr. Md. Jahangir Alam",
    contact: {
      address: "Dhoncholi, Naogaon Sadar",
      phone: "+880 741-62840",
      email: "naogaonpoly@gmail.com",
      website: "http://naogaonpoly.gov.bd"
    }
  },
  {
    id: "chapi-chapainawabganj",
    name: "Chapainawabganj Polytechnic Institute",
    bn_name: "চাঁপাইনবাবগঞ্জ পলিটেকনিক ইনস্টিটিউট",
    code: "23020",
    eiin: "133370",
    established: 2006,
    division: "Rajshahi",
    district: "Chapainawabganj",
    coordinates: [24.5965, 88.2775],
    avatar: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    history: "২০০৬ সালে আম ও রেশমের রাজধানী চাঁপাইনবাবগঞ্জে প্রতিষ্ঠিত হয় এই প্রযুক্তি প্রতিষ্ঠানটি।",
    history_en: "Established in 2006, Chapainawabganj Polytechnic Institute empowers local youth with modern technical expertise.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electrical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Electrical Power Lab", "Computer Lab", "Library"],
    principal: "Engr. Humayun Kabir",
    contact: {
      address: "Baroghoria, Chapainawabganj",
      phone: "+880 781-52310",
      email: "chapainawabganjpoly@gmail.com",
      website: "http://cnpi.gov.bd"
    }
  },

  // --- KHULNA DIVISION ---
  {
    id: "kpi-khulna",
    name: "Khulna Polytechnic Institute",
    bn_name: "খুলনা পলিটেকনিক ইনস্টিটিউট",
    code: "35048",
    eiin: "132976",
    established: 1963,
    division: "Khulna",
    district: "Khulna",
    coordinates: [22.8456, 89.5403],
    avatar: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬৩ সালে প্রতিষ্ঠিত খুলনা পলিটেকনিক ইনস্টিটিউট দক্ষিণ-পশ্চিমাঞ্চল ও সুন্দরবন উপকূলবর্তী অঞ্চলের সর্ববৃহৎ কারিগরি বিদ্যাপীঠ। খালিশপুর শিল্প এলাকায় অবস্থিত এই প্রতিষ্ঠানটি ভারী শিল্প, বিদ্যুৎ কেন্দ্র এবং শিপইয়ার্ডের জন্য বিশ্বমানের মানবসম্পদ গড়ে তোলে।",
    history_en: "Founded in 1963 in Khalishpur, Khulna Polytechnic Institute is the industrial powerhouse of south-western Bangladesh, fostering excellence in marine, mechanical, and civil engineering.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Environmental Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Instrumentation & Process Control", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1300,
    facilities: [
      "Large Mechanical & Industrial Foundries",
      "Process Control & Automation Lab",
      "3 Boys Hostels (Titush, Sher-e-Bangla, etc.)",
      "Girls Hostel & Playing Grounds"
    ],
    principal: "Engr. Kazi Niamul Haque",
    contact: {
      address: "Khalishpur, Khulna-9000",
      phone: "+880 41-762310",
      email: "khulnapolytechnic@yahoo.com",
      website: "http://kpi.edu.bd"
    }
  },
  {
    id: "kmpi-khulna",
    name: "Khulna Mohila Polytechnic Institute",
    bn_name: "খুলনা মহিলা পলিটেকনিক ইনস্টিটিউট",
    code: "35050",
    eiin: "133033",
    established: 2005,
    division: "Khulna",
    district: "Khulna",
    coordinates: [22.8589, 89.5298],
    avatar: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    history: "২০০৫ সালে প্রতিষ্ঠিত খুলনা মহিলা পলিটেকনিক ইনস্টিটিউট নারী সমাজকে আধুনিক প্রকৌশল জ্ঞানে অগ্রণী করে তুলছে।",
    history_en: "Established in 2005, Khulna Mohila Polytechnic Institute is dedicated to nurturing technical proficiency and innovation among female polytechnic scholars.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Architecture", seats: { shift1: 50, shift2: 50 } },
      { name: "Environmental Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["CAD Center", "Secure Girls Dorm", "Modern Computer Networks"],
    principal: "Engr. Begum Salma Khatun",
    contact: {
      address: "Boyra, Khulna-9000",
      phone: "+880 41-760195",
      email: "kmpi_khulna@yahoo.com",
      website: "http://kmpi.gov.bd"
    }
  },
  {
    id: "jpi-jessore",
    name: "Jessore Polytechnic Institute",
    bn_name: "যশোর পলিটেকনিক ইনস্টিটিউট",
    code: "39016",
    eiin: "132938",
    established: 1964,
    division: "Khulna",
    district: "Jessore",
    coordinates: [23.1664, 89.2138],
    avatar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬৪ সালে প্রতিষ্ঠিত যশোর পলিটেকনিক দেশের প্রাচীনতম প্রথম সারির পলিটেকনিকগুলোর একটি। যশোরের শেখ হাসিনা সফটওয়্যার পার্কের নৈকট্যে এর কম্পিউটার বিভাগ বিশেষায়িত সফটওয়্যার দক্ষতায় এগিয়ে।",
    history_en: "Founded in 1964, Jessore Polytechnic Institute is an esteemed center of engineering excellence, located in close synergy with Sheikh Hasina Software Technology Park.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Telecommunication Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1100,
    facilities: ["High-spec Software Lab", "Automotive & Power Rig", "Student Hostels", "Central Library"],
    principal: "Engr. Md. Mostafizur Rahman",
    contact: {
      address: "Shankarpur, Jessore-7400",
      phone: "+880 421-68520",
      email: "jpi_jessore@yahoo.com",
      website: "http://jpi.gov.bd"
    }
  },
  {
    id: "kuspi-kushtia",
    name: "Kushtia Polytechnic Institute",
    bn_name: "কুষ্টিয়া পলিটেকনিক ইনস্টিটিউট",
    code: "34018",
    eiin: "132948",
    established: 1964,
    division: "Khulna",
    district: "Kushtia",
    coordinates: [23.9088, 89.1220],
    avatar: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬৪ সালে লালন ও রবীন্দ্র স্মৃতির কুষ্টিয়ায় প্রতিষ্ঠিত কুষ্টিয়া পলিটেকনিক ইনস্টিটিউট পশ্চিমাঞ্চলের কারিগরি শিক্ষার এক অনুপম কেন্দ্র।",
    history_en: "Established in 1964 in the cultural heartland of Kushtia, this institute has produced outstanding engineers serving across public utilities and industries.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 900,
    facilities: ["Foundry Workshop", "Electrical Machine Lab", "2 Hostels", "Gymnasium"],
    principal: "Engr. Md. Ruhul Amin",
    contact: {
      address: "Majuampur, Kushtia-7000",
      phone: "+880 71-61430",
      email: "kushtiapoly@yahoo.com",
      website: "http://kushtiapoly.gov.bd"
    }
  },
  {
    id: "jhpi-jhenaidah",
    name: "Jhenaidah Polytechnic Institute",
    bn_name: "ঝিনাইদহ পলিটেকনিক ইনস্টিটিউট",
    code: "37021",
    eiin: "133260",
    established: 2004,
    division: "Khulna",
    district: "Jhenaidah",
    coordinates: [23.5450, 89.1764],
    avatar: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?auto=format&fit=crop&w=600&q=80",
    history: "২০০৪ সালে প্রতিষ্ঠিত ঝিনাইদহ পলিটেকনিক ইনস্টিটিউট সবুজ ছায়াঘেরা ক্যাম্পাসে আধুনিক ইঞ্জিনিয়ারিং শিক্ষাদানে অগ্রগামী।",
    history_en: "Established in 2004, Jhenaidah Polytechnic features state-of-the-art computer and electrical laboratories.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Environmental Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Environmental Lab", "Computer Center", "Hostel"],
    principal: "Engr. Md. Shafiqul Islam",
    contact: {
      address: "Dhopaghata, Jhenaidah Sadar",
      phone: "+880 451-62780",
      email: "jhenaidahpoly@yahoo.com",
      website: "http://jhpi.gov.bd"
    }
  },
  {
    id: "satpi-satkhira",
    name: "Satkhira Polytechnic Institute",
    bn_name: "সাতক্ষীরা পলিটেকনিক ইনস্টিটিউট",
    code: "38019",
    eiin: "133270",
    established: 2002,
    division: "Khulna",
    district: "Satkhira",
    coordinates: [22.7185, 89.0705],
    avatar: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80",
    history: "২০০২ সালে সুন্দরবনের দ্বারে প্রতিষ্ঠিত সাতক্ষীরা পলিটেকনিক পরিবেশ ও তথ্যপ্রযুক্তিতে আধুনিক মানবসম্পদ গড়ে তোলে।",
    history_en: "Founded in 2002 at the gateway of the Sundarbans mangrove forest, Satkhira Polytechnic excels in environmental sciences and digital technologies.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Refrigeration & Air Conditioning", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Refrigeration Training Unit", "Computer Lab", "Student Dorms"],
    principal: "Engr. Md. Ashraf Ali",
    contact: {
      address: "Labsa, Satkhira Sadar",
      phone: "+880 471-63910",
      email: "satpoly@yahoo.com",
      website: "http://satpoly.gov.bd"
    }
  },
  {
    id: "bagpi-bagerhat",
    name: "Bagerhat Polytechnic Institute",
    bn_name: "বাগেরহাট পলিটেকনিক ইনস্টিটিউট",
    code: "36021",
    eiin: "133330",
    established: 2006,
    division: "Khulna",
    district: "Bagerhat",
    coordinates: [22.6602, 89.7895],
    avatar: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    history: "ষাটগম্বুজ মসজিদের ঐতিহাসিক শহরে ২০০৬ সালে প্রতিষ্ঠিত বাগেরহাট পলিটেকনিক ইনস্টিটিউট।",
    history_en: "Established in 2006 in historic Bagerhat, it offers forward-looking diplomas in CST, Civil, and Electronics.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Refrigeration & Air Conditioning", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Air Conditioning Workshop", "Electronics Bench Lab", "Campus WiFi"],
    principal: "Engr. Md. Nazmul Haque",
    contact: {
      address: "Chitalmari Road, Bagerhat",
      phone: "+880 468-63420",
      email: "bpi_bagerhat@yahoo.com",
      website: "http://bagerhatpoly.gov.bd"
    }
  },

  // --- BARISHAL DIVISION ---
  {
    id: "bpi-barishal",
    name: "Barishal Polytechnic Institute",
    bn_name: "বরিশাল পলিটেকনিক ইনস্টিটিউট",
    code: "42045",
    eiin: "132962",
    established: 1962,
    division: "Barishal",
    district: "Barishal",
    coordinates: [22.7088, 90.3654],
    avatar: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬২ সালে ফোর্ড ফাউন্ডেশনের সহায়তায় প্রতিষ্ঠিত বরিশাল পলিটেকনিক ইনস্টিটিউট দক্ষিণাঞ্চলের অন্যতম প্রধান কারিগরি বিদ্যাপীঠ। আলেকান্দা পলিটেকনিক রোডে সুবিশাল ক্যাম্পাস নিয়ে গঠিত এই প্রতিষ্ঠানটি নদীমাতৃক দক্ষিণাঞ্চলে যোগাযোগ, অবকাঠামো এবং বিদ্যুৎ ক্ষেত্রে যুগান্তকারী অবদান রেখে আসছে।",
    history_en: "Established in 1962 with support from the Ford Foundation, Barishal Polytechnic Institute is the prime technical institute of the southern division, celebrated for its sprawling campus and engineering caliber.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electro-Medical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Tourism & Hospitality", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1300,
    facilities: [
      "Modern Electro-Medical Equipment Lab",
      "Heavy Machine & Welding Workshops",
      "Student Dormitories (Male/Female)",
      "Specialized Tourism Training Kitchen & Mock Suite",
      "Auditorium & Sports Ground"
    ],
    principal: "Engr. Md. Tariqul Islam",
    contact: {
      address: "Alekanda, Polytechnic Road, Barishal-8200",
      phone: "+880 431-217730",
      email: "principal_bpi@yahoo.com",
      website: "https://barisalpoly.gov.bd"
    }
  },
  {
    id: "patpi-patuakhali",
    name: "Patuakhali Polytechnic Institute",
    bn_name: "পটুয়াখালী পলিটেকনিক ইনস্টিটিউট",
    code: "43018",
    eiin: "132957",
    established: 1989,
    division: "Barishal",
    district: "Patuakhali",
    coordinates: [22.3596, 90.3292],
    avatar: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
    history: "১৯৮৯ সালে কুয়াকাটা সাগরকন্যার উপকূলবর্তী জেলা পটুয়াখালীতে প্রতিষ্ঠিত হয় এই প্রতিষ্ঠান। উপকূলীয় অবকাঠামো নির্মাণ ও পায়রা সমুদ্রবন্দরের প্রকৌশল চাহিদায় এটি অগ্রণী।",
    history_en: "Founded in 1989 in Patuakhali, this institution supplies skilled technical manpower to Payra Seaport, Payra Thermal Power Plant, and mega infrastructure projects.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Refrigeration & Air Conditioning", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 700,
    facilities: ["Harbor & Coastal Engineering Lab", "Modern Hostels", "Central Library"],
    principal: "Engr. Md. Mahbubur Rahman",
    contact: {
      address: "Auliapur, Patuakhali Sadar-8600",
      phone: "+880 441-62830",
      email: "ppi_patuakhali@yahoo.com",
      website: "http://patuakhali.polytech.gov.bd"
    }
  },
  {
    id: "bhpi-bhola",
    name: "Bhola Polytechnic Institute",
    bn_name: "ভোলা পলিটেকনিক ইনস্টিটিউট",
    code: "44015",
    eiin: "133288",
    established: 2005,
    division: "Barishal",
    district: "Bhola",
    coordinates: [22.6865, 90.6481],
    avatar: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    history: "২০০৫ সালে দেশের একমাত্র দ্বীপজেলা ভোলায় প্রাকৃতিক গ্যাস ও নীল জলরাশির সান্নিধ্যে প্রতিষ্ঠিত হয় ভোলা পলিটেকনিক ইনস্টিটিউট।",
    history_en: "Established in 2005 on the island district of Bhola, this institute powers regional industry and youth technical education.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Refrigeration & Air Conditioning", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Electronics Workshop", "Computer Center", "Boys Dormitory"],
    principal: "Engr. Md. Asaduzzaman",
    contact: {
      address: "Jugirghol, Bhola Sadar-8300",
      phone: "+880 491-62150",
      email: "bholapoly@yahoo.com",
      website: "http://bholapoly.gov.bd"
    }
  },
  {
    id: "barpi-barguna",
    name: "Barguna Polytechnic Institute",
    bn_name: "বরগুনা পলিটেকনিক ইনস্টিটিউট",
    code: "45012",
    eiin: "133355",
    established: 2006,
    division: "Barishal",
    district: "Barguna",
    coordinates: [22.1554, 90.1265],
    avatar: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80",
    history: "২০০৬ সালে উপকূলীয় জেলা বরগুনায় কারিগরি শিক্ষার আলো ছড়িয়ে দিতে প্রতিষ্ঠিত হয়।",
    history_en: "Founded in 2006, Barguna Polytechnic trains dynamic engineers skilled in civil, electronics, and environmental solutions.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Environmental Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Environmental Testing Lab", "Hostel Facilities", "Library"],
    principal: "Engr. Md. Harun-ur-Rashid",
    contact: {
      address: "Dakkhin Badorkhali, Barguna Sadar",
      phone: "+880 448-62910",
      email: "bargunapoly@yahoo.com",
      website: "http://bargunapoly.gov.bd"
    }
  },
  {
    id: "jhapi-jhalakathi",
    name: "Jhalakathi Polytechnic Institute",
    bn_name: "ঝালকাঠি পলিটেকনিক ইনস্টিটিউট",
    code: "41014",
    eiin: "133377",
    established: 2006,
    division: "Barishal",
    district: "Jhalakathi",
    coordinates: [22.6425, 90.2012],
    avatar: "https://images.unsplash.com/photo-1510531704581-5b2870972060?auto=format&fit=crop&w=600&q=80",
    history: "২০০৬ সালে সুগন্ধা নদীর তীরে প্রতিষ্ঠিত ঝালকাঠি পলিটেকনিক ইনস্টিটিউট।",
    history_en: "Established in 2006 by the Sugandha river, Jhalakathi Polytechnic excels in civil and electrical training.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electrical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Electrical Testing Workshop", "Computer Lab", "Library"],
    principal: "Engr. Sheikh Farid",
    contact: {
      address: "Gabkhan Bridge Road, Jhalakathi",
      phone: "+880 498-63200",
      email: "jhalpoly@yahoo.com",
      website: "http://jhalpoly.gov.bd"
    }
  },

  // --- SYLHET DIVISION ---
  {
    id: "spi-sylhet",
    name: "Sylhet Polytechnic Institute",
    bn_name: "সিলেট পলিটেকনিক ইনস্টিটিউট",
    code: "61016",
    eiin: "132982",
    established: 1955,
    division: "Sylhet",
    district: "Sylhet",
    coordinates: [24.8998, 91.8973],
    avatar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
    history: "১৯৫৫ সালে ঢাকা পলিটেকনিকের সমসাময়িক সময়ে প্রতিষ্ঠিত সিলেট পলিটেকনিক ইনস্টিটিউট সুরমা নদীর তীরে অবস্থিত এক অন্যতম প্রাচীন ও গৌরবোজ্জ্বল প্রতিষ্ঠান। চা বাগান ও প্রাকৃতিক গ্যাস ঘেরা এই অঞ্চলের প্রকৌশল বিপ্লবে প্রতিষ্ঠানটির অবদান অবিস্মরণীয়।",
    history_en: "Co-founded in 1955 alongside Dhaka Polytechnic, Sylhet Polytechnic Institute stands tall on the banks of the Surma River, powering petroleum, power, and civil engineering.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electro-Medical Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1200,
    facilities: [
      "Heavy Machine & Automotive Lab",
      "Electro-Medical Laboratory",
      "3 Student Hostels",
      "Historical Heritage Library"
    ],
    principal: "Engr. Ratan Kumar Pandit",
    contact: {
      address: "Barkatpur, Tilagarh, Sylhet-3100",
      phone: "+880 821-716490",
      email: "principal_sylhetpoly@yahoo.com",
      website: "http://sylhetpoly.gov.bd"
    }
  },
  {
    id: "moulpi-moulvibazar",
    name: "Moulvibazar Polytechnic Institute",
    bn_name: "মৌলভীবাজার পলিটেকনিক ইনস্টিটিউট",
    code: "62024",
    eiin: "133285",
    established: 2006,
    division: "Sylhet",
    district: "Moulvibazar",
    coordinates: [24.4828, 91.7656],
    avatar: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=600&q=80",
    history: "২০০৬ সালে দুটি পাতা একটি কুঁড়ির দেশ মৌলভীবাজারে প্রতিষ্ঠিত।",
    history_en: "Established in 2006 amidst tea valleys, Moulvibazar Polytechnic provides contemporary diplomas in CST, Civil, and Food technology.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Food Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Refrigeration & Air Conditioning", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Food Quality Testing Lab", "Computer Center", "Hostels"],
    principal: "Engr. Md. Shamsul Alam",
    contact: {
      address: "Matarkapon, Sreemangal Road, Moulvibazar",
      phone: "+880 861-62870",
      email: "moulvipoly@yahoo.com",
      website: "http://moulvipoly.gov.bd"
    }
  },
  {
    id: "habpi-habiganj",
    name: "Habiganj Polytechnic Institute",
    bn_name: "হবিগঞ্জ পলিটেকনিক ইনস্টিটিউট",
    code: "63016",
    eiin: "133290",
    established: 2002,
    division: "Sylhet",
    district: "Habiganj",
    coordinates: [24.3842, 91.4167],
    avatar: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80",
    history: "২০০২ সালে প্রতিষ্ঠিত হবিগঞ্জ পলিটেকনিক ইনস্টিটিউট প্রাকৃতিক গ্যাস ও শিল্প এলাকায় দক্ষ প্রকৌশলী গঠনে নিয়োজিত।",
    history_en: "Founded in 2002, Habiganj Polytechnic delivers quality vocational education with strong ties to regional manufacturing estates.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Architecture", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["CAD Studio", "Electronics Bench", "Dormitories"],
    principal: "Engr. Md. Habibur Rahman",
    contact: {
      address: "Gopaya, Habiganj Sadar",
      phone: "+880 831-62410",
      email: "habiganjpoly@yahoo.com",
      website: "http://habiganjpoly.gov.bd"
    }
  },
  {
    id: "sunpi-sunamganj",
    name: "Sunamganj Polytechnic Institute",
    bn_name: "সুনামগঞ্জ পলিটেকনিক ইনস্টিটিউট",
    code: "64014",
    eiin: "133360",
    established: 2008,
    division: "Sylhet",
    district: "Sunamganj",
    coordinates: [25.0658, 91.4073],
    avatar: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
    history: "২০০৮ সালে মরমি কবি হাসন রাজার পুণ্যভূমি সুনামগঞ্জে প্রতিষ্ঠিত।",
    history_en: "Established in 2008, Sunamganj Polytechnic brings technical skills and higher vocational education to the greater Haor wetlands.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Environmental Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Water Quality Lab", "Computer Lab", "Library"],
    principal: "Engr. Md. Azizur Rahman",
    contact: {
      address: "Jahangirnagar, Sunamganj Sadar",
      phone: "+880 871-61520",
      email: "sunampoly@yahoo.com",
      website: "http://sunampoly.gov.bd"
    }
  },

  // --- RANGPUR DIVISION ---
  {
    id: "rpi-rangpur",
    name: "Rangpur Polytechnic Institute",
    bn_name: "রংপুর পলিটেকনিক ইনস্টিটিউট",
    code: "15042",
    eiin: "132971",
    established: 1968,
    division: "Rangpur",
    district: "Rangpur",
    coordinates: [25.7533, 89.2435],
    avatar: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬৮ সালে প্রতিষ্ঠিত রংপুর পলিটেকনিক ইনস্টিটিউট তিস্তা ও ঘাঘট অববাহিকার সর্বপ্রধান কারিগরি প্রতিষ্ঠান। উত্তরের কৃষি ও শিল্প অর্থনীতিকে আধুনিকীকরণ করতে প্রতিষ্ঠানটি নিরবচ্ছিন্নভাবে প্রকৌশলী তৈরি করছে।",
    history_en: "Established in 1968, Rangpur Polytechnic Institute is the flagship technical institute of northern Rangpur Division, known for its extensive workshops and academic rigor.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electro-Medical Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1200,
    facilities: [
      "Electro-Medical Testing Center",
      "Heavy Engine Testing Cell",
      "Hostels for Boys & Girls",
      "Central Sports Complex"
    ],
    principal: "Engr. Md. Farid Uddin",
    contact: {
      address: "Dhap, Jail Road, Rangpur-5400",
      phone: "+880 521-62380",
      email: "rangpurpoly@yahoo.com",
      website: "http://rangpurpoly.gov.bd"
    }
  },
  {
    id: "dinpi-dinajpur",
    name: "Dinajpur Polytechnic Institute",
    bn_name: "দিনাজপুর পলিটেকনিক ইনস্টিটিউট",
    code: "13045",
    eiin: "132932",
    established: 1964,
    division: "Rangpur",
    district: "Dinajpur",
    coordinates: [25.6279, 88.6332],
    avatar: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬৪ সালে রামসাগর ও কান্তজির ঐতিহাসিক জেলা দিনাজপুরে প্রতিষ্ঠিত হয়। বড়পুকুরিয়া কয়লাখনি ও মধ্যপাড়া কঠিন শিলা প্রকল্পের প্রকৌশল সহযোগিতায় প্রতিষ্ঠানটির ভূমিকা অপরিসীম।",
    history_en: "Founded in 1964, Dinajpur Polytechnic Institute is renowned for its mining, power, civil, and software technology diplomas with proximity to major national mining sites.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Architecture", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1100,
    facilities: ["Mining Survey Simulator", "Foundry and Machine Shop", "Hostels", "Library"],
    principal: "Engr. Md. Abdul Hannan",
    contact: {
      address: "Sujapur, Dinajpur Sadar-5200",
      phone: "+880 531-63490",
      email: "dinajpurpoly@yahoo.com",
      website: "http://dinajpurpoly.gov.bd"
    }
  },
  {
    id: "kurpi-kurigram",
    name: "Kurigram Polytechnic Institute",
    bn_name: "কুড়িগ্রাম পলিটেকনিক ইনস্টিটিউট",
    code: "16021",
    eiin: "133250",
    established: 2000,
    division: "Rangpur",
    district: "Kurigram",
    coordinates: [25.8072, 89.6361],
    avatar: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80",
    history: "২০০০ সালে ব্রহ্মপুত্র নদের কূলবর্তী সীমান্তবর্তী জেলা কুড়িগ্রামে কারিগরি বিপ্লবের শুভ সূচনা করে।",
    history_en: "Established in 2000, Kurigram Polytechnic brings modern engineering education to northern border communities.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Construction Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Computer Center", "Civil Yard", "Hostel"],
    principal: "Engr. Md. Nuruzzaman",
    contact: {
      address: "Krishnapur, Kurigram Sadar",
      phone: "+880 581-61430",
      email: "kurigrampoly@yahoo.com",
      website: "http://kurigrampoly.gov.bd"
    }
  },
  {
    id: "thakpi-thakurgaon",
    name: "Thakurgaon Polytechnic Institute",
    bn_name: "ঠাকুরগাঁও পলিটেকনিক ইনস্টিটিউট",
    code: "12018",
    eiin: "133320",
    established: 2004,
    division: "Rangpur",
    district: "Thakurgaon",
    coordinates: [26.0418, 88.4682],
    avatar: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
    history: "২০০৪ সালে উত্তরাঞ্চলের প্রান্তিক জেলায় সুদৃঢ় প্রকৌশল ভিত রচনা করতে প্রতিষ্ঠিত হয়।",
    history_en: "Founded in 2004, Thakurgaon Polytechnic offers innovative diplomas in CST, Food, and RAC.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Food Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Refrigeration & Air Conditioning", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Food Processing Lab", "RAC Shop", "Hostel"],
    principal: "Engr. Md. Sadequl Islam",
    contact: {
      address: "Gobindanagar, Thakurgaon",
      phone: "+880 561-52400",
      email: "thakpoly@yahoo.com",
      website: "http://thakpoly.gov.bd"
    }
  },

  // --- MYMENSINGH DIVISION ---
  {
    id: "mpi-mymensingh",
    name: "Mymensingh Polytechnic Institute",
    bn_name: "ময়মনসিংহ পলিটেকনিক ইনস্টিটিউট",
    code: "57040",
    eiin: "132964",
    established: 1963,
    division: "Mymensingh",
    district: "Mymensingh",
    coordinates: [24.7471, 90.4203],
    avatar: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80",
    history: "১৯৬৩ সালে প্রতিষ্ঠিত ময়মনসিংহ পলিটেকনিক ইনস্টিটিউট পুরাতন ব্রহ্মপুত্র নদের তীরে মাসকান্দায় অবস্থিত। বৃহত্তর ময়মনসিংহ অঞ্চলের সর্বশ্রেষ্ঠ ও বৃহত্তম কারিগরি শিক্ষাঙ্গন হিসেবে এটি স্বীকৃত।",
    history_en: "Established in 1963 on the scenic banks of the Old Brahmaputra river in Maskanda, Mymensingh Polytechnic is the premier institute of the division, renowned for academic excellence.",
    departments: [
      { name: "Civil Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electrical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Mechanical Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Computer Science & Technology", seats: { shift1: 100, shift2: 100 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Power Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electro-Medical Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 1200,
    facilities: [
      "Modern Power Transmission & Machine Lab",
      "Specialized Electro-Medical Lab",
      "3 Boys Hostels & 1 Girls Hostel",
      "Central Library & Botanical Grove"
    ],
    principal: "Engr. Md. Shawkat Ali",
    contact: {
      address: "Maskanda, Mymensingh-2200",
      phone: "+880 91-65480",
      email: "principal_mpi@yahoo.com",
      website: "http://mpi.edu.bd"
    }
  },
  {
    id: "jampi-jamalpur",
    name: "Jamalpur Polytechnic Institute",
    bn_name: "জামালপুর পলিটেকনিক ইনস্টিটিউট",
    code: "58018",
    eiin: "133385",
    established: 2014,
    division: "Mymensingh",
    district: "Jamalpur",
    coordinates: [24.9375, 89.9378],
    avatar: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=600&q=80",
    history: "২০১৪ সালে প্রতিষ্ঠিত জামালপুর পলিটেকনিক ইনস্টিটিউট আধুনিক সুযোগ-সুবিধা নিয়ে তরুণদের তথ্যপ্রযুক্তি ও প্রকৌশলে প্রশিক্ষণ দিচ্ছে।",
    history_en: "Established in 2014, Jamalpur Polytechnic features advanced computer labs and mechanical workshop complexes.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electrical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Mechanical Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Computer Center", "Electrical Labs", "Hostel"],
    principal: "Engr. Md. Golam Sarwar",
    contact: {
      address: "Beltia, Jamalpur Sadar-2000",
      phone: "+880 981-63240",
      email: "jamalpurpoly@yahoo.com",
      website: "http://jamalpurpoly.gov.bd"
    }
  },
  {
    id: "sherpi-sherpur",
    name: "Sherpur Polytechnic Institute",
    bn_name: "শেরপুর পলিটেকনিক ইনস্টিটিউট",
    code: "59015",
    eiin: "133390",
    established: 2004,
    division: "Mymensingh",
    district: "Sherpur",
    coordinates: [25.0205, 90.0153],
    avatar: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80",
    history: "২০০৪ সালে গারো পাহাড়ের পাদদেশে অবস্থিত শেরপুরে প্রতিষ্ঠিত হয়।",
    history_en: "Founded in 2004 near the Garo Hills, Sherpur Polytechnic delivers high quality training in CST, Civil, and Environmental fields.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Environmental Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Environmental Lab", "Modern Computer Lab", "Hostel"],
    principal: "Engr. Md. Mahfuzur Rahman",
    contact: {
      address: "Bhatshala, Sherpur Sadar",
      phone: "+880 931-61920",
      email: "sherpurpoly@yahoo.com",
      website: "http://sherpurpoly.gov.bd"
    }
  },
  {
    id: "netpi-netrokona",
    name: "Netrokona Polytechnic Institute",
    bn_name: "নেত্রকোণা পলিটেকনিক ইনস্টিটিউট",
    code: "60012",
    eiin: "133405",
    established: 2006,
    division: "Mymensingh",
    district: "Netrokona",
    coordinates: [24.8778, 90.7275],
    avatar: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    history: "২০০৬ সালে বিরিশিরি ও কংস নদীর ঐতিহ্যবাহী ভূমিতে প্রতিষ্ঠিত নেত্রকোণা পলিটেকনিক ইনস্টিটিউট।",
    history_en: "Established in 2006, Netrokona Polytechnic trains talented students in CST, Civil, and Mechanical disciplines.",
    departments: [
      { name: "Computer Science & Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Civil Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electrical Technology", seats: { shift1: 50, shift2: 50 } },
      { name: "Electronics Technology", seats: { shift1: 50, shift2: 50 } }
    ],
    shifts: "1st Shift & 2nd Shift",
    totalSeats: 400,
    facilities: ["Modern CAD Lab", "Electrical Workshop", "Library"],
    principal: "Engr. Md. Nazir Hossain",
    contact: {
      address: "Rajur Bazar, Netrokona Sadar",
      phone: "+880 951-61310",
      email: "netrokonapoly@yahoo.com",
      website: "http://netrokonapoly.gov.bd"
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { POLYTECHNIC_DATA };
}
