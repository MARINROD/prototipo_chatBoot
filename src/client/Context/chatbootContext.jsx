import { createContext, useState } from "react";
export const chatbootContext = createContext({});



function ChatBootContextProvider({ children }) {
    const [ask, setAsk] = useState('');
    const [chatMessages, setChatMessages] = useState([
        {
            text: "Oi, eu sou a IA Foresea. Estou aqui pra colaborar com você sobre nosso sistema de gestão integrado. Você pode fazer qualquer pergunta sobre o tema que vou tentar te ajudar com respostas, referencias e links de nossos sistemas.Não sabe como começar? Você pode tentar o seguinte:Temos algum procedimento para desenvolvimento dos planos de manutenção dos equipamentos das sondas? Nossos planos de manutenção consideram as recomendações do fabricante? Qual procedimento e qual item?"
        }
    ])

    return (
        <chatbootContext.Provider value={{
            ask,
            setAsk,
            chatMessages,
            setChatMessages,
        }}>
            {children}
        </chatbootContext.Provider>
    )
};
export default ChatBootContextProvider;