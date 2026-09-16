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
  date:     "17.09.2026",
  greeting: "Gửi em,",

  /* --- Nội dung thư ---
     Mỗi dòng trong dấu ngoặc kép là một đoạn văn.
     Thêm đoạn: viết thêm một dòng "..." và nhớ dấu phẩy ở dòng trước. */
  paragraphs: [
    "Chúc mừng sinh nhật Minh Ngọc - iu dấu của anhh <3 Chúc em tuổi mới luôn vui vẻ, hạnh phúc và những điều tốt đẹp luôn đến bên em (anh nè :>>>).",

    "Cảm ơn em vì đã đi cùng anh gần một năm qua nèe.  Đây là lần đầu đón sinh nhật em cùng em áaa và sẽ có thêm nhiều nhiều lần đón sinh nhật cùng em nữa ạaaa. Anh cóa 1 món quà sn cho em đóa, hẹn gặp em tối nay nhé :>",

    "Yêu em nhìuuu <3"
  ],

  /* --- Cuối thư --- */
  signLabel: "Thương em nhiều,",
  signature: "DAT",

  /* --- ẢNH (góc dưới bên trái lá thư) ---
     Bỏ ảnh của bạn vào thư mục assets rồi ghi tên file vào đây.
     Ví dụ: "assets/chung-minh.jpg"
     Để trống "" nếu không muốn hiện ảnh. */
  photo:        "assets/anhletter.jpg",
  photoCaption: "17.09.2026",

  /* --- NHẠC ---
     Tên file nhạc trong thư mục assets. Nhạc tự phát ngay khi mở thư.
     volume: âm lượng từ 0 đến 1. */
  music:  "assets/music.mp3",
  volume: 0.75
};
