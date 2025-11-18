# Hướng dẫn Deploy lên GitHub Pages

## Bước 1: Tạo repository trên GitHub
1. Vào https://github.com và đăng nhập
2. Nhấn nút "+" → "New repository"
3. Đặt tên repo (ví dụ: `aptis-reading-practice`)
4. Chọn **Public**
5. **KHÔNG** tích "Initialize this repository with a README"
6. Nhấn "Create repository"

## Bước 2: Push code lên GitHub

Sau khi tạo repo, GitHub sẽ hiển thị URL. Chạy các lệnh sau (thay YOUR_USERNAME và REPO_NAME):

```bash
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

## Bước 3: Bật GitHub Pages

1. Vào repository trên GitHub
2. Click vào tab **Settings** (ở thanh menu trên)
3. Scroll xuống phần **Pages** (ở sidebar bên trái)
4. Trong phần **Source**, chọn branch **main**
5. Chọn folder **/ (root)**
6. Nhấn **Save**
7. Đợi vài phút, GitHub sẽ tạo URL cho bạn:
   - URL sẽ là: `https://YOUR_USERNAME.github.io/REPO_NAME/`

## Xong!

Web của bạn sẽ được public tại URL trên. Mỗi lần push code mới, GitHub Pages sẽ tự động update sau vài phút.



