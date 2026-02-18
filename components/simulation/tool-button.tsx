'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { ElementType } from 'react'

type ToolButtonProps = {
  icon: ElementType
  label: string
  isSelected?: boolean
  onClick: () => void
  className?: string
}

export const ToolButton = ({
  icon: Icon,
  label,
  isSelected = false,
  onClick,
  className,
}: ToolButtonProps) => {
  return (
    <Button
      variant='ghost'
      onClick={onClick}
      className={cn(
        'w-full flex justify-start items-center gap-3 px-4 py-2.5 rounded-none text-sm transition-colors duration-300 h-auto',
        isSelected && 'bg-gray-700', !isSelected && 'hover:bg-gray-800', className
      )}
    >
      <Icon className='w-3.5 h-3.5 text-gray-400 shrink-0' />
      <span className='text-[13px]'>{label}</span>
    </Button>
  )
}