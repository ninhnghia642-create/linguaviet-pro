// data/zh_100_outline.js
// 50 bài Tiếng Trung cho người Việt (HSK 1 -> HSK 4, đời sống & công việc)
// Mỗi bài từ Bài 1 -> Bài 50 đều có từ vựng, câu ghép, hội thoại, đọc hiểu và từ luyện viết riêng

const ZH_OUTLINE_50 = [
  {
    id: 1,
    stage: 1,
    level: "HSK 1 · Chặng 1: Nền tảng phát âm & Chào hỏi",
    title: "Nǐ hǎo, Thanh điệu & Chào hỏi cơ bản",
    subtitle: "Làm quen 4 thanh điệu + thanh nhẹ, chào hỏi lịch sự và hỏi thăm sức khỏe",
    prereq: "Bài mở đầu cho người Việt mất gốc tiếng Trung",
    vocab: [
      {
        word: "你好",
        pinyin: "nǐ hǎo",
        meaning: "Xin chào",
        tip: "Hai thanh 3 đi liền nhau: 'nǐ' đọc thành thanh 2 (ní), 'hǎo' giữ thanh 3 (hảo)."
      },
      {
        word: "谢谢",
        pinyin: "xièxie",
        meaning: "Cảm ơn",
        tip: "'xiè' thanh 4 hạ giọng dứt khoát; 'xie' đọc nhẹ, ngắn (thanh nhẹ)."
      },
      {
        word: "老师",
        pinyin: "lǎoshī",
        meaning: "Thầy / Cô giáo",
        tip: "'lǎo' thanh 3 cong lưỡi nhẹ; 'shī' thanh 1 cao đều, lưỡi uốn cong về sau (không đọc thành 'sư' tiếng Việt)."
      },
      {
        word: "忙",
        pinyin: "máng",
        meaning: "Bận",
        tip: "'máng' thanh 2 đi lên rõ ràng, âm cuối '-ng' vang nhẹ."
      },
      {
        word: "再见",
        pinyin: "zàijiàn",
        meaning: "Tạm biệt",
        tip: "Cả hai chữ đều là thanh 4, xuống giọng gọn và rõ âm 'zài' - 'jiàn'."
      }
    ],
    grammar: {
      formula: "[Chủ ngữ] + 很 + [Tính từ]  |  [Câu trần thuật] + 吗？",
      explanation: "Trong tiếng Trung, '很' thường đứng trước tính từ để nối câu tự nhiên; thêm '吗' ở cuối câu trần thuật để tạo câu hỏi Có/Không.",
      tiles: ["老师", "今天", "很", "忙", "吗？"],
      answer: "老师今天很忙吗？"
    },
    dialogue: [
      {
        speaker: "Lý Minh (李明)",
        target: "老师好！您今天忙吗？",
        pinyin: "Lǎoshī hǎo! Nín jīntiān máng ma?",
        vi: "Chào thầy/cô! Hôm nay thầy/cô có bận không ạ?"
      },
      {
        speaker: "Cô Lan (兰老师)",
        target: "你好！我今天不忙，谢谢。",
        pinyin: "Nǐ hǎo! Wǒ jīntiān bù máng, xièxie.",
        vi: "Chào bạn! Hôm nay cô không bận, cảm ơn bạn."
      },
      {
        speaker: "Lý Minh (李明)",
        target: "好的，明天见，再见！",
        pinyin: "Hǎo de, míngtiān jiàn, zàijiàn!",
        vi: "Vâng ạ, mai gặp lại, tạm biệt thầy/cô!"
      }
    ],
    reading: {
      title: "Buổi chào đầu tiên ở lớp học",
      text: "今天我见到了王老师。王老师很好，今天不太忙。我对老师说：谢谢，再见！",
      pinyin: "Jīntiān wǒ jiàndào le Wáng lǎoshī. Wáng lǎoshī hěn hǎo, jīntiān bù tài máng. Wǒ duì lǎoshī shuō: xièxie, zàijiàn!",
      vi: "Hôm nay tôi gặp thầy Vương. Thầy Vương rất tốt, hôm nay không quá bận. Tôi nói với thầy: cảm ơn, tạm biệt!",
      question: "Hôm nay thầy Vương thế nào?",
      options: ["Không quá bận", "Rất mệt", "Đang đi công tác"],
      correctIndex: 0
    },
    dictationTarget: "好",
    quiz: {
      question: "Khi hai thanh 3 đứng cạnh nhau trong '你好', âm '你' biến đổi thành thanh mấy?",
      options: ["Thanh 2 (ní)", "Thanh 4 (nì)", "Giữ nguyên thanh 3"],
      correctIndex: 0
    }
  },
  {
    id: 2,
    stage: 1,
    level: "HSK 1 · Chặng 1: Nền tảng phát âm & Chào hỏi",
    title: "Giới thiệu tên, Quốc tịch & Công việc",
    subtitle: "Kế thừa chào hỏi từ Bài 1 để tự giới thiệu bản thân, quốc tịch và nghề nghiệp",
    prereq: "Nắm được thanh điệu và lời chào ở Bài 1",
    vocab: [
      {
        word: "名字",
        pinyin: "míngzi",
        meaning: "Tên",
        tip: "'míng' thanh 2 nâng giọng; 'zi' thanh nhẹ đọc lướt, đầu lưỡi chạm nhẹ răng dưới."
      },
      {
        word: "越南人",
        pinyin: "Yuènánrén",
        meaning: "Người Việt Nam",
        tip: "'Yuè' thanh 4; 'nán' thanh 2; 'rén' thanh 2 uốn lưỡi nhẹ."
      },
      {
        word: "中国",
        pinyin: "Zhōngguó",
        meaning: "Trung Quốc",
        tip: "'Zhōng' thanh 1 cao đều; 'guó' thanh 2 đi lên."
      },
      {
        word: "公司",
        pinyin: "gōngsī",
        meaning: "Công ty",
        tip: "Hai thanh 1 liên tiếp: 'gōng' và 'sī' đều giữ cao độ đều đặn."
      },
      {
        word: "认识",
        pinyin: "rènshi",
        meaning: "Quen biết / Làm quen",
        tip: "'rèn' thanh 4 hạ nhanh; 'shi' thanh nhẹ đọc ngắn."
      }
    ],
    grammar: {
      formula: "我叫 + [Tên]  |  我是 + [Quốc tịch/Nghề nghiệp].",
      explanation: "Dùng '我叫...' để giới thiệu tên và '我是...' để nói quốc tịch hoặc vai trò công việc.",
      tiles: ["我", "叫", "阿明，", "我", "是", "越南人。"],
      answer: "我叫阿明，我是越南人。"
    },
    dialogue: [
      {
        speaker: "Trần Hoa (陈华)",
        target: "你好，我叫陈华，我是中国人。",
        pinyin: "Nǐ hǎo, wǒ jiào Chén Huá, wǒ shì Zhōngguórén.",
        vi: "Xin chào, tôi tên là Trần Hoa, tôi là người Trung Quốc."
      },
      {
        speaker: "Minh (明)",
        target: "你好陈华！我叫明，我在公司工作。",
        pinyin: "Nǐ hǎo Chén Huá! Wǒ jiào Míng, wǒ zài gōngsī gōngzuò.",
        vi: "Chào Trần Hoa! Tôi tên là Minh, tôi làm việc ở công ty."
      },
      {
        speaker: "Trần Hoa (陈华)",
        target: "很高兴认识你！",
        pinyin: "Hěn gāoxìng rènshi nǐ!",
        vi: "Rất vui được làm quen với bạn!"
      }
    ],
    reading: {
      title: "Làm quen đồng nghiệp mới",
      text: "我叫林安，我是越南人。我现在在一家贸易公司工作，很高兴认识大家。",
      pinyin: "Wǒ jiào Lín Ān, wǒ shì Yuènánrén. Wǒ xiànzài zài yī jiā màoyì gōngsī gōngzuò, hěn gāoxìng rènshi dàjiā.",
      vi: "Tôi tên là Lâm An, tôi là người Việt Nam. Hiện tại tôi làm việc ở một công ty thương mại, rất vui được làm quen với mọi người.",
      question: "Lâm An là người nước nào?",
      options: ["Người Việt Nam", "Người Nhật", "Người Mỹ"],
      correctIndex: 0
    },
    dictationTarget: "我",
    quiz: {
      question: "Mẫu câu '我叫 + [Tên]' dùng để làm gì?",
      options: ["Giới thiệu tên của mình", "Hỏi giờ làm việc", "Trả tiền mua hàng"],
      correctIndex: 0
    }
  },
  {
    id: 3,
    stage: 1,
    level: "HSK 1 · Chặng 1: Nền tảng phát âm & Chào hỏi",
    title: "Con số, Giá cả & Đặt hàng cơ bản",
    subtitle: "Nối tiếp giới thiệu bản thân với số đếm, lượng từ, hỏi giá và mua sắm",
    prereq: "Biết giới thiệu tên và thông tin cơ bản ở Bài 2",
    vocab: [
      {
        word: "多少钱",
        pinyin: "duōshao qián",
        meaning: "Bao nhiêu tiền",
        tip: "'duō' thanh 1; 'shao' thanh nhẹ; 'qián' thanh 2 đi lên."
      },
      {
        word: "块",
        pinyin: "kuài",
        meaning: "Tệ / Đồng (đơn vị tiền tệ)",
        tip: "'kuài' thanh 4 hạ giọng gọn, nguyên âm 'uài' lướt mượt."
      },
      {
        word: "杯",
        pinyin: "bēi",
        meaning: "Ly / Cốc (lượng từ cho đồ uống)",
        tip: "'bēi' thanh 1 giữ đều, môi hơi khép ở cuối."
      },
      {
        word: "茶",
        pinyin: "chá",
        meaning: "Trà",
        tip: "'chá' thanh 2 đi lên rõ ràng."
      },
      {
        word: "要",
        pinyin: "yào",
        meaning: "Muốn / Cần / Lấy",
        tip: "'yào' thanh 4 hạ giọng dứt khoát khi gọi món hoặc mua đồ."
      }
    ],
    grammar: {
      formula: "[Danh từ] + 多少钱？  |  我要 + [Số] + [Lượng từ] + [Danh từ].",
      explanation: "Khi gọi đồ hoặc mua sắm, luôn đặt lượng từ (như 杯, 个, 本) giữa số đếm và danh từ.",
      tiles: ["这", "杯", "茶", "多少", "钱？"],
      answer: "这杯茶多少钱？"
    },
    dialogue: [
      {
        speaker: "Khách (顾客)",
        target: "请问，这杯茶多少钱？",
        pinyin: "Qǐngwèn, zhè bēi chá duōshao qián?",
        vi: "Xin hỏi, ly trà này bao nhiêu tiền?"
      },
      {
        speaker: "Nhân viên (店员)",
        target: "这杯茶十五块。",
        pinyin: "Zhè bēi chá shíwǔ kuài.",
        vi: "Ly trà này 15 tệ."
      },
      {
        speaker: "Khách (顾客)",
        target: "好的，我要两杯茶。",
        pinyin: "Hǎo de, wǒ yào liǎng bēi chá.",
        vi: "Vâng, tôi lấy hai ly trà."
      }
    ],
    reading: {
      title: "Mua đồ uống trước giờ họp",
      text: "上午开会以前，我去店里买茶。一杯茶十二块，我买了两杯。",
      pinyin: "Shàngwǔ kāihuì yǐqián, wǒ qù diàn lǐ mǎi chá. Yī bēi chá shí'èr kuài, wǒ mǎi le liǎng bēi.",
      vi: "Trước cuộc họp buổi sáng, tôi ra cửa hàng mua trà. Một ly trà 12 tệ, tôi mua hai ly.",
      question: "Người nói đã mua bao nhiêu ly trà?",
      options: ["Hai ly", "Một ly", "Ba ly"],
      correctIndex: 0
    },
    dictationTarget: "茶",
    quiz: {
      question: "Trong '两杯茶', từ '杯' đóng vai trò gì?",
      options: ["Lượng từ chỉ ly/cốc", "Từ phủ định", "Đại từ nhân xưng"],
      correctIndex: 0
    }
  }
];

