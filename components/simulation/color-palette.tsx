'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface IColorPaletteItem {
  name: string
  colors: string[]
}

interface IColorPaletteProps {
  palette: IColorPaletteItem
  selectedColor: string
  onSelect: (color: string) => void
}

export function ColorPalette({ palette, selectedColor, onSelect }: IColorPaletteProps) {
  return (
    <div>
      <h4 className='text-sm font-medium mb-2'>{palette.name}</h4>
      <div className='flex gap-2'>
        {palette.colors.map((color) => (
          <Button
            key={color}
            onClick={() => onSelect(color)}
            className={cn('w-10 h-10 rounded-none border-2', selectedColor === color ? 'border-red-600' : 'border-none')}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>
    </div>
  )
}
