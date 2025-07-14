# 💸 Recotrac Money – Pocket Money & Expense Tracker

Recotrac Money is a full-stack web application built with the MERN stack (MongoDB, Express, React, Node.js) that helps users track their daily expenses and manage their pocket money effectively. It’s a simple and intuitive tool designed especially for students or anyone looking to stay on top of their spending habits.

---

## 🚀 Features

- ✍️ Add, view, and delete daily expenses
- 📊 Dashboard for visual insights (in progress)
- 🔐 JWT-based authentication and protected routes
- 🎨 Responsive UI with Tailwind CSS
- 🌐 Fully deployed frontend and backend

---

## 🛠️ Tech Stack

**Frontend**:  
- React  
- Tailwind CSS  
- Axios  
- React Router DOM  

**Backend**:  
- Node.js  
- Express.js  
- MongoDB + Mongoose  
- JWT Authentication  
- CORS

---

## 📸 Screenshots

![image](https://github.com/user-attachments/assets/66d35316-4cd2-43f3-8f9e-6697b8183e0a)


---

## 🌍 Live Demo

**Frontend**: https://recotracmoney.vercel.app/   

---

## ⚙️ Getting Started – How to Set Up Locally

### Prerequisites

Make sure you have the following installed:
- Node.js and npm
- MongoDB (local or cloud - MongoDB Atlas)
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/meAnkit18/Pocket-Money-Tracker.git
cd Pocket-Money-Tracker

---

### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

---

### 3. Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to open the app in your browser.

---

## 📁 Folder Structure

```
Pocket-Money-Tracker/
├── client/         # React frontend
│   ├── components/
│   ├── pages/
│   └── ...
├── server/         # Express backend
│   ├── controllers/
│   ├── models/
│   └── routes/
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo  
2. Create your feature branch:  
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:  
   ```bash
   git commit -m "Add your message"
   ```
4. Push to your branch:  
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request 🚀

---

## 🙌 Acknowledgements

This project was built as part of my learning journey to understand how full-stack apps work.  
Thanks to the amazing developer community and open-source contributors for sharing so much knowledge 🙏

---
## 📄 License

This project is licensed under the **MIT License** —  
you are free to use, modify, and distribute it with proper attribution.

🔗 See the full license text in the [LICENSE](LICENSE) file.


> Feel free to fork, contribute, or just give feedback. I'd love to connect with fellow devs!
