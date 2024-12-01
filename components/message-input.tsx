"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface MessageInputProps {
  onSubmit: (message: string) => void;
  placeholder?: string;
}

export function MessageInput({ onSubmit, placeholder = "Type a message..." }: MessageInputProps) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative ">
      <div className="relative flex-1">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={placeholder}
          className={cn(
            "pr-12 pb-12 pt-4 bg-black/20 border-white/10 text-white/70 placeholder:text-white/40",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            "rounded-2xl min-h-[80px]"
          )}
        />
        <div className="flex flex-between mt-1 mb-1">
        <Button 
          type="button" 
          variant="ghost"
          size="sm"
          className=" absolute bottom-2 h-8  px-1 text-white/40 hover:bg-white/6 hover:text-white/70 border-2 border-dashed border-lime-950 ml-2"
        >
          <Paperclip className="h-4 w-4 mr-1  " />
          <span className="text-xs">Attach image</span>
        </Button>
        

        <Button 
          type="submit" 
          size="icon"
          className={cn(
            "absolute right-3 top-10 h-8 w-8 bg-transparent hover:bg-white/6 hover:text-white/70 rounded-xl ",
            !message.trim() && "opacity-40 cursor-not-allowed"
          )}
          disabled={!message.trim()}
        >
          <ArrowUp className="h-5 w-5 text-white" />
        </Button>
        </div>
        
      </div>
    </form>
  );
}