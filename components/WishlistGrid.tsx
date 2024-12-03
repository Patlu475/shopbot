'use client'

import { useState } from 'react'
import {WishlistItem} from './WishlistItem'
import { Button } from '@/components/ui/button'

// This is a mock data array. In a real application, you would fetch this data from an API or database.
const wishlistItems = [
  {
    id: 1,
    name: 'Wireless Noise-Cancelling Headphones',
    image: '/placeholder.svg?height=200&width=200',
    price: 299.99,
    size: 'One Size',
    color: 'Black',
    website: 'https://example.com/headphones',
    category: 'Electronics',
    priceDrop: true,
  },
  {
    id: 2,
    name: 'Ergonomic Office Chair',
    image: '/placeholder.svg?height=200&width=200',
    price: 249.99,
    size: 'Standard',
    color: 'Gray',
    website: 'https://example.com/office-chair',
    category: 'Furniture',
    priceDrop: false,
  },
  {
    id: 3,
    name: 'Smart Fitness Watch',
    image: '/placeholder.svg?height=200&width=200',
    price: 199.99,
    size: 'One Size',
    color: 'Silver',
    website: 'https://example.com/fitness-watch',
    category: 'Wearables',
    priceDrop: true,
  },
  {
    id: 4,
    name: 'Portable Espresso Maker',
    image: '/placeholder.svg?height=200&width=200',
    price: 79.99,
    size: 'Compact',
    color: 'Stainless Steel',
    website: 'https://example.com/espresso-maker',
    category: 'Kitchen Appliances',
    priceDrop: false,
  },
]

interface WishlistGridProps {
  categoryFilter: string | null
  isSelectMode: boolean
  showPriceDrops: boolean
}

export default function WishlistGrid({ categoryFilter, isSelectMode, showPriceDrops }: WishlistGridProps) {
  const [items, setItems] = useState(wishlistItems)
  const [selectedItems, setSelectedItems] = useState<number[]>([])

  const filteredItems = items.filter((item) => {
    if (categoryFilter && item.category !== categoryFilter) return false
    if (showPriceDrops && !item.priceDrop) return false
    return true
  })

  const handleItemSelect = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    )
  }

  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    setSelectedItems((prev) => prev.filter((itemId) => itemId !== id))
  }

  const handleDeleteSelected = () => {
    setItems((prevItems) => prevItems.filter((item) => !selectedItems.includes(item.id)))
    setSelectedItems([])
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <WishlistItem
            key={item.id}
            item={item}
            isSelectMode={isSelectMode}
            isSelected={selectedItems.includes(item.id)}
            onSelect={() => handleItemSelect(item.id)}
            onDelete={() => handleDeleteItem(item.id)}
          />
        ))}
      </div>
      {isSelectMode && selectedItems.length > 0 && (
        <div className="mt-8 flex justify-end">
          <Button
            variant="destructive"
            onClick={handleDeleteSelected}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Delete Selected ({selectedItems.length})
          </Button>
        </div>
      )}
    </div>
  )
}