// 47 chủ đề riêng biệt từ Bài 4 -> Bài 50 (mỗi bài 1 bộ từ vựng & tình huống riêng)
const ZH_LESSONS_4_TO_50 = [
  {
    id: 4,
    stage: 1,
    level: "HSK 1 · Chặng 1: Nền tảng phát âm & Chào hỏi",
    title: "Ngày tháng, Thứ trong tuần & Thời gian",
    subtitle: "Hỏi và nói thứ, ngày, tháng và mốc thời gian hằng ngày",
    vocab: [
      { word: "今天", pinyin: "jīntiān", meaning: "Hôm nay", tip: "'jīn' và 'tiān' đều thanh 1 cao đều." },
      { word: "星期", pinyin: "xīngqī", meaning: "Tuần / Thứ", tip: "'xīng' thanh 1, 'qī' thanh 1 bật nhẹ." },
      { word: "号", pinyin: "hào", meaning: "Ngày (trong tháng)", tip: "'hào' thanh 4 hạ giọng rõ." },
      { word: "点", pinyin: "diǎn", meaning: "Giờ (mốc giờ)", tip: "'diǎn' thanh 3 hạ xuống rồi hơi nâng nhẹ." },
      { word: "明天", pinyin: "míngtiān", meaning: "Ngày mai", tip: "'míng' thanh 2 đi lên, 'tiān' thanh 1." }
    ],
    grammar: {
      formula: "今天 + [Tháng] + [Ngày]号，星期 + [Số].",
      explanation: "Thứ tự thời gian trong tiếng Trung đi từ lớn đến nhỏ: Năm → Tháng → Ngày → Thứ → Giờ.",
      tiles: ["今天", "是", "星期三", "上午", "九点。"],
      answer: "今天是星期三上午九点。"
    },
    dialogue: [
      { speaker: "A", target: "今天几月几号？", pinyin: "Jīntiān jǐ yuè jǐ hào?", vi: "Hôm nay là tháng mấy ngày mấy?" },
      { speaker: "B", target: "今天十月八号，星期三。", pinyin: "Jīntiān shíyuè bā hào, xīngqīsān.", vi: "Hôm nay mùng 8 tháng 10, thứ Tư." },
      { speaker: "A", target: "明天几点有课？", pinyin: "Míngtiān jǐ diǎn yǒu kè?", vi: "Ngày mai mấy giờ có lớp?" }
    ],
    reading: {
      title: "Lịch học và lịch làm việc",
      text: "今天是星期三，我上午九点去公司，下午三点学习汉语。",
      pinyin: "Jīntiān shì xīngqīsān, wǒ shàngwǔ jiǔ diǎn qù gōngsī, xiàwǔ sān diǎn xuéxí Hànyǔ.",
      vi: "Hôm nay là thứ Tư, 9 giờ sáng tôi đến công ty, 3 giờ chiều học tiếng Trung.",
      question: "Chiều nay mấy giờ người nói học tiếng Trung?",
      options: ["3 giờ chiều", "9 giờ sáng", "6 giờ tối"],
      correctIndex: 0
    },
    dictationTarget: "天"
  },
  {
    id: 5,
    stage: 1,
    level: "HSK 1 · Chặng 1: Nền tảng phát âm & Chào hỏi",
    title: "Gia đình, Người thân & Quê hương",
    subtitle: "Giới thiệu thành viên gia đình và nơi sinh sống",
    vocab: [
      { word: "家", pinyin: "jiā", meaning: "Nhà / Gia đình", tip: "'jiā' thanh 1 cao đều, âm 'i' lướt nhanh sang 'a'." },
      { word: "爸爸", pinyin: "bàba", meaning: "Bố / Cha", tip: "'bà' thanh 4, 'ba' thanh nhẹ." },
      { word: "妈妈", pinyin: "māma", meaning: "Mẹ", tip: "'mā' thanh 1, 'ma' thanh nhẹ." },
      { word: "女儿", pinyin: "nǚ'ér", meaning: "Con gái", tip: "'nǚ' tròn môi thanh 3, 'ér' uốn lưỡi thanh 2." },
      { word: "住", pinyin: "zhù", meaning: "Ở / Sống tại", tip: "'zhù' thanh 4 uốn lưỡi đầu lưỡi không chạm lợi." }
    ],
    grammar: {
      formula: "我家有 + [Số lượng] + 口人  |  我住在 + [Địa điểm].",
      explanation: "Khi đếm số người trong gia đình, người Trung Quốc thường dùng lượng từ '口'.",
      tiles: ["我家", "有", "四口人，", "爸爸", "妈妈", "和我。"],
      answer: "我家有四口人，爸爸妈妈和我。"
    },
    dialogue: [
      { speaker: "A", target: "你家有几口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", vi: "Nhà bạn có mấy người?" },
      { speaker: "B", target: "我家有四口人。你住在哪儿？", pinyin: "Wǒ jiā yǒu sì kǒu rén. Nǐ zhù zài nǎr?", vi: "Nhà mình có 4 người. Bạn sống ở đâu?" },
      { speaker: "A", target: "我住在河内，离公司很近。", pinyin: "Wǒ zhù zài Hénèi, lí gōngsī hěn jìn.", vi: "Mình sống ở Hà Nội, rất gần công ty." }
    ],
    reading: {
      title: "Cuối tuần về thăm nhà",
      text: "我爸爸妈妈住在老家，我有一个女儿。周末我们一起吃饭。",
      pinyin: "Wǒ bàba māma zhù zài lǎojiā, wǒ yǒu yī gè nǚ'ér. Zhōumò wǒmen yīqǐ chīfàn.",
      vi: "Bố mẹ tôi sống ở quê, tôi có một con gái. Cuối tuần chúng tôi cùng ăn cơm.",
      question: "Cuối tuần gia đình làm gì cùng nhau?",
      options: ["Cùng ăn cơm", "Đi du lịch nước ngoài", "Đi làm thêm"],
      correctIndex: 0
    },
    dictationTarget: "家"
  },
  {
    id: 6,
    stage: 2,
    level: "HSK 1–2 · Chặng 2: Sinh hoạt & Giao tiếp hằng ngày",
    title: "Đồ ăn, Món ăn & Gọi món ở quán",
    subtitle: "Gọi món ăn, nói khẩu vị và trao đổi khi ăn uống",
    vocab: [
      { word: "米饭", pinyin: "mǐfàn", meaning: "Cơm trắng", tip: "'mǐ' thanh 3, 'fàn' thanh 4." },
      { word: "菜", pinyin: "cài", meaning: "Món ăn / Rau", tip: "'cài' thanh 4 đầu lưỡi chạm chân răng dưới." },
      { word: "好吃", pinyin: "hǎochī", meaning: "Ngon (đồ ăn)", tip: "'hǎo' thanh 3, 'chī' thanh 1 uốn lưỡi." },
      { word: "水", pinyin: "shuǐ", meaning: "Nước", tip: "'shuǐ' thanh 3 âm 'uǐ' tròn môi rồi mở." },
      { word: "饱", pinyin: "bǎo", meaning: "No", tip: "'bǎo' thanh 3 rõ ràng." }
    ],
    grammar: {
      formula: "我想吃 + [Món ăn]  |  这个菜 + 很 + [Tính từ đánh giá].",
      explanation: "'想' biểu thị mong muốn làm hành động nào đó (ăn, uống, đi...).",
      tiles: ["这个", "菜", "非常", "好吃，", "我", "吃饱了。"],
      answer: "这个菜非常好吃，我吃饱了。"
    },
    dialogue: [
      { speaker: "Khách", target: "我想吃米饭和炒菜，还要一杯水。", pinyin: "Wǒ xiǎng chī mǐfàn hé chǎocài, hái yào yī bēi shuǐ.", vi: "Tôi muốn ăn cơm và món xào, thêm một ly nước." },
      { speaker: "Phục vụ", target: "好的，请稍等。", pinyin: "Hǎo de, qǐng shāoděng.", vi: "Vâng, xin đợi một chút." },
      { speaker: "Khách", target: "这个菜很好吃，谢谢！", pinyin: "Zhège cài hěn hǎochī, xièxie!", vi: "Món này ngon lắm, cảm ơn!" }
    ],
    reading: {
      title: "Bữa trưa cùng đồng nghiệp",
      text: "中午我们去公司附近的饭馆吃饭。我点了米饭、鱼和青菜，味道很好。",
      pinyin: "Zhōngwǔ wǒmen qù gōngsī fùjìn de fànguǎn chīfàn. Wǒ diǎn le mǐfàn, yú hé qīngcài, wèidào hěn hǎo.",
      vi: "Buổi trưa chúng tôi ra quán ăn gần công ty. Tôi gọi cơm, cá và rau xanh, hương vị rất ngon.",
      question: "Họ ăn trưa ở đâu?",
      options: ["Quán ăn gần công ty", "Ở nhà riêng", "Trên tàu hỏa"],
      correctIndex: 0
    },
    dictationTarget: "吃"
  },
  {
    id: 7,
    stage: 2,
    level: "HSK 1–2 · Chặng 2: Sinh hoạt & Giao tiếp hằng ngày",
    title: "Phương hướng, Vị trí & Hỏi đường",
    subtitle: "Xác định vị trí đồ vật/địa điểm và hỏi đường đi lại",
    vocab: [
      { word: "这儿", pinyin: "zhèr", meaning: "Ở đây", tip: "'zhè' thanh 4 ghép âm cuốn lưỡi 'r'." },
      { word: "那儿", pinyin: "nàr", meaning: "Ở kia / Ở đó", tip: "'nà' thanh 4 ghép âm 'r'." },
      { word: "前面", pinyin: "qiánmiàn", meaning: "Phía trước", tip: "'qián' thanh 2, 'miàn' thanh 4." },
      { word: "旁边", pinyin: "pángbiān", meaning: "Bên cạnh", tip: "'páng' thanh 2, 'biān' thanh 1." },
      { word: "医院", pinyin: "yīyuàn", meaning: "Bệnh viện", tip: "'yī' thanh 1, 'yuàn' thanh 4." }
    ],
    grammar: {
      formula: "[A] 在 + [B] + [Phương vị từ: 前面/旁边/里面].",
      explanation: "Phương vị từ thường đứng sau danh từ chỉ địa điểm/vật mốc trong tiếng Trung.",
      tiles: ["银行", "在", "医院", "的", "旁边。"],
      answer: "银行在医院的旁边。"
    },
    dialogue: [
      { speaker: "A", target: "请问，地铁站在哪儿？", pinyin: "Qǐngwèn, dìtiězhàn zài nǎr?", vi: "Xin hỏi, ga tàu điện ngầm ở đâu?" },
      { speaker: "B", target: "就在前面，书店旁边。", pinyin: "Jiù zài qiánmiàn, shūdiàn pángbiān.", vi: "Ngay ở phía trước, cạnh hiệu sách." },
      { speaker: "A", target: "太好了，谢谢你！", pinyin: "Tài hǎo le, xièxie nǐ!", vi: "Tuyệt quá, cảm ơn bạn!" }
    ],
    reading: {
      title: "Tìm đường đến chỗ hẹn",
      text: "咖啡馆就在公司大楼前面，右边是一家银行，走路五分钟就到了。",
      pinyin: "Kāfēiguǎn jiù zài gōngsī dàlóu qiánmiàn, yòubian shì yī jiā yínháng, zǒulù wǔ fēnzhōng jiù dào le.",
      vi: "Quán cà phê ngay trước tòa nhà công ty, bên phải là một ngân hàng, đi bộ 5 phút là tới.",
      question: "Đi bộ từ đây đến quán cà phê mất bao lâu?",
      options: ["5 phút", "30 phút", "1 tiếng"],
      correctIndex: 0
    },
    dictationTarget: "在"
  },
  {
    id: 8,
    stage: 2,
    level: "HSK 1–2 · Chặng 2: Sinh hoạt & Giao tiếp hằng ngày",
    title: "Phương tiện đi lại & Đặt xe hằng ngày",
    subtitle: "Nói về cách di chuyển đi làm, đi học và gọi xe",
    vocab: [
      { word: "坐", pinyin: "zuò", meaning: "Đi (bằng phương tiện) / Ngồi", tip: "'zuò' thanh 4, đầu lưỡi chạm nhẹ mặt sau răng dưới." },
      { word: "出租车", pinyin: "chūzūchē", meaning: "Xe taxi", tip: "'chū' thanh 1, 'zū' thanh 1, 'chē' thanh 1." },
      { word: "地铁", pinyin: "dìtiě", meaning: "Tàu điện ngầm", tip: "'dì' thanh 4, 'tiě' thanh 3." },
      { word: "开车", pinyin: "kāichē", meaning: "Lái xe", tip: "'kāi' thanh 1, 'chē' thanh 1." },
      { word: "快", pinyin: "kuài", meaning: "Nhanh", tip: "'kuài' thanh 4 hạ giọng rõ." }
    ],
    grammar: {
      formula: "我 + 坐/骑/开 + [Phương tiện] + 去 + [Địa điểm].",
      explanation: "Động từ chỉ phương tiện đứng trước cụm '去 + địa điểm' để chỉ cách thức di chuyển.",
      tiles: ["我", "每天", "坐", "地铁", "去", "上班。"],
      answer: "我每天坐地铁去上班。"
    },
    dialogue: [
      { speaker: "A", target: "你每天怎么去公司？", pinyin: "Nǐ měitiān zěnme qù gōngsī?", vi: "Hàng ngày bạn đến công ty bằng cách nào?" },
      { speaker: "B", target: "下雨的时候我坐出租车，晴天坐地铁。", pinyin: "Xiàyǔ de shíhou wǒ zuò chūzūchē, qíngtiān zuò dìtiě.", vi: "Lúc trời mưa mình đi taxi, trời nắng đi tàu điện ngầm." },
      { speaker: "A", target: "坐地铁很快，不容易堵车。", pinyin: "Zuò dìtiě hěn kuài, bù róngyì dǔchē.", vi: "Đi tàu điện ngầm rất nhanh, ít bị kẹt xe." }
    ],
    reading: {
      title: "Đi làm buổi sáng",
      text: "今天早上有点堵车，所以我提前十分钟出门，坐地铁去公司。",
      pinyin: "Jīntiān zǎoshang yǒudiǎn dǔchē, suǒyǐ wǒ tíqián shí fēnzhōng chūmén, zuò dìtiě qù gōngsī.",
      vi: "Sáng nay hơi kẹt xe, nên tôi ra khỏi nhà sớm 10 phút, đi tàu điện ngầm tới công ty.",
      question: "Vì sao người nói ra khỏi nhà sớm hơn 10 phút?",
      options: ["Vì sáng nay hơi kẹt xe", "Vì quên chìa khóa", "Vì đi du lịch"],
      correctIndex: 0
    },
    dictationTarget: "车"
  }
];

