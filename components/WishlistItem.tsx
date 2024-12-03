"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { ArrowDownRight, Circle, CheckCircle, Trash2 } from 'lucide-react';
import Image from "next/image";

interface WishlistItemProps {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
    size: string;
    color: string;
    website: string;
    category: string;
    priceDrop: boolean;
  };
  isSelectMode: boolean;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
}

export function WishlistItem({
  item,
  isSelectMode,
  isSelected,
  onSelect,
  onDelete,
}: WishlistItemProps) {
  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 h-[450px] flex flex-col">
      <div className="relative h-[200px]">
        {isSelectMode && (
          <button 
            onClick={onSelect} 
            className="absolute top-2 right-2 z-10"
          >
            {isSelected ? (
              <CheckCircle className="text-green-500 h-6 w-6" />
            ) : (
              <Circle className="text-gray-500 h-6 w-6" />
            )}
          </button>
        )}
        
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col flex-1 justify-between mt-4">
        <div className="space-y-2">
          <p className="text-base sm:text-xl text-black dark:text-neutral-200 font-semibold line-clamp-2">
            {item.name}
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-1">
            {item.category} • {item.website}
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-1">
            Size: {item.size} • Color: {item.color}
          </p>
        </div>

        <div className="flex items-center justify-between mt-auto pt-4">
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black dark:bg-zinc-800">
            <span className="text-xs font-bold">Price</span>
            <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0">
              ${item.price}
            </span>
          </button>

          {item.priceDrop && (
            <span className="text-green-500 text-sm flex items-center">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              Price Drop
            </span>
          )}

          <button 
            onClick={onDelete}
            className="text-red-500 hover:text-red-600 transition-colors"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </BackgroundGradient>
  );
}
