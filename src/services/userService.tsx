import { AppData, PromptCategory } from "../types/userTypes";
import apiService from "./apiService";

const user_endpoint = "/user_app_data/";

// Backend response:
// {'user': {'chats': chats, 'credits': credits, 'subscribed': subscribed}, 'prompt_categories': prompt_categories, 'languages': languages}
const getAppData = () => {
  return apiService.instance.get<AppData>(user_endpoint);
};

const getPromptCategories = (languageCode: string) => {
  return apiService.instance.get<PromptCategory[]>(
    `/language_group/?code=${languageCode}`
  );
};

export default {
  getUser: getAppData,
  getPromptCategories,
};
