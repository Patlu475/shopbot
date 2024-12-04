"use client";

import {
  Plus,
  Heart,
  Bookmark,
  MessageSquareShare,
  Bot,
  ChevronLeft,
  MenuIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useUser, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const mainNavItems = [
  { icon: Plus, label: "New Chat", url: "/" },
  { icon: Heart, label: "Favourites", url: "/favourites" },
  { icon: Bookmark, label: "Wishlists", url: "/wishlists" },
  { icon: MessageSquareShare, label: "Feedback", url: "/feedback" },
];

const recentChats = [
  "Sidebar Navigation",
  "NextJS Sidebar Compone...",
  "Custom UI Design",
  "Custom UI Code Generatio...",
];

export function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { user } = useUser();

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isExpanded) {
        toggleSidebar();
      }
    };

    if (isExpanded) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [isExpanded, toggleSidebar]);

  return (
    <>
      {/* Mobile Header - Only visible when sidebar is collapsed */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between p-4 md:hidden",
          isExpanded && "hidden"
        )}
      >
        {/* Toggle Button */}
        <button onClick={toggleSidebar} className="text-white/70">
          <MenuIcon className="h-6 w-6" />
        </button>

        {/* Center Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
            <Bot className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold">ShopBot</span>
        </div>

        {/* User Avatar */}
        <Avatar className="h-8 w-8 bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500">
          <AvatarFallback className="text-primary-foreground font-normal text-xs bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                sign-in
              </SignInButton>
            </SignedOut>
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Mobile Toggle Button - Only visible when sidebar is collapsed */}
      <div className="fixed top-0 left-0 z-[60] p-4 md:hidden">
        <button onClick={toggleSidebar} className="text-white/70">
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar Nav */}
      <nav
        className={cn(
          "fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-white/10 bg-background/95 backdrop-blur-sm transition-all duration-300",
          isExpanded
            ? "w-[100vw] sm:w-[80vw] md:w-52" // Full width on mobile, 80% on tablet, fixed on desktop
            : "w-0 md:w-14", // Hidden on mobile/tablet, fixed small width on desktop
          "md:translate-x-0",
          !isExpanded && "-translate-x-full md:translate-x-0" // Hide completely when collapsed on mobile
        )}
      >
        <div className="flex h-full flex-col p-2 mt-[60px] md:mt-0">
          {" "}
          {/* Added top margin for mobile */}
          {/* Logo Section */}
          <div
            className={cn(
              "relative flex items-center gap-3 p-2",
              !isExpanded && "md:flex hidden" // Hide on mobile when collapsed
            )}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary md:flex">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <span
              className={cn(
                "text-lg font-bold transition-opacity duration-200",
                isExpanded ? "opacity-100" : "opacity-0"
              )}
            >
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
          <div className="flex flex-col gap-1 overflow-hidden">
            {mainNavItems.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "w-full px-2 py-1.5 overflow-hidden",
                  index === 0 ? "text-white" : "text-white/70"
                )}
              >
                <Link
                  href={item.url}
                  className="flex items-center min-w-0 overflow-hidden"
                >
                  <item.icon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 shrink-0" />
                  <span
                    className={cn(
                      "truncate text-[11px] md:text-xs lg:text-sm font-normal transition-opacity duration-200 ml-2",
                      isExpanded ? "opacity-100" : "opacity-0 w-0"
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              </div>
            ))}
          </div>
          {/* Recent Chats Section */}
          <div
            className={cn(
              "mt-4 flex-1",
              isExpanded ? "overflow-y-auto" : "overflow-hidden"
            )}
          >
            <h3
              className={cn(
                "px-2 text-xs font-normal text-white/70 transition-opacity duration-200",
                isExpanded ? "opacity-100" : "opacity-0 w-0"
              )}
            >
              Recent Chats
            </h3>
            <div className="mt-2 flex flex-col gap-1">
              {recentChats.map((chat, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-2 px-2 py-1.5 overflow-hidden",
                    !isExpanded && "w-0"
                  )}
                >
                  <span
                    className={cn(
                      "truncate text-xs font-normal text-white/70 transition-opacity duration-200",
                      isExpanded ? "opacity-100" : "opacity-0 w-0"
                    )}
                  >
                    {chat}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* User Section with Toggle Button when collapsed */}
          <div
            className={cn(
              "shrink-0 pt-2",
              !isExpanded && "hidden md:block" // Hide on mobile when collapsed, show on desktop
            )}
          >
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
              <SignedIn>
                <UserButton />
                {isExpanded && (
                  <div
                    className={cn(
                      "flex flex-col transition-opacity duration-200",
                      isExpanded ? "opacity-100" : "opacity-0"
                    )}
                  >
                    <span className="text-xs font-normal">{user?.firstName}</span>
                    <span className="text-[10px] text-muted-foreground">Free</span>
                  </div>
                )}
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="flex items-center gap-2">
                    <Avatar className="h-8 w-8 bg-gradient-to-br from-violet-500 via-pink-500 to-orange-500">
                      <AvatarFallback className="text-primary-foreground font-normal text-xs">
                        Sign In
                      </AvatarFallback>
                    </Avatar>
                    {isExpanded && (
                      <div
                        className={cn(
                          "flex flex-col transition-opacity duration-200",
                          isExpanded ? "opacity-100" : "opacity-0"
                        )}
                      >
                        <span className="text-xs font-normal">Sign In</span>
                        <span className="text-[10px] text-muted-foreground">Guest</span>
                      </div>
                    )}
                  </button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile */}
      {isExpanded && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}
