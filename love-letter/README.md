# Love Letter

Thiệp thư tình mở ra được, có nhạc nền và ảnh kỷ niệm.

## Cấu trúc

```
love-letter/
├── index.html      ← giao diện, không cần sửa
├── letter.js       ← NỘI DUNG THƯ, sửa ở đây
└── assets/
    ├── music.mp3   ← bài hát, tự phát khi mở thư
    └── photo.jpg   ← ảnh ở góc dưới bên trái lá thư
```

## Sửa nội dung

Mở `letter.js` bằng Notepad hoặc VS Code. Mọi thứ đều nằm trong đó: lời thư, tên, ngày tháng, đường dẫn ảnh, đường dẫn nhạc, âm lượng.

Mỗi đoạn văn là một dòng trong `paragraphs`, đặt trong dấu ngoặc kép, cách nhau bằng dấu phẩy.

## Đổi ảnh

Chép ảnh vào thư mục `assets`, rồi sửa dòng `photo` trong `letter.js` thành tên file đó, ví dụ `"assets/chung-minh.jpg"`.

Ảnh hiển thị theo khung dọc 4:5 (ảnh chân dung đẹp nhất). Ảnh ngang vẫn dùng được, phần thừa sẽ bị cắt hai bên. Nên để ảnh dưới 1 MB cho trang tải nhanh.

Không muốn hiện ảnh thì để `photo: ""`.

## Đổi nhạc

Chép file mp3 vào `assets`, sửa dòng `music`. Tên file nên viết không dấu, không khoảng trắng.

Nhạc phát ngay khi người nhận chạm vào trái tim. Một số trình duyệt chặn tự phát, khi đó nút "♫ Bật nhạc" sẽ hiện ra để bấm.

## Đăng lên GitHub Pages

1. Tạo repo mới trên GitHub, đặt tên tuỳ ý, để chế độ Public.
2. Bấm **Add file → Upload files**, kéo cả ba thứ vào: `index.html`, `letter.js`, và thư mục `assets`. Commit.
3. Vào **Settings → Pages**. Ở mục Source chọn **Deploy from a branch**, branch chọn `main`, folder chọn `/ (root)`. Bấm Save.
4. Đợi khoảng một phút, link sẽ hiện ở đầu trang Pages, dạng `https://tên-tài-khoản.github.io/tên-repo/`.

Mỗi lần muốn sửa lời thư, vào GitHub bấm vào `letter.js`, bấm biểu tượng bút chì, sửa rồi commit. Trang tự cập nhật sau khoảng một phút.

## Xem thử trên máy

Nhấp đúp vào `index.html` là xem được ngay, không cần cài gì.
