import './sidebar.css'
import plus from '../../../assets/plus.png'
import Recents from '../Recents/Recents'
import useChatBoot from '../../hooks/UseChatBoot'
function SideBar() {
    const { setAsk, setChatMessages, } = useChatBoot();

    function handleNewConversation() {
        setAsk('');
        setChatMessages([
            {
                text: "Oi, eu sou a IA Foresea. Estou aqui pra colaborar com você sobre nosso sistema de gestão integrado. Você pode fazer qualquer pergunta sobre o tema que vou tentar te ajudar com respostas, referencias e links de nossos sistemas.Não sabe como começar? Você pode tentar o seguinte:Temos algum procedimento para desenvolvimento dos planos de manutenção dos equipamentos das sondas? Nossos planos de manutenção consideram as recomendações do fabricante? Qual procedimento e qual item?"
            }
        ])
    }

    return (
        <div className='SideBar'>
            <button
                className='btn-add-conversation'
                onClick={handleNewConversation}
            >
                <img className='plus' src={plus} alt="plus" />
                Nova Conversa
            </button>
            <strong className='recents-strong'>Recentes</strong>
            <Recents />
            <Recents />
            <Recents />
            <Recents />
        </div>
    )
}

export default SideBar;