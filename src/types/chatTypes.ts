export type Sender = "user" | "ai";

export interface ChatMessage {
  id?: string;
  content: string;
  sender: Sender;
  created_at: string;
}

export interface ChatInterface {
  id: string;
  title: string;
  messages: ChatMessage[];
  created_at: string;
  updated_at: string;
}

export interface AskAiResponse {
  content: string;
  finish_reason: "stop" | "length";
}
