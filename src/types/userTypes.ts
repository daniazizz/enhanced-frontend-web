import { ChatInterface } from "./chatTypes";

export interface Prompt {
  name: string;
  template: string;
}

export interface PromptCategory {
  name: string;
  prompts: Prompt[];
  emoji: string;
}

export interface LanguageGroup {
  name: string;
  code: string;
  emoji: string;
}

export interface AppData {
  user: {
    chats: ChatInterface[];
    credits: number;
    subscribed: boolean;
  };
  prompt_categories: PromptCategory[];
  languages: LanguageGroup[];
}
