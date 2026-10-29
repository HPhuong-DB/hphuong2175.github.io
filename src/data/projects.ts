export type Project = {
  title: string
  description: string
  // Để trống nếu dự án chưa có liên kết.
  url?: string
}

// Thêm, sửa hoặc xóa các dự án trong danh sách này.
export const projects: Project[] = [
  {
    title: 'Dự án đầu tiên',
    description: 'Mô tả ngắn về dự án của bạn.',
  },
]
