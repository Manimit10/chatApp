import React from "react"
import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatPage = (props) => {
    
    return (
        <div style={{ height: '100vh' }}>
            <PrettyChatWindow 
                projectId="4c403451-2ecc-423f-8712-00af8e416ff0"
                username=""
                secret=""
                style={{ height: '100%'}}
            />
        </div>
    );
}

export default ChatPage