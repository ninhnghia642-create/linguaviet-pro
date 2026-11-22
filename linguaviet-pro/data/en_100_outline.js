// data/en_100_outline.js
// Kho 50 bài Tiếng Anh liên kết chặt chẽ từ CEFR A1 -> B2 (đời sống hằng ngày & công việc công ty)
// Mỗi bài có bộ từ vựng, ngữ pháp, hội thoại, đọc hiểu & chính tả luyện viết riêng biệt

const EN_DETAILED_LESSONS = [
  {
    id: 1,
    stage: 1,
    level: "CEFR A1 · Chặng 1: Phát âm & Giao tiếp mở đầu",
    title: "Greetings, Introductions & Politeness",
    subtitle: "Chào hỏi, giới thiệu tên và phép lịch sự trong giao tiếp hằng ngày",
    prereq: "Bài mở đầu (Không cần kiến thức nền)",
    vocab: [
      { word: "Hello", ipa: "/həˈləʊ/", meaning: "Xin chào", tip: "Nhấn trọng âm vào âm tiết thứ hai '-loʊ', môi tròn nhẹ ở cuối." },
      { word: "Thank you", ipa: "/ˈθæŋk juː/", meaning: "Cảm ơn bạn", tip: "Đặt đầu lưỡi nhẹ giữa hai hàm răng khi đọc 'th', bật hơi 'k' rõ." },
      { word: "Nice to meet you", ipa: "/naɪs tə miːt juː/", meaning: "Rất vui được gặp bạn", tip: "Nối âm 'meet you' đọc tự nhiên gần giống /miːtʃuː/." },
      { word: "Excuse me", ipa: "/ɪkˈskjuːz miː/", meaning: "Xin lỗi / Làm phiền", tip: "Dùng khi hỏi đường, chen ngang lịch sự hoặc gọi nhân viên/đồng nghiệp." },
      { word: "Colleague", ipa: "/ˈkɒliːɡ/", meaning: "Đồng nghiệp", tip: "Nhấn âm tiết đầu 'col-', âm cuối '-gue' là âm /ɡ/." }
    ],
    grammar: {
      formula: "Hello, I am + [Name].  |  Nice to meet you.",
      explanation: "Dùng 'Hello, I am...' để tự giới thiệu tên rõ ràng và 'Excuse me' khi cần mở lời lịch sự.",
      tiles: ["Hello,", "I", "am", "Minh.", "Nice", "to", "meet", "you."],
      answer: "Hello, I am Minh. Nice to meet you."
    },
    dialogue: [
      { speaker: "Minh", target: "Hello! I am Minh. Nice to meet you.", ipa: "/həˈləʊ! aɪ æm mɪn. naɪs tə miːt juː./", vi: "Xin chào! Tôi là Minh. Rất vui được gặp bạn." },
      { speaker: "Sarah", target: "Hi Minh! I am Sarah. Welcome to the team.", ipa: "/haɪ mɪn! aɪ æm ˈsærə. ˈwelkəm tə ðə tiːm./", vi: "Chào Minh! Mình là Sarah. Chào mừng bạn vào nhóm." },
      { speaker: "Minh", target: "Thank you, Sarah!", ipa: "/ˈθæŋk juː, ˈsærə!", vi: "Cảm ơn Sarah nhé!" }
    ],
    reading: {
      title: "First Day at the Office",
      text: "Hello, my name is Linh. Excuse me, is this the meeting room? Thank you for your help!",
      ipa: "/həˈləʊ, maɪ neɪm ɪz lɪn. ɪkˈskjuːz miː, ɪz ðɪs ðə ˈmiːtɪŋ ruːm? ˈθæŋk juː fɔːr jɔːr help!/",
      vi: "Xin chào, tên tôi là Linh. Xin lỗi, đây có phải phòng họp không? Cảm ơn bạn đã giúp đỡ!",
      question: "What does Linh ask using 'Excuse me'?",
      options: ["If it is the meeting room", "What time it is", "Where to buy coffee"],
      correctIndex: 0
    },
    dictationTarget: "hello",
    quiz: {
      question: "Câu nào dùng để mở lời lịch sự khi muốn hỏi thăm ai đó?",
      options: ["Excuse me", "Goodbye", "Never mind"],
      correctIndex: 0
    }
  },
  {
    id: 2,
    stage: 1,
    level: "CEFR A1 · Chặng 1: Phát âm & Giao tiếp mở đầu",
    title: "Jobs, Roles & Daily Workplaces",
    subtitle: "Kế thừa chào hỏi từ Bài 1 để nói về nghề nghiệp và nơi làm việc",
    prereq: "Nắm được cách chào hỏi & giới thiệu tên ở Bài 1",
    vocab: [
      { word: "Office", ipa: "/ˈɒfɪs/", meaning: "Văn phòng", tip: "Nhấn âm đầu 'of-', âm cuối đọc nhẹ như '-is'." },
      { word: "Manager", ipa: "/ˈmænɪdʒər/", meaning: "Quản lý / Trưởng bộ phận", tip: "Nhấn âm đầu 'man-', âm '-dʒ-' đọc như 'ch' nhẹ." },
      { word: "Designer", ipa: "/dɪˈzaɪnər/", meaning: "Nhà thiết kế", tip: "Nhấn âm thứ hai '-sign-', nguyên âm đôi /aɪ/ rõ." },
      { word: "Engineer", ipa: "/ˌendʒɪˈnɪər/", meaning: "Kỹ sư", tip: "Nhấn trọng âm cuối '-neer' kéo dài nhẹ." },
      { word: "Work", ipa: "/wɜːrk/", meaning: "Làm việc / Công việc", tip: "Tròn môi ở 'w', cong lưỡi nhẹ ở nguyên âm /ɜːr/." }
    ],
    grammar: {
      formula: "[Subject] + work(s) in + [Place]  |  I am a + [Job title].",
      explanation: "Với chủ ngữ số ít (he/she/it hoặc tên riêng), động từ thêm '-s' ở thì hiện tại đơn khi nói về công việc hằng ngày.",
      tiles: ["She", "works", "in", "a", "modern", "office."],
      answer: "She works in a modern office."
    },
    dialogue: [
      { speaker: "David", target: "What do you do, Lan?", ipa: "/wɒt dʊ juː duː, læn?/", vi: "Lan làm nghề gì vậy?" },
      { speaker: "Lan", target: "I am a designer. I work in the city office.", ipa: "/aɪ æm ə dɪˈzaɪnər. aɪ wɜːrk ɪn ðə ˈsɪti ˈɒfɪs./", vi: "Mình là nhà thiết kế. Mình làm việc ở văn phòng trung tâm." },
      { speaker: "David", target: "Great! Our manager is in that office too.", ipa: "/ɡreɪt! aʊər ˈmænɪdʒər ɪz ɪn ðæt ˈɒfɪs tuː./", vi: "Tuyệt! Quản lý của bọn mình cũng ở văn phòng đó." }
    ],
    reading: {
      title: "Team Roles",
      text: "Tom is an engineer and Anna is a project manager. They work together every day.",
      ipa: "/tɒm ɪz ən ˌendʒɪˈnɪər ænd ˈænə ɪz ə ˈprɒdʒekt ˈmænɪdʒər. ðeɪ wɜːrk təˈɡeðər ˈevri deɪ./",
      vi: "Tom là kỹ sư và Anna là quản lý dự án. Họ làm việc cùng nhau mỗi ngày.",
      question: "What is Anna's role?",
      options: ["Engineer", "Project manager", "Receptionist"],
      correctIndex: 1
    },
    dictationTarget: "office",
    quiz: {
      question: "Từ 'Manager' có nghĩa tiếng Việt là gì?",
      options: ["Quản lý / Trưởng bộ phận", "Khách hàng", "Học sinh"],
      correctIndex: 0
    }
  },
  {
    id: 3,
    stage: 1,
    level: "CEFR A1 · Chặng 1: Phát âm & Giao tiếp mở đầu",
    title: "Numbers, Prices & Ordering Essentials",
    subtitle: "Kết hợp giới thiệu công việc với số đếm, giá tiền và gọi món/đặt mua",
    prereq: "Nắm được từ vựng nghề nghiệp & nơi làm việc ở Bài 2",
    vocab: [
      { word: "How much", ipa: "/haʊ mʌtʃ/", meaning: "Bao nhiêu tiền / Bao nhiêu", tip: "Đọc liền mạch 'how much', bật hơi nhẹ âm cuối /tʃ/." },
      { word: "Price", ipa: "/praɪs/", meaning: "Giá cả", tip: "Bắt đầu bằng /pr/, kết thúc bằng âm xát /s/." },
      { word: "Coffee", ipa: "/ˈkɒfi/", meaning: "Cà phê", tip: "Nhấn âm đầu 'cof-', âm sau đọc ngắn /i/." },
      { word: "Order", ipa: "/ˈɔːrdər/", meaning: "Đặt hàng / Gọi món", tip: "Nhấn âm đầu 'or-', cong lưỡi nhẹ ở cuối." },
      { word: "Receipt", ipa: "/rɪˈsiːt/", meaning: "Hóa đơn / Biên lai", tip: "Chú ý chữ 'p' câm — đọc là /rɪˈsiːt/, âm 't' ở cuối." }
    ],
    grammar: {
      formula: "How much is + [Singular item]?  |  I would like to order + [Item].",
      explanation: "Dùng 'How much is...' để hỏi giá món đồ số ít và 'I would like to order...' để đặt món lịch sự.",
      tiles: ["How", "much", "is", "this", "coffee?"],
      answer: "How much is this coffee?"
    },
    dialogue: [
      { speaker: "Customer", target: "How much is this coffee, please?", ipa: "/haʊ mʌtʃ ɪz ðɪs ˈkɒfi, pliːz?/", vi: "Ly cà phê này bao nhiêu tiền vậy ạ?" },
      { speaker: "Barista", target: "It is four dollars. Would you like a receipt?", ipa: "/ɪt ɪz fɔːr ˈdɒlərz. wʊd juː laɪk ə rɪˈsiːt?/", vi: "4 đô la ạ. Bạn có cần hóa đơn không?" },
      { speaker: "Customer", target: "Yes, please. I will order one.", ipa: "/jes, pliːz. aɪ wɪl ˈɔːrdər wʌn./", vi: "Có ạ. Cho mình đặt một ly." }
    ],
    reading: {
      title: "Morning Break",
      text: "Before work, I buy lunch near the office. The price is eight dollars and I get a receipt.",
      ipa: "/bɪˈfɔːr wɜːrk, aɪ baɪ lʌntʃ nɪər ði ˈɒfɪs. ðə praɪs ɪz eɪt ˈdɒlərz ænd aɪ ɡet ə rɪˈsiːt./",
      vi: "Trước giờ làm, tôi mua bữa trưa gần văn phòng. Giá là 8 đô và tôi lấy hóa đơn.",
      question: "How much is the lunch?",
      options: ["Four dollars", "Eight dollars", "Ten dollars"],
      correctIndex: 1
    },
    dictationTarget: "price",
    quiz: {
      question: "Khi muốn hỏi giá một món đồ, bạn bắt đầu câu thế nào?",
      options: ["How much is...", "Where are you...", "Who is she..."],
      correctIndex: 0
    }
  }
];

