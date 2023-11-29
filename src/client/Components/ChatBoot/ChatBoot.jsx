import './chatboot.css'
import ChatMessage from '../ChatMessage/ChatMessage'
import Ask from '../Ask/Ask'
import useChatBoot from '../../hooks/UseChatBoot'
function ChatBoot() {
    const { chatMessages } = useChatBoot();

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