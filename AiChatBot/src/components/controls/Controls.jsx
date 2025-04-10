import { useState } from "react"
import styles from "./Controls.module.css"
import TextareaAutosize from 'react-textarea-autosize';

export function Controls({onSend})
{

const[content , setContent] = useState("");

 function handleContentChange(event)
 {
    setContent(event.target.value);
 }

 function handleButtonChange()
 {
    if(content.length > 0 )
        {
            onSend(content);
            setContent("");
        }
 }

 function handleEnterChange(event)
 {
    if(event.key === "Enter" && !event.shiftKey  )
        {
            event.preventDefault();
            handleButtonChange();
        }
}

    return(
        <div className={styles.Controls}>
            <div className={styles.TextAreaContainer}>
            <TextareaAutosize 
            className={styles.TextArea} 
            minRows = {1}
            maxRows = {4}
            placeholder="Message AI ChatBot"
            value={content}
            onChange={handleContentChange}
            onKeyDown={handleEnterChange}
            />
            
            </div>
            <div>
            <button className={styles.Button} onClick={handleButtonChange}>
                <img src="send.svg" alt="" />
            </button>
            </div>
            
        </div>
    )    
}