const EN_TOPIC_BANK = [
  { topic: "Days, Dates & Daily Schedules", words: [["Schedule","ˈʃedjuːl","Lịch trình"],["Monday","ˈmʌndeɪ","Thứ Hai"],["Morning","ˈmɔːrnɪŋ","Buổi sáng"],["Deadline","ˈdedlaɪn","Hạn chót"],["Early","ˈɜːrli","Sớm"]], word: "schedule", sent: ["We","check","the","schedule","every","morning."], ans: "We check the schedule every morning." },
  { topic: "Family, Relatives & Personal Interests", words: [["Family","ˈfæməli","Gia đình"],["Hobby","ˈhɒbi","Sở thích"],["Parents","ˈpeərənts","Bố mẹ"],["Travel","ˈtrævəl","Du lịch"],["Reading","ˈriːdɪŋ","Đọc sách"]], word: "family", sent: ["My","family","loves","travel","on","weekends."], ans: "My family loves travel on weekends." },
  { topic: "Places, Directions & Getting Around Town", words: [["Station","ˈsteɪʃn","Nhà ga / Trạm"],["Turn left","tɜːrn left","Rẽ trái"],["Near","nɪər","Gần"],["Street","striːt","Đường phố"],["Map","mæp","Bản đồ"]], word: "station", sent: ["Turn","left","near","the","train","station."], ans: "Turn left near the train station." },
  { topic: "Dining Out, Ordering Food & Tastes", words: [["Menu","ˈmenjuː","Thực đơn"],["Delicious","dɪˈlɪʃəs","Ngon miệng"],["Spicy","ˈspaɪsi","Cay"],["Waiter","ˈweɪtər","Nhân viên phục vụ"],["Bill","bɪl","Hóa đơn tính tiền"]], word: "delicious", sent: ["The","noodles","are","very","delicious."], ans: "The noodles are very delicious." },
  { topic: "Shopping for Clothes, Sizes & Fitting", words: [["Size","saɪz","Kích cỡ"],["Shirt","ʃɜːrt","Áo sơ mi"],["Discount","ˈdɪskaʊnt","Giảm giá"],["Fit","fɪt","Vừa vặn"],["Cashier","kæˈʃɪər","Thu ngân"]], word: "discount", sent: ["This","shirt","has","a","nice","discount."], ans: "This shirt has a nice discount." },
  { topic: "Transportation, Tickets & Commuting", words: [["Commute","kəˈmjuːt","Đi lại hằng ngày"],["Ticket","ˈtɪkɪt","Vé"],["Subway","ˈsʌbweɪ","Tàu điện ngầm"],["Delay","dɪˈleɪ","Trễ / Hoãn"],["Platform","ˈplætfɔːrm","Sân ga / Ke ga"]], word: "commute", sent: ["My","daily","commute","takes","twenty","minutes."], ans: "My daily commute takes twenty minutes." },
  { topic: "Weather, Seasons & Weekend Plans", words: [["Weather","ˈweðər","Thời tiết"],["Sunny","ˈsʌni","Nắng đẹp"],["Rainy","ˈreɪni","Mưa"],["Forecast","ˈfɔːrkæst","Dự báo"],["Weekend","ˌwiːkˈend","Cuối tuần"]], word: "weather", sent: ["The","weather","is","sunny","this","weekend."], ans: "The weather is sunny this weekend." },
  { topic: "Health, Symptoms & Visiting a Clinic", words: [["Healthy","ˈhelθi","Khỏe mạnh"],["Headache","ˈhedeɪk","Đau đầu"],["Clinic","ˈklɪnɪk","Phòng khám"],["Medicine","ˈmedsn","Thuốc"],["Rest","rest","Nghỉ ngơi"]], word: "healthy", sent: ["Get","enough","rest","to","stay","healthy."], ans: "Get enough rest to stay healthy." },
  { topic: "Departments, Colleagues & Team Culture", words: [["Department","dɪˈpɑːrtmənt","Phòng ban"],["Support","səˈpɔːrt","Hỗ trợ"],["Teamwork","ˈtiːmwɜːrk","Làm việc nhóm"],["HR","ˌeɪtʃ ˈɑːr","Nhân sự"],["Finance","ˈfaɪnæns","Tài chính"]], word: "department", sent: ["Our","department","values","strong","teamwork."], ans: "Our department values strong teamwork." },
  { topic: "Working Hours, Attendance & Leave Requests", words: [["Shift","ʃɪft","Ca làm việc"],["Overtime","ˈəʊvərtaɪm","Tăng ca"],["Leave","liːv","Nghỉ phép"],["On time","ɒn taɪm","Đúng giờ"],["Attendance","əˈtendəns","Chấm công / Chuyên cần"]], word: "attendance", sent: ["Please","arrive","on","time","for","work."], ans: "Please arrive on time for work." },
  { topic: "Workspace, Equipment & Office Supplies", words: [["Laptop","ˈlæptɒp","Máy tính xách tay"],["Printer","ˈprɪntər","Máy in"],["Desk","desk","Bàn làm việc"],["Charger","ˈtʃɑːrdʒər","Bộ sạc"],["Supplies","səˈplaɪz","Văn phòng phẩm"]], word: "laptop", sent: ["My","laptop","is","on","the","desk."], ans: "My laptop is on the desk." },
  { topic: "Phone Calls, Messages & Making Appointments", words: [["Appointment","əˈpɔɪntmənt","Cuộc hẹn"],["Call back","kɔːl bæk","Gọi lại"],["Message","ˈmesɪdʒ","Tin nhắn"],["Available","əˈveɪləbl","Rảnh / Sẵn sàng"],["Confirm","kənˈfɜːrm","Xác nhận"]], word: "confirm", sent: ["Please","confirm","our","meeting","time."], ans: "Please confirm our meeting time." },
  { topic: "Renting an Apartment & Home Utilities", words: [["Apartment","əˈpɑːrtmənt","Căn hộ"],["Rent","rent","Tiền thuê / Thuê"],["Utility","juːˈtɪləti","Tiện ích (điện, nước)"],["Landlord","ˈlændlɔːrd","Chủ nhà"],["Lease","liːs","Hợp đồng thuê"]], word: "apartment", sent: ["We","signed","the","apartment","lease","today."], ans: "We signed the apartment lease today." },
  { topic: "Banking, Currency & Digital Payments", words: [["Account","əˈkaʊnt","Tài khoản"],["Transfer","trænsˈfɜːr","Chuyển khoản"],["Balance","ˈbæləns","Số dư"],["Exchange rate","ɪksˈtʃeɪndʒ reɪt","Tỷ giá"],["Fee","fiː","Phí"]], word: "transfer", sent: ["I","will","transfer","the","payment","now."], ans: "I will transfer the payment now." },
  { topic: "Travel, Hotel Booking & Check-in", words: [["Reservation","ˌrezərˈveɪʃn","Đặt chỗ / Đặt phòng"],["Check-in","ˈtʃek ɪn","Nhận phòng"],["Luggage","ˈlʌɡɪdʒ","Hành lý"],["Reception","rɪˈsepʃn","Lễ tân"],["Itinerary","aɪˈtɪnərəri","Lịch trình chuyến đi"]], word: "reservation", sent: ["I","have","a","hotel","reservation","tonight."], ans: "I have a hotel reservation tonight." },
  { topic: "Business Meals, Hosting & Etiquette", words: [["Host","həʊst","Chủ nhà / Tiếp đón"],["Appetizer","ˈæpɪtaɪzər","Món khai vị"],["Toast","təʊst","Nâng ly chúc mừng"],["Dietary","ˈdaɪətəri","Chế độ ăn uống"],["Polite","pəˈlaɪt","Lịch sự"]], word: "polite", sent: ["Be","polite","when","hosting","business","guests."], ans: "Be polite when hosting business guests." },
  { topic: "Daily Habits, Fitness & Well-being", words: [["Routine","ruːˈtiːn","Thói quen hằng ngày"],["Exercise","ˈeksərsaɪz","Tập thể dục"],["Habit","ˈhæbɪt","Thói quen"],["Energy","ˈenərdʒi","Năng lượng"],["Sleep","sliːp","Ngủ / Giấc ngủ"]], word: "routine", sent: ["Morning","exercise","boosts","my","energy."], ans: "Morning exercise boosts my energy." },
  { topic: "Online Shopping, Delivery & Returns", words: [["Delivery","dɪˈlɪvəri","Giao hàng"],["Package","ˈpækɪdʒ","Bưu kiện / Gói hàng"],["Return","rɪˈtɜːrn","Trả hàng / Đổi trả"],["Track","træk","Theo dõi đơn"],["Address","əˈdres","Địa chỉ"]], word: "delivery", sent: ["The","delivery","arrives","tomorrow","afternoon."], ans: "The delivery arrives tomorrow afternoon." },
  { topic: "Movies, Music & Leisure Time", words: [["Leisure","ˈliːʒər","Thời gian rảnh"],["Concert","ˈkɒnsərt","Buổi hòa nhạc"],["Cinema","ˈsɪnəmə","Rạp chiếu phim"],["Relax","rɪˈlæks","Thư giãn"],["Favorite","ˈfeɪvərɪt","Yêu thích"]], word: "leisure", sent: ["We","watch","movies","in","our","leisure."], ans: "We watch movies in our leisure." },
  { topic: "Past Experiences & Memorable Stories", words: [["Experience","ɪkˈspɪriəns","Trải nghiệm"],["Memory","ˈmeməri","Kỷ niệm"],["Trip","trɪp","Chuyến đi"],["Learned","lɜːrnd","Đã học được"],["Story","ˈstɔːri","Câu chuyện"]], word: "experience", sent: ["That","trip","was","a","great","experience."], ans: "That trip was a great experience." },
  { topic: "Comparing Options & Making Choices", words: [["Compare","kəmˈpeər","So sánh"],["Option","ˈɒpʃn","Lựa chọn / Phương án"],["Better","ˈbetər","Tốt hơn"],["Quality","ˈkwɒləti","Chất lượng"],["Decision","dɪˈsɪʒn","Quyết định"]], word: "compare", sent: ["Let","us","compare","both","options","carefully."], ans: "Let us compare both options carefully." },
  { topic: "Asking for Help & Polite Refusals", words: [["Request","rɪˈkwest","Yêu cầu / Đề nghị"],["Refuse","rɪˈfjuːz","Từ chối"],["Favor","ˈfeɪvər","Sự giúp đỡ"],["Busy","ˈbɪzi","Bận rộn"],["Apologize","əˈpɒlədʒaɪz","Xin lỗi"]], word: "request", sent: ["Thank","you","for","your","kind","request."], ans: "Thank you for your kind request." },
  { topic: "Ongoing Actions, Changes & Trends", words: [["Trend","trend","Xu hướng"],["Change","tʃeɪndʒ","Thay đổi"],["Currently","ˈkɜːrəntli","Hiện tại"],["Improve","ɪmˈpruːv","Cải thiện"],["Shift","ʃɪft","Sự dịch chuyển"]], word: "improve", sent: ["Customer","service","continues","to","improve."], ans: "Customer service continues to improve." },
  { topic: "Job Interviews, Skills & Career Goals", words: [["Interview","ˈɪntərvjuː","Phỏng vấn"],["Resume","ˈrezjuːmeɪ","Sơ yếu lý lịch / CV"],["Skill","skɪl","Kỹ năng"],["Candidate","ˈkændɪdət","Ứng viên"],["Goal","ɡəʊl","Mục tiêu"]], word: "interview", sent: ["She","prepared","well","for","the","interview."], ans: "She prepared well for the interview." },
  { topic: "Team Meetings & Progress Updates", words: [["Meeting","ˈmiːtɪŋ","Cuộc họp"],["Agenda","əˈdʒendə","Chương trình họp"],["Update","ˈʌpdeɪt","Cập nhật tiến độ"],["Action item","ˈækʃn ˈaɪtəm","Đầu việc cần làm"],["Align","əˈlaɪn","Thống nhất hướng đi"]], word: "agenda", sent: ["Let","us","review","the","meeting","agenda."], ans: "Let us review the meeting agenda." },
  { topic: "Assigning Tasks & Meeting Deadlines", words: [["Assign","əˈsaɪn","Phân công"],["Task","tæsk","Nhiệm vụ"],["Priority","praɪˈɒrəti","Mức độ ưu tiên"],["On track","ɒn træk","Đúng tiến độ"],["Complete","kəmˈpliːt","Hoàn thành"]], word: "priority", sent: ["This","task","is","our","top","priority."], ans: "This task is our top priority." },
  { topic: "Workplace Emails & Document Sharing", words: [["Email","ˈiːmeɪl","Thư điện tử"],["Attachment","əˈtætʃmənt","Tệp đính kèm"],["Forward","ˈfɔːrwərd","Chuyển tiếp"],["Reply","rɪˈplaɪ","Trả lời"],["Draft","drɑːft","Bản nháp"]], word: "attachment", sent: ["Please","check","the","file","attachment","below."], ans: "Please check the file attachment below." },
  { topic: "Customer Support & Handling Inquiries", words: [["Customer","ˈkʌstəmər","Khách hàng"],["Inquiry","ɪnˈkwaɪəri","Yêu cầu / Thắc mắc"],["Solution","səˈluːʃn","Giải pháp"],["Helpful","ˈhelpfl","Hữu ích / Tận tâm"],["Follow up","ˈfɒləʊ ʌp","Theo dõi sau đó"]], word: "solution", sent: ["We","found","a","fast","solution","today."], ans: "We found a fast solution today." },
  { topic: "Resolving Issues & Service Recovery", words: [["Issue","ˈɪʃuː","Vấn đề / Sự cố"],["Resolve","rɪˈzɒlv","Giải quyết"],["Mistake","mɪˈsteɪk","Sai sót"],["Compensation","ˌkɒmpenˈseɪʃn","Bồi thường / Hỗ trợ"],["Apology","əˈpɒlədʒi","Lời xin lỗi"]], word: "resolve", sent: ["The","team","will","resolve","the","issue."], ans: "The team will resolve the issue." },
  { topic: "Scheduling & Rescheduling Meetings", words: [["Reschedule","ˌriːˈʃedjuːl","Dời lịch hẹn"],["Calendar","ˈkælɪndər","Lịch làm việc"],["Reminder","rɪˈmaɪndər","Lời nhắc lịch"],["Available","əˈveɪləbl","Có thể tham dự"],["Slot","slɒt","Khung giờ"]], word: "reschedule", sent: ["Can","we","reschedule","the","call","please?"], ans: "Can we reschedule the call please?" },
  { topic: "Short Presentations & Product Demos", words: [["Presentation","ˌpreznˈteɪʃn","Bài thuyết trình"],["Slide","slaɪd","Trang trình bày"],["Feature","ˈfiːtʃər","Tính năng"],["Benefit","ˈbenɪfɪt","Lợi ích"],["Summary","ˈsʌməri","Tóm tắt"]], word: "presentation", sent: ["Our","presentation","highlights","key","product","benefits."], ans: "Our presentation highlights key product benefits." },
  { topic: "Quotations, Quantities & Delivery Terms", words: [["Quotation","kwəʊˈteɪʃn","Báo giá"],["Quantity","ˈkwɒntəti","Số lượng"],["Terms","tɜːrmz","Điều khoản"],["Supplier","səˈplaɪər","Nhà cung cấp"],["Invoice","ˈɪnvɔɪs","Hóa đơn thương mại"]], word: "quotation", sent: ["Please","send","the","updated","price","quotation."], ans: "Please send the updated price quotation." },
  { topic: "Cross-Cultural Etiquette & Gifts", words: [["Culture","ˈkʌltʃər","Văn hóa"],["Respect","rɪˈspekt","Tôn trọng"],["Custom","ˈkʌstəm","Phong tục / Tập quán"],["Gift","ɡɪft","Món quà"],["Greeting","ˈɡriːtɪŋ","Lời chào"]], word: "respect", sent: ["Mutual","respect","builds","strong","global","partnerships."], ans: "Mutual respect builds strong global partnerships." },
  { topic: "Urban Life, Traffic & Green Living", words: [["Traffic","ˈtræfɪk","Giao thông"],["Eco-friendly","ˌiːkəʊ ˈfrendli","Thân thiện môi trường"],["Recycle","ˌriːˈsaɪkl","Tái chế"],["Public","ˈpʌblɪk","Công cộng"],["Clean","kliːn","Sạch sẽ"]], word: "recycle", sent: ["We","recycle","paper","and","plastic","weekly."], ans: "We recycle paper and plastic weekly." },
  { topic: "Effective Language Learning Strategies", words: [["Practice","ˈpræktɪs","Luyện tập"],["Vocabulary","vəˈkæbjələri","Từ vựng"],["Pronunciation","prəˌnʌnsiˈeɪʃn","Phát âm"],["Fluency","ˈfluːənsi","Sự lưu loát"],["Review","rɪˈvjuː","Ôn tập"]], word: "vocabulary", sent: ["Daily","practice","improves","vocabulary","and","fluency."], ans: "Daily practice improves vocabulary and fluency." },
  { topic: "Remote Work & Digital Tools", words: [["Remote","rɪˈməʊt","Làm việc từ xa"],["Online","ˌɒnˈlaɪn","Trực tuyến"],["Software","ˈsɒftweər","Phần mềm"],["Connect","kəˈnekt","Kết nối"],["Shared","ʃeərd","Được chia sẻ"]], word: "remote", sent: ["Remote","teams","stay","connected","via","video."], ans: "Remote teams stay connected via video." },
  { topic: "Personal Budgeting & Saving", words: [["Budget","ˈbʌdʒɪt","Ngân sách"],["Save","seɪv","Tiết kiệm"],["Expense","ɪkˈspens","Chi phí"],["Income","ˈɪnkʌm","Thu nhập"],["Plan","plæn","Kế hoạch"]], word: "budget", sent: ["Track","monthly","expenses","within","your","budget."], ans: "Track monthly expenses within your budget." },
  { topic: "Healthy Eating & Nutrition", words: [["Nutrition","njuːˈtrɪʃn","Dinh dưỡng"],["Balanced","ˈbælənst","Cân bằng"],["Fresh","freʃ","Tươi"],["Meal","miːl","Bữa ăn"],["Hydrate","ˈhaɪdreɪt","Bù nước"]], word: "nutrition", sent: ["Good","nutrition","supports","focus","at","work."], ans: "Good nutrition supports focus at work." },
  { topic: "Festivals & Local Traditions", words: [["Festival","ˈfestɪvl","Lễ hội"],["Tradition","trəˈdɪʃn","Truyền thống"],["Celebrate","ˈselɪbreɪt","Ăn mừng / Kỷ niệm"],["Customary","ˈkʌstəməri","Theo thông lệ"],["Gathering","ˈɡæðərɪŋ","Buổi sum họp"]], word: "festival", sent: ["Families","gather","to","celebrate","the","festival."], ans: "Families gather to celebrate the festival." },
  { topic: "Active Listening & Empathy", words: [["Listen","ˈlɪsn","Lắng nghe"],["Empathy","ˈempəθi","Sự đồng cảm"],["Understand","ˌʌndərˈstænd","Thấu hiểu"],["Calm","kɑːm","Bình tĩnh"],["Clarify","ˈklærəfaɪ","Làm rõ"]], word: "empathy", sent: ["Active","listening","and","empathy","prevent","misunderstandings."], ans: "Active listening and empathy prevent misunderstandings." },
  { topic: "Project Planning & Risk Management", words: [["Project","ˈprɒdʒekt","Dự án"],["Risk","rɪsk","Rủi ro"],["Milestone","ˈmaɪlstəʊn","Cột mốc dự án"],["Timeline","ˈtaɪmlaɪn","Tiến độ thời gian"],["Backup","ˈbækʌp","Phương án dự phòng"]], word: "milestone", sent: ["Each","project","milestone","has","clear","goals."], ans: "Each project milestone has clear goals." },
  { topic: "Performance Review & Constructive Feedback", words: [["Feedback","ˈfiːdbæk","Phản hồi"],["Strength","streŋθ","Điểm mạnh"],["Growth","ɡrəʊθ","Sự phát triển"],["Review","rɪˈvjuː","Đánh giá / Xem xét"],["Target","ˈtɑːrɡɪt","Chỉ tiêu / Mục tiêu"]], word: "feedback", sent: ["Constructive","feedback","helps","everyone","grow","faster."], ans: "Constructive feedback helps everyone grow faster." },
  { topic: "Startups, Ideas & Market Fit", words: [["Startup","ˈstɑːrtʌp","Khởi nghiệp"],["Market","ˈmɑːrkɪt","Thị trường"],["Idea","aɪˈdiːə","Ý tưởng"],["Launch","lɔːntʃ","Ra mắt"],["Value","ˈvæljuː","Giá trị"]], word: "market", sent: ["Test","your","idea","with","real","market","users."], ans: "Test your idea with real market users." },
  { topic: "Media, News & Perspectives", words: [["Article","ˈɑːrtɪkl","Bài viết / Bản tin"],["Source","sɔːrs","Nguồn tin"],["Perspective","pərˈspektɪv","Góc nhìn"],["Report","rɪˈpɔːrt","Báo cáo / Bản tin"],["Fact","fækt","Sự thật"]], word: "perspective", sent: ["Read","multiple","sources","for","a","balanced","perspective."], ans: "Read multiple sources for a balanced perspective." },
  { topic: "Career Growth & Adaptability", words: [["Career","kəˈrɪər","Sự nghiệp"],["Adapt","əˈdæpt","Thích ứng"],["Leadership","ˈliːdəʃɪp","Khả năng dẫn dắt"],["Opportunity","ˌɒpərˈtjuːnəti","Cơ hội"],["Progress","ˈprəʊɡres","Tiến bộ"]], word: "career", sent: ["Continuous","learning","supports","long-term","career","growth."], ans: "Continuous learning supports long-term career growth." },
  { topic: "Global Teams & Cross-Border Collaboration", words: [["Global","ˈɡləʊbl","Toàn cầu"],["Collaborate","kəˈlæbəreɪt","Hợp tác"],["Standard","ˈstændərd","Tiêu chuẩn"],["Coordinate","kəʊˈɔːrdɪneɪt","Điều phối"],["Partner","ˈpɑːrtnər","Đối tác"]], word: "collaborate", sent: ["Global","teams","collaborate","across","time","zones."], ans: "Global teams collaborate across time zones." },
  { topic: "Arguments, Evidence & Persuasion", words: [["Evidence","ˈevɪdəns","Bằng chứng"],["Persuade","pərˈsweɪd","Thuyết phục"],["Point","pɔɪnt","Luận điểm"],["Reason","ˈriːzn","Lý do"],["Conclusion","kənˈkluːʒn","Kết luận"]], word: "evidence", sent: ["Strong","evidence","supports","a","clear","conclusion."], ans: "Strong evidence supports a clear conclusion." }
];

