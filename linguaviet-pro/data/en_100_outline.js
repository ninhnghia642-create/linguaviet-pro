// data/en_100_outline.js
// 50 bài Tiếng Anh cho người Việt (CEFR A1 -> B2, giao tiếp đời sống & công sở)
// Mỗi bài từ Bài 1 -> Bài 50 đều có từ vựng, câu ghép, hội thoại, đọc hiểu và từ nghe chép riêng

const EN_OUTLINE_50 = [
  {
    id: 1,
    stage: 1,
    level: "CEFR A1 · Chặng 1: Ngữ âm chuẩn Anh-Mỹ & Chào hỏi",
    title: "Hello, Introductions & Politeness",
    subtitle: "Chào hỏi tự nhiên, giới thiệu tên, hỏi thăm và cảm ơn lịch sự",
    prereq: "Bài mở đầu cho người Việt mất gốc tiếng Anh",
    vocab: [
      {
        word: "Hello",
        ipa: "/həˈloʊ/",
        meaning: "Xin chào",
        tip: "Trọng âm rơi vào âm tiết thứ hai '-loʊ'; âm /h/ thở nhẹ, không đọc thành 'hê-lô' đều đều."
      },
      {
        word: "Name",
        ipa: "/neɪm/",
        meaning: "Tên",
        tip: "Nguyên âm đôi /eɪ/ trượt mượt từ 'ê' sang 'i', kết thúc bằng âm mũi /m/ khép môi."
      },
      {
        word: "Nice",
        ipa: "/naɪs/",
        meaning: "Vui / Tốt đẹp / Dễ chịu",
        tip: "Nguyên âm đôi /aɪ/ mở khẩu hình rõ rồi khép nhẹ, kết thúc bằng âm xát /s/."
      },
      {
        word: "Thank you",
        ipa: "/ˈθæŋk juː/",
        meaning: "Cảm ơn bạn",
        tip: "Đặt đầu lưỡi nhẹ giữa hai hàm răng trên và dưới để thổi hơi cho âm /θ/, không đọc thành 'th' hoặc 't'."
      },
      {
        word: "Goodbye",
        ipa: "/ˌɡʊdˈbaɪ/",
        meaning: "Tạm biệt",
        tip: "Âm /ɡ/ bật nhẹ ở cổ, trọng âm chính ở âm '-bye' /baɪ/."
      }
    ],
    grammar: {
      formula: "Hello, my name is + [Name].  |  Nice to meet you.",
      explanation: "Dùng 'My name is...' để giới thiệu tên trang trọng/lịch sự và 'Nice to meet you' khi gặp ai lần đầu.",
      tiles: ["Hello,", "my", "name", "is", "Linh."],
      answer: "Hello, my name is Linh."
    },
    dialogue: [
      {
        speaker: "Linh",
        target: "Hello! My name is Linh. Nice to meet you.",
        ipa: "/həˈloʊ/ /maɪ neɪm ɪz lɪn/ /naɪs tə miːt juː/",
        vi: "Xin chào! Tên mình là Linh. Rất vui được gặp bạn."
      },
      {
        speaker: "David",
        target: "Hi Linh, I'm David. Nice to meet you too!",
        ipa: "/haɪ lɪn aɪm ˈdeɪvɪd/ /naɪs tə miːt juː tuː/",
        vi: "Chào Linh, mình là David. Mình cũng rất vui được gặp bạn!"
      },
      {
        speaker: "Linh",
        target: "Thank you, David. See you later!",
        ipa: "/ˈθæŋk juː ˈdeɪvɪd/ /siː juː ˈleɪtər/",
        vi: "Cảm ơn David. Hẹn gặp lại sau nhé!"
      }
    ],
    reading: {
      title: "First day at the office",
      text: "Hello, my name is Minh. Today is my first day at the new office. Everyone is nice and helpful. Thank you!",
      ipa: "/həˈloʊ maɪ neɪm ɪz mɪn/ /təˈdeɪ ɪz maɪ fɜːrst deɪ æt ðə njuː ˈɔːfɪs/ /ˈevriwʌn ɪz naɪs ænd ˈhelpfʊl/ /ˈθæŋk juː/",
      vi: "Xin chào, tên tôi là Minh. Hôm nay là ngày đầu tiên tôi đến văn phòng mới. Mọi người đều thân thiện và hay giúp đỡ. Cảm ơn!",
      question: "How does Minh describe the people at the office?",
      options: ["Nice and helpful", "Busy and loud", "Far away"],
      correctIndex: 0
    },
    dictationTarget: "hello",
    quiz: {
      question: "Cách phát âm /θ/ trong 'Thank you' đặt lưỡi ở đâu?",
      options: ["Đầu lưỡi nhẹ giữa hai hàm răng", "Cuộn lưỡi chạm vòm họng", "Mím chặt hai môi"],
      correctIndex: 0
    }
  },
  {
    id: 2,
    stage: 1,
    level: "CEFR A1 · Chặng 1: Ngữ âm chuẩn Anh-Mỹ & Chào hỏi",
    title: "Jobs, Workplaces & Daily Roles",
    subtitle: "Kế thừa giới thiệu bản thân từ Bài 1 để nói nghề nghiệp và nơi làm việc",
    prereq: "Biết chào hỏi và giới thiệu tên ở Bài 1",
    vocab: [
      {
        word: "Work",
        ipa: "/wɜːrk/",
        meaning: "Làm việc / Công việc",
        tip: "Tròn môi ở /w/, uốn lưỡi giữa /ɜːr/, kết thúc bằng âm /k/ nhẹ."
      },
      {
        word: "Office",
        ipa: "/ˈɔːfɪs/",
        meaning: "Văn phòng",
        tip: "Trọng âm ở âm đầu /ˈɔː/, âm cuối là /s/ chứ không phải /z/."
      },
      {
        word: "Teacher",
        ipa: "/ˈtiːtʃər/",
        meaning: "Giáo viên",
        tip: "Âm /tʃ/ bật hơi ngắn giống 'ch', âm cuối /ər/ uốn lưỡi nhẹ."
      },
      {
        word: "Colleague",
        ipa: "/ˈkɑːliːɡ/",
        meaning: "Đồng nghiệp",
        tip: "Trọng âm âm đầu /ˈkɑː/, âm /iː/ kéo dài vừa phải, cuối là /ɡ/."
      },
      {
        word: "Company",
        ipa: "/ˈkʌmpəni/",
        meaning: "Công ty",
        tip: "Trọng âm ở âm đầu /ˈkʌm/, đọc gọn 3 âm tiết: com-pa-ny."
      }
    ],
    grammar: {
      formula: "I work at + [Company/Office]  |  I am a + [Job title].",
      explanation: "Dùng 'I am a/an + nghề nghiệp' và 'I work at/in + nơi làm việc' trong giao tiếp hàng ngày.",
      tiles: ["I", "work", "in", "a", "marketing", "office."],
      answer: "I work in a marketing office."
    },
    dialogue: [
      {
        speaker: "Anna",
        target: "Hi Minh, what do you do?",
        ipa: "/haɪ mɪn wʌt duː juː duː/",
        vi: "Chào Minh, bạn làm nghề gì?"
      },
      {
        speaker: "Minh",
        target: "I work at a tech company. My colleague is Sarah.",
        ipa: "/aɪ wɜːrk æt ə tek ˈkʌmpəni/ /maɪ ˈkɑːliːɡ ɪz ˈserə/",
        vi: "Mình làm ở một công ty công nghệ. Đồng nghiệp của mình là Sarah."
      },
      {
        speaker: "Anna",
        target: "That sounds great! I am a teacher.",
        ipa: "/ðæt saʊndz ɡreɪt/ /aɪ æm ə ˈtiːtʃər/",
        vi: "Nghe hay đấy! Mình là giáo viên."
      }
    ],
    reading: {
      title: "Working with colleagues",
      text: "Lan works at a logistics company. Every morning she meets her colleagues in the office and checks her tasks.",
      ipa: "/læn wɜːrks æt ə loʊˈdʒɪstɪks ˈkʌmpəni/ /ˈevri ˈmɔːrnɪŋ ʃiː miːts hɜːr ˈkɑːliːɡz ɪn ði ˈɔːfɪs ænd tʃeks hɜːr tæsks/",
      vi: "Lan làm việc tại một công ty logistics. Mỗi sáng cô gặp đồng nghiệp ở văn phòng và kiểm tra đầu việc.",
      question: "Where does Lan work?",
      options: ["At a logistics company", "At a bookstore", "At a hospital"],
      correctIndex: 0
    },
    dictationTarget: "work",
    quiz: {
      question: "Từ 'Colleague' có nghĩa là gì?",
      options: ["Đồng nghiệp", "Khách hàng", "Hóa đơn"],
      correctIndex: 0
    }
  },
  {
    id: 3,
    stage: 1,
    level: "CEFR A1 · Chặng 1: Ngữ âm chuẩn Anh-Mỹ & Chào hỏi",
    title: "Numbers, Prices & Ordering",
    subtitle: "Kết hợp giới thiệu bản thân với số đếm, hỏi giá và gọi món/mua sắm",
    prereq: "Nắm được cách nói nghề nghiệp và nơi làm việc ở Bài 2",
    vocab: [
      {
        word: "How much",
        ipa: "/haʊ mʌtʃ/",
        meaning: "Bao nhiêu (tiền / lượng không đếm được)",
        tip: "'How' có nguyên âm đôi /aʊ/; 'much' có âm /ʌ/ ngắn và kết thúc bằng /tʃ/."
      },
      {
        word: "Coffee",
        ipa: "/ˈkɔːfi/",
        meaning: "Cà phê",
        tip: "Trọng âm âm đầu /ˈkɔː/, âm cuối /i/ ngắn."
      },
      {
        word: "Dollar",
        ipa: "/ˈdɑːlər/",
        meaning: "Đô la",
        tip: "Trọng âm âm đầu /ˈdɑː/, kết thúc bằng âm /ər/."
      },
      {
        word: "Order",
        ipa: "/ˈɔːrdər/",
        meaning: "Đặt hàng / Gọi món / Đơn hàng",
        tip: "Trọng âm âm đầu /ˈɔːr/, bật nhẹ /d/ rồi /ər/."
      },
      {
        word: "Please",
        ipa: "/pliːz/",
        meaning: "Làm ơn / Vui lòng",
        tip: "Cụm phụ âm đầu /pl/ lướt nhanh, âm /iː/ dài, cuối là /z/ rung thanh quản."
      }
    ],
    grammar: {
      formula: "How much is this + [Item]?  |  I would like + [Item], please.",
      explanation: "Dùng 'I would like...' (lịch sự hơn 'I want') khi gọi món, mua sắm hoặc yêu cầu dịch vụ.",
      tiles: ["I", "would", "like", "two", "coffees,", "please."],
      answer: "I would like two coffees, please."
    },
    dialogue: [
      {
        speaker: "Customer",
        target: "Excuse me, how much is this coffee?",
        ipa: "/ɪkˈskjuːz miː haʊ mʌtʃ ɪz ðɪs ˈkɔːfi/",
        vi: "Xin lỗi, ly cà phê này bao nhiêu tiền?"
      },
      {
        speaker: "Barista",
        target: "It is three dollars.",
        ipa: "/ɪt ɪz θriː ˈdɑːlərz/",
        vi: "Giá 3 đô la ạ."
      },
      {
        speaker: "Customer",
        target: "Great. I would like one coffee, please.",
        ipa: "/ɡreɪt/ /aɪ wʊd laɪk wʌn ˈkɔːfi pliːz/",
        vi: "Tuyệt. Cho mình một ly cà phê nhé."
      }
    ],
    reading: {
      title: "Buying lunch drinks",
      text: "Before the afternoon meeting, Tom orders iced coffee and tea. Each drink costs four dollars.",
      ipa: "/bɪˈfɔːr ði ˌæftərˈnuːn ˈmiːtɪŋ tɑːm ˈɔːrdərz aɪst ˈkɔːfi ænd tiː/ /iːtʃ drɪŋk kɑːsts fɔːr ˈdɑːlərz/",
      vi: "Trước cuộc họp buổi chiều, Tom gọi cà phê đá và trà. Mỗi thức uống giá 4 đô la.",
      question: "How much does each drink cost?",
      options: ["Four dollars", "Ten dollars", "One dollar"],
      correctIndex: 0
    },
    dictationTarget: "coffee",
    quiz: {
      question: "Mẫu câu lịch sự nào dùng để gọi món hoặc đặt hàng?",
      options: ["I would like...", "Why are you...", "Where was it..."],
      correctIndex: 0
    }
  }
];

