# SwapChat - AI Chatbot 💬🤖

SwapChat is a modern, minimalistic AI chatbot web application built with **HTML, CSS, JS (Frontend)**, **Express (Backend)**, and **Google's Gemini API (LLM)**. It allows users to engage in real-time conversations through a clean and UI with a dark theme.

## 🔧 Features

- ⚡ Real-time AI responses via Gemini API
- 🌙 Clean, dark-themed UI with chat bubbles
- 📦 Built using Express.js and React
- 🌐 Simple frontend-backend architecture
- 🧠 Persistent conversation history (in memory)
- 🚀 Easy to run locally and customizable

---

## 🖼️ Preview

![Image](https://github.com/user-attachments/assets/eaa0b784-7a82-4ce0-840b-5ae39ab81432)

![Image](https://github.com/user-attachments/assets/fbd5333d-49e0-47bb-850e-b9e6d119dd0c)

---

## 📁 Project Structure
SwapChat/
├── index.html # Main UI structure
├── style.css # Chat UI styling
├── script.js # Frontend logic for messaging
├── server.js # Express backend server
├── LLM.js # Gemini API integration logic
├── package.json # Dependencies and scripts
├── package-lock.json # Lock file

## 🚀 Getting Started (Local Setup)

### 1. Clone the repository

    git clone https://github.com/yourusername/SwapChat---AI-Chatbot
    cd SwapChat---AI-Chatbot


### 2. Install backend dependencies

    npm install



### 3. Set up Gemini API key

  - Open LLM.js
  - Replace the placeholder API key with your own from Google AI Studio
  - const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" });
    tip: For production, consider using environment variables for security.


### 4. Run the backend server

    node server.js

### 5. Open the app

  - Simply open index.html in your browser.
  - Or use a live server extension (like VS Code Live Server).

## 📦 Tech Stack

| Layer     | Technology                                |
| --------- | ----------------------------------------- |
| Frontend  | HTML, CSS, JavaScript                     |
| Backend   | Node.js, Express                          |
| AI Model  | Google Gemini 2.0 Flash (`@google/genai`) |
| Styling   | Custom dark-themed CSS                    |
| API Calls | Fetch API                                 |


## ✅ Future Improvements
   
- Store message history locally or in a database
- Convert frontend to React 
- Add deployment config for Render / Vercel









