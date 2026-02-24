'use client'

import { AdjustSlider } from '@/components/slider/adjust-slider'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { useState } from 'react'
import { HiAdjustmentsHorizontal, HiArrowPath, HiCheck, HiChevronDown, HiChevronUp, HiXMark } from 'react-icons/hi2'

export const AdjustSettingsBar = () => {
  const [expanded, setExpanded] = useState(false)
  const [brightness, setBrightness] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [contrast, setContrast] = useState(0)
  const [warmth, setWarmth] = useState(0)

  const handleDiscard = () => {
    setBrightness(0)
    setSaturation(0)
    setContrast(0)
    setWarmth(0)
  }

  return (
    <div className='shrink-0 border-t border-gray-700 overflow-hidden'>
      <div className='flex items-center justify-between px-6 py-3'>
        <Button
          onClick={() => setExpanded((e) => !e)}
          className={cn('flex items-center gap-2 rounded-sm h-auto py-2 px-3 transition-all duration-300', 
            expanded ? 'bg-orange-500/20 border border-orange-500/50 text-orange-500 hover:bg-orange-500/30' : 'bg-gray-700/80 border border-gray-600 text-white hover:bg-gray-600' 
          )}
        >
          <HiAdjustmentsHorizontal className='w-5 h-5 shrink-0' />
          <span className='font-medium'>設定を調整</span>
          {expanded ? (
            <HiChevronUp className='w-4 h-4 shrink-0' />
          ) : (
            <HiChevronDown className='w-4 h-4 shrink-0' />
          )}
        </Button>

        <div className='flex items-center gap-2'>
          <Button
            variant='ghost'
            onClick={handleDiscard}
            className='rounded-none gap-2 bg-red-600/90 hover:bg-red-500 text-white border-0 h-auto py-2 px-4 transition-all duration-300'
          >
            <HiXMark className='w-4 h-4' />
            <span>リセット</span>
          </Button>
          <Button
            className='rounded-none gap-2 bg-green-600 hover:bg-green-500 text-white border-0 h-auto py-2 px-4 transition-all duration-300'
          >
            <HiCheck className='w-4 h-4' />
            <span>適用して保存</span>
          </Button>
        </div>
      </div>

      {expanded && (
        <div className='flex flex-col p-4'>
          <div className='py-4 border-t border-gray-700 grid grid-cols-2 gap-8'>
            <AdjustSlider
              label='明るさ'
              value={brightness}
              onChange={setBrightness}
              min={-50}
              max={50}
            />
            <AdjustSlider
              label='コントラスト'
              value={contrast}
              onChange={setContrast}
              min={-50}
              max={50}
            />
            <AdjustSlider
              label='鮮やかさ'
              value={saturation}
              onChange={setSaturation}
              min={-50}
              max={50}
            />
            <AdjustSlider
              label='暖かさ'
              value={warmth}
              onChange={setWarmth}
              min={-50}
              max={50}
            />
          </div>
          <Button
            variant='ghost'
            onClick={handleDiscard}
            className='self-start gap-2 h-auto px-0 py-1 text-xs text-gray-400 hover:text-gray-300 transition-all duration-300'
          >
            <HiArrowPath className='w-4 h-4 shrink-0' />
            <span>初期設定に戻す</span>
          </Button>
        </div>
      )}
    </div>
  )
}
