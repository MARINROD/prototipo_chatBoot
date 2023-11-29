import './ask.css'
import addArqv from '../../../assets/add-arqv.png'
import send from '../../../assets/send.png'
import { useState } from 'react'
import useChatBoot from '../../hooks/UseChatBoot';
// import loopDoChat from '../../../api/gpt';
import gerarResposta from '../../../api/gpt';
function Ask() {
    const [file, setFile] = useState('');
    const { ask, setAsk, setChatMessages, chatMessages } = useChatBoot();


    function handleFileChange(event) {
        const file = event.target.files[0];
        setFile(file);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        if (ask.length === 0) {
            return;
        }


        setChatMessages((prevChatMessages) => [...prevChatMessages, { text: ask }]);
        setAsk('');
        const response = await gerarResposta(ask);
        setChatMessages((prevChatMessages) => [...prevChatMessages, { text: response }]);


    }

    return (
        <form className='ask' onSubmit={handleSubmit}>
            <label className='add-arqv'>
                <img className='add-arqv' src={addArqv} alt="addArqv" />
                <input
                    id="file-input"
                    type="file"
                    onChange={handleFileChange}
                />
            </label>
            <input
                className='ask-input'
                type="text"
                placeholder='Digite aqui a sua duvida...'
                value={ask}
                onChange={(event) => setAsk(event.target.value)}
            />
            <button
                className='btn-send'
                type='submit'
            >
                <img className='send' src={send} alt="send" />
            </button>
        </form>
    )
}

export default Ask;