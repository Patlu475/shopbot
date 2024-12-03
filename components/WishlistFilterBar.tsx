'use client'

import { useState } from 'react'
import { Filter, CheckSquare, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface WishlistFilterBarProps {
  onCategoryFilter: (category: string | null) => void
  onSelectMode: (isSelectMode: boolean) => void
  onPriceDropFilter: (showPriceDrops: boolean) => void
}

export default function WishlistFilterBar({
  onCategoryFilter,
  onSelectMode,
  onPriceDropFilter
}: WishlistFilterBarProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const handleFilterClick = (filter: string) => {
    if (activeFilter === filter) {
      setActiveFilter(null)
      onCategoryFilter(null)
      onSelectMode(false)
      onPriceDropFilter(false)
    } else {
      setActiveFilter(filter)
      if (filter === 'category') {
        onCategoryFilter('SomeCategory') // Replace with actual category selection logic
      } else if (filter === 'select') {
        onSelectMode(true)
      } else if (filter === 'priceDrops') {
        onPriceDropFilter(true)
      }
    }
  }

  return (
    <div className="bg-gray-800 shadow-md py-2 px-4 rounded-lg mb-4">
      <div className="flex justify-end space-x-2">
        <Button
          variant={activeFilter === 'category' ? 'default' : 'outline'}
          size="icon"
          onClick={() => handleFilterClick('category')}
        >
          <Filter className="h-4 w-4" />
        </Button>
        <Button
          variant={activeFilter === 'select' ? 'default' : 'outline'}
          size="icon"
          onClick={() => handleFilterClick('select')}
        >
          <CheckSquare className="h-4 w-4" />
        </Button>
        <Button
          variant={activeFilter === 'priceDrops' ? 'default' : 'outline'}
          size="icon"
          onClick={() => handleFilterClick('priceDrops')}
        >
          <Sparkles className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

