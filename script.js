const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

function markdownToBold(text) {
  return text.replace(/\*\*(.*?)\*\*/g, '$1');
}

function addMessage(sender, text) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;
  if (sender === 'bot') {
    msgDiv.innerHTML = markdownToBold(text);
  } else {
    msgDiv.textContent = text;
  }
  chatbox.appendChild(msgDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function removeLastBotMessage() {
  const botMessages = chatbox.querySelectorAll('.message.bot');
  if (botMessages.length > 0) {
    chatbox.removeChild(botMessages[botMessages.length - 1]);
  }
}

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage('user', message);
  userInput.value = '';

  addMessage('bot', 'Thinking...');

  try {
    const response = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userMessage: message })
    });
    const data = await response.json();

    removeLastBotMessage();

    if (data.error) {
      addMessage('bot', `Error: ${data.error}`);
    } else {
      const cleanedReply = data.reply.trim().replace(/[\*\/]/g, "");
      addMessage('bot', cleanedReply);
    }
  } catch (err) {
    removeLastBotMessage();
    addMessage('bot', 'Failed to get response. Please try again.');
    console.error(err);
  }
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendMessage();
});


