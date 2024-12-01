"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PromptCardProps {
  icon: string;
  title: string;
  className?: string;
  onClick?: () => void;
}

export function PromptCard({ title, className, onClick }: PromptCardProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "group relative flex h-10 w-full items-center justify-between gap-3 rounded-3xl border border-dashed border-white/10 bg-transparent p-4 text-left transition-colors hover:bg-white/5",
        className
      )}
      onClick={onClick}
    >
      <span className="text-xs font-medium text-white/70">{title}</span>
      <ArrowUpRight className="h-4 w-4 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Button>
  );
}