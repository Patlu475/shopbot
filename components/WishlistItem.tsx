import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { ArrowDownRight, Circle, CheckCircle, Trash2 } from 'lucide-react'

interface WishlistItemProps {
  item: {
    id: number
    name: string
    image: string
    price: number
    size: string
    color: string
    website: string
    category: string
    priceDrop: boolean
  }
  isSelectMode: boolean
  isSelected: boolean
  onSelect: () => void
  onDelete: () => void
}

export default function WishlistItem({ item, isSelectMode, isSelected, onSelect, onDelete }: WishlistItemProps) {
  return (
    <Card className="overflow-hidden bg-gray-800 border-gray-700">
      <CardContent className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={item.image}
            alt={item.name}
            layout="fill"
            objectFit="cover"
          />
          {item.priceDrop && (
            <div className="absolute top-2 left-2 bg-red-500 text-white p-1 rounded">
              <ArrowDownRight className="h-4 w-4" />
            </div>
          )}
          {isSelectMode && (
            <button
              className="absolute top-2 right-2 bg-gray-700 rounded-full p-1"
              onClick={onSelect}
            >
              {isSelected ? (
                <CheckCircle className="h-6 w-6 text-blue-400" />
              ) : (
                <Circle className="h-6 w-6 text-gray-400" />
              )}
            </button>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-geist-bold mb-2 text-gray-100">{item.name}</h3>
          <p className="text-gray-300 mb-2">${item.price.toFixed(2)}</p>
          <p className="text-sm text-gray-400 mb-1">Size: {item.size}</p>
          <p className="text-sm text-gray-400 mb-1">Color: {item.color}</p>
          <p className="text-sm text-gray-400 mb-1">Category: {item.category}</p>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-700 p-4">
        {isSelectMode && isSelected ? (
          <Button
            variant="destructive"
            className="w-full"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        ) : (
          <Button
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => window.open(item.website, '_blank')}
          >
            Check Availability
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

