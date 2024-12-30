import { useState, useCallback } from 'react';
import { CHATBOT_INITIAL_MESSAGE, CHATBOT_RESPONSES } from '../lib/constants';

interface ChatMessage {
  text: string;
  isBot: boolean;
}

export function useChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: CHATBOT_INITIAL_MESSAGE, isBot: true }
  ]);

  const getBotResponse = useCallback((userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(CHATBOT_RESPONSES)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    return "I'm not sure about that. Would you like to speak with a human agent?";
  }, []);

  const sendMessage = useCallback((text: string) => {
    const userMessage: ChatMessage = { text, isBot: false };
    const botMessage: ChatMessage = {
      text: getBotResponse(text),
      isBot: true
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  }, [getBotResponse]);

  return { messages, sendMessage };
}