"use client";

import { useState } from "react";
import { MessageInput } from "@/components/message-input";
import { Sidebar } from "@/components/sidebar";
import { LoadingScreen } from "@/components/loading-screen";
import { MessageList } from "@/components/chat/message-list";
import { Message } from "@/types/chat";
import { PromptCard } from "@/components/prompt-card";
import { Spotlight } from "./ui/Spotlight";

export function ShoppingAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handlePromptSubmit = async (message: string) => {
    setShowWelcome(false);
    setIsLoading(true);
    
    const userMessage: Message = {
      id: Date.now().toString(),
      content: message,
      type: 'user'
    };
    setMessages(prev => [...prev, userMessage]);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "This is a simulated response. Replace with actual API response.",
        type: 'assistant'
      };
      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <main className="flex-1 flex flex-col pl-12 sm:pl-14 md:pl-16 relative">
        {showWelcome ? (
          <>
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="white"
            />
            <div className="flex-1 flex items-center justify-center">
              <div className="max-w-3xl w-full space-y-8 sm:space-y-12 px-2 sm:px-4">
                <div className="flex flex-col items-center space-y-6 sm:space-y-8">
                  <h1 className="font-geist font-medium sm:text-40px font-bold tracking-tight md:text-46px break-words sm:whitespace-nowrap px-2">
                  What can I help you buy?
                  </h1>
                  <div className="w-full max-w-2xl px-2">
                    <MessageInput onSubmit={handlePromptSubmit} placeholder="What can I help you buy?" />
                  </div>
                </div>

                <div className="flex flex-row gap-3 sm:gap-4 max-w-2xl mx-auto px-2 items-center justify-center rounded-2xl">
                  {[
                    { icon: "shopping-bag", title: "Find trendy fashion items for summer" },
                    { icon: "gift", title: "Suggest perfect gift ideas for birthdays" },
                    { icon: "tag", title: "Show me the best deals on electronics" },
                  ].map((prompt) => (
                    <PromptCard
                      key={prompt.title}
                      icon={prompt.icon}
                      title={prompt.title}
                      onClick={() => handlePromptSubmit(prompt.title)}
                      className="rounded-full"
                    />
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <MessageList messages={messages} />
            <div className="sticky bottom-0 border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
              <div className="mx-auto max-w-3xl p-2 sm:p-4">
                <MessageInput onSubmit={handlePromptSubmit} />
              </div>
            </div>
          </>
        )}
        
        {isLoading && <LoadingScreen />}
      </main>
    </div>
  );
}