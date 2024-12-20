import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, History,  AlertCircle, Plus, LogOut } from 'lucide-react';
import './App.css'; 
// Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [department, setDepartment] = useState('Marketing');
  const [currentUser, setCurrentUser] = useState(null);

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  return (
    <div className="app">
      {!isLoggedIn ? (
        <LoginPage setIsLoggedIn={setIsLoggedIn} setCurrentUser={setCurrentUser} />
      ) : (
        <ChatInterface 
          department={department} 
          setDepartment={setDepartment} 
          currentUser={currentUser}
          onLogout={handleLogout}
        />
      )}
    </div>
  );
};

// Login Page Component
const LoginPage = ({ setIsLoggedIn, setCurrentUser }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Check for stored credentials on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('rememberedUser');
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setFormData(userData);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Simple form validation
    if (!formData.username || !formData.password) {
      setError('Please fill out both fields.');
      return;
    }

    if (formData.username === 'user123' && formData.password === 'pass123') {
      if (rememberMe) {
        localStorage.setItem('rememberedUser', JSON.stringify(formData));
      } else {
        localStorage.removeItem('rememberedUser');
      }
      setCurrentUser(formData.username);
      setIsLoggedIn(true);
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form-container">
        <div className="login-header">
          <img src="/api/placeholder/48/48" alt="Logo" className="logo" />
          <h1>Welcome Back</h1>
          <p>Sign in to continue to Aiworksquad.</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <div className="input-icon">
              
            </div>
            <input
              type="text"
              placeholder="Email"
              className="input-field"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
          </div>

          <div className="input-group">
            <div className="input-icon">
              
            </div>
            <input
              type="password"
              placeholder="Password"
              className="input-field"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <div className="remember-section">
            <div className="remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label>Remember me</label>
            </div>
            <button 
              type="button"
              onClick={() => alert('Password reset functionality would be implemented here')}
              className="forgot-password"
            >
              Forgot password?
            </button>
          </div>

          {error && (
            <div className="error-message">
              <AlertCircle size={16} className="error-icon" />
              {error}
            </div>
          )}

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

// Chat Interface Component
const ChatInterface = ({ department, setDepartment, currentUser, onLogout }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'system',
      content: 'Introduce yourself to AIWorkSquad'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending new messages
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage
    };
    setMessages(prev => [...prev, newUserMessage]);

    // Simulate bot response based on department
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        type: 'bot',
        content: `This is a sample response for your ${department.toLowerCase()} query: "${inputMessage}"`
      };
      setMessages(prev => [...prev, botResponse]);
      
      // Add to chat history
      setChatHistory(prev => [
        { id: Date.now(), title: inputMessage.substring(0, 30) + '...', messages: [...messages, newUserMessage, botResponse] },
        ...prev
      ]);
    }, 1000);

    setInputMessage('');
  };

  // Start new chat
  const handleNewChat = () => {
    setMessages([{
      id: Date.now(),
      type: 'system',
      content: 'Start a new conversation'
    }]);
  };

  // Load chat from history
  const loadChat = (chat) => {
    setMessages(chat.messages);
  };

  return (
    <div className="chat-interface">
      <header className="chat-header">
        <div className="header-left">
          <img src="/api/placeholder/32/32" alt="Logo" className="logo" />
          <select 
            className="department-select"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className="header-right">
          <span>{currentUser}</span>
          <button
            onClick={onLogout}
            className="logout-btn"
          >
            <LogOut size={20} className="logout-icon" />
            Logout
          </button>
        </div>
      </header>

      <div className="chat-content">
        <aside className="sidebar">
          <button 
            onClick={handleNewChat}
            className="new-chat-btn"
          >
            <Plus size={20} className="new-chat-icon" />
            New Chat
          </button>
          
          <nav className="chat-history">
            <div className="chat-history-header">
              <History className="history-icon" size={20} />
              Chat History
            </div>
            {chatHistory.map((chat) => (
              <button
                key={chat.id}
                onClick={() => loadChat(chat)}
                className="chat-history-item"
              >
                <MessageSquare className="message-icon" size={20} />
                {chat.title}
              </button>
            ))}
          </nav>
        </aside>

        <main className="chat-area">
          <div className="messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.type}`}
              >
                {message.content}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="input-area">
            <form onSubmit={handleSendMessage} className="input-form">
              <input
                type="text"
                placeholder={`Enter your ${department.toLowerCase()} query here...`}
                className="input-field"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button 
                type="submit"
                className="send-btn"
              >
                <MessageSquare size={20} />
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
