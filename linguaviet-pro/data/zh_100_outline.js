// data/zh_100_outline.js
// Kho 50 bài Tiếng Trung liên kết chặt chẽ từ cơ bản -> đời sống hằng ngày -> công việc công ty
// Mỗi bài có bộ từ vựng, ngữ pháp, hội thoại, đọc hiểu & chữ Hán luyện viết riêng biệt

const ZH_DETAILED_LESSONS = [
  {
    id: 1,
    stage: 1,
    level: "HSK 1 · Chặng 1: Nền tảng phát âm & Chào hỏi",
    title: "Chào hỏi & Làm quen cơ bản",
    subtitle: "Thanh điệu, phát âm chuẩn và mẫu câu chào hỏi đời sống",
    prereq: "Bài mở đầu (Không cần kiến thức nền)",
    vocab: [
      { word: "你好", pinyin: "nǐ hǎo", meaning: "Xin chào", tip: "Hai thanh 3 đi liền nhau: 'nǐ' đọc gần giống thanh 2 (ní) rồi hạ xuống 'hǎo'." },
      { word: "您好", pinyin: "nín hǎo", meaning: "Xin chào (kính ngữ / khách hàng)", tip: "'nín' thanh 2 đi lên rõ ràng, dùng lịch sự với người lớn tuổi hoặc đối tác." },
      { word: "老师", pinyin: "lǎo shī", meaning: "Thầy giáo / Cô giáo", tip: "'lǎo' thanh 3; 'shī' cong đầu lưỡi không chạm vòm miệng, giữ đều thanh 1." },
      { word: "同学", pinyin: "tóng xué", meaning: "Bạn học", tip: "'tóng' thanh 2; 'xué' tròn môi uốn nhẹ lên thanh 2." },
      { word: "谢谢", pinyin: "xiè xie", meaning: "Cảm ơn", tip: "'xiè' thanh 4 dứt khoát; 'xie' đứng sau đọc nhẹ, ngắn." }
    ],
    grammar: {
      formula: "您好 + [Danh từ chỉ người]  |  谢谢 + [Đối tượng]",
      explanation: "Dùng '您好' khi chào lịch sự trong đời sống hoặc công sở; ghép chức danh hoặc '老师' phía sau.",
      tiles: ["您好，", "王", "老师，", "谢谢！"],
      answer: "您好，王老师，谢谢！"
    },
    dialogue: [
      { speaker: "Minh (明)", target: "您好，李老师！", pinyin: "Nín hǎo, Lǐ lǎo shī!", vi: "Xin chào thầy/cô Lý ạ!" },
      { speaker: "Cô Lý (李老师)", target: "你好，同学！", pinyin: "Nǐ hǎo, tóng xué!", vi: "Chào bạn học!" },
      { speaker: "Minh (明)", target: "谢谢李老师。", pinyin: "Xiè xie Lǐ lǎo shī.", vi: "Cảm ơn thầy/cô Lý." }
    ],
    reading: {
      title: "Buổi gặp đầu tiên ở lớp học",
      text: "早上好！我是明。您好，李老师，谢谢您！王同学，你好！",
      pinyin: "Zǎo shang hǎo! Wǒ shì Míng. Nín hǎo, Lǐ lǎo shī, xiè xie nín! Wáng tóng xué, nǐ hǎo!",
      vi: "Chào buổi sáng! Tôi là Minh. Xin chào thầy/cô Lý, cảm ơn thầy/cô! Bạn Vương, chào bạn!",
      question: "Người nói dùng từ nào để chào thầy/cô Lý một cách lịch sự?",
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
      { word: "我", pinyin: "wǒ", meaning: "Tôi / Mình", tip: "Đọc 'uổ' thanh 3, nâng nhẹ cuối âm." },
      { word: "是", pinyin: "shì", meaning: "Là", tip: "Âm 'sh' đầu lưỡi uốn cong không chạm vòm, thanh 4 rơi dứt khoát." },
      { word: "越南人", pinyin: "Yuè nán rén", meaning: "Người Việt Nam", tip: "'Yuè' thanh 4; 'nán' thanh 2; 'rén' thanh 2." },
      { word: "中国人", pinyin: "Zhōng guó rén", meaning: "Người Trung Quốc", tip: "'Zhōng' thanh 1; 'guó' thanh 2; 'rén' thanh 2." },
      { word: "学生", pinyin: "xué shēng", meaning: "Học sinh / Sinh viên", tip: "'xué' thanh 2; 'shēng' thanh 1, âm cuối '-ng' ngân nhẹ." }
    ],
    grammar: {
      formula: "主语 (Chủ ngữ) + 是 + 身份/国籍 (Danh tính/Quốc tịch)",
      explanation: "Động từ '是' nối chủ ngữ với danh từ chỉ tên, quốc tịch hoặc nghề nghiệp.",
      tiles: ["我", "是", "越南人，", "也是", "学生。"],
      answer: "我是越南人，也是学生。"
    },
    dialogue: [
      { speaker: "Lan (兰)", target: "你好，我是兰。", pinyin: "Nǐ hǎo, wǒ shì Lán.", vi: "Chào bạn, mình là Lan." },
      { speaker: "Trương Minh (张明)", target: "你好！我是中国人。", pinyin: "Nǐ hǎo! Wǒ shì Zhōng guó rén.", vi: "Chào bạn! Mình là người Trung Quốc." },
      { speaker: "Lan (兰)", target: "我也是学生。", pinyin: "Wǒ yě shì xué shēng.", vi: "Mình cũng là sinh viên." }
    ],
    reading: {
      title: "Làm quen tại câu lạc bộ ngôn ngữ",
      text: "大家好！我是阿明，我是越南人。他是张同学，他是中国人。我们都是学生。",
      pinyin: "Dà jiā hǎo! Wǒ shì Ā Míng, wǒ shì Yuè nán rén. Tā shì Zhāng tóng xué, tā shì Zhōng guó rén. Wǒ men dōu shì xué shēng.",
      vi: "Chào mọi người! Mình là A Minh, mình là người Việt Nam. Bạn ấy là bạn Trương, bạn ấy là người Trung Quốc.",
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
      { word: "多少", pinyin: "duō shao", meaning: "Bao nhiêu", tip: "'duō' thanh 1 rõ ràng; 'shao' đứng cuối câu hỏi giá thường đọc nhẹ." },
      { word: "钱", pinyin: "qián", meaning: "Tiền", tip: "Đọc gần giống 'én' thanh 2, âm 'q' bật hơi nhẹ đầu lưỡi." },
      { word: "块", pinyin: "kuài", meaning: "Tệ / Đồng (khẩu ngữ)", tip: "Thanh 4 rơi dứt khoát, âm 'uài' đọc nhanh thành 'oai'." },
      { word: "这", pinyin: "zhè", meaning: "Cái này / Đây", tip: "Âm 'zh' uốn lưỡi thanh 4, âm 'e' đọc gần giống 'ơ'." },
      { word: "要", pinyin: "yào", meaning: "Muốn / Cần / Lấy", tip: "Thanh 4 dứt khoát, âm đầu là bán nguyên âm 'y'." }
    ],
    grammar: {
      formula: "这 + [Lượng từ/Danh từ] + 多少 + 钱？  |  我要 + [Số lượng + 块/个]",
      explanation: "Khi hỏi giá trong giao tiếp hằng ngày, dùng '这多少钱？' và dùng '我要...' để chốt mua.",
      tiles: ["这", "多少", "钱？", "我要", "两个。"],
      answer: "这多少钱？我要两个。"
    },
    dialogue: [
      { speaker: "Khách (顾客)", target: "您好，这多少钱？", pinyin: "Nín hǎo, zhè duō shao qián?", vi: "Xin chào, cái này bao nhiêu tiền ạ?" },
      { speaker: "Người bán (店员)", target: "十块。", pinyin: "Shí kuài.", vi: "10 tệ ạ." },
      { speaker: "Khách (顾客)", target: "好，谢谢，我要。", pinyin: "Hǎo, xiè xie, wǒ yào.", vi: "Vâng, cảm ơn, tôi lấy." }
    ],
    reading: {
      title: "Đi mua nước & đồ ăn nhẹ",
      text: "我是学生。今天我要买水。这瓶水五块，那杯茶十块。谢谢！",
      pinyin: "Wǒ shì xué shēng. Jīn tiān wǒ yào mǎi shuǐ. Zhè píng shuǐ wǔ kuài, nà bēi chá shí kuài. Xiè xie!",
      vi: "Mình là sinh viên. Hôm nay mình muốn mua nước. Chai nước này 5 tệ, ly trà kia 10 tệ.",
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
  },
  {
    id: 4,
    stage: 2,
    level: "HSK 1–2 · Chặng 2: Sinh hoạt & Giao tiếp hằng ngày",
    title: "Ngày tháng, Thứ & Thời gian biểu hằng ngày",
    subtitle: "Dùng con số từ Bài 3 để nói ngày tháng, thứ và lịch sinh hoạt",
    prereq: "Nắm được số đếm và cách hỏi số lượng ở Bài 3",
    vocab: [
      { word: "今天", pinyin: "jīn tiān", meaning: "Hôm nay", tip: "'jīn' thanh 1 kết thúc bằng '-n'; 'tiān' thanh 1 mở âm rõ ràng." },
      { word: "星期", pinyin: "xīng qī", meaning: "Tuần / Thứ (trong tuần)", tip: "'xīng' thanh 1; 'qī' bật hơi nhẹ đầu lưỡi thanh 1." },
      { word: "号", pinyin: "hào", meaning: "Ngày (trong tháng) / Số hiệu", tip: "Thanh 4 rơi gọn, âm 'ao' mở miệng tự nhiên." },
      { word: "点", pinyin: "diǎn", meaning: "Giờ (trên đồng hồ)", tip: "Thanh 3 uốn nhẹ, đọc rõ âm 'iǎn'." },
      { word: "早上", pinyin: "zǎo shang", meaning: "Buổi sáng", tip: "'zǎo' thanh 3; 'shang' đứng sau đọc nhẹ, ngắn." }
    ],
    grammar: {
      formula: "今天 + [X月Y号] + 星期[Z]  |  [Buổi/Thời gian] + [Hành động]",
      explanation: "Trong tiếng Trung, mốc thời gian thường đặt trước động từ để xác định thời điểm diễn ra sự việc.",
      tiles: ["今天", "星期三，", "我", "八点", "去。"],
      answer: "今天星期三，我去。"
    },
    dialogue: [
      { speaker: "A Văn", target: "今天几月几号？", pinyin: "Jīn tiān jǐ yuè jǐ hào?", vi: "Hôm nay mùng mấy tháng mấy?" },
      { speaker: "Tiểu Mai", target: "今天五月四号，星期三。", pinyin: "Jīn tiān wǔ yuè sì hào, xīng qī sān.", vi: "Hôm nay mùng 4 tháng 5, thứ Tư." },
      { speaker: "A Văn", target: "明天早上八点见！", pinyin: "Míng tiān zǎo shang bā diǎn jiàn!", vi: "8 giờ sáng mai gặp nhé!" }
    ],
    reading: {
      title: "Lịch học và lịch làm buổi sáng",
      text: "今天是五月四号，星期三。我早上七点起床，八点去学习，下午两点工作。",
      pinyin: "Jīn tiān shì wǔ yuè sì hào, xīng qī sān. Wǒ zǎo shang qī diǎn qǐ chuáng, bā diǎn qù xué xí, xià wǔ liǎng diǎn gōng zuò.",
      vi: "Hôm nay là mùng 4 tháng 5, thứ Tư. Mình dậy lúc 7 giờ sáng, 8 giờ đi học, 2 giờ chiều làm việc.",
      question: "Người nói bắt đầu làm việc lúc mấy giờ?",
      options: ["7 giờ sáng", "8 giờ sáng", "2 giờ chiều"],
      correctIndex: 2
    },
    writingChar: "天",
    quiz: {
      question: "Để hỏi 'Hôm nay thứ mấy?' trong tiếng Trung, bạn nói:",
      options: ["今天星期几？", "这多少钱？", "你是哪国人？"],
      correctIndex: 0
    }
  },
  {
    id: 5,
    stage: 2,
    level: "HSK 1–2 · Chặng 2: Sinh hoạt & Giao tiếp hằng ngày",
    title: "Gia đình, Thành viên & Sở thích cá nhân",
    subtitle: "Kết hợp mốc thời gian & sinh hoạt để giới thiệu gia đình và sở thích",
    prereq: "Nắm được cách nói ngày giờ & sinh hoạt ở Bài 4",
    vocab: [
      { word: "家", pinyin: "jiā", meaning: "Gia đình / Nhà", tip: "Thanh 1 rõ ràng, âm 'ia' lướt nhẹ sang 'a'." },
      { word: "爸爸", pinyin: "bà ba", meaning: "Bố / Cha", tip: "'bà' thanh 4 mạnh; 'ba' đứng sau đọc nhẹ, ngắn." },
      { word: "妈妈", pinyin: "mā ma", meaning: "Mẹ", tip: "'mā' thanh 1 đều; 'ma' đứng sau đọc nhẹ tự nhiên." },
      { word: "喜欢", pinyin: "xǐ huan", meaning: "Thích", tip: "'xǐ' thanh 3; 'huan' đọc nhẹ như 'hoan' ở âm tiết thứ hai." },
      { word: "看书", pinyin: "kàn shū", meaning: "Đọc sách", tip: "'kàn' thanh 4; 'shū' uốn lưỡi thanh 1." }
    ],
    grammar: {
      formula: "我家里有 + [Số lượng + Người]  |  [Chủ ngữ] + 喜欢 + [Động từ/Danh từ]",
      explanation: "Dùng '有' để nói số người trong gia đình và '喜欢' trước động từ để diễn tả sở thích hằng ngày.",
      tiles: ["我", "周末", "喜欢", "在", "家", "看书。"],
      answer: "我周末喜欢在家看书。"
    },
    dialogue: [
      { speaker: "Tiểu Phương", target: "你家有几口人？", pinyin: "Nǐ jiā yǒu jǐ kǒu rén?", vi: "Nhà bạn có mấy người?" },
      { speaker: "Hải Nam", target: "我家有爸爸、妈妈和我，三人。", pinyin: "Wǒ jiā yǒu bà ba, mā ma hé wǒ, sān rén.", vi: "Nhà mình có bố, mẹ và mình, 3 người." },
      { speaker: "Tiểu Phương", target: "你喜欢做什么？", pinyin: "Nǐ xǐ huan zuò shén me?", vi: "Bạn thích làm gì?" }
    ],
    reading: {
      title: "Cuối tuần của gia đình",
      text: "我家有四口人：爸爸、妈妈、弟弟和我。爸爸喜欢喝茶，我喜欢看书和听音乐。",
      pinyin: "Wǒ jiā yǒu sì kǒu rén: bà ba, mā ma, dì di hé wǒ. Bà ba xǐ huan hē chá, wǒ xǐ huan kàn shū hé tīng yīn yuè.",
      vi: "Nhà mình có 4 người: bố, mẹ, em trai và mình. Bố thích uống trà, mình thích đọc sách và nghe nhạc.",
      question: "Bố thích làm gì?",
      options: ["Đọc sách", "Uống trà", "Chạy bộ"],
      correctIndex: 1
    },
    writingChar: "家",
    quiz: {
      question: "Từ '喜欢' (xǐ huan) có nghĩa là gì?",
      options: ["Ghét", "Thích", "Bận"],
      correctIndex: 1
    }
  },
  {
    id: 6,
    stage: 2,
    level: "HSK 1–2 · Chặng 2: Sinh hoạt & Giao tiếp hằng ngày",
    title: "Địa điểm, Phương hướng & Đường đi trong thành phố",
    subtitle: "Từ gia đình & sở thích mở rộng sang di chuyển và hỏi đường",
    prereq: "Nắm được cách nói sở thích & hoạt động ở Bài 5",
    vocab: [
      { word: "哪儿", pinyin: "nǎr", meaning: "Ở đâu / Chỗ nào", tip: "Thanh 3 cong lưỡi (er化音) nối liền mượt mà." },
      { word: "在", pinyin: "zài", meaning: "Ở / Đang ở", tip: "Thanh 4 rơi gọn, âm đầu 'z' đặt đầu lưỡi sau răng dưới." },
      { word: "前面", pinyin: "qián miàn", meaning: "Phía trước / Đằng trước", tip: "'qián' thanh 2; 'miàn' thanh 4." },
      { word: "公司", pinyin: "gōng sī", meaning: "Công ty", tip: "'gōng' thanh 1; 'sī' đầu lưỡi thẳng không uốn cong, thanh 1." },
      { word: "银行", pinyin: "yín háng", meaning: "Ngân hàng", tip: "'yín' thanh 2; 'háng' thanh 2, âm cuối '-ng' rõ." }
    ],
    grammar: {
      formula: "[Người/Vật] + 在 + [Địa điểm / Phương hướng]  |  [Địa điểm] 在哪儿？",
      explanation: "Dùng '在' để chỉ vị trí hiện tại hoặc địa điểm của công ty, ngân hàng, trường học.",
      tiles: ["公司", "在", "银行", "的", "前面。"],
      answer: "公司在银行的前面。"
    },
    dialogue: [
      { speaker: "Khách", target: "请问，公司在哪儿？", pinyin: "Qǐng wèn, gōng sī zài nǎr?", vi: "Cho hỏi, công ty ở đâu ạ?" },
      { speaker: "Người dân", target: "就在前面，很近。", pinyin: "Jiù zài qián miàn, hěn jìn.", vi: "Ngay phía trước thôi, rất gần." },
      { speaker: "Khách", target: "太好了，谢谢您！", pinyin: "Tài hǎo le, xiè xie nín!", vi: "Tuyệt quá, cảm ơn ông/bà!" }
    ],
    reading: {
      title: "Đi làm trên phố",
      text: "我的公司在火车站前面，旁边有一家银行。我每天走路上班，非常方便。",
      pinyin: "Wǒ de gōng sī zài huǒ chē zhàn qián miàn, páng biān yǒu yì jiā yín háng. Wǒ měi tiān zǒu lù shàng bān, fēi cháng fāng biàn.",
      vi: "Công ty của tôi ở phía trước ga tàu, bên cạnh có một ngân hàng. Mỗi ngày tôi đi bộ đi làm, rất tiện.",
      question: "Công ty nằm ở vị trí nào?",
      options: ["Phía trước ga tàu", "Trong ngân hàng", "Xa thành phố"],
      correctIndex: 0
    },
    writingChar: "在",
    quiz: {
      question: "Câu '公司在前面' nghĩa là:",
      options: ["Công ty ở phía sau", "Công ty ở phía trước", "Công ty đã đóng cửa"],
      correctIndex: 1
    }
  }
];

// Bộ dữ liệu từ vựng, câu mẫu & chữ Hán riêng biệt cho các chủ đề từ Bài 7 đến Bài 50
const ZH_TOPIC_BANK = [
  { topic: "Ăn uống tại quán ăn, Gọi món & Khẩu vị", words: [["吃饭","chī fàn","Ăn cơm"],["米饭","mǐ fàn","Cơm trắng"],["好吃","hǎo chī","Ngon"],["茶","chá","Trà"],["菜","cài","Món ăn"]], char: "吃", sent: ["今天","我们","一起","吃饭。"], ans: "今天我们一起吃饭。" },
  { topic: "Mua sắm quần áo, Kích cỡ & Mặc cả lịch sự", words: [["衣服","yī fu","Quần áo"],["大小","dà xiǎo","To nhỏ / Kích cỡ"],["便宜","pián yi","Rẻ"],["买","mǎi","Mua"],["颜色","yán sè","Màu sắc"]], char: "买", sent: ["这件","衣服","很","便宜。"], ans: "这件衣服很便宜。" },
  { topic: "Phương tiện di chuyển, Đặt vé & Đi tàu xe", words: [["坐","zuò","Ngồi / Đi (xe)"],["车","chē","Xe / Tàu"],["火车站","huǒ chē zhàn","Ga tàu"],["票","piào","Vé"],["快","kuài","Nhanh"]], char: "车", sent: ["我们","坐","火车","去。"], ans: "我们坐火车去。" },
  { topic: "Thời tiết bốn mùa, Trang phục & Kế hoạch cuối tuần", words: [["天气","tiān qì","Thời tiết"],["热","rè","Nóng"],["冷","lěng","Lạnh"],["下雨","xià yǔ","Mưa"],["晴天","qíng tiān","Trời nắng"]], char: "热", sent: ["今天","天气","很","热。"], ans: "今天天气很热。" },
  { topic: "Sức khỏe, Triệu chứng thông thường & Đi khám bệnh", words: [["身体","shēn tǐ","Sức khỏe"],["生病","shēng bìng","Bị ốm"],["医院","yī yuàn","Bệnh viện"],["医生","yī shēng","Bác sĩ"],["休息","xiū xi","Nghỉ ngơi"]], char: "医", sent: ["我","今天","需要","休息。"], ans: "我今天需要休息。" },
  { topic: "Công việc văn phòng, Phòng ban & Đồng nghiệp", words: [["工作","gōng zuò","Công việc"],["同事","tóng shì","Đồng nghiệp"],["经理","jīng lǐ","Giám đốc / Quản lý"],["办公室","bàn gōng shì","Văn phòng"],["上班","shàng bān","Đi làm"]], char: "工", sent: ["同事","在","办公室","工作。"], ans: "同事在办公室工作。" },
  { topic: "Điện thoại, Tin nhắn & Hẹn gặp công việc", words: [["电话","diàn huà","Điện thoại"],["发信息","fā xìn xī","Nhắn tin"],["见面","jiàn miàn","Gặp mặt"],["时间","shí jiān","Thời gian"],["联系","lián xì","Liên lạc"]], char: "话", sent: ["请","发信息","联系","我。"], ans: "请发信息联系我。" },
  { topic: "Thuê nhà, Phòng trọ & Tiện nghi sinh hoạt", words: [["租房","zū fáng","Thuê nhà"],["房间","fáng jiān","Căn phòng"],["房租","fáng zū","Tiền thuê nhà"],["空调","kōng tiáo","Điều hòa"],["干净","gān jìng","Sạch sẽ"]], char: "房", sent: ["这个","房间","很","干净。"], ans: "这个房间很干净。" },
  { topic: "Ngân hàng, Đổi tiền & Thanh toán điện tử", words: [["换钱","huàn qián","Đổi tiền"],["付款","fù kuǎn","Thanh toán"],["账号","zhàng hào","Số tài khoản"],["密码","mì mǎ","Mật khẩu"],["安全","ān quán","An toàn"]], char: "付", sent: ["请","用","手机","付款。"], ans: "请用手机付款。" },
  { topic: "Du lịch, Đặt phòng khách sạn & Nhận/trả phòng", words: [["旅游","lǚ yóu","Du lịch"],["酒店","jiǔ diàn","Khách sạn"],["订房","dìng fáng","Đặt phòng"],["护照","hù zhào","Hộ chiếu"],["行李","xíng li","Hành lý"]], char: "旅", sent: ["我们","提前","订","酒店。"], ans: "我们提前订酒店。" },
  { topic: "Ẩm thực Trung - Việt, Đặt bàn & Chúc tụng", words: [["订座","dìng zuò","Đặt bàn"],["菜单","cài dān","Thực đơn"],["干杯","gān bēi","Cạn ly"],["味道","wèi dào","Hương vị"],["特色","tè sè","Đặc sản"]], char: "茶", sent: ["这杯","茶","味道","不错。"], ans: "这杯茶味道不错。" },
  { topic: "Thói quen sinh hoạt, Quản lý thời gian & Hiệu suất", words: [["习惯","xí guàn","Thói quen"],["安排","ān pái","Sắp xếp"],["效率","xiào lǜ","Hiệu suất"],["按时","àn shí","Đúng giờ"],["坚持","jiān chí","Kiên trì"]], char: "时", sent: ["大家","要","按时","到达。"], ans: "大家要按时到达。" },
  { topic: "Mua sắm trực tuyến, Giao hàng & Đổi trả", words: [["网购","wǎng gòu","Mua hàng online"],["快递","kuài dì","Chuyển phát nhanh"],["收货","shōu huò","Nhận hàng"],["退货","tuì huò","Trả hàng"],["地址","dì zhǐ","Địa chỉ"]], char: "寄", sent: ["快递","已经","寄出","了。"], ans: "快递已经寄出了。" },
  { topic: "Sở thích thể thao, Giải trí & Đời sống tinh thần", words: [["运动","yùn dòng","Thể thao / Vận động"],["跑步","pǎo bù","Chạy bộ"],["电影","diàn yǐng","Phim ảnh"],["音乐","yīn yuè","Âm nhạc"],["放松","fàng sōng","Thư giãn"]], char: "运", sent: ["晚上","我","去","跑步。"], ans: "晚上我去跑步。" },
  { topic: "Kể chuyện quá khứ, Trải nghiệm & Kỷ niệm đáng nhớ", words: [["以前","yǐ qián","Trước đây"],["经历","jīng lì","Trải nghiệm"],["难忘","nán wàng","Khó quên"],["故事","gù shi","Câu chuyện"],["发生","fā shēng","Xảy ra"]], char: "记", sent: ["那次","经历","很","难忘。"], ans: "那次经历很难忘。" },
  { topic: "So sánh lựa chọn, Đánh giá sản phẩm & Đưa ra ý kiến", words: [["比较","bǐ jiào","So sánh / Khá"],["选择","xuǎn zé","Lựa chọn"],["质量","zhì liàng","Chất lượng"],["意见","yì jiàn","Ý kiến"],["建议","jiàn yì","Đề xuất"]], char: "选", sent: ["产品质量","非常","好。"], ans: "产品质量非常好。" },
  { topic: "Nhờ vả, Xin phép & Từ chối khéo léo trong giao tiếp", words: [["帮忙","bāng máng","Giúp đỡ"],["请假","qǐng jià","Xin nghỉ phép"],["抱歉","bào qiàn","Xin lỗi / Áy náy"],["方便","fāng biàn","Thuận tiện"],["拒绝","jù jué","Từ chối"]], char: "帮", sent: ["请问","可以","帮忙","吗？"], ans: "请问可以帮忙吗？" },
  { topic: "Hành động đang diễn ra, Thay đổi & Xu hướng mới", words: [["正在","zhèng zài","Đang"],["变化","biàn huà","Thay đổi"],["趋势","qū shì","Xu hướng"],["发展","fā zhǎn","Phát triển"],["进步","jìn bù","Tiến bộ"]], char: "变", sent: ["市场","正在","快速","变化。"], ans: "市场正在快速变化。" },
  { topic: "Phỏng vấn xin việc, Năng lực cá nhân & Mục tiêu", words: [["面试","miàn shì","Phỏng vấn"],["简历","jiǎn lì","CV / Sơ yếu lý lịch"],["能力","néng lì","Năng lực"],["经验","jīng yàn","Kinh nghiệm"],["目标","mù biāo","Mục tiêu"]], char: "面", sent: ["我","准备","好了","面试。"], ans: "我准备好了面试。" },
  { topic: "Họp nhóm, Phân công công việc & Báo cáo tiến độ", words: [["开会","kāi huì","Họp"],["分工","fēn gōng","Phân công"],["进度","jìn dù","Tiến độ"],["汇报","huì bào","Báo cáo"],["任务","rèn wu","Nhiệm vụ"]], char: "会", sent: ["下午","两点","我们","开会。"], ans: "下午两点我们开会。" },
  { topic: "Viết email công việc, Gửi file & Xác nhận thông tin", words: [["邮件","yóu jiàn","Email"],["文件","wén jiàn","Tệp / Tài liệu"],["确认","què rèn","Xác nhận"],["发送","fā sòng","Gửi đi"],["附件","fù jiàn","Tệp đính kèm"]], char: "信", sent: ["请","确认","收到","邮件。"], ans: "请确认收到邮件。" },
  { topic: "Chăm sóc khách hàng, Tiếp nhận phản hồi & Xử lý sự cố", words: [["客户","kè hù","Khách hàng"],["服务","fú wù","Dịch vụ"],["反馈","fǎn kuì","Phản hồi"],["处理","chǔ lǐ","Xử lý"],["满意","mǎn yì","Hài lòng"]], char: "客", sent: ["我们","及时","处理","问题。"], ans: "我们及时处理问题。" },
  { topic: "Đặt lịch hẹn, Thay đổi kế hoạch & Nhắc việc chuyên nghiệp", words: [["预约","yù yuē","Đặt lịch hẹn"],["调整","tiáo zhěng","Điều chỉnh"],["提醒","tí xǐng","Nhắc nhở"],["日程","rì chéng","Lịch trình"],["推迟","tuī chí","Hoãn lại"]], char: "约", sent: ["请","提前","预约","时间。"], ans: "请提前预约时间。" },
  { topic: "Thuyết trình ngắn, Giới thiệu sản phẩm & Số liệu cơ bản", words: [["演讲","yǎn jiǎng","Thuyết trình"],["产品","chǎn pǐn","Sản phẩm"],["数据","shù jù","Số liệu"],["重点","zhòng diǎn","Trọng tâm"],["说明","shuō míng","Giải thích / Thuyết minh"]], char: "讲", sent: ["这个","数据","很","重要。"], ans: "这个数据很重要。" },
  { topic: "Trao đổi báo giá, Số lượng & Điều kiện giao hàng", words: [["报价","bào jià","Báo giá"],["数量","shù liàng","Số lượng"],["交货","jiāo huò","Giao hàng"],["价格","jià gé","Giá cả"],["合同","hé tong","Hợp đồng"]], char: "价", sent: ["我们","确认","交货","时间。"], ans: "我们确认交货时间。" },
  { topic: "Văn hóa giao tiếp, Lễ nghi & Tặng quà đối tác", words: [["礼仪","lǐ yí","Lễ nghi"],["文化","wén huà","Văn hóa"],["礼物","lǐ wù","Quà tặng"],["尊重","zūn zhòng","Tôn trọng"],["欢迎","huān yíng","Chào đón"]], char: "礼", sent: ["我们","非常","尊重","合作伙伴。"], ans: "我们非常尊重合作伙伴。" },
  { topic: "Môi trường sống, Giao thông đô thị & Lối sống xanh", words: [["环境","huán jìng","Môi trường"],["交通","jiāo tōng","Giao thông"],["环保","huán bǎo","Bảo vệ môi trường"],["堵车","dǔ chē","Kẹt xe"],["绿色","lǜ sè","Xanh / Thân thiện"]], char: "环", sent: ["绿色","出行","很","重要。"], ans: "绿色出行很重要。" },
  { topic: "Giáo dục, Học ngoại ngữ hiệu quả & Kỹ năng tự học", words: [["学习","xué xí","Học tập"],["复习","fù xí","Ôn tập"],["发音","fā yīn","Phát âm"],["掌握","zhǎng wò","Nắm vững"],["提高","tí gāo","Nâng cao"]], char: "学", sent: ["每天","复习","能","提高。"], ans: "每天复习能提高。" },
  { topic: "Công nghệ số, Làm việc từ xa & Công cụ trực tuyến", words: [["远程","yuǎn chéng","Từ xa"],["线上","xiàn shàng","Trực tuyến"],["软件","ruǎn jiàn","Phần mềm"],["网络","wǎng luò","Mạng lưới"],["连接","lián jiē","Kết nối"]], char: "网", sent: ["线上","会议","非常","方便。"], ans: "线上会议非常方便。" },
  { topic: "Tài chính cá nhân, Chi tiêu hợp lý & Tiết kiệm", words: [["预算","yù suàn","Ngân sách"],["节省","jié shěng","Tiết kiệm"],["开支","kāi zhī","Chi tiêu"],["投资","tóu zī","Đầu tư"],["账单","zhàng dān","Hóa đơn / Bảng kê"]], char: "算", sent: ["要","合理","控制","预算。"], ans: "要合理控制预算。" },
  { topic: "Ẩm thực lành mạnh, Dinh dưỡng & Cân bằng cuộc sống", words: [["健康","jiàn kāng","Khỏe mạnh"],["营养","yíng yǎng","Dinh dưỡng"],["均衡","jūn héng","Cân bằng"],["新鲜","xīn xiān","Tươi mới"],["饮食","yǐn shí","Ăn uống"]], char: "健", sent: ["饮食","健康","才能","高效。"], ans: "饮食健康才能高效。" },
  { topic: "Trải nghiệm văn hóa, Lễ hội & Phong tục địa phương", words: [["节日","jié rì","Ngày lễ"],["传统","chuán tǒng","Truyền thống"],["风俗","fēng sú","Phong tục"],["庆祝","qìng zhù","Chúc mừng / Kỷ niệm"],["热闹","rè nao","Náo nhiệt"]], char: "节", sent: ["节日","气氛","非常","热闹。"], ans: "节日气氛非常热闹。" },
  { topic: "Giải quyết mâu thuẫn, Lắng nghe & Đồng cảm", words: [["倾听","qīng tīng","Lắng nghe"],["理解","lǐ jiě","Thấu hiểu"],["沟通","gōu tōng","Giao tiếp / Trao đổi"],["冷静","lěng jìng","Bình tĩnh"],["协商","xié shāng","Thương lượng"]], char: "听", sent: ["先","冷静","倾听","对方。"], ans: "先冷静倾听对方。" },
  { topic: "Lập kế hoạch dự án, Mốc thời gian & Rủi ro", words: [["项目","xiàng mù","Dự án"],["期限","qī xiàn","Thời hạn / Deadline"],["风险","fēng xiǎn","Rủi ro"],["流程","liú chéng","Quy trình"],["推进","tuī jìn","Thúc đẩy"]], char: "项", sent: ["项目","按","流程","推进。"], ans: "项目按流程推进。" },
  { topic: "Đánh giá hiệu quả, Phản hồi mang tính xây dựng", words: [["评估","píng gū","Đánh giá"],["效果","xiào guǒ","Hiệu quả"],["改进","gǎi jìn","Cải tiến"],["优势","yōu shì","Ưu thế"],["总结","zǒng jié","Tổng kết"]], char: "评", sent: ["及时","总结","并","改进。"], ans: "及时总结并改进。" },
  { topic: "Khởi nghiệp, Ý tưởng kinh doanh & Thị trường", words: [["创业","chuàng yè","Khởi nghiệp"],["市场","shì chǎng","Thị trường"],["创意","chuàng yì","Ý tưởng sáng tạo"],["机会","jī huì","Cơ hội"],["竞争","jìng zhēng","Cạnh tranh"]], char: "创", sent: ["抓住","新","市场","机会。"], ans: "抓住新市场机会。" },
  { topic: "Truyền thông, Tin tức & Góc nhìn đa chiều", words: [["新闻","xīn wén","Tin tức"],["媒体","méi tǐ","Truyền thông"],["观点","guān diǎn","Quan điểm"],["事实","shì shí","Sự thật"],["报道","bào dào","Bản tin / Đưa tin"]], char: "闻", sent: ["多","角度","看","新闻。"], ans: "多角度看新闻。" },
  { topic: "Phát triển nghề nghiệp, Kỹ năng mềm & Thích nghi", words: [["职业","zhí yè","Nghề nghiệp"],["适应","shì yìng","Thích nghi"],["成长","chéng zhǎng","Trưởng thành / Phát triển"],["合作","hé zuò","Hợp tác"],["责任","zé rèn","Trách nhiệm"]], char: "职", sent: ["快速","适应","新","环境。"], ans: "快速适应新环境。" },
  { topic: "Hợp tác xuyên biên giới, Làm việc với đội ngũ quốc tế", words: [["跨国","kuà guó","Xuyên quốc gia"],["团队","tuán duì","Đội ngũ"],["协调","xié tiáo","Điều phối"],["标准","biāo zhǔn","Tiêu chuẩn"],["同步","tóng bù","Đồng bộ"]], char: "队", sent: ["跨国","团队","保持","同步。"], ans: "跨国团队保持同步。" },
  { topic: "Tranh luận quan điểm, Dẫn chứng & Thuyết phục", words: [["论证","lùn zhèng","Chứng minh / Luận chứng"],["证据","zhèng jù","Bằng chứng / Dẫn chứng"],["说服","shuō fú","Thuyết phục"],["逻辑","luó ji","Logic"],["理由","lǐ yóu","Lý do"]], char: "论", sent: ["用","事实","和","逻辑。"], ans: "用事实和逻辑。" },
  { topic: "Tổng kết chặng đường, Đúc rút kinh nghiệm & Định hướng", words: [["经验","jīng yàn","Kinh nghiệm"],["方向","fāng xiàng","Định hướng"],["收获","shōu huò","Thành quả / Thu hoạch"],["未来","wèi lái","Tương lai"],["持续","chí xù","Duy trì liên tục"]], char: "向", sent: ["明确","未来","发展","方向。"], ans: "明确未来发展方向。" }
];

(function buildDiverseZh50() {
  if (typeof window === "undefined") return;
  const fullList = [...ZH_DETAILED_LESSONS];

  for (let i = 7; i <= 50; i++) {
    const pack = ZH_TOPIC_BANK[(i - 7) % ZH_TOPIC_BANK.length];
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
    const vocab = pack.words.map(([word, pinyin, meaning], idx) => ({
      word,
      pinyin,
      meaning,
      tip: `Từ trọng tâm #${idx + 1} của bài "${pack.topic}": chú ý thanh điệu và nối âm tự nhiên khi đặt vào câu.`
    }));

    const w0 = vocab[0];
    const w1 = vocab[1];
    const w2 = vocab[2];

    fullList.push({
      id: i,
      stage,
      level,
      title: pack.topic,
      subtitle: `Nối tiếp "${prevTitle}" — Ứng dụng thực tế trong đời sống & công việc`,
      prereq: `Hoàn thành Bài ${i - 1}: ${prevTitle}`,
      vocab,
      grammar: {
        formula: `[Chủ ngữ] + 围绕 "${pack.topic}" 展开表达  |  先明确${w0.meaning}，再落实${w1.meaning}`,
        explanation: `Trong chủ đề "${pack.topic}", vận dụng cụm "${w0.word}" (${w0.pinyin}) và "${w1.word}" (${w1.pinyin}) để diễn đạt rõ ràng, sát ngữ cảnh.`,
        tiles: pack.sent,
        answer: pack.ans
      },
      dialogue: [
        {
          speaker: "Đồng nghiệp / Bạn học A",
          target: `今天我们聊一聊${w0.word}和${w1.word}。`,
          pinyin: `Jīn tiān wǒ men liáo yì liáo ${w0.pinyin} hé ${w1.pinyin}.`,
          vi: `Hôm nay chúng ta trao đổi về ${w0.meaning.toLowerCase()} và ${w1.meaning.toLowerCase()}.`
        },
        {
          speaker: "Đồng nghiệp / Bạn học B",
          target: `好的，${w2.word}也很重要。`,
          pinyin: `Hǎo de, ${w2.pinyin} yě hěn zhòng yào.`,
          vi: `Vâng, ${w2.meaning.toLowerCase()} cũng rất quan trọng.`
        },
        {
          speaker: "Đồng nghiệp / Bạn học A",
          target: pack.ans,
          pinyin: `${w0.pinyin} · ${w1.pinyin}`,
          vi: `Câu ứng dụng chuẩn cho chủ đề ${pack.topic}.`
        }
      ],
      reading: {
        title: `Đọc hiểu: ${pack.topic}`,
        text: `在日常生活和工作中，${w0.word}与${w1.word}紧密相关。${pack.ans}，这样沟通更清楚。`,
        pinyin: `Zài rì cháng shēng huó hé gōng zuò zhōng, ${w0.pinyin} yǔ ${w1.pinyin} jǐn mì xiāng guān.`,
        vi: `Trong đời sống hằng ngày và công việc, ${w0.meaning.toLowerCase()} gắn liền với ${w1.meaning.toLowerCase()}. "${pack.ans}", như vậy trao đổi rõ ràng hơn.`,
        question: `Từ khóa trọng tâm đầu tiên của bài "${pack.topic}" là gì?`,
        options: [`${w0.word} (${w0.meaning})`, "不知道", "明天再说"],
        correctIndex: 0
      },
      writingChar: pack.char,
      quiz: {
        question: `Trong chủ đề "${pack.topic}", từ "${w1.word}" (${w1.pinyin}) có nghĩa là gì?`,
        options: [w1.meaning, "Chào tạm biệt", "Thời tiết mưa"],
        correctIndex: 0
      }
    });
  }

  window.ZH_LESSONS = fullList;
})();