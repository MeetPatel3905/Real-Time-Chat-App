# 💬 Realtime Chat Application

**COMPANY**: CODTECH IT SOLUTIONS

**NAME**: HARDIKKUMAR SITANSHUBHAI PATEL

**INTERN ID**: CITS179

**DOMAIN**: MERN STACK WEB DEVELOPMENT

**BATCH DURATION**: MAY 09th,2026 to JUNE 6th, 2026

**MENTOR NAME** : NEELA SANTHOSH KUMAR

A full-stack real-time chat application built with **React**, **Node.js**, and **Socket.io** — enabling instant messaging between multiple users through WebSocket connections.

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

| Side | Technology |
|------|-----------|
| Frontend | React.js |
| Backend | Node.js, Express.js |
| Real-time | Socket.io |
| Deployment | Netlify (client), Node server |

---

## 📁 Project Structure

```
realtime-chat-app/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chat/
│   │   │   ├── InfoBar/
│   │   │   ├── Input/
│   │   │   └── Messages/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/                 # Node.js backend
│   ├── index.js
│   ├── router.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v14 or higher
- npm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/realtime-chat-app.git
cd realtime-chat-app
```

2. **Install & start the server**

```bash
cd server
npm i && npm start
```

3. **Install & start the client** (in a new terminal)

```bash
cd client
npm i && npm start
```

The app will be running at:
- **Frontend:** `http://localhost:3000`
- **Backend:** `http://localhost:5000`

---

## 🔌 Socket Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `join` | Client → Server | User joins a room with name |
| `sendMessage` | Client → Server | User sends a message |
| `message` | Server → Client | Deliver message to room |
| `roomData` | Server → Client | Send updated list of room users |
| `disconnect` | Server | Handle user leaving |

---

## 🖼️ Usage

1. Open the app in your browser
2. Enter your **name** and a **room name** to join
3. Start chatting in real time — open multiple tabs to simulate multiple users

---

## 🚢 Deployment

### Client — Netlify

```bash
cd client
npm run build
# Deploy the /build folder to Netlify
```

### Server — Heroku / Render / Railway

```bash
# Push server/ to your preferred Node.js hosting platform
# Set the PORT environment variable if required
```

---

## 🤝 Contributing

1. Fork the repo
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit changes: `git commit -m "Add your feature"`
4. Push: `git push origin feature/your-feature`
5. Open a Pull Request

⭐ If this project helped you learn, consider giving it a star!
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
