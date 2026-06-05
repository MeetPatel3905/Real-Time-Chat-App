# 💬 Realtime Chat Application

**COMPANY**: CODTECH IT SOLUTIONS

**NAME**: MEET BHAVIN PATEL

**INTERN ID**: CTIS9971

**DOMAIN**: MERN STACK WEB DEVELOPMENT

**BATCH DURATION**: MAY 09th, 2026 to JUNE 6th, 2026

**MENTOR NAME**: NEELA SANTHOSH KUMAR

---

A full-stack real-time chat application built with **React**, **Node.js**, and **Socket.io** — enabling instant messaging between multiple users through WebSocket connections.

---

## 📌 Overview

This project demonstrates how to build a production-ready real-time chat app from scratch. It covers core WebSocket concepts using Socket.io — including event emission, broadcasting, and room management — giving you a solid foundation for building any real-time application.

---

## ✨ Features

- 🔄 **Real-time messaging** — Instant bi-directional communication via WebSockets
- 🏠 **Chat rooms** — Join named rooms and chat with multiple users simultaneously
- 👥 **Active users list** — See who's currently in the room
- 📡 **Socket.io events** — Send, receive, and broadcast messages in real time
- ⚡ **Fast & lightweight** — Minimal dependencies, quick to spin up locally

---

## 🛠️ Tech Stack

| Component | Technology |
|-----------|-----------|
| **Frontend** | React.js, React Router, Socket.io Client |
| **Backend** | Node.js, Express.js, Socket.io |
| **Real-time Communication** | WebSockets (Socket.io) |
| **Styling** | CSS3 with Responsive Design |
| **Deployment** | Netlify (Client), Heroku/Render/Railway (Server) |

---

## 📁 Project Structure

```
Real-Time Chat Application/
├── backend/
│   ├── server.js              # Main server file
│   ├── router.js              # Express routes
│   ├── users.js               # User management logic
│   ├── package.json           # Backend dependencies
│   └── node_modules/
│
├── frontend/
│   ├── public/
│   │   └── index.html         # HTML entry point
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat/
│   │   │   │   ├── Chat.js
│   │   │   │   └── Chat.css
│   │   │   ├── Join/
│   │   │   │   ├── Join.js
│   │   │   │   └── Join.css
│   │   │   ├── InfoBar/
│   │   │   │   ├── InfoBar.js
│   │   │   │   └── InfoBar.css
│   │   │   ├── Input/
│   │   │   │   ├── Input.js
│   │   │   │   └── Input.css
│   │   │   ├── Messages/
│   │   │   │   ├── Messages.js
│   │   │   │   ├── Messages.css
│   │   │   │   └── Message/
│   │   │   │       ├── Message.js
│   │   │   │       └── Message.css
│   │   │   └── TextContainer/
│   │   │       ├── TextContainer.js
│   │   │       └── TextContainer.css
│   │   ├── App.js             # Main App component
│   │   ├── index.js           # React entry point
│   │   └── icons/             # App icons
│   ├── package.json           # Frontend dependencies
│   └── node_modules/
│
├── .gitignore
├── README.md
└── package.json (root, optional)
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v14 or higher
- **npm** (comes with Node.js)
- **Git** for version control

### Installation & Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/MeetPatel3905/Real-Time-Chat-App.git
cd Real-Time-Chat-App
```

#### 2. Backend Setup
```bash
cd backend
npm install
npm start
```
Server runs on: **http://localhost:5000**

#### 3. Frontend Setup (in a new terminal)
```bash
cd frontend
npm install
npm start
```
Application runs on: **http://localhost:3000**

---

## 🔌 Socket Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `join` | Client → Server | User joins a chat room |
| `sendMessage` | Client → Server | User sends a message |
| `message` | Server → Client | Message delivered to room |
| `roomData` | Server → Client | Updated list of active users |
| `disconnect` | Server | Handles user leaving |

---

## 🖼️ Usage Guide

1. **Open the application** in your browser at `http://localhost:3000`
2. **Enter your name** and choose a **room name**
3. **Click "Sign In"** to join the chat room
4. **Start chatting** in real-time with other users in the same room
5. **Open multiple tabs** to simulate multiple users and test functionality
6. **View active users** in the sidebar to see who's online

---

## 🚢 Deployment

### Deploy Frontend (Netlify)
```bash
cd frontend
npm run build
# Deploy the /build folder to Netlify
```

### Deploy Backend (Heroku/Render/Railway)
```bash
# Push server/ to your preferred hosting platform
# Set PORT environment variable if required
```

---

## 🔧 Configuration

### Backend Server Port
Edit `backend/server.js`:
```javascript
server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
```

### Frontend API Endpoint
Edit `frontend/src/components/Chat/Chat.js`:
```javascript
const ENDPOINT = 'http://localhost:5000'; // Change for production
```

---

## 📝 Key Features Explained

### Real-time Communication
- Uses Socket.io for bi-directional WebSocket communication
- Instant message delivery without page refresh
- Live user list updates

### Room Management
- Users can create and join multiple chat rooms
- Each room is isolated with its own message history
- Users automatically leave room on disconnect

### User Management
- Prevents duplicate usernames in the same room
- Tracks active users and their connection status
- Notifies users when someone joins or leaves

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- **Socket.io** for real-time communication
- **React** for the UI framework
- **Express.js** for the backend framework
- **CODTECH IT SOLUTIONS** for the internship opportunity

---

## 📧 Contact

**Developer**: Meet Bhavin Patel  
**Email**: p.meet9305@gmail.com  
**GitHub**: https://github.com/MeetPatel3905

---

⭐ If you found this project helpful, please consider giving it a star!
- 🟢 Online users list
- 💬 User join/leave notifications
- 📱 Responsive design
- 🎨 Modern UI with gradient colors
- 🔌 WebSocket connection

## Getting Started

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   # or for development with auto-reload
   npm run dev
   ```

The backend will run on `http://localhost:3000`

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Start a local server:
   ```bash
   npm start
   ```

Or simply open `index.html` in your browser.

## Usage

1. Open the application in your browser
2. Enter your username when prompted
3. Start chatting in real-time!
4. See who's online in the users list
5. Messages appear instantly for all connected users

## Technologies Used

- **Backend**: Node.js, Express.js, Socket.io
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Real-time Communication**: WebSocket (Socket.io)

## Environment Variables

Create a `.env` file in the backend folder:

```
PORT=3000
NODE_ENV=development
```

## Future Enhancements

- [ ] User authentication
- [ ] Private messaging
- [ ] Message history/database
- [ ] User avatars
- [ ] Typing indicators
- [ ] Emoji support
- [ ] File sharing
- [ ] Chat rooms

## License

ISC
