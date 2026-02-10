# GameLore Demo

A simple yet powerful game lore website built with **Strapi V5** (Headless CMS) and **React + Vite** (Frontend).

## 🛠 Tech Stack

### Backend
- **Strapi V5**: Open-source headless CMS.
- **Database**: SQLite (default), easily switchable to PostgreSQL/MySQL.
- **Language**: TypeScript.

### Frontend
- **React 19**: Modern UI library.
- **Vite**: Fast build tool and dev server.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **Axios**: HTTP client for API requests.

---

## 📂 Project Structure

- `gamelore-backend/`: The Strapi CMS server.
  - `src/api/`: Defines the Content Types (Game, Character, etc.) and their controllers/routes.
  - `.env.example`: Template for environment variables.
- `gamelore-frontend/`: The React client application.
  - `src/pages/`: Main views (Home, Characters, Items, Blogs).
  - `src/components/`: Reusable UI components.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js v20+** (Required for Strapi v5).
  - Check version: `node -v`
  - If you need to switch versions, use `nvm alias default 20` or `nvm use 20`.

### 1. Setup Backend (Strapi)

navigate to the backend folder:
```bash
cd gamelore-backend
```

Install dependencies and start the development server:
```bash
npm install
npm run develop
```

- **Admin Panel**: [http://localhost:1337/admin](http://localhost:1337/admin)
- **API URL**: [http://localhost:1337](http://localhost:1337)

> **First Run**: You will be prompted to create an Admin User. This is for managing content, not for the frontend website users.

### 2. **CRITICAL: Configure Permissions**

By default, Strapi APIs are private. You must make them public for the frontend to fetch data.

1. Go to the **Strapi Admin Panel** -> **Settings**.
2. Under **Users & Permissions Plugin**, click **Roles**.
3. Select the **Public** role.
4. Scroll down to **Permissions**.
5. Check **Select All** (or specifically `find` and `findOne`) for the following Content Types:
   - **Game**
   - **Character**
   - **Item**
   - **Lore-blog**
6. Click **Save** in the top right corner.

### 3. Add Sample Content
1. Go to **Content Manager**.
2. Create entries for Games, Characters, Items, etc.
3. **Important**: Click **Publish** for each entry, or it won't show up in the API.

### 4. Setup Frontend (React)

Open a new terminal and navigate to the frontend folder:
```bash
cd gamelore-frontend
```

Install dependencies and start the dev server:
```bash
npm install
npm run dev
```

- **App URL**: [http://localhost:5173](http://localhost:5173)

---

## ⚙️ Configuration

### Environment Variables
The backend comes with a `.env.example` file. Copy this to `.env` if you need to customize secrets, though Strapi usually generates one automatically on first run.

### Frontend API URL
The frontend currently expects the backend to be running at `http://localhost:1337`.
If you change the backend port, you will need to update the API calls in the frontend code (e.g., `src/pages/Home.jsx`).

---

## 📝 Troubleshooting

- **Images not loading?**
  - Ensure the backend is running.
  - Verify that the image URL logic in the frontend includes the backend host (e.g., `http://localhost:1337` + `image.url`).

- **403 Forbidden Error?**
  - You likely missed **Step 2: Configure Permissions**. Double-check that the **Public** role has `find` and `findOne` permissions for your content types.
