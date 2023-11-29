import './chatmessage.css'

function ChatMessage({ text }) {

    return (
        <div className='ChatMessage'>
            <p>{text}</p>
        </div>
    )
}

export default ChatMessage;