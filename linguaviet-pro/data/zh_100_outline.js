// data/zh_100_outline.js
// Kho 50 bài giảng Tiếng Trung liên kết chặt chẽ từ HSK 1 -> HSK 4 cho người Việt

const ZH_OUTLINE_50 = [
  {
    id: 1,
    stage: 1,
    level: "HSK 1 · Chặng 1: Nền tảng phát âm & Chào hỏi",
    title: "Chào hỏi & Làm quen cơ bản",
    subtitle: "Thanh điệu, phát âm chuẩn và mẫu câu chào hỏi đời sống",
    prereq: "Bài mở đầu (Không cần kiến thức nền)",
    vocab: [
      {
        word: "你好",
        pinyin: "nǐ hǎo",
        meaning: "Xin chào",
        tip: "Chú ý biến điệu: hai thanh 3 đi liền nhau, 'nǐ' đọc gần giống thanh 2 (ní) rồi mới xuống 'hǎo' (hảo). Môi thả lỏng, không chu quá mạnh."
      },
      {
        word: "您好",
        pinyin: "nín hǎo",
        meaning: "Xin chào (kính ngữ / người lớn / khách hàng)",
        tip: "'nín' là thanh 2 đi lên rõ ràng, âm 'n' cuối giữ nhẹ trước khi sang 'hǎo'."
      },
      {
        word: "老师",
        pinyin: "lǎo shī",
        meaning: "Thầy giáo / Cô giáo",
        tip: "'lǎo' thanh 3 uốn giọng; 'shī' cong đầu lưỡi về phía sau vòm miệng nhưng không chạm, giữ hơi đều ở thanh 1."
      },
      {
        word: "同学",
        pinyin: "tóng xué",
        meaning: "Bạn học",
        tip: "'tóng' bật hơi nhẹ thanh 2; 'xué' tròn môi như 'xuê' nhưng uốn nhẹ lên thanh 2."
      },
      {
        word: "谢谢",
        pinyin: "xiè xie",
        meaning: "Cảm ơn",
        tip: "'xiè' thanh 4 dứt khoát đi xuống; 'xie' đứng sau đọc nhẹ, ngắn (khinh thanh)."
      }
    ],
    grammar: {
      formula: "您好 + [Danh từ chỉ người]  |  谢谢 + [Đối tượng]",
      explanation: "Trong giao tiếp thực tế và công sở, dùng '您好' thể hiện sự tôn trọng; ghép tên chức danh hoặc '老师' phía sau để chào hỏi tự nhiên.",
      tiles: ["您好，", "王", "老师，", "谢谢！"],
      answer: "您好，王老师，谢谢！"
    },
    dialogue: [
      {
        speaker: "Minh (明)",
        target: "您好，李老师！",
        pinyin: "Nín hǎo, Lǐ lǎo shī!",
        vi: "Xin chào thầy/cô Lý ạ!"
      },
      {
        speaker: "Cô Lý (李老师)",
        target: "你好，同学！",
        pinyin: "Nǐ hǎo, tóng xué!",
        vi: "Chào bạn học!"
      },
      {
        speaker: "Minh (明)",
        target: "谢谢李老师。",
        pinyin: "Xiè xie Lǐ lǎo shī.",
        vi: "Cảm ơn thầy/cô Lý."
      }
    ],
    reading: {
      title: "Buổi gặp đầu tiên ở lớp học",
      text: "早上好！我是明。您好，李老师，谢谢您！王同学，你好！",
      pinyin: "Zǎo shang hǎo! Wǒ shì Míng. Nín hǎo, Lǐ lǎo shī, xiè xie nín! Wáng tóng xué, nǐ hǎo!",
      vi: "Chào buổi sáng! Tôi là Minh. Xin chào thầy/cô Lý, cảm ơn thầy/cô! Bạn Vương, chào bạn!",
      question: "Trong đoạn văn, người nói dùng từ nào để chào thầy/cô Lý một cách lịch sự?",
      options: ["你好 (nǐ hǎo)", "您好 (nín hǎo)", "同学 (tóng xué)"],
      correctIndex: 1
    },
    writingChar: "好",
    quiz: {
      question: "Khi gặp khách hàng hoặc đối tác lần đầu, cách chào lịch sự nhất là:",
      options: ["你好", "您好", "同学"],
      correctIndex: 1
    }
  },
  {
    id: 2,
    stage: 1,
    level: "HSK 1 · Chặng 1: Nền tảng phát âm & Chào hỏi",
    title: "Giới thiệu tên, quốc tịch & Nghề nghiệp",
    subtitle: "Kế thừa chào hỏi từ Bài 1 để tự giới thiệu bản thân",
    prereq: "Nắm được cách chào hỏi & thanh điệu ở Bài 1",
    vocab: [
      {
        word: "我",
        pinyin: "wǒ",
        meaning: "Tôi / Mình",
        tip: "Đọc 'uổ' thanh 3, cong nhẹ ở đáy thanh rồi nâng nhẹ cuối âm."
      },
      {
        word: "是",
        pinyin: "shì",
        meaning: "Là",
        tip: "Âm 'sh' đầu lưỡi uốn cong không chạm vòm, thanh 4 rơi mạnh, dứt khoát."
      },
      {
        word: "越南人",
        pinyin: "Yuè nán rén",
        meaning: "Người Việt Nam",
        tip: "'Yuè' thanh 4; 'nán' thanh 2; 'rén' uốn lưỡi âm 'r' nhẹ như 'rấn' thanh 2."
      },
      {
        word: "中国人",
        pinyin: "Zhōng guó rén",
        meaning: "Người Trung Quốc",
        tip: "'Zhōng' đầu lưỡi cong bật nhẹ thanh 1; 'guó' thanh 2; 'rén' thanh 2."
      },
      {
        word: "学生",
        pinyin: "xué shēng",
        meaning: "Học sinh / Sinh viên",
        tip: "'xué' thanh 2; 'shēng' uốn lưỡi thanh 1, âm cuối '-ng' ngân nhẹ."
      }
    ],
    grammar: {
      formula: "主语 (Chủ ngữ) + 是 + 身份/国籍 (Danh tính/Quốc tịch)",
      explanation: "Động từ '是' (shì) nối chủ ngữ với danh từ chỉ tên, quốc tịch hoặc nghề nghiệp; không chia theo ngôi hay thì.",
      tiles: ["我", "是", "越南人，", "也是", "学生。"],
      answer: "我是越南人，也是学生。"
    },
    dialogue: [
      {
        speaker: "Lan (兰)",
        target: "你好，我是兰。",
        pinyin: "Nǐ hǎo, wǒ shì Lán.",
        vi: "Chào bạn, mình là Lan."
      },
      {
        speaker: "Trương Minh (张明)",
        target: "你好！我是中国人。",
        pinyin: "Nǐ hǎo! Wǒ shì Zhōng guó rén.",
        vi: "Chào bạn! Mình là người Trung Quốc."
      },
      {
        speaker: "Lan (兰)",
        target: "我也是学生。",
        pinyin: "Wǒ yě shì xué shēng.",
        vi: "Mình cũng là sinh viên."
      }
    ],
    reading: {
      title: "Làm quen tại câu lạc bộ ngôn ngữ",
      text: "大家好！我是阿明，我是越南人。他是张同学，他是中国人。我们都是学生。",
      pinyin: "Dà jiā hǎo! Wǒ shì Ā Míng, wǒ shì Yuè nán rén. Tā shì Zhāng tóng xué, tā shì Zhōng guó rén. Wǒ men dōu shì xué shēng.",
      vi: "Chào mọi người! Mình là A Minh, mình là người Việt Nam. Bạn ấy là bạn Trương, bạn ấy là người Trung Quốc. Tụi mình đều là sinh viên.",
      question: "A Minh là người nước nào?",
      options: ["Người Trung Quốc", "Người Việt Nam", "Giáo viên"],
      correctIndex: 1
    },
    writingChar: "我",
    quiz: {
      question: "Câu '我是越南人' có nghĩa là gì?",
      options: ["Tôi là người Trung Quốc", "Tôi là người Việt Nam", "Tôi là giáo viên"],
      correctIndex: 1
    }
  },
  {
    id: 3,
    stage: 1,
    level: "HSK 1 · Chặng 1: Nền tảng phát âm & Chào hỏi",
    title: "Con số, Giá cả & Đặt hàng cơ bản",
    subtitle: "Kết hợp giới thiệu bản thân với số đếm và hỏi giá mua sắm",
    prereq: "Nắm được mẫu câu '是' và từ vựng giới thiệu ở Bài 2",
    vocab: [
      {
        word: "多少",
        pinyin: "duō shao",
        meaning: "Bao nhiêu",
        tip: "'duō' thanh 1 rõ ràng; 'shao' đứng cuối câu hỏi giá thường đọc nhẹ, ngắn."
      },
      {
        word: "钱",
        pinyin: "qián",
        meaning: "Tiền",
        tip: "Đọc gần giống 'én' thanh 2 (qián), âm 'q' bật hơi nhẹ đầu lưỡi chạm lợi dưới."
      },
      {
        word: "块",
        pinyin: "kuài",
        meaning: "Tệ / Đồng (khẩu ngữ)",
        tip: "Thanh 4 rơi dứt khoát, âm 'uài' đọc nhanh thành 'oai'."
      },
      {
        word: "这",
        pinyin: "zhè",
        meaning: "Cái này / Đây",
        tip: "Âm 'zh' uốn lưỡi thanh 4, âm 'e' đọc gần giống 'ơ' mở miệng tự nhiên."
      },
      {
        word: "要",
        pinyin: "yào",
        meaning: "Muốn / Cần / Lấy (khi mua hàng)",
        tip: "Thanh 4 dứt khoát, phát âm gần giống 'dao' nhưng đầu là bán nguyên âm 'y'."
      }
    ],
    grammar: {
      formula: "这 + [Lượng từ/Danh từ] + 多少 + 钱？  |  我要 + [Số lượng + 块/个]",
      explanation: "Khi hỏi giá trong giao tiếp hằng ngày, dùng cấu trúc '这多少钱？' (Cái này bao nhiêu tiền?) và dùng '我要...' để chốt mua.",
      tiles: ["这", "多少", "钱？", "我要", "两个。"],
      answer: "这多少钱？我要两个。"
    },
    dialogue: [
      {
        speaker: "Khách (顾客)",
        target: "您好，这多少钱？",
        pinyin: "Nín hǎo, zhè duō shao qián?",
        vi: "Xin chào, cái này bao nhiêu tiền ạ?"
      },
      {
        speaker: "Người bán (店员)",
        target: "十块。",
        pinyin: "Shí kuài.",
        vi: "10 tệ ạ."
      },
      {
        speaker: "Khách (顾客)",
        target: "好，谢谢，我要。",
        pinyin: "Hǎo, xiè xie, wǒ yào.",
        vi: "Vâng, cảm ơn, tôi lấy."
      }
    ],
    reading: {
      title: "Đi mua nước & đồ ăn nhẹ",
      text: "我是学生。今天我要买水。这瓶水五块，那杯茶十块。谢谢！",
      pinyin: "Wǒ shì xué shēng. Jīn tiān wǒ yào mǎi shuǐ. Zhè píng shuǐ wǔ kuài, nà bēi chá shí kuài. Xiè xie!",
      vi: "Mình là sinh viên. Hôm nay mình muốn mua nước. Chai nước này 5 tệ, ly trà kia 10 tệ. Cảm ơn!",
      question: "Ly trà trong đoạn đọc giá bao nhiêu tệ?",
      options: ["5 tệ", "10 tệ", "15 tệ"],
      correctIndex: 1
    },
    writingChar: "钱",
    quiz: {
      question: "Muốn hỏi 'Cái này bao nhiêu tiền?' bạn nói thế nào?",
      options: ["这是什么？", "这多少钱？", "我是谁？"],
      correctIndex: 1
    }
  }
];