(function buildDiverseEn50() {
  if (typeof window === "undefined") return;
  const fullList = [...EN_DETAILED_LESSONS];

  for (let i = 4; i <= 50; i++) {
    const pack = EN_TOPIC_BANK[(i - 4) % EN_TOPIC_BANK.length];
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
      level = "CEFR B2 · Chặng 5: Đàm phán, Phân tích & Chuyên sâu";
    }

    const prevTitle = fullList[i - 2].title;
    const vocab = pack.words.map(([word, ipa, meaning], idx) => ({
      word,
      ipa,
      meaning,
      tip: `Từ vựng #${idx + 1} thuộc chủ đề "${pack.topic}": luyện đọc rõ trọng âm /${ipa}/ và áp dụng vào ngữ cảnh thực tế.`
    }));

    const w0 = vocab[0];
    const w1 = vocab[1];
    const w2 = vocab[2];

    fullList.push({
      id: i,
      stage,
      level,
      title: pack.topic,
      subtitle: `Phát triển từ "${prevTitle}" — Áp dụng thực tế hằng ngày & công sở`,
      prereq: `Hoàn thành Bài ${i - 1}: ${prevTitle}`,
      vocab,
      grammar: {
        formula: `[Subject] + [Verb] + key phrase on "${pack.topic}"`,
        explanation: `Trong chủ đề "${pack.topic}", kết hợp "${w0.word}" (${w0.meaning}) và "${w1.word}" (${w1.meaning}) để diễn đạt trôi chảy.`,
        tiles: pack.sent,
        answer: pack.ans
      },
      dialogue: [
        {
          speaker: "Speaker A",
          target: `Let us talk about ${w0.word.toLowerCase()} and ${w1.word.toLowerCase()} today.`,
          ipa: `/let ʌs tɔːk əˈbaʊt ${w0.ipa} ænd ${w1.ipa} təˈdeɪ./`,
          vi: `Hôm nay hãy cùng trao đổi về ${w0.meaning.toLowerCase()} và ${w1.meaning.toLowerCase()}.`
        },
        {
          speaker: "Speaker B",
          target: `Sure, ${w2.word.toLowerCase()} is also essential.`,
          ipa: `/ʃʊər, ${w2.ipa} ɪz ˈɔːlsəʊ ɪˈsenʃl./`,
          vi: `Chắc chắn rồi, ${w2.meaning.toLowerCase()} cũng rất cần thiết.`
        },
        {
          speaker: "Speaker A",
          target: pack.ans,
          ipa: `${w0.ipa} · ${w1.ipa}`,
          vi: `Mẫu câu chuẩn áp dụng cho chủ đề ${pack.topic}.`
        }
      ],
      reading: {
        title: `Reading: ${pack.topic}`,
        text: `In daily life and work, ${w0.word.toLowerCase()} and ${w1.word.toLowerCase()} matter. ${pack.ans}`,
        ipa: `/ɪn ˈdeɪli laɪf ænd wɜːrk, ${w0.ipa} ænd ${w1.ipa} ˈmætər./`,
        vi: `Trong đời sống hằng ngày và công việc, ${w0.meaning.toLowerCase()} và ${w1.meaning.toLowerCase()} đều quan trọng. ${pack.ans}`,
        question: `Which topic word is introduced first in "${pack.topic}"?`,
        options: [`${w0.word} (${w0.meaning})`, "Yesterday", "Midnight"],
        correctIndex: 0
      },
      dictationTarget: pack.word,
      quiz: {
        question: `Trong chủ đề "${pack.topic}", từ "${w1.word}" có nghĩa là gì?`,
        options: [w1.meaning, "Chào tạm biệt", "Thời tiết mưa"],
        correctIndex: 0
      }
    });
  }

  window.EN_LESSONS = fullList;
})();