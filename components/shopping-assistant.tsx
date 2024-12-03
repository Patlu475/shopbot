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
      type: "user",
    };
    setMessages((prev) => [...prev, userMessage]);

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "This is a simulated response. Replace with actual API response.",
        type: "assistant",
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-background">
    
      <main className="flex-1 flex flex-col items-center justify-center pl-12 sm:pl-14 md:pl-0 md:items-center md:justify-center relative">
        {showWelcome ? (
          <>
            <Spotlight
              className="-top-40 left-0 sm:left-20 md:left-1/2 md:-translate-x-1/2 md:-top-24"
              fill="white"
            />

            {/* Mobile Layout */}
            <div className="flex-1 flex flex-col md:hidden">
              {/* Centered Heading */}
              <div className="flex-1 flex items-center justify-center">
                <h1 className="font-geist font-medium text-xl sm:text-2xl tracking-tight text-center px-4">
                  What can I help you buy?
                </h1>
              </div>

              {/* Prompt Cards at the bottom above Message Input */}
              <div className="fixed bottom-[calc(64px+16px)] left-0 right-0 flex justify-center mb-16">
                <div className="w-full max-w-md px-4 space-y-3">
                  {[
                    { icon: "shopping-bag", title: "Find trendy fashion items for summer" },
                    { icon: "gift", title: "Suggest perfect gift ideas for birthdays" },
                    { icon: "tag", title: "Show me the best deals on electronics" },
                  ].map((prompt) => (
                    <PromptCard
                      key={prompt.title}
                      icon={prompt.icon}
                      title={prompt.title}
                      className="w-full"
                    />
                  ))}
                </div>
              </div>

              {/* Message Input fixed at the bottom */}
              <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
                <div className="p-4 max-w-2xl mx-auto">
                  <MessageInput
                    onSubmit={handlePromptSubmit}
                    placeholder="What can I help you buy?"
                  />
                </div>
              </div>
            </div>

            {/* Laptop/Desktop Layout */}
            <div className="hidden md:flex md:flex-col md:items-center md:justify-center md:gap-8 w-full max-w-7xl">
              {/* Heading */}
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-center px-4">
                What can I help you buy?
              </h1>

              {/* Message Input */}
              <div className="w-full max-w-2xl px-4">
                <MessageInput
                  onSubmit={handlePromptSubmit}
                  placeholder="What can I help you buy?"
                />
              </div>

              {/* Prompt Cards */}
              <div className="w-full max-w-4xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { icon: "shopping-bag", title: "Find trendy fashion items for summer" },
                  { icon: "gift", title: "Suggest perfect gift ideas for birthdays" },
                  { icon: "tag", title: "Show me the best deals on electronics" },
                ].map((prompt) => (
                  <PromptCard
                    key={prompt.title}
                    icon={prompt.icon}
                    title={prompt.title}
                    className="w-full"
                  />
                ))}
              </div>
            </div>
          </>
        ) : null}
      </main>
    </div>
  );
}
