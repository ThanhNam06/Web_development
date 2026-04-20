
  # Trang web quảng cáo dịch vụ

  This is a code bundle for Trang web quảng cáo dịch vụ. The original project is available at https://www.figma.com/design/KjsQ34FDUcdfSJXN9QWQ6X/Trang-web-qu%E1%BA%A3ng-c%C3%A1o-d%E1%BB%8Bch-v%E1%BB%A5.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the frontend development server.

  ### Backend (Express)

  ```bash
  cd backend
  npm i
  cp .env.example .env
  npm run dev
  ```

  Backend runs at `http://localhost:4000`.

  ### Deploy (Vercel + custom domain)

  This repository is configured for Vercel:

  - Frontend is served as static Vite build.
  - `/api/*` is routed to `backend/src/serverless.js` (Express app in serverless mode).
  - Routing rules are defined in `vercel.json`.
