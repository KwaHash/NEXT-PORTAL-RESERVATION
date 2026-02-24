'use client'

import { Input } from '@/components/ui/input'

type AdjustSliderProps = {
  label: string
  value: number
  onChange: (v: number) => void
  min?: number
  max?: number
}

export const AdjustSlider = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
}: AdjustSliderProps) => (
  <div className='w-full flex items-center'>
    <span className='text-xs text-gray-300 shrink-0 w-20'>{label}</span>
    <Input
      type='range'
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className='flex-1 border-none h-1 p-0 rounded-full appearance-none bg-gray-700 accent-orange-500 cursor-pointer'
    />
    <span className='text-xs font-medium text-orange-500 tabular-nums shrink-0 w-8 text-right'>
      {value > 0 ? '+' : ''}{value}
    </span>
  </div>
)
