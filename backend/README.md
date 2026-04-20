# DevStudio Backend

Backend API cho frontend trong thư mục `/mnt/l/Development`.

## API đã khớp với frontend

- `GET /api/projects` - danh sách project card
- `GET /api/projects?category=E-Commerce` - lọc danh mục
- `GET /api/projects/:id` - chi tiết project
- `POST /api/contact` - nhận form liên hệ
- `GET /api/contact` - danh sách leads (cần `x-admin-key`)
- `GET /api/meta` - thông tin thương hiệu/liên hệ
- `GET /api/health` - health check

## Tự động gửi thông báo lead mới qua email

Khi khách gửi form liên hệ thành công, backend sẽ gửi email thông báo cho admin để chủ động liên hệ lại khách, không cần mở Supabase thủ công.

Biến môi trường cần cấu hình thêm:

- `RESEND_API_KEY`
- `CONTACT_NOTIFY_FROM` (vd: `DevStudio <no-reply@devstudio.art>`)
- `CONTACT_NOTIFY_TO` (1 email hoặc nhiều email ngăn cách bằng dấu phẩy)

Phản hồi từ `POST /api/contact` sẽ có thêm trường `notification`:

- `sent`    -> gửi thông báo thành công
- `skipped` -> thiếu config thông báo
- `failed`  -> có config nhưng gửi lỗi

## Chạy local

```bash
cd backend
npm i
cp .env.example .env
npm run dev
```

Backend chạy mặc định `http://localhost:4000`.

## Supabase cho form liên hệ

Backend đã hỗ trợ lưu lead lên Supabase với các mode:

- `CONTACT_STORAGE_MODE=supabase`  -> chỉ lưu Supabase
- `CONTACT_STORAGE_MODE=file`      -> chỉ lưu local file `data/leads.json`
- `CONTACT_STORAGE_MODE=hybrid`    -> ưu tiên Supabase, lỗi thì fallback file

Tuỳ chọn thêm:

- `DATA_DIR` -> thư mục lưu fallback local (mặc định `./data`, trên serverless nên đặt `/tmp/devstudio`)

Biến môi trường cần có:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SUPABASE_LEADS_TABLE` (mặc định `contact_leads`)

Schema bảng `contact_leads` cần các cột:

- `id` (text/uuid, primary key)
- `name` (text)
- `email` (text)
- `service` (text, nullable)
- `budget` (text, nullable)
- `message` (text)
- `source` (text)
- `status` (text)
- `created_at` (timestamptz)
