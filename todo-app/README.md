# 📝 To-Do List App

This is a simple and clean To-Do List application built using **React.js** on the frontend and **Node.js/Nest.js** on the backend.

It lets users:
- Add new tasks  
- Mark tasks as completed  
- Delete tasks  
- Keep data stored using localStorage

This project was created as part of a MERN/Nest.js internship assessment.


## Project Structure

├── server.js (or NestJS files)
├── client/         # React frontend
│   ├── src/
│   └── public/
└── README.md


##  Backend (Node.js / Nest.js)

### Getting Started

1. Install backend dependencies:

npm install

2. Start the backend server:

node server.js

Backend will run on: `http://localhost:5000`


### API Overview

| Method | Endpoint       | What it does              |
|--------|----------------|---------------------------|
| GET    | `/tasks`       | Fetch all tasks           |
| POST   | `/tasks`       | Add a new task            |
| PUT    | `/tasks/:id`   | Toggle task completion    |
| DELETE | `/tasks/:id`   | Delete a task             |

#### Sample POST Body:

{
  "title": "Build a To-Do App",
  "completed": false
}


## Frontend (React + Vite)

### Getting Started

1. Go into the frontend folder:

cd client


2. Install frontend dependencies:

npm install

3. Run the frontend:

npm run dev

The app will open at: `http://localhost:5173`


##  Features

- 📋 Add new tasks with a form
- ✔️ Mark tasks as done (with visual tick and strikethrough)
- 🗑️ Delete tasks easily
- 💾 Stores data using localStorage
- 📱 Mobile-friendly and responsive layout

## How to Test

1. Run the backend (`node server.js`)
2. Run the frontend (`npm run dev`)
3. Try adding, completing, and deleting tasks
4. Open DevTools Console/Network tab to see API in action


## Tech Stack

- Frontend: React.js, Vite, HTML, CSS
- Backend: Node.js (or Nest.js)
- Storage: In-memory + localStorage
- Style: Pure CSS (no Tailwind used)
- Communication: REST API (JSON)


