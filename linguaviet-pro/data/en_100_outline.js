// data/en_100_outline.js
// Kho 50 bài giảng Tiếng Anh liên kết chặt chẽ từ CEFR A1 -> B2 cho người Việt

const EN_OUTLINE_50 = [
  {
    id: 1,
    stage: 1,
    level: "CEFR A1 · Chặng 1: Phát âm chuẩn & Giao tiếp nền tảng",
    title: "Greetings, Politeness & First Impressions",
    subtitle: "Ngữ điệu lên xuống, nối âm cơ bản và chào hỏi lịch sự",
    prereq: "Bài mở đầu (Không cần kiến thức nền)",
    vocab: [
      {
        word: "Hello",
        ipa: "/həˈləʊ/",
        meaning: "Xin chào",
        tip: "Trọng âm rơi vào âm tiết thứ hai '-lo'. Âm đầu /h/ thở nhẹ, không đọc nặng thành 'hê-lô' đều đều."
      },
      {
        word: "Thank you",
        ipa: "/ˈθæŋk juː/",
        meaning: "Cảm ơn bạn",
        tip: "Đặt đầu lưỡi nhẹ giữa hai răng trên và dưới khi đọc /θ/, thổi hơi ra; nối nhẹ 'thank you' thành /ˈθæŋkjuː/."
      },
      {
        word: "Nice to meet you",
        ipa: "/naɪs tə miːt juː/",
        meaning: "Rất vui được gặp bạn",
        tip: "Từ 'to' thường đọc yếu thành /tə/, âm /iː/ ở 'meet' kéo dài nhẹ."
      },
      {
        word: "Excuse me",
        ipa: "/ɪkˈskjuːz miː/",
        meaning: "Xin lỗi (khi làm phiền / hỏi đường / thu hút chú ý)",
        tip: "Dùng khi muốn hỏi ai đó hoặc đi ngang qua; trọng âm rơi vào 'skjuːz'."
      },
      {
        word: "Morning",
        ipa: "/ˈmɔːnɪŋ/",
        meaning: "Buổi sáng",
        tip: "Trọng âm ở âm đầu 'mor-', đuôi '-ing' đọc /ɪŋ/ gọn, không nhấn mạnh."
      }
    ],
    grammar: {
      formula: "Good morning / Hello + [Name].  |  Nice to meet you.",
      explanation: "Trong giao tiếp hằng ngày và nơi làm việc, dùng 'Good morning' vào buổi sáng và 'Nice to meet you' khi gặp ai lần đầu.",
      tiles: ["Hello,", "nice", "to", "meet", "you."],
      answer: "Hello, nice to meet you."
    },
    dialogue: [
      {
        speaker: "Linh",
        target: "Good morning! Nice to meet you.",
        ipa: "/ɡʊd ˈmɔːnɪŋ! naɪs tə miːt juː./",
        vi: "Chào buổi sáng! Rất vui được gặp bạn."
      },
      {
        speaker: "David",
        target: "Hello Linh! Nice to meet you too.",
        ipa: "/həˈləʊ lɪn! naɪs tə miːt juː tuː./",
        vi: "Chào Linh! Mình cũng rất vui được gặp bạn."
      },
      {
        speaker: "Linh",
        target: "Thank you, David.",
        ipa: "/ˈθæŋk juː, ˈdeɪvɪd./",
        vi: "Cảm ơn David."
      }
    ],
    reading: {
      title: "A Friendly Welcome at the Office",
      text: "Good morning! Excuse me, I am Linh. Hello David, nice to meet you. Thank you for your help today.",
      ipa: "/ɡʊd ˈmɔːnɪŋ! ɪkˈskjuːz miː, aɪ æm lɪn. həˈləʊ ˈdeɪvɪd, naɪs tə miːt juː. ˈθæŋk juː fɔː jɔː help təˈdeɪ./",
      vi: "Chào buổi sáng! Xin lỗi, mình là Linh. Chào David, rất vui được gặp bạn. Cảm ơn bạn đã giúp đỡ hôm nay.",
      question: "Linh dùng cụm từ nào để thu hút sự chú ý lịch sự ban đầu?",
      options: ["Thank you", "Excuse me", "Good morning"],
      correctIndex: 1
    },
    dictationTarget: "thank you",
    quiz: {
      question: "Khi muốn hỏi đường hoặc làm phiền người khác một chút, bạn dùng cụm nào?",
      options: ["Excuse me", "Good night", "See you"],
      correctIndex: 0
    }
  },
  {
    id: 2,
    stage: 1,
    level: "CEFR A1 · Chặng 1: Phát âm chuẩn & Giao tiếp nền tảng",
    title: "Introducing Yourself, Nationality & Job",
    subtitle: "Kế thừa chào hỏi từ Bài 1 để giới thiệu tên, quốc tịch và công việc",
    prereq: "Nắm được cách chào hỏi và nối âm cơ bản ở Bài 1",
    vocab: [
      {
        word: "I am",
        ipa: "/aɪ æm/ · /aɪm/",
        meaning: "Tôi là",
        tip: "Trong nói tự nhiên thường rút gọn thành 'I'm' /aɪm/, đọc liền mạch không ngắt."
      },
      {
        word: "Vietnamese",
        ipa: "/ˌviːetnəˈmiːz/",
        meaning: "Người Việt Nam / Tiếng Việt",
        tip: "Trọng âm chính rơi vào âm tiết cuối '-nese' /ˈmiːz/, âm /z/ rung thanh quản ở cuối."
      },
      {
        word: "Teacher",
        ipa: "/ˈtiːtʃə/",
        meaning: "Giáo viên",
        tip: "Âm /tʃ/ bật hơi ngắn giống 'ch', trọng âm rơi vào âm đầu 'tea-'."
      },
      {
        word: "Student",
        ipa: "/ˈstjuːdənt/",
        meaning: "Học sinh / Sinh viên",
        tip: "Đọc rõ /stj/ hoặc /stʃ/, trọng âm ở âm đầu 'stu-'."
      },
      {
        word: "Work",
        ipa: "/wɜːk/",
        meaning: "Làm việc / Công việc",
        tip: "Âm nguyên âm dài /ɜː/ cong nhẹ lưỡi, âm cuối /k/ bật nhẹ không đọc thành 'quớc'."
      }
    ],
    grammar: {
      formula: "I am (I'm) + a/an + [Job]  |  I am from + [Country / City]",
      explanation: "Dùng 'I'm' để giới thiệu tên, quốc tịch hoặc nghề nghiệp; nhớ dùng mạo từ 'a/an' trước danh từ nghề nghiệp đếm được số ít.",
      tiles: ["I'm", "a", "teacher", "from", "Vietnam."],
      answer: "I'm a teacher from Vietnam."
    },
    dialogue: [
      {
        speaker: "Minh",
        target: "Hi, I'm Minh. I'm Vietnamese.",
        ipa: "/haɪ, aɪm mɪn. aɪm ˌviːetnəˈmiːz./",
        vi: "Chào bạn, mình là Minh. Mình là người Việt Nam."
      },
      {
        speaker: "Sarah",
        target: "Nice to meet you, Minh. I'm a teacher.",
        ipa: "/naɪs tə miːt juː, mɪn. aɪm ə ˈtiːtʃə./",
        vi: "Rất vui được gặp Minh. Mình là giáo viên."
      },
      {
        speaker: "Minh",
        target: "Great! I work with students every day.",
        ipa: "/ɡreɪt! aɪ wɜːk wɪð ˈstjuːdənts ˈevri deɪ./",
        vi: "Tuyệt! Mình làm việc với học viên mỗi ngày."
      }
    ],
    reading: {
      title: "Meeting New Colleagues",
      text: "Hello everyone! I'm Minh and I'm from Vietnam. I work as a teacher. Sarah is a teacher too.",
      ipa: "/həˈləʊ ˈevriwʌn! aɪm mɪn ænd aɪm frɒm ˌviːetnəˈmiːz. aɪ wɜːk æz ə ˈtiːtʃə. ˈsærə ɪz ə ˈtiːtʃə tuː./",
      vi: "Chào mọi người! Mình là Minh và mình đến từ Việt Nam. Mình làm nghề giáo viên. Sarah cũng là giáo viên.",
      question: "Nghề nghiệp của Minh và Sarah là gì?",
      options: ["Students", "Teachers", "Doctors"],
      correctIndex: 1
    },
    dictationTarget: "student",
    quiz: {
      question: "Câu nào giới thiệu nghề nghiệp đúng ngữ pháp?",
      options: ["I am teacher.", "I'm a teacher.", "I teacher."],
      correctIndex: 1
    }
  },
  {
    id: 3,
    stage: 1,
    level: "CEFR A1 · Chặng 1: Phát âm chuẩn & Giao tiếp nền tảng",
    title: "Numbers, Prices & Ordering Essentials",
    subtitle: "Kết hợp giới thiệu bản thân với số đếm, giá cả và gọi món/mua sắm",
    prereq: "Nắm được mẫu câu 'I am / I'm' và từ vựng giới thiệu ở Bài 2",
    vocab: [
      {
        word: "How much",
        ipa: "/haʊ mʌtʃ/",
        meaning: "Bao nhiêu (giá tiền)",
        tip: "Âm /ʌ/ trong 'much' ngắn, thả lỏng miệng; kết thúc bằng /tʃ/ gọn."
      },
      {
        word: "Dollar",
        ipa: "/ˈdɒlə/",
        meaning: "Đô la",
        tip: "Trọng âm ở âm đầu 'dol-', âm cuối /ə/ nhẹ, không kéo dài."
      },
      {
        word: "Coffee",
        ipa: "/ˈkɒfi/",
        meaning: "Cà phê",
        tip: "Trọng âm rơi vào âm đầu 'cof-', âm /ɒ/ mở miệng vừa phải."
      },
      {
        word: "Please",
        ipa: "/pliːz/",
        meaning: "Làm ơn / Vui lòng (dùng khi yêu cầu lịch sự)",
        tip: "Âm /iː/ kéo dài nhẹ, âm cuối /z/ rung thanh quản rõ ràng."
      },
      {
        word: "Here you are",
        ipa: "/hɪə juː ɑː/",
        meaning: "Của bạn đây (khi đưa đồ / trả lời cảm ơn)",
        tip: "Cụm giao tiếp phản xạ cực kỳ phổ biến khi đưa món đồ cho người khác."
      }
    ],
    grammar: {
      formula: "How much is this?  |  I'd like + [Item], please.",
      explanation: "Dùng 'How much is this?' để hỏi giá một món đồ và 'I'd like...' (lịch sự hơn 'I want') để gọi đồ uống hoặc đặt mua.",
      tiles: ["I'd", "like", "a", "coffee,", "please."],
      answer: "I'd like a coffee, please."
    },
    dialogue: [
      {
        speaker: "Customer",
        target: "Excuse me, how much is this coffee?",
        ipa: "/ɪkˈskjuːz miː, haʊ mʌtʃ ɪz ðɪs ˈkɒfi?/",
        vi: "Xin lỗi, ly cà phê này bao nhiêu tiền ạ?"
      },
      {
        speaker: "Barista",
        target: "It's three dollars.",
        ipa: "/ɪts θriː ˈdɒləz./",
        vi: "3 đô la ạ."
      },
      {
        speaker: "Customer",
        target: "I'd like one coffee, please.",
        ipa: "/aɪd laɪk wʌn ˈkɒfi, pliːz./",
        vi: "Cho mình một ly cà phê nhé."
      }
    ],
    reading: {
      title: "At the Morning Cafe",
      text: "I'm a student and I need coffee before class. This coffee is three dollars. Here you are, thank you!",
      ipa: "/aɪm ə ˈstjuːdənt ænd aɪ niːd ˈkɒfi bɪˈfɔː klɑːs. ðɪs ˈkɒfi ɪz θriː ˈdɒləz. hɪə juː ɑː, ˈθæŋk juː!/",
      vi: "Mình là sinh viên và mình cần cà phê trước giờ học. Ly cà phê này giá 3 đô. Của bạn đây, cảm ơn nhé!",
      question: "Ly cà phê có giá bao nhiêu đô la?",
      options: ["Two dollars", "Three dollars", "Five dollars"],
      correctIndex: 1
    },
    dictationTarget: "coffee",
    quiz: {
      question: "Cách gọi món lịch sự tự nhiên trong tiếng Anh là gì?",
      options: ["Give me coffee.", "I'd like a coffee, please.", "Coffee is me."],
      correctIndex: 1
    }
  }
];

