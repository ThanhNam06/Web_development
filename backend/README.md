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
