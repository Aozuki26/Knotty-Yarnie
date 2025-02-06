const chatbotContainer = document.getElementById('chatbot-container');
const chatWindow = document.getElementById('chat-window'); // This is the scrollable container
const chatOutput = document.getElementById('chat-output');
const chatInput = document.getElementById('chat-input');
const sendButton = document.getElementById('send-btn');

const responses = {
  hello: "Good day my Dear Crafty Customer,<br>Yarnie is here to help ease with your inquiries.〵(^ o ^)〴",
  hi: "Hello my dear crafty customer,<br>I'm Yarnie your trustworthy friend here to help. 〵(^ o ^)〴",
  help: "Sure!<br>What do you need help with?",
  yarnie: "Hello there!<br>My name is Yarnie, your cute cat friend here to help.",
  default: "I'm not sure how to respond to that.<br>Can you rephrase?",
  welcome: "Welcome!<br><br>My Dear Crafty Customer, Yarnie is here to help ease with your inquiries.〵(^ o ^)〴<br><br>Here are the keywords I can provide information for you: <br><br>order updates<br><br>promos<br><br>Customize<br><br>help<br><br>contact<br> <br> Got more questions? <br>Reach out through the Contact Us section! <br><br>Off to snuggle in my yarn bed—Yarnie signing off! ✨",
  orderupdate: "Need help tracking your order? 📦 No problem!<br>Just give me your order details, and I’ll check its status right away. 🧐",
  customize: "Looking for something special?<br>Let’s create a customized product just for you! Whether it’s colors, patterns, or a dream design, Yarnie’s got you covered!",
  thankyou: "Thank you for visiting Knotty Yarn!<br>Your support means the world to us. <br>Can’t wait to hear from you again! 🧶💖",
};

let hasWelcomeMessage = false; // Flag to track if welcome message has been sent

// Function to toggle chatbot visibility
function toggleChatbot() {
  chatbotContainer.classList.toggle('collapsed');

  // Automatically send a welcome message when the chatbot opens, but only once
  if (!chatbotContainer.classList.contains('collapsed') && !hasWelcomeMessage) {
    setTimeout(() => {
      appendMessage(responses.welcome, 'bot-message');
      hasWelcomeMessage = true; // Set flag to true after sending the welcome message
    }, 500);
  }
}

function appendMessage(message, className) {
  const messageElement = document.createElement('div');
  messageElement.innerHTML = message; // Use innerHTML to enable HTML rendering
  messageElement.className = `message ${className}`;
  chatOutput.appendChild(messageElement);

  // Scroll the chatWindow container to the latest message
  chatWindow.scrollTo({
    top: chatWindow.scrollHeight,
    behavior: 'smooth'
  });
}

sendButton.addEventListener('click', () => {
  sendMessage();
});

chatInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});

function sendMessage() {
  const userInput = chatInput.value.trim().toLowerCase();
  if (!userInput) return;

  appendMessage(userInput, 'user-message');
  chatInput.value = '';

  const botResponse = getBotResponse(userInput);
  setTimeout(() => appendMessage(botResponse, 'bot-message'), 500);
}

// Improved response matching function
function getBotResponse(userInput) {
  if (userInput.includes("help")) return responses.help;
  if (userInput.includes("hello")) return responses.hello;
  if (userInput.includes("hi")) return responses.hi;
  if (userInput.includes("yarnie")) return responses.yarnie;
  if (userInput.includes("customize")) return responses.customize;
  if (userInput.includes("order update")) return responses.orderupdate;
  if (userInput.includes("thank you")) return responses.thankyou;

  return responses.default;
}
