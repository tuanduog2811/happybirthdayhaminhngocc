/* ============================================================
   NỘI DUNG LÁ THƯ
   Sửa file này là xong, không cần đụng vào index.html.
   Nhớ giữ nguyên dấu ngoặc kép và dấu phẩy ở cuối mỗi dòng.
   ============================================================ */

window.LETTER = {

  /* --- Dòng chữ trên thiệp khi chưa mở --- */
  hint: "Happy Birthday",

  /* --- Đầu thư --- */
  place:    "Hà Nội",
  date:     "16.09.2026",
  greeting: "Gửi em,",

  /* --- Nội dung thư ---
     Mỗi dòng trong dấu ngoặc kép là một đoạn văn.
     Thêm đoạn: viết thêm một dòng "..." và nhớ dấu phẩy ở dòng trước. */
  paragraphs: [
    "Sinh nhật em năm nay anh không mua được món quà nào thật to, nên anh viết thư. Chữ thì không gói lại được, nhưng anh nghĩ em sẽ giữ nó lâu hơn một cái hộp.",

    "Cảm ơn em vì đã đi cùng anh qua một năm nữa, cả những ngày vui lẫn những ngày em phải nhịn anh. Anh nhớ hết, không sót ngày nào.",

    "Chúc em tuổi mới luôn được cưng chiều, ăn ngon, ngủ đủ, và bớt lo nghĩ đi một chút. Phần còn lại để anh lo."
  ],

  /* --- Cuối thư --- */
  signLabel: "Thương em nhiều,",
  signature: "Anh",

  /* --- ẢNH (góc dưới bên trái lá thư) ---
     Bỏ ảnh của bạn vào thư mục assets rồi ghi tên file vào đây.
     Ví dụ: "assets/chung-minh.jpg"
     Để trống "" nếu không muốn hiện ảnh. */
  photo:        "assets/photo.jpg",
  photoCaption: "20.10.2025",

  /* --- NHẠC ---
     Tên file nhạc trong thư mục assets. Nhạc tự phát ngay khi mở thư.
     volume: âm lượng từ 0 đến 1. */
  music:  "assets/music.mp3",
  volume: 0.75
};
