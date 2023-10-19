import { createContext } from "react";
import { ChatInterface } from "@~types/chatTypes";
import { PromptCategory } from "@~types/userTypes";
// import { I18n } from "i18n-js/typings/index.d";

interface HistoryContext {
  chats: ChatInterface[];
  setChats: any;
}

export const HistoryContext = createContext<HistoryContext>({
  chats: [],
  setChats: () => {},
});

export interface PromptContext {
  promptCategories: PromptCategory[];
  setPromptCategories: (categories: PromptCategory[]) => void;
}

export const PromptContext = createContext<PromptContext>({
  promptCategories: [],
  setPromptCategories: () => {},
});

// LOCALIZATION
// export interface LocalizationContext {
//   options: string[];
//   setLocale: (locale: string) => void;
//   locale: string;
//   i18n: I18n;
// }

// export const LocalizationContext = createContext<LocalizationContext>({
//   options: [],
//   setLocale: () => {},
//   locale: "",
//   i18n: {} as I18n,
// });
