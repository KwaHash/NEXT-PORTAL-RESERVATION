'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export interface ISampleRoomItem {
  id: string
  name: string
  image: string
  description: string
}

interface ISampleRoomProps {
  room: ISampleRoomItem
  selectedImage: string
  onSelect: (image: string) => void
}

export function SampleRoom({ room, selectedImage, onSelect }: ISampleRoomProps) {
  const isSelected = selectedImage === room.image

  return (
    <Button onClick={() => onSelect(room.image)}
      className={cn('relative w-full h-auto aspect-video rounded-none p-0 border-2', isSelected ? 'border-red-600' : 'border-none')}
    >
      <Image
        src={room.image}
        alt={room.name}
        width={800}
        height={800}
        className='w-full h-full object-cover'
      />
      <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
        <span className='text-white font-medium text-base tracking-widest'>
          {room.name}
        </span>
      </div>
    </Button>
  )
}