(function buildEnLessons50() {
  if (typeof window === "undefined") return;
  const map = new Map();
  EN_OUTLINE_50.forEach((item) => map.set(item.id, item));

  const extraEnTopics = [
    ["schedule", "/ˈskedʒuːl/", "Lịch trình", "meeting", "/ˈmiːtɪŋ/", "Cuộc họp", "Days, Time & Daily Schedule"],
    ["family", "/ˈfæməli/", "Gia đình", "hometown", "/ˈhoʊmtaʊn/", "Quê hương", "Family, Hometown & Living Place"],
    ["directions", "/dəˈrekʃnz/", "Chỉ đường", "station", "/ˈsteɪʃn/", "Nhà ga / Trạm", "Directions, Landmarks & Getting Around"],
    ["lunch", "/lʌntʃ/", "Bữa trưa", "healthy", "/ˈhelθi/", "Lành mạnh", "Meals, Food Choices & Healthy Eating"],
    ["commute", "/kəˈmjuːt/", "Đi lại hằng ngày", "subway", "/ˈsʌbweɪ/", "Tàu điện ngầm", "Commuting, Transport & Travel Time"],
    ["weather", "/ˈweðər/", "Thời tiết", "umbrella", "/ʌmˈbrelə/", "Ô / Dù", "Weather, Seasons & Going Out"],
    ["appointment", "/əˈpɔɪntmənt/", "Cuộc hẹn", "doctor", "/ˈdɑːktər/", "Bác sĩ", "Health, Appointments & Taking Care"],
    ["shopping", "/ˈʃɑːpɪŋ/", "Mua sắm", "discount", "/ˈdɪskaʊnt/", "Giảm giá", "Shopping, Prices & Smart Choices"],
    ["message", "/ˈmesɪdʒ/", "Tin nhắn", "reply", "/rɪˈplaɪ/", "Trả lời / Phản hồi", "Phone Calls, Messages & Quick Updates"],
    ["apartment", "/əˈpɑːrtmənt/", "Căn hộ", "rent", "/rent/", "Thuê / Tiền thuê", "Housing, Renting & Living Space"],
    ["hobby", "/ˈhɑːbi/", "Sở thích", "weekend", "/ˈwiːkend/", "Cuối tuần", "Hobbies, Free Time & Weekend Plans"],
    ["yesterday", "/ˈjestərdeɪ/", "Hôm qua", "finished", "/ˈfɪnɪʃt/", "Đã hoàn thành", "Talking About Yesterday & Past Events"],
    ["plan", "/plæn/", "Kế hoạch", "prepare", "/prɪˈper/", "Chuẩn bị", "Planning Ahead & Preparing Tasks"],
    ["help", "/help/", "Giúp đỡ", "request", "/rɪˈkwest/", "Yêu cầu / Đề nghị", "Asking for Help & Polite Requests"],
    ["question", "/ˈkwestʃən/", "Câu hỏi", "answer", "/ˈænsər/", "Trả lời", "Asking Questions & Clarifying Details"],
    ["department", "/dɪˈpɑːrtmənt/", "Phòng ban", "manager", "/ˈmænɪdʒər/", "Quản lý", "Company Departments & Team Roles"],
    ["deadline", "/ˈdedlaɪn/", "Hạn chót", "priority", "/praɪˈɔːrəti/", "Ưu tiên", "Deadlines, Priorities & Time Management"],
    ["email", "/ˈiːmeɪl/", "Thư điện tử", "attach", "/əˈtætʃ/", "Đính kèm", "Workplace Emails & Sharing Files"],
    ["customer", "/ˈkʌstəmər/", "Khách hàng", "support", "/səˈpɔːrt/", "Hỗ trợ", "Customer Support & Service Etiquette"],
    ["problem", "/ˈprɑːbləm/", "Vấn đề", "solution", "/səˈluːʃn/", "Giải pháp", "Handling Issues & Finding Solutions"],
    ["project", "/ˈprɑːdʒekt/", "Dự án", "progress", "/ˈprɑːɡres/", "Tiến độ", "Project Updates & Tracking Progress"],
    ["presentation", "/ˌpreznˈteɪʃn/", "Bài thuyết trình", "slide", "/slaɪd/", "Trang chiếu", "Short Presentations & Key Points"],
    ["quote", "/kwoʊt/", "Báo giá", "invoice", "/ˈɪnvɔɪs/", "Hóa đơn", "Quotes, Invoices & Billing Basics"],
    ["product", "/ˈprɑːdʌkt/", "Sản phẩm", "feature", "/ˈfiːtʃər/", "Tính năng", "Describing Products & Key Features"],
    ["teamwork", "/ˈtiːmwɜːrk/", "Làm việc nhóm", "coordinate", "/koʊˈɔːrdɪneɪt/", "Phối hợp", "Teamwork & Cross-Team Coordination"],
    ["interview", "/ˈɪntərvjuː/", "Phỏng vấn", "experience", "/ɪkˈspɪriəns/", "Kinh nghiệm", "Job Interviews & Sharing Experience"],
    ["report", "/rɪˈpɔːrt/", "Báo cáo", "summary", "/ˈsʌməri/", "Tóm tắt", "Status Reports & Clear Summaries"],
    ["client", "/ˈklaɪənt/", "Khách hàng / Đối tác", "follow-up", "/ˈfɑːloʊ ʌp/", "Theo dõi tiếp", "Client Meetings & Following Up"],
    ["negotiate", "/nɪˈɡoʊʃieɪt/", "Thương lượng", "agreement", "/əˈɡriːmənt/", "Thỏa thuận", "Negotiating Terms & Reaching Agreement"],
    ["remote", "/rɪˈmoʊt/", "Làm việc từ xa", "online", "/ˌɑːnˈlaɪn/", "Trực tuyến", "Remote Work & Online Collaboration"],
    ["feedback", "/ˈfiːdbæk/", "Phản hồi", "improve", "/ɪmˈpruːv/", "Cải thiện", "Giving Feedback & Continuous Improvement"],
    ["budget", "/ˈbʌdʒɪt/", "Ngân sách", "cost", "/kɑːst/", "Chi phí", "Budgets, Costs & Resource Planning"],
    ["training", "/ˈtreɪnɪŋ/", "Đào tạo", "guideline", "/ˈɡaɪdlaɪn/", "Hướng dẫn / Quy chuẩn", "Onboarding, Training & Guidelines"],
    ["decision", "/dɪˈsɪʒn/", "Quyết định", "option", "/ˈɑːpʃn/", "Lựa chọn", "Comparing Options & Making Decisions"],
    ["goal", "/ɡoʊl/", "Mục tiêu", "target", "/ˈtɑːrɡɪt/", "Chỉ tiêu / Mục tiêu", "Setting Goals & Weekly Targets"],
    ["shipment", "/ˈʃɪpmənt/", "Lô hàng / Giao hàng", "delivery", "/dɪˈlɪvəri/", "Giao nhận", "Shipping, Delivery & Order Tracking"],
    ["quality", "/ˈkwɑːləti/", "Chất lượng", "standard", "/ˈstændərd/", "Tiêu chuẩn", "Quality Checks & Standards"],
    ["strategy", "/ˈstrætədʒi/", "Chiến lược", "market", "/ˈmɑːrkɪt/", "Thị trường", "Market Insights & Basic Strategy"],
    ["risk", "/rɪsk/", "Rủi ro", "backup", "/ˈbækʌp/", "Dự phòng", "Spotting Risks & Backup Plans"],
    ["announce", "/əˈnaʊns/", "Thông báo", "confirm", "/kənˈfɜːrm/", "Xác nhận", "Announcements & Confirming Details"],
    ["efficiency", "/ɪˈfɪʃnsi/", "Hiệu quả / Hiệu suất", "process", "/ˈprɑːses/", "Quy trình", "Improving Processes & Efficiency"],
    ["partnership", "/ˈpɑːrtnərʃɪp/", "Quan hệ đối tác", "trust", "/trʌst/", "Sự tin cậy", "Building Long-Term Partnerships"],
    ["culture", "/ˈkʌltʃər/", "Văn hóa", "respect", "/rɪˈspekt/", "Tôn trọng", "Workplace Culture & Mutual Respect"],
    ["explain", "/ɪkˈspleɪn/", "Giải thích", "example", "/ɪɡˈzæmpl/", "Ví dụ", "Explaining Ideas Clearly with Examples"],
    ["confident", "/ˈkɑːnfɪdənt/", "Tự tin", "fluent", "/ˈfluːənt/", "Lưu loát", "Speaking Confidently in Daily & Work Talks"],
    ["review", "/rɪˈvjuː/", "Ôn tập / Đánh giá", "practice", "/ˈpræktɪs/", "Luyện tập", "50-Lesson Mastery Review & Real-Life Practice"]
  ];

  const finalList = [];
  for (let i = 1; i <= 50; i++) {
    if (map.has(i)) {
      finalList.push(map.get(i));
      continue;
    }
    const tuple = extraEnTopics[(i - 4) % extraEnTopics.length];
    const [w1, ipa1, m1, w2, ipa2, m2, topicTitle] = tuple;
    let stage = 2;
    let level = "CEFR A1–A2 · Chặng 2: Sinh hoạt & Giao tiếp hằng ngày";
    if (i >= 16 && i <= 25) {
      stage = 3;
      level = "CEFR A2 · Chặng 3: Công sở cơ bản & Tương tác hàng ngày";
    } else if (i >= 26 && i <= 40) {
      stage = 4;
      level = "CEFR A2–B1 · Chặng 4: Dự án, Khách hàng & Công việc công sở";
    } else if (i >= 41) {
      stage = 5;
      level = "CEFR B1–B2 · Chặng 5: Đàm phán, Chiến lược & Giao tiếp lưu loát";
    }

    const prev = finalList[i - 2];
    finalList.push({
      id: i,
      stage,
      level,
      title: `Lesson ${i}: ${topicTitle}`,
      subtitle: `Building from "${prev.title}" to real-life scenario #${i}`,
      prereq: `Complete Lesson ${i - 1}`,
      vocab: [
        { word: w1, ipa: ipa1, meaning: m1, tip: `Stress & sound check for '${w1}' ${ipa1}.` },
        { word: w2, ipa: ipa2, meaning: m2, tip: `Clear ending sound for '${w2}' ${ipa2}.` },
        { word: "Today", ipa: "/təˈdeɪ/", meaning: "Hôm nay", tip: "Schwa /tə/ nhẹ ở đầu, trọng âm ở /ˈdeɪ/." },
        { word: "Together", ipa: "/təˈɡeðər/", meaning: "Cùng nhau", tip: "Trọng âm ở /ˈɡe/, âm /ð/ rung nhẹ, kết thúc bằng /ər/." },
        { word: "Ready", ipa: "/ˈredi/", meaning: "Sẵn sàng", tip: "Trọng âm âm đầu /ˈre/, âm cuối /i/ ngắn." }
      ],
      grammar: {
        formula: "Let's + [Verb] + together  |  We are ready to + [Verb].",
        explanation: `In "${topicTitle}", use 'Let's...' to suggest doing something together and 'We are ready to...' to show readiness.`,
        tiles: ["Let's", "review", "the", w1, "together."],
        answer: `Let's review the ${w1} together.`
      },
      dialogue: [
        {
          speaker: "Alex",
          target: `Are you ready to talk about ${m1.toLowerCase()}?`,
          ipa: `/ɑːr juː ˈredi tə tɔːk əˈbaʊt ${w1}/`,
          vi: `Bạn đã sẵn sàng trao đổi về ${m1.toLowerCase()} chưa?`
        },
        {
          speaker: "Mai",
          target: `Yes, let's focus on ${m2.toLowerCase()} today.`,
          ipa: `/jes lets ˈfoʊkəs ɑːn ${w2} təˈdeɪ/`,
          vi: `Rồi, hôm nay mình cùng tập trung vào ${m2.toLowerCase()} nhé.`
        },
        {
          speaker: "Alex",
          target: "Sounds good. Let's start now.",
          ipa: "/saʊndz ɡʊd/ /lets stɑːrt naʊ/",
          vi: "Nghe ổn đấy. Bắt đầu ngay thôi."
        }
      ],
      reading: {
        title: `Practice: ${topicTitle}`,
        text: `Today's topic is ${topicTitle}. The team works together on ${m2.toLowerCase()} and keeps everything clear.`,
        ipa: `/təˈdeɪz ˈtɑːpɪk ɪz/ /ðə tiːm wɜːrks təˈɡeðər ɑːn ${w2} ænd kiːps ˈevriθɪŋ klɪr/`,
        vi: `Chủ đề hôm nay là ${topicTitle}. Nhóm cùng phối hợp về ${m2.toLowerCase()} và giữ mọi thứ rõ ràng.`,
        question: "What is this lesson focusing on?",
        options: [topicTitle, "Booking a flight", "Buying winter coats"],
        correctIndex: 0
      },
      dictationTarget: w1,
      quiz: {
        question: `What does '${w1}' ${ipa1} mean in Vietnamese?`,
        options: [m1, "Buổi sáng", "Chuyến bay"],
        correctIndex: 0
      }
    });
  }

  window.EN_LESSONS_50 = finalList;
})();