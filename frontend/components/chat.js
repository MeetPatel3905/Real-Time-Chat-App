// Socket.io Connection
const socket = io('http://localhost:3000');

// DOM Elements
const messagesDiv = document.getElementById('messages');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const usersList = document.getElementById('users-list');
const usernameDisplay = document.getElementById('username');
const logoutBtn = document.getElementById('logout-btn');

// State
let currentUser = null;
const onlineUsers = new Map();

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  const username = prompt('Enter your username:') || 'Anonymous';
  currentUser = {
    id: socket.id,
    username: username
  };
  
  usernameDisplay.textContent = username;
  
  // Notify others that user joined
  socket.emit('user_join', {
    userId: socket.id,
    username: username
  });
});

// Event Listeners
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

logoutBtn.addEventListener('click', () => {
  socket.disconnect();
  window.location.reload();
});

// Send Message Function
function sendMessage() {
  const message = messageInput.value.trim();
  if (message === '') return;

  const messageData = {
    sender: currentUser.username,
    content: message,
    timestamp: new Date().toLocaleTimeString()
  };

  socket.emit('send_message', messageData);
  
  // Display sent message
  displayMessage(messageData, 'sent');
  messageInput.value = '';
  messageInput.focus();
}

// Display Message Function
function displayMessage(data, type) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', type);
  
  const content = document.createElement('div');
  content.textContent = data.content;
  
  const meta = document.createElement('div');
  meta.classList.add('message-meta');
  meta.textContent = `${data.sender} - ${data.timestamp}`;
  
  messageElement.appendChild(content);
  messageElement.appendChild(meta);
  
  messagesDiv.appendChild(messageElement);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

// Socket.io Events
socket.on('receive_message', (data) => {
  if (data.sender !== currentUser.username) {
    displayMessage(data, 'received');
  }
});

socket.on('user_joined', (data) => {
  if (data.userId !== socket.id) {
    onlineUsers.set(data.userId, data.username);
    updateUsersList();
    
    const notification = document.createElement('div');
    notification.classList.add('message', 'received');
    notification.innerHTML = `<em>${data.username} joined the chat</em>`;
    messagesDiv.appendChild(notification);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
  }
});

socket.on('user_left', (data) => {
  onlineUsers.delete(data.userId);
  updateUsersList();
});

socket.on('connect', () => {
  console.log('Connected to server');
});

socket.on('disconnect', () => {
  console.log('Disconnected from server');
});

// Update Users List
function updateUsersList() {
  usersList.innerHTML = '';
  onlineUsers.forEach((username, userId) => {
    const li = document.createElement('li');
    li.textContent = username;
    li.title = username;
    usersList.appendChild(li);
  });
}
