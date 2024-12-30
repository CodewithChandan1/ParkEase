import { MessageCircle, User } from "lucide-react";

interface ChatMessageProps {
  message: {
    text: string;
    isBot: boolean;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
      <div
        className={`flex items-start space-x-2 max-w-[80%] ${
          message.isBot ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div
          className={`p-2 rounded-lg ${
            message.isBot
              ? "bg-gray-100 text-gray-900"
              : "bg-blue-600 text-white"
          }`}
        >
          <p className="text-sm">{message.text}</p>
        </div>
        <div
          className={`rounded-full p-2 ${
            message.isBot ? "bg-gray-200" : "bg-blue-700"
          }`}
        >
          {message.isBot ? (
            <MessageCircle className="h-4 w-4 text-gray-600" />
          ) : (
            <User className="h-4 w-4 text-white" />
          )}
        </div>
      </div>
    </div>
  );
}
