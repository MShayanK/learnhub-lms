# LearnHub - MERN Stack Learning Management System (LMS)

LearnHub is a full-stack Learning Management System built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js). The platform enables students to explore and enroll in courses, instructors to build and manage curriculum with video lessons, and administrators to oversee platform content and user management.

---

## 🚀 Live Demo & Links

* **GitHub Repository:** [https://github.com/MShayanK/learnhub-lms.git]
---

## ✨ Features

### 🔐 Authentication & Authorization
* **JWT-based Authentication:** Secure user authentication using JSON Web Tokens.
* **Password Encryption:** Sensitive credentials hashed using `bcryptjs`.
* **Role-Based Access Control (RBAC):** Distinct dashboards and route protections for **Admin**, **Instructor**, and **Student**.

### 🎓 Student Features
* Browse categorized course directory with detailed descriptions, price tags, and instructor profiles.
* Single-click course enrollment functionality.
* Personalized **Student Dashboard** to view active enrolled courses.
* Integrated course lesson player with video content access.

### 👨‍🏫 Instructor Features
* **Instructor Dashboard:** Create and publish new courses with custom categories and pricing.
* Dynamic lesson management to upload video URLs and lesson topics to published courses.

### 🛡️ Admin Features
* **Admin Dashboard:** Platform-wide monitoring and full CRUD control over all hosted courses.

---

## 🛠️ Tech Stack & Dependencies

### Frontend
* **Core:** React.js (Vite), React Router DOM (v6)
* **Styling & UI:** CSS3, Bootstrap / React-Bootstrap
* **HTTP Client:** Axios

### Backend
* **Runtime & Framework:** Node.js, Express.js
* **Database & ORM:** MongoDB Atlas, Mongoose
* **Authentication:** JSON Web Token (`jsonwebtoken`), `bcryptjs`
* **Utilities:** `dotenv`, `cors`

---

## 📁 Project Structure

```text
learnhub-lms/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI Navbar, Footer, Route Guards
│   │   ├── pages/          # Home, Courses, Login, Register, Dashboards
│   │   ├── services/       # Axios API integration modules
│   │   ├── App.jsx         # Main application routes
│   │   └── main.jsx        # App entry point
│   ├── package.json
│   └── vite.config.js
│
└── backend/
    ├── config/             # Database connection setup (db.js)
    ├── controllers/        # Business logic for auth, courses, enrollment
    ├── models/             # Mongoose schemas (User, Course, Enrollment)
    ├── routes/             # Express API routes
    ├── middleware/         # Auth & Role verification middleware
    ├── server.js           # Server entry point
    ├── .env.example
    └── package.json
```

---

## 💻 Local Setup & Installation

Follow these steps to run the project on your local machine:

### 1. Prerequisites
Ensure you have the following installed:
* [Node.js](https://nodejs.org/) (v16 or higher)
* [Git](https://git-scm.com/)
* MongoDB Atlas account or local MongoDB server instance.

### 2. Clone the Repository
```bash
git clone https://github.com/MShayan