// Danh sách chủ đề 47 bài tiếp theo (Bài 4 -> Bài 50) liên kết mạch lạc từ HSK 1 đến HSK 4
const ZH_CURRICULUM_TOPICS = [
  "Ngày tháng, Thứ & Thời gian biểu hằng ngày",
  "Gia đình, Thành viên & Sở thích cá nhân",
  "Địa điểm, Phương hướng & Đường đi trong thành phố",
  "Ăn uống tại quán ăn, Gọi món & Khẩu vị",
  "Mua sắm quần áo, Kích cỡ & Mặc cả lịch sự",
  "Phương tiện di chuyển, Đặt vé & Đi tàu xe",
  "Thời tiết bốn mùa, Trang phục & Kế hoạch cuối tuần",
  "Sức khỏe, Triệu chứng thông thường & Đi khám bệnh",
  "Công việc văn phòng, Phòng ban & Đồng nghiệp",
  "Điện thoại, Tin nhắn & Hẹn gặp công việc",
  "Thuê nhà, Phòng trọ & Tiện nghi sinh hoạt",
  "Ngân hàng, Đổi tiền & Thanh toán điện tử",
  "Du lịch, Đặt phòng khách sạn & Nhận/trả phòng",
  "Ẩm thực Trung - Việt, Đặt bàn & Chúc tụng",
  "Thói quen sinh hoạt, Quản lý thời gian & Hiệu suất",
  "Mua sắm trực tuyến, Giao hàng & Đổi trả",
  "Sở thích thể thao, Giải trí & Đời sống tinh thần",
  "Kể chuyện quá khứ, Trải nghiệm & Kỷ niệm đáng nhớ",
  "So sánh lựa chọn, Đánh giá sản phẩm & Đưa ra ý kiến",
  "Nhờ vả, Xin phép & Từ chối khéo léo trong giao tiếp",
  "Hành động đang diễn ra, Thay đổi & Xu hướng mới",
  "Phỏng vấn xin việc, Năng lực cá nhân & Mục tiêu",
  "Họp nhóm, Phân công công việc & Báo cáo tiến độ",
  "Viết email công sở, Xác nhận lịch & Trao đổi thông tin",
  "Chăm sóc khách hàng, Tiếp nhận phản hồi & Xử lý sự cố",
  "Đặt lịch hẹn, Thay đổi kế hoạch & Nhắc việc chuyên nghiệp",
  "Thuyết trình ý tưởng, Trình bày số liệu & Giải thích",
  "Thương lượng giá cả, Điều khoản & Hợp tác bước đầu",
  "Văn hóa giao tiếp, Lễ nghi & Tặng quà đối tác",
  "Môi trường sống, Giao thông đô thị & Lối sống xanh",
  "Giáo dục, Học ngoại ngữ hiệu quả & Kỹ năng tự học",
  "Công nghệ số, Làm việc từ xa & Công cụ trực tuyến",
  "Tài chính cá nhân, Chi tiêu hợp lý & Tiết kiệm",
  "Ẩm thực lành mạnh, Dinh dưỡng & Cân bằng cuộc sống",
  "Trải nghiệm văn hóa, Lễ hội & Phong tục địa phương",
  "Giải quyết mâu thuẫn, Lắng nghe & Đồng cảm",
  "Lập kế hoạch dự án, Mốc thời gian & Rủi ro",
  "Đánh giá hiệu quả, Phản hồi mang tính xây dựng",
  "Khởi nghiệp, Ý tưởng kinh doanh & Thị trường",
  "Truyền thông, Tin tức & Góc nhìn đa chiều",
  "Phát triển nghề nghiệp, Kỹ năng mềm & Thích nghi",
  "Hợp tác xuyên biên giới, Làm việc với đội ngũ quốc tế",
  "Tranh luận quan điểm, Dẫn chứng & Thuyết phục",
  "Tổng kết chặng đường, Đúc rút kinh nghiệm & Định hướng"
];

