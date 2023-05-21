import React from "react"
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatPage = (props) => {
    const chatProps = useMultiChatLogic(
        '4c403451-2ecc-423f-8712-00af8e416ff0', 
        props.user.username, 
        props.user.secret
        );
    return (
        <div style={{ height: '100vh' }}>
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{ height: '100%' }}/>
        </div>
    );
}

export default ChatPage