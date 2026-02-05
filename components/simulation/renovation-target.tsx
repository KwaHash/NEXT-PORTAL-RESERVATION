'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type React from 'react'

export interface IRenovationTargetItem {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
}

interface IRenovationTargetProps {
  item: IRenovationTargetItem
  isSelected: boolean
  onSelect: () => void
}

export function RenovationTarget({ item, isSelected, onSelect }: IRenovationTargetProps) {
  const Icon = item.icon
  return (
    <Button
      variant='ghost'
      onClick={onSelect}
      className={cn('flex flex-col gap-1 h-auto p-3 rounded-none border-2 transition-all duration-300',
        isSelected
          ? 'border-transparent border-2 border-[#DE3B75] bg-[#FCEEF3] text-[#DE3B75]'
          : 'border-gray-300 hover:border-gray-500 text-[#71717A] hover:text-[#22222A]'
      )}
    >
      <Icon className={cn('w-6 h-6')} />
      <span className='text-base font-bold'>{item.label}</span>
    </Button>
  )
}
