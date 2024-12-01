"use client";

import { Plus, Heart, Bookmark, MessageSquareShare, Bot, ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const mainNavItems = [
  { icon: Plus, label: "New Chat" },
  { icon: Heart, label: "Favourites" },
  { icon: Bookmark, label: "Wishlists" },
  { icon: MessageSquareShare, label: "Feedback" },
];

const recentChats = [
  "Sidebar Navigation",
  "NextJS Sidebar Compone...",
  "Custom UI Design",
  "Custom UI Code Generatio...",
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  return (
    <nav 
      className={cn(
        "fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-white/10 bg-background/95 backdrop-blur-sm transition-[width] duration-300",
        isExpanded ? "w-52" : "w-16 md:w-14"
      )}
    >
      <div className="flex h-full flex-col flex-center p-2">
        {/* Logo Section */}
        <div className="relative flex items-center  gap-3 p-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <Bot className="h-6 w-10 text-primary-foreground" />
          </div>
          <span className={cn(
            "text-lg font-bold transition-opacity duration-200",
            isExpanded ? "opacity-100" : "opacity-0"
          )}>
            ShopBot
          </span>
          {isExpanded && (
            <button
              onClick={toggleSidebar}
              className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 p-0 text-white/70"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          )}
        </div>

        <Separator className="my-2 bg-white/10" />

        {/* Main Navigation */}
        <div className="flex flex-col gap-1">
          {mainNavItems.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                "flex w-full items-center gap-2 px-2 py-1.5",
                index === 0 ? "text-white" : "text-white/70"
              )}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              <span className={cn(
                "truncate text-xs font-normal transition-opacity duration-200",
                isExpanded ? "opacity-100" : "opacity-0"
              )}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Recent Chats Section */}
        <div className="mt-4 flex-1 overflow-y-auto">
          <h3 className={cn(
            "px-2 text-xs font-normal text-white/70 transition-opacity duration-200",
            isExpanded ? "opacity-100" : "opacity-0"
          )}>
            Recent Chats
          </h3>
          <div className="mt-2 flex flex-col gap-1">
            {recentChats.map((chat, index) => (
              <div key={index} className="flex items-center gap-2 px-2 py-1.5">
                <span className={cn(
                  "truncate text-xs font-normal text-white/70 transition-opacity duration-200",
                  isExpanded ? "opacity-100" : "opacity-0"
                )}>{chat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Section with Toggle Button when collapsed */}
        <div className="shrink-0 pt-2">
          <Separator className="mb-2 bg-white/10" />
          {!isExpanded && (
            <button
              onClick={toggleSidebar}
              className="w-full flex items-center px-2 py-1.5 mb-2 text-white/70"
            >
              <ChevronLeft className="h-5 w-5 shrink-0 rotate-180" />
            </button>
          )}
          <div className="flex items-center gap-2 p-2">
            <Avatar className="h-8 w-8 bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500">
              <AvatarFallback className="text-primary-foreground font-normal text-xs bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500">
                P
              </AvatarFallback>
            </Avatar>
            <div className={cn(
              "flex flex-col transition-opacity duration-200",
              isExpanded ? "opacity-100" : "opacity-0"
            )}>
              <span className="text-xs font-normal">patlu475</span>
              <span className="text-[10px] text-muted-foreground">Free</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}