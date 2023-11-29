import './chatboot.css'
import ChatMessage from '../ChatMessage/ChatMessage'
import Ask from '../Ask/Ask'
import { useState } from 'react'
import useChatBoot from '../../hooks/UseChatBoot'
function ChatBoot() {
    const { ask, setAsk, chatMessages, setChatMessages } = useChatBoot();

    return (
        <div className='ChatBoot'>
            <div className='chatboot-container'>
                {chatMessages.map((chatMessage, index) => {
                    return (
                        <ChatMessage key={index} text={chatMessage.text} />
                    )
                })}
            </div>
            <Ask />
        </div>
    )
}

export default ChatBoot;