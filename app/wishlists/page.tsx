'use client'

import { useState } from 'react'
import WishlistHeader from '@/components/WishlistHeader'
import WishlistFilterBar from '@/components/WishlistFilterBar'
import WishlistGrid from '@/components/WishlistGrid'

export default function WishlistsPage() {
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null)
  const [isSelectMode, setIsSelectMode] = useState(false)
  const [showPriceDrops, setShowPriceDrops] = useState(false)

  return (
    <div className="min-h-screen bg-gray-950">
      <WishlistHeader />
      <div className="container mx-auto px-4">
        <WishlistFilterBar
          onCategoryFilter={setCategoryFilter}
          onSelectMode={setIsSelectMode}
          onPriceDropFilter={setShowPriceDrops}
        />
        <div className="py-4">
          <WishlistGrid
            categoryFilter={categoryFilter}
            isSelectMode={isSelectMode}
            showPriceDrops={showPriceDrops}
          />
        </div>
      </div>
    </div>
  )
}