// Danh sách chủ đề 47 bài tiếp theo (Bài 4 -> Bài 50) liên kết mạch lạc từ CEFR A1 đến B2
const EN_CURRICULUM_TOPICS = [
  "Days, Time & Daily Routines",
  "Family, Relationships & Personal Interests",
  "Places, Directions & Getting Around Town",
  "Eating Out, Ordering Food & Food Preferences",
  "Shopping for Clothes, Sizes & Polite Requests",
  "Transportation, Tickets & Commuting",
  "Weather, Seasons & Weekend Plans",
  "Health, Common Symptoms & At the Clinic",
  "Workplace Roles, Departments & Colleagues",
  "Phone Calls, Messages & Scheduling Meetings",
  "Renting a Home, Rooms & Living Essentials",
  "Banking, Currency & Digital Payments",
  "Travel, Hotel Booking & Check-in/Check-out",
  "Dining Together, Table Etiquette & Toasts",
  "Daily Habits, Time Management & Productivity",
  "Online Shopping, Delivery & Returns",
  "Sports, Hobbies & Relaxing After Work",
  "Talking About the Past & Memorable Experiences",
  "Comparing Options, Reviews & Giving Opinions",
  "Asking for Favors, Permission & Polite Declines",
  "Ongoing Actions, Changes & Current Trends",
  "Job Interviews, Strengths & Career Goals",
  "Team Meetings, Task Delegation & Progress Updates",
  "Writing Workplace Emails & Confirming Details",
  "Customer Service, Feedback & Problem Solving",
  "Appointments, Rescheduling & Professional Reminders",
  "Presenting Ideas, Key Figures & Explanations",
  "Negotiating Prices, Terms & Initial Partnerships",
  "Cross-Cultural Etiquette & Business Gifts",
  "City Life, Traffic & Sustainable Living",
  "Learning Languages Effectively & Self-Study Habits",
  "Digital Tools, Remote Work & Online Collaboration",
  "Personal Finance, Smart Spending & Saving",
  "Healthy Eating, Nutrition & Work-Life Balance",
  "Cultural Experiences, Festivals & Local Traditions",
  "Resolving Disagreements, Active Listening & Empathy",
  "Project Planning, Milestones & Managing Risks",
  "Performance Reviews & Constructive Feedback",
  "Entrepreneurship, Business Ideas & Markets",
  "Media, News & Balanced Perspectives",
  "Career Growth, Soft Skills & Adaptability",
  "Working with International Teams",
  "Debating Viewpoints, Evidence & Persuasion",
  "Reviewing Progress, Key Takeaways & Next Steps"
];

