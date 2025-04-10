import styles from "./Chat.module.css"
import Markdown from 'react-markdown'
export function Chat({ messages }) {
   const Welcome_message = 
    
        {
            role:"assistance",
            content:"Hello How Can i Help You!"
        }
    
   
     return (
      <div className={styles.Chat}>
        {[Welcome_message , ...messages].map(({role , content} , index) => (
          <div key={index} className={styles.Message} data-role={role}>
          <Markdown>{content}</Markdown>  
          </div>
        ))}
      </div>
    );
  }
  