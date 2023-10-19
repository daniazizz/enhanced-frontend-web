import {
  ChatInterface,
  ChatMessage,
  AskAiResponse,
  Sender,
} from "../types/chatTypes";
import api from "./apiService";

const endpoint = "/enhanced_app_chats/";

const getChats = () => {
  return api.instance.get<ChatInterface[]>(endpoint);
};

const getChat = (chatId: string) => {
  return api.instance.get<ChatInterface>(endpoint + `${chatId}`);
};

const newChat = (title: string, content: string) => {
  return api.instance.post<ChatInterface>(endpoint, {
    title,
    content,
    sender: "user",
  });
};

const deleteChat = (chatId: string) => {
  return api.instance.delete(endpoint + `${chatId}/`);
};

const changeTitle = (chatId: string, title: string) => {
  return api.instance.patch(endpoint + `${chatId}/`, {
    title,
  });
};

const askAi = (
  prompt: string,
  messages: ChatMessage[],
  max_tokens = 50,
  onFail: () => void
) => {
  return api.instance
    .post<AskAiResponse>(
      // "https://enhancedfunctionapp.azurewebsites.net/api/askAi",
      "https://qu3krwu302.execute-api.eu-north-1.amazonaws.com/default/askAi",
      {
        prompt,
        messages,
        max_tokens: max_tokens,
      }
    )
    .catch((e) => {
      console.log(e.response.data);

      onFail();
      throw e;
    });
};

const addMessage = (chatId: string, content: string, sender: Sender) => {
  return api.instance.post<ChatMessage>(endpoint + `${chatId}/add_message/`, {
    content,
    sender,
  });
};

export default {
  getChats,
  getChat,
  newChat,
  askAi,
  addMessage,
  deleteChat,
  changeTitle,
};
