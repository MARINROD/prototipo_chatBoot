import { useContext } from "react";
import { chatbootContext } from "../Context/chatbootContext";


function useChatBoot() {
    return useContext(chatbootContext);
}

export default useChatBoot;