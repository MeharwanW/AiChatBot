  import { Chat } from "./components/Chats/chat";
  import styles from "./App.module.css";
  import { Controls } from "./components/controls/Controls";
  import { useState, useEffect } from "react";
  import { GoogleGenAI  } from "@google/genai"; 

  function App() {
    const [message, setMessage] = useState([]);
    
    
      const ai = new GoogleGenAI({apiKey:"AIzaSyA0Svu7LRA8P_6uPds5GsbkplL1-A2_ANY"});
    
      
     
    function addMessage(message) {
      setMessage((prevMessages) => [...prevMessages, message]);
    }

    async function handleContentSend(content) {
      if (!content || typeof content !== "string") {
        console.error("Invalid content passed to sendMessage:", content);
        return;
      }
      addMessage({ content, role: "user" });
      
      try { 
        const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents:content,
        });
        addMessage({ content:response.text, role: "assistance" });
      } catch (error) {
        console.error("❌ Error in sendMessage:", error);
        addMessage({ content: "Sorry, something went wrong.", role: "system" });
      }
    }

    return (
    
      <div className={styles.App}>
        <header className={styles.Header}>
          <img className={styles.Logo} src="/chat-bot.png" alt="AI Bot" />
          <h2 className={styles.Title}>AI CHATBOT</h2>
        </header>
        <div className={styles.ChatContainer}>
          <Chat messages={message} />
          <Controls onSend={handleContentSend} />
        </div>
      </div>
    );
  }

  export default App;
