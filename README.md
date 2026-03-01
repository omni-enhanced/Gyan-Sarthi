# 🎓 Gyan_Sarthi

**Gyan_Sarthi** is an AI-driven intelligent learning and exam readiness platform designed for students from Grade 3–12, college learners, and competitive exam aspirants.

---

## 🚀 Core Idea

Gyan_Sarthi focuses on **quality of understanding rather than quantity of practice.**

It integrates:

- Diagnostic assessment  
- Exam-mode intelligence  
- Performance analytics  
- Backend-regulated AI explanation system  

This ensures structured learning and measurable growth.

---

## 🔥 MVP Features

- 🔐 Secure Authentication  
- 🧠 Diagnostic & Practice Mode  
- 📝 Exam Simulation Mode  
- 📊 Performance Dashboard  
- 🤖 Backend-Regulated AI Explanation  

---

## 🧠 Core API Endpoints (Lean MVP)

### 🔐 Authentication
- POST /auth/register
- POST /auth/login
- GET /auth/profile

### 📚 Questions & Practice
- GET /questions?type=diagnostic
- GET /questions?type=practice
- POST /attempts/submit
- GET /student/dashboard

### 📝 Exam Mode
- POST /exam/start
- POST /exam/submit
- GET /exam/result

### 🤖 AI Explanation
- POST /ai/explain

---

## 🏗️ Tech Stack

### 🎨 Frontend

- React / Next.js  
- Tailwind CSS  

### ⚙️ Backend

- FastAPI (Python)  
- JWT Authentication  
- REST API Architecture  

### 🗄️ Database

- PostgreSQL  

### 🤖 AI Layer

- Backend-to-backend API integration  
- Structured prompt validation  

---

## 🔐 Security Approach

- No direct frontend AI calls  
- Backend validation for all AI responses  
- Secure token-based authentication  
- Isolated scoring engine  

---

## 📊 How It Works

1. User registers and logs in  
2. Takes diagnostic or practice questions  
3. Submits attempts  
4. Views performance dashboard  
5. Enters exam mode  
6. Receives AI-regulated explanations  

---

## 🌍 Future Scope

- Multi-language support  
- Institutional dashboards  
- Competitive exam modules (JEE, NEET, UPSC, GATE)  
- AI-regulated invigilation mode  
- Career intelligence analytics  

---

## 🏆 Impact

Gyan_Sarthi ensures students:

- Understand deeply  
- Perform confidently  
- Improve measurably  

---

## 📌 Project Status

🚧 MVP Development Phase  
Designed for Hackathon & Prototype Validation  

---

## ⚙️ Run Locally

### Backend
git clone https://github.com/omni-enhanced/Gyan-sarthi.git

cd gyan-sarthi

pip install -r requirements.txt

uvicorn app.main:app --reload

### Frontend
cd frontend

npm install

npm run dev

---

## 📄 License

This project is currently under development.  
Licensing will be updated upon public release.