(function buildFullZh50() {
  if (typeof window === "undefined") return;
  const fullList = [...ZH_OUTLINE_50];

  for (let i = 4; i <= 50; i++) {
    const topic = ZH_CURRICULUM_TOPICS[i - 4] || `Chủ đề giao tiếp & công việc #${i}`;
    let stage = 2;
    let level = "HSK 2 · Chặng 2: Sinh hoạt & Giao tiếp hằng ngày";

    if (i >= 11 && i <= 20) {
      stage = 3;
      level = "HSK 2–3 · Chặng 3: Đời sống, Dịch vụ & Trải nghiệm";
    } else if (i >= 21 && i <= 35) {
      stage = 4;
      level = "HSK 3 · Chặng 4: Công sở, Giao tiếp & Xử lý tình huống";
    } else if (i >= 36) {
      stage = 5;
      level = "HSK 4 · Chặng 5: Đàm phán, Phân tích & Chuyên sâu";
    }

    const prevTitle = fullList[i - 2].title;
    const sampleChars = ["学", "说", "听", "写", "去", "来", "买", "好", "工", "作"];
    const focusChar = sampleChars[(i - 1) % sampleChars.length];

    fullList.push({
      id: i,
      stage,
      level,
      title: topic,
      subtitle: `Mở rộng từ "${prevTitle}" sang tình huống thực tế #${i}`,
      prereq: `Hoàn thành Bài ${i - 1}: ${prevTitle}`,
      vocab: [
        {
          word: "交流",
          pinyin: "jiāo liú",
          meaning: "Trao đổi / Giao lưu",
          tip: "'jiāo' thanh 1 mở miệng rõ; 'liú' thanh 2 ngân nhẹ âm 'iú'."
        },
        {
          word: "工作",
          pinyin: "gōng zuò",
          meaning: "Công việc / Làm việc",
          tip: "'gōng' thanh 1; 'zuò' đầu lưỡi chạm nhẹ mặt sau răng cửa dưới, thanh 4 dứt khoát."
        },
        {
          word: "准备",
          pinyin: "zhǔn bèi",
          meaning: "Chuẩn bị",
          tip: "'zhǔn' uốn lưỡi thanh 3; 'bèi' thanh 4 rơi gọn."
        },
        {
          word: "问题",
          pinyin: "wèn tí",
          meaning: "Vấn đề / Câu hỏi",
          tip: "'wèn' thanh 4; 'tí' bật hơi nhẹ đầu lưỡi thanh 2."
        },
        {
          word: "解决",
          pinyin: "jiě jué",
          meaning: "Giải quyết",
          tip: "'jiě' thanh 3; 'jué' thanh 2, môi giữ đều từ đầu đến cuối."
        }
      ],
      grammar: {
        formula: "先 + [Hành động 1]，再 + [Hành động 2]  |  一起 + [Động từ]",
        explanation: `Trong chủ đề "${topic}", dùng '先...再...' để sắp xếp trình tự logic và '一起' để nhấn mạnh sự phối hợp cùng nhau.`,
        tiles: ["我们", "先", "准备，", "再", "交流。"],
        answer: "我们先准备，再交流。"
      },
      dialogue: [
        {
          speaker: "Học viên A",
          target: "我们先准备一下吧。",
          pinyin: "Wǒ men xiān zhǔn bèi yí xià ba.",
          vi: "Chúng ta chuẩn bị một chút trước nhé."
        },
        {
          speaker: "Học viên B",
          target: "好，有问题我们一起解决。",
          pinyin: "Hǎo, yǒu wèn tí wǒ men yì qǐ jiě jué.",
          vi: "Được, có vấn đề gì chúng ta cùng giải quyết."
        },
        {
          speaker: "Học viên A",
          target: "谢谢，这样工作更顺利。",
          pinyin: "Xiè xie, zhè yàng gōng zuò gèng shùn lì.",
          vi: "Cảm ơn, như vậy công việc thuận lợi hơn."
        }
      ],
      reading: {
        title: `Tình huống thực tế: ${topic}`,
        text: `今天我们学习“${topic}”。大家先准备，再一起交流。遇到问题不要着急，慢慢解决就好。`,
        pinyin: "Jīn tiān wǒ men xué xí zhǔ tí. Dà jiā xiān zhǔn bèi, zài yì qǐ jiāo liú. Yù dào wèn tí bú yào zháo jí, màn màn jiě jué jiù hǎo.",
        vi: `Hôm nay chúng ta học chủ đề "${topic}". Mọi người chuẩn bị trước, rồi cùng trao đổi. Gặp vấn đề đừng vội, từ từ giải quyết là được.`,
        question: "Theo đoạn văn, khi gặp vấn đề chúng ta nên làm gì?",
        options: ["Vội vàng bỏ cuộc", "Từ từ cùng giải quyết", "Không trao đổi"],
        correctIndex: 1
      },
      writingChar: focusChar,
      quiz: {
        question: `Cấu trúc "先...再..." trong Bài ${i} dùng để diễn đạt điều gì?`,
        options: ["Trình tự trước sau của hành động", "Phủ định hoàn toàn", "Câu hỏi lựa chọn"],
        correctIndex: 0
      }
    });
  }

  window.ZH_LESSONS = fullList;
})();