Here is an updated version of the README with placeholders for screenshots of the login page and chat page:

---

# **AiworkSquad Chat Application**

A simple chat application built with React, designed to simulate a chatbot that responds based on selected departments (Marketing, Sales). Users can log in, interact with the bot, and view chat history.

## **Features**

- **Login Page**: Simple form for user authentication (with basic validation and local storage support).
- **Chat Interface**: Interactive chat area where users can send messages and receive bot responses.
- **Department Selection**: Choose between Marketing and Sales for department-specific bot responses.
- **Chat History**: View past conversations and load them with a click.
- **Responsive UI**: The app layout is optimized for both desktop and mobile screens.
- **Logout Functionality**: Securely log out and reset the user state.

## **Screenshots**

### **Login Page**

![Login Page](./screenshots/loginpg.png)

The login page where users can enter their credentials and access the chat interface. It features a "Remember me" option to persist credentials across sessions.

### **Chat Page**

![Chat Page](./screenshots/chatpage.png)

The main chat interface where users can interact with the bot. Here, users can choose between different departments and view chat history.

## **Installation**

1. Clone the repository:

   ```bash
   git clone https://github.com/<your-username>/AiworkSquad-Chat.git
   ```

2. Navigate to the project folder:

   ```bash
   cd AiworkSquad-Chat
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the application:

   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app in action.

## **Tech Stack**

- **Frontend**: React
- **State Management**: React Hooks (`useState`, `useEffect`, `useRef`)
- **Icons**: `lucide-react` (for icons in the chat interface)

## **Features and Functionality**

- **LoginPage Component**: Handles user login, with a "remember me" feature using local storage to persist credentials.
- **ChatInterface Component**: Allows users to select a department (Marketing, Sales) and interact with the chatbot. Messages are displayed and auto-scrolled to the bottom.
- **Message Handling**: The chat simulates responses based on the department and user input.
- **Chat History**: Allows users to save and load past conversations.

## **Future Enhancements**

- Implement real-time chat functionality with a backend (e.g., Node.js, Express).
- Integrate a dynamic chatbot using NLP (e.g., GPT-3 or DialogFlow).
- Improve authentication by using secure token storage (JWT).
- Implement responsive design improvements for all screen sizes.

## **Contributing**

Feel free to fork this repository, submit pull requests, or open issues for any bugs or feature suggestions!

### **Steps to Contribute**

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### **Notes:**

1. Make sure to create a `screenshots` folder in your project directory and upload the images `login-page.png` and `chat-page.png` there.
2. Replace `<your-username>` in the clone URL with your actual GitHub username.

This will display your app’s interface clearly for visitors and contributors, making it easy for them to understand the layout and usage.
