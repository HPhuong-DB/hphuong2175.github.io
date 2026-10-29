# Portfolio cá nhân

Bộ khung website tĩnh với React, TypeScript, Vite và CSS thuần. Không có backend.

## Chạy trên máy

Cần cài Node.js phiên bản tương thích với Vite. Mở terminal tại thư mục này và chạy:

```bash
npm install
npm run dev
```

Mở địa chỉ được hiển thị trong terminal. Dừng máy chủ bằng `Ctrl + C`.

Kiểm tra TypeScript và tạo bản build:

```bash
npm run build
npm run preview
```

## Bắt đầu tùy chỉnh

- `src/data/profile.ts`: tên, giới thiệu, email.
- `src/data/projects.ts`: thêm hoặc sửa các dự án; `url` là tùy chọn.
- `src/App.tsx`: bố cục và nội dung các phần của trang.
- `src/components/ProjectCard.tsx`: giao diện từng thẻ dự án.
- `src/styles/global.css`: màu sắc, font, bố cục và responsive.
- `public/`: đặt ảnh, CV hoặc các tài nguyên tĩnh; ví dụ `public/avatar.png` được truy cập bằng `/avatar.png`.
- `index.html`: tiêu đề và mô tả trang trên trình duyệt.

Nội dung hiện tại chỉ là ví dụ. Bạn có thể tạo thêm component, hiệu ứng hoặc khu vực mini game theo ý tưởng riêng.
