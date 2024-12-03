'use client'

import { useState } from 'react'
import { CheckSquare, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface WishlistFilterBarProps {
  onSelectMode: (enabled: boolean) => void;
  onCategoryFilter: (category: string) => void;
  onPriceDropFilter: (enabled: boolean) => void;
  activeFilter: string;
}

export function WishlistFilterBar({
  onSelectMode,
  onCategoryFilter,
  onPriceDropFilter,
  activeFilter,
}: WishlistFilterBarProps) {
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "clothing", label: "Clothing & Fashion" },
    { value: "electronics", label: "Electronics" },
    { value: "home", label: "Home & Living" },
    { value: "beauty", label: "Beauty & Personal Care" },
    { value: "sports", label: "Sports & Fitness" },
    { value: "books", label: "Books & Media" },
    { value: "toys", label: "Toys & Games" },
    { value: "jewelry", label: "Jewelry & Accessories" },
    { value: "automotive", label: "Automotive" },
  ];

  const [isSelectMode, setIsSelectMode] = useState(false);

  const handleSelectClick = () => {
    setIsSelectMode(!isSelectMode);
    onSelectMode(!isSelectMode);
  };

  return (
    <div className="bg-gray-800 shadow-md py-2 px-4 rounded-lg mb-4 mt-5">
      <div className="flex justify-end items-center space-x-2">
        <Select onValueChange={(value) => onCategoryFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.value} value={category.value}>
                {category.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          variant={activeFilter === 'priceDrops' ? 'default' : 'outline'}
          onClick={() => onPriceDropFilter(activeFilter !== 'priceDrops')}
        >
          Price Drops
        </Button>

        <Button
          variant={isSelectMode ? "default" : "outline"}
          size="icon"
          onClick={handleSelectClick}
        >
          {isSelectMode ? (
            <Circle className="h-4 w-4" />
          ) : (
            <CheckSquare className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
