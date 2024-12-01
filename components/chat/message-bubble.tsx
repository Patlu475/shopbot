"use client";

import { cn } from "@/lib/utils";
import { Message } from "@/types/chat";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bot, User } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
}

export function MessageBubble({ message }: MessageBubbleProps) {
  const isUser = message.type === 'user';
  
  return (
    <div className={cn(
      "flex w-full items-start gap-3 sm:gap-4",
      isUser ? "flex-row-reverse" : "flex-row"
    )}>
      <Avatar className={cn(
        "h-8 w-8 sm:h-9 sm:w-9",
        isUser 
          ? "bg-gradient-to-br from-green-400 via-red-400 to-blue-500" 
          : "bg-gradient-to-br from-violet-400 via-pink-400 to-orange-500 rounded-lg"
      )}>
        {isUser ? (
          <AvatarFallback className="text-primary-foreground">
            <User className="h-5 w-5" />
          </AvatarFallback>
        ) : (
          <AvatarFallback className="rounded-lg">
            <Bot className="h-5 w-5" />
          </AvatarFallback>
        )}
      </Avatar>
      
      <div
        className={cn(
          "relative rounded-2xl px-4 py-3 max-w-[85%] sm:max-w-[75%] shadow-sm",
          isUser
            ? "bg-primary text-primary-foreground rounded-br-sm"
            : "bg-card text-card-foreground rounded-bl-sm"
        )}
      >
        <p className="text-sm sm:text-base leading-relaxed whitespace-pre-wrap break-words">
          {message.content}
        </p>
      </div>
    </div>
  );
}