(function buildFullEn50() {
  if (typeof window === "undefined") return;
  const fullList = [...EN_OUTLINE_50];

  for (let i = 4; i <= 50; i++) {
    const topic = EN_CURRICULUM_TOPICS[i - 4] || `Everyday & Workplace Communication #${i}`;
    let stage = 2;
    let level = "CEFR A1–A2 · Chặng 2: Sinh hoạt & Giao tiếp hằng ngày";

    if (i >= 11 && i <= 20) {
      stage = 3;
      level = "CEFR A2 · Chặng 3: Đời sống, Dịch vụ & Trải nghiệm";
    } else if (i >= 21 && i <= 35) {
      stage = 4;
      level = "CEFR B1 · Chặng 4: Công sở, Giao tiếp & Xử lý tình huống";
    } else if (i >= 36) {
      stage = 5;
      level = "CEFR B1–B2 · Chặng 5: Đàm phán, Phân tích & Chuyên sâu";
    }

    const prevTitle = fullList[i - 2].title;
    const sampleDictations = [
      "schedule", "colleague", "prepare", "solution", "confirm",
      "meeting", "update", "support", "project", "discuss"
    ];
    const dictationWord = sampleDictations[(i - 1) % sampleDictations.length];

    fullList.push({
      id: i,
      stage,
      level,
      title: topic,
      subtitle: `Phát triển từ "${prevTitle}" sang tình huống thực tế #${i}`,
      prereq: `Hoàn thành Bài ${i - 1}: ${prevTitle}`,
      vocab: [
        {
          word: "Schedule",
          ipa: "/ˈʃedjuːl/ · /ˈskedʒuːl/",
          meaning: "Lịch trình / Lên lịch",
          tip: "Trọng âm ở âm tiết đầu; chú ý âm cuối /l/ đặt đầu lưỡi chạm lợi trên."
        },
        {
          word: "Colleague",
          ipa: "/ˈkɒliːɡ/",
          meaning: "Đồng nghiệp",
          tip: "Trọng âm rơi vào âm đầu 'col-' /ˈkɒl/, đuôi đọc /liːɡ/."
        },
        {
          word: "Prepare",
          ipa: "/prɪˈpeə/",
          meaning: "Chuẩn bị",
          tip: "Trọng âm ở âm tiết thứ hai '-pare' /ˈpeə/, âm đầu /prɪ/ đọc nhẹ."
        },
        {
          word: "Solution",
          ipa: "/səˈluːʃn/",
          meaning: "Giải pháp",
          tip: "Trọng âm ở âm '-lu-' /ˈluː/, kết thúc bằng âm /ʃn/ gọn."
        },
        {
          word: "Confirm",
          ipa: "/kənˈfɜːm/",
          meaning: "Xác nhận",
          tip: "Trọng âm ở âm thứ hai '-firm' /ˈfɜːm/, nhấn rõ nguyên âm dài /ɜː/."
        }
      ],
      grammar: {
        formula: "First, + [Action 1]. Then, + [Action 2].  |  Let's + [Verb base].",
        explanation: `Trong chủ đề "${topic}", dùng 'First... Then...' để trình bày các bước rõ ràng và 'Let's + động từ nguyên mẫu' để rủ hoặc đề xuất cùng làm.`,
        tiles: ["Let's", "prepare", "first,", "then", "confirm."],
        answer: "Let's prepare first, then confirm."
      },
      dialogue: [
        {
          speaker: "Speaker A",
          target: "Let's prepare the plan first.",
          ipa: "/lets prɪˈpeə ðə plæn fɜːst./",
          vi: "Hãy chuẩn bị kế hoạch trước nhé."
        },
        {
          speaker: "Speaker B",
          target: "Good idea. Then we can confirm with the team.",
          ipa: "/ɡʊd aɪˈdɪə. ðen wi kən kənˈfɜːm wɪð ðə tiːm./",
          vi: "Ý hay đấy. Sau đó chúng ta có thể xác nhận với cả đội."
        },
        {
          speaker: "Speaker A",
          target: "Thanks! That helps us find a clear solution.",
          ipa: "/θæŋks! ðæt helps ʌs faɪnd ə klɪə səˈluːʃn./",
          vi: "Cảm ơn! Điều đó giúp chúng ta tìm ra giải pháp rõ ràng."
        }
      ],
      reading: {
        title: `Practical Scenario: ${topic}`,
        text: `Today we practice "${topic}". First, we check the schedule with colleagues. Then, we share a clear solution and confirm the next step.`,
        ipa: "/təˈdeɪ wi ˈpræktɪs tɒpɪk. fɜːst, wi tʃek ðə ˈʃedjuːl wɪð ˈkɒliːɡz. ðen, wi ʃeə ə klɪə səˈluːʃn ænd kənˈfɜːm ðə nekst step./",
        vi: `Hôm nay chúng ta luyện tập "${topic}". Đầu tiên, chúng ta kiểm tra lịch trình cùng đồng nghiệp. Sau đó, chia sẻ giải pháp rõ ràng và xác nhận bước tiếp theo.`,
        question: "Bước tiếp theo sau khi chia sẻ giải pháp là gì?",
        options: ["Confirm the next step", "Cancel the plan", "Skip the schedule"],
        correctIndex: 0
      },
      dictationTarget: dictationWord,
      quiz: {
        question: `Cấu trúc "Let's + động từ nguyên mẫu" trong Bài ${i} dùng để làm gì?`,
        options: ["Đề xuất cùng thực hiện hành động", "Hỏi thời gian quá khứ", "Kể lại sự việc đã xong"],
        correctIndex: 0
      }
    });
  }

  window.EN_LESSONS = fullList;
})();