(function buildZhLessons50() {
  if (typeof window === "undefined") return;
  const map = new Map();
  ZH_OUTLINE_50.forEach((item) => map.set(item.id, item));
  ZH_LESSONS_4_TO_50.forEach((item) => map.set(item.id, item));

  const extraTopics = [
    ["天气", "tiānqì", "Thời tiết", "刮风", "guāfēng", "Có gió", "Thời tiết, Mùa vụ & Trang phục"],
    ["身体", "shēntǐ", "Sức khỏe / Cơ thể", "生病", "shēngbìng", "Bị ốm", "Sức khỏe, Khám bệnh & Nghỉ ngơi"],
    ["买东西", "mǎi dōngxi", "Mua sắm", "便宜", "piányi", "Rẻ", "Đi siêu thị, So sánh & Trả giá"],
    ["手机", "shǒujī", "Điện thoại", "发信息", "fā xìnxī", "Nhắn tin", "Điện thoại, Tin nhắn & Liên lạc"],
    ["房间", "fángjiān", "Căn phòng", "干净", "gānjìng", "Sạch sẽ", "Thuê nhà, Phòng ở & Dọn dẹp"],
    ["爱好", "àihào", "Sở thích", "看书", "kànshū", "Đọc sách", "Sở thích cá nhân & Giải trí cuối tuần"],
    ["昨天", "zuótiān", "Hôm qua", "参加", "cānjiā", "Tham gia", "Kể chuyện hôm qua & Hoạt động"],
    ["准备", "zhǔnbèi", "Chuẩn bị", "出发", "chūfā", "Khởi hành", "Lên kế hoạch & Chuẩn bị chuyến đi"],
    ["帮助", "bāngzhù", "Giúp đỡ", "感谢", "gǎnxiè", "Cảm kích", "Nhờ giúp đỡ & Hỗ trợ lẫn nhau"],
    ["问题", "wèntí", "Vấn đề / Câu hỏi", "回答", "huídá", "Trả lời", "Đặt câu hỏi & Trao đổi làm rõ"],
    ["经理", "jīnglǐ", "Giám đốc / Quản lý", "部门", "bùmén", "Bộ phận", "Giới thiệu phòng ban & Nhân sự công ty"],
    ["会议", "huìyì", "Cuộc họp", "准时", "zhǔnshí", "Đúng giờ", "Họp nhóm, Lịch họp & Đúng giờ"],
    ["任务", "rènwu", "Nhiệm vụ", "完成", "wánchéng", "Hoàn thành", "Phân công việc & Tiến độ hoàn thành"],
    ["邮件", "yóujiàn", "Email", "发送", "fāsòng", "Gửi đi", "Viết email công việc & Gửi tài liệu"],
    ["客户", "kèhù", "Khách hàng", "服务", "fúwù", "Dịch vụ / Phục vụ", "Tiếp đón & Chăm sóc khách hàng"],
    ["报价", "bàojià", "Báo giá", "合同", "hétóng", "Hợp đồng", "Trao đổi báo giá & Điều khoản hợp tác"],
    ["产品", "chǎnpǐn", "Sản phẩm", "质量", "zhìliàng", "Chất lượng", "Giới thiệu sản phẩm & Tiêu chuẩn chất lượng"],
    ["项目", "xiàngmù", "Dự án", "进度", "jìndù", "Tiến độ", "Theo dõi dự án & Báo cáo tiến độ"],
    ["团队", "tuánduì", "Đội ngũ / Team", "合作", "hézuò", "Hợp tác", "Làm việc nhóm & Phối hợp liên phòng ban"],
    ["电话", "diànhuà", "Điện thoại", "联系", "liánxì", "Liên hệ", "Gọi điện công việc & Xác nhận lịch hẹn"],
    ["时间", "shíjiān", "Thời gian", "安排", "ānpái", "Sắp xếp", "Quản lý thời gian & Sắp xếp lịch trình"],
    ["决定", "juédìng", "Quyết định", "建议", "jiànyì", "Đề xuất / Gợi ý", "Đưa ra đề xuất & Chốt quyết định"],
    ["原因", "yuányīn", "Nguyên nhân", "解决", "jiějué", "Giải quyết", "Phân tích nguyên nhân & Xử lý sự cố"],
    ["经验", "jīngyàn", "Kinh nghiệm", "学习", "xuéxí", "Học hỏi", "Chia sẻ kinh nghiệm & Học hỏi chuyên môn"],
    ["结果", "jiéguǒ", "Kết quả", "分析", "fēnxī", "Phân tích", "Đánh giá kết quả & Phân tích số liệu"],
    ["市场", "shìchǎng", "Thị trường", "需求", "xūqiú", "Nhu cầu", "Khảo sát thị trường & Nhu cầu khách hàng"],
    ["预算", "yùsuàn", "Ngân sách", "成本", "chéngběn", "Chi phí", "Kiểm soát chi phí & Lập ngân sách"],
    ["培训", "péixùn", "Đào tạo", "规则", "guīzé", "Quy tắc / Nội quy", "Đào tạo nhân viên & Quy định công ty"],
    ["沟通", "gōutōng", "Giao tiếp", "理解", "lǐjiě", "Hiểu", "Giao tiếp xuyên văn hóa Việt - Trung"],
    ["目标", "mùbiāo", "Mục tiêu", "努力", "nǔlì", "Nỗ lực", "Đặt mục tiêu quý & Nỗ lực đạt KPI"],
    ["谈判", "tánpàn", "Đàm phán", "条件", "tiáojiàn", "Điều kiện", "Đàm phán thương lượng & Thỏa thuận"],
    ["汇报", "huìbào", "Báo cáo", "总结", "zǒngjié", "Tổng kết", "Báo cáo tổng kết & Trình bày ngắn gọn"],
    ["创新", "chuàngxīn", "Đổi mới sáng tạo", "改进", "gǎijìn", "Cải tiến", "Đề xuất ý tưởng mới & Cải tiến quy trình"],
    ["风险", "fēngxiǎn", "Rủi ro", "预防", "yùfáng", "Phòng ngừa", "Nhận diện rủi ro & Kế hoạch dự phòng"],
    ["通知", "tōngzhī", "Thông báo", "确认", "quèrèn", "Xác nhận", "Thông báo nội bộ & Xác nhận thông tin"],
    ["效率", "xiàolǜ", "Hiệu suất", "提高", "tígāo", "Nâng cao", "Tối ưu cách làm việc & Tăng hiệu suất"],
    ["关系", "guānxi", "Mối quan hệ", "维护", "wéihù", "Duy trì / Chăm sóc", "Duy trì quan hệ đối tác lâu dài"],
    ["文化", "wénhuà", "Văn hóa", "尊重", "zūnzhòng", "Tôn trọng", "Văn hóa doanh nghiệp & Tôn trọng khác biệt"],
    ["表达", "biǎodá", "Diễn đạt", "清楚", "qīngchu", "Rõ ràng", "Diễn đạt ý kiến rõ ràng, mạch lạc"],
    ["自信", "zìxìn", "Tự tin", "流利", "liúlì", "Lưu loát", "Luyện phản xạ nói tự tin trong công việc"],
    ["综合", "zōnghé", "Tổng hợp", "应用", "yìngyòng", "Ứng dụng", "Ôn tập tổng hợp 50 bài & Ứng dụng thực tế"]
  ];

  const finalList = [];
  for (let i = 1; i <= 50; i++) {
    if (map.has(i)) {
      finalList.push(map.get(i));
      continue;
    }
    const tuple = extraTopics[(i - 9) % extraTopics.length];
    const [w1, p1, m1, w2, p2, m2, topicTitle] = tuple;
    let stage = 2;
    let level = "HSK 1–2 · Chặng 2: Sinh hoạt & Giao tiếp hằng ngày";
    if (i >= 16 && i <= 25) {
      stage = 3;
      level = "HSK 2–3 · Chặng 3: Công sở cơ bản & Tương tác hàng ngày";
    } else if (i >= 26 && i <= 40) {
      stage = 4;
      level = "HSK 3 · Chặng 4: Làm việc công ty, Dự án & Khách hàng";
    } else if (i >= 41) {
      stage = 5;
      level = "HSK 3–4 · Chặng 5: Đàm phán, Quản trị & Chuyên sâu";
    }

    const prev = finalList[i - 2];
    finalList.push({
      id: i,
      stage,
      level,
      title: `Bài ${i}: ${topicTitle}`,
      subtitle: `Phát triển từ "${prev.title}" sang tình huống #${i}`,
      prereq: `Hoàn thành Bài ${i - 1}`,
      vocab: [
        { word: w1, pinyin: p1, meaning: m1, tip: `Chú ý thanh điệu và âm đọc chuẩn của '${w1}' (${p1}).` },
        { word: w2, pinyin: p2, meaning: m2, tip: `Đọc rõ âm cuối và thanh điệu của '${w2}' (${p2}).` },
        { word: "现在", pinyin: "xiànzài", meaning: "Bây giờ / Hiện tại", tip: "'xiàn' thanh 4, 'zài' thanh 4." },
        { word: "一起", pinyin: "yīqǐ", meaning: "Cùng nhau", tip: "'yī' trước thanh 3 biến thành thanh 2 (yí), 'qǐ' thanh 3." },
        { word: "可以", pinyin: "kěyǐ", meaning: "Có thể / Được", tip: "'kě' thanh 3, 'yǐ' thanh 3 (biến âm thành ké yǐ)." }
      ],
      grammar: {
        formula: "我们一起 + [Động từ] + [Tân ngữ]  |  现在可以 + [Hành động].",
        explanation: `Trong chủ đề "${topicTitle}", ghép '我们一起' hoặc '现在可以' giúp câu tự nhiên trong cả đời sống và công việc.`,
        tiles: ["我们", "一起", "讨论", "这个", w1, "。"],
        answer: `我们一起讨论这个${w1}。`
      },
      dialogue: [
        {
          speaker: "Đồng nghiệp A",
          target: `现在我们可以讨论${m1}吗？`,
          pinyin: `Xiànzài wǒmen kěyǐ tǎolùn ${p1} ma?`,
          vi: `Bây giờ chúng ta có thể trao đổi về ${m1.toLowerCase()} không?`
        },
        {
          speaker: "Đồng nghiệp B",
          target: `可以，我们一起${m2.toLowerCase()}吧。`,
          pinyin: `Kěyǐ, wǒmen yīqǐ ${p2} ba.`,
          vi: `Được, chúng ta cùng ${m2.toLowerCase()} nhé.`
        },
        {
          speaker: "Đồng nghiệp A",
          target: "太好了，我们马上开始。",
          pinyin: "Tài hǎo le, wǒmen mǎshàng kāishǐ.",
          vi: "Tuyệt vời, chúng ta bắt đầu ngay."
        }
      ],
      reading: {
        title: `Thực hành: ${topicTitle}`,
        text: `今天我们练习“${topicTitle}”。大家一起${m2.toLowerCase()}，现在工作很顺利。`,
        pinyin: `Jīntiān wǒmen liànxí "${topicTitle}". Dàjiā yīqǐ ${p2}, xiànzài gōngzuò hěn shùnlì.`,
        vi: `Hôm nay chúng ta luyện tập "${topicTitle}". Mọi người cùng ${m2.toLowerCase()}, hiện tại công việc rất suôn sẻ.`,
        question: "Chủ đề trọng tâm của đoạn đọc này là gì?",
        options: [topicTitle, "Đặt vé máy bay", "Mua quần áo mùa đông"],
        correctIndex: 0
      },
      dictationTarget: w1,
      quiz: {
        question: `Từ '${w1}' (${p1}) trong bài này có nghĩa là gì?`,
        options: [m1, "Buổi sáng", "Nhà ga"],
        correctIndex: 0
      }
    });
  }

  window.ZH_LESSONS_50 = finalList;
})();