'use client'

import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { HiAdjustmentsHorizontal, HiCheck, HiChevronDown, HiChevronUp, HiXMark } from 'react-icons/hi2'

const SliderRow = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
  unit = '%',
  leftLabel,
  rightLabel,
}: {
  label: string
  value: number
  onChange: (v: number) => void
  min?: number
  max?: number
  unit?: string
  leftLabel?: string
  rightLabel?: string
}) => (
  <div className='space-y-1.5'>
    <div className='flex items-center justify-between'>
      <span className='text-sm text-gray-300'>{label}</span>
      <span className='text-sm font-medium text-orange-500 tabular-nums'>
        {value}
        {unit}
      </span>
    </div>
    <div className='relative'>
      <input
        type='range'
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className='w-full h-2 rounded-full appearance-none bg-gray-700 accent-orange-500 cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:cursor-pointer'
      />
      {(leftLabel || rightLabel) && (
        <div className='flex justify-between mt-0.5 text-xs text-gray-500'>
          {leftLabel && <span>{leftLabel}</span>}
          {rightLabel && <span>{rightLabel}</span>}
        </div>
      )}
    </div>
  </div>
)

export const AdjustSettingsBar = () => {
  const [expanded, setExpanded] = useState(false)
  const [effectIntensity, setEffectIntensity] = useState(100)
  const [brightness, setBrightness] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [contrast, setContrast] = useState(0)
  const [warmth, setWarmth] = useState(0)

  const handleDiscard = () => {
    setEffectIntensity(100)
    setBrightness(0)
    setSaturation(0)
    setContrast(0)
    setWarmth(0)
  }

  return (
    <div className='border-y border-gray-700 rounded-lg overflow-hidden bg-[#1A1A1A]'>
      <div className='flex items-center justify-between gap-4 px-4 py-3'>
        <Button
          variant='ghost'
          onClick={() => setExpanded((e) => !e)}
          className={`flex items-center gap-2 rounded-lg h-auto py-2 px-3 transition-colors ${
            expanded
              ? 'bg-orange-500/20 border border-orange-500/50 text-orange-500 hover:bg-orange-500/30'
              : 'bg-gray-700/80 border border-gray-600 text-white hover:bg-gray-600'
          }`}
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
            className='rounded-lg gap-2 bg-red-600/90 hover:bg-red-500 text-white border-0 h-auto py-2 px-4'
          >
            <HiXMark className='w-4 h-4' />
            <span>リセット</span>
          </Button>
          <Button
            className='rounded-lg gap-2 bg-green-600 hover:bg-green-500 text-white border-0 h-auto py-2 px-4'
          >
            <HiCheck className='w-4 h-4' />
            <span>適用して保存</span>
          </Button>
        </div>
      </div>

      {expanded && (
        <div className='px-4 pb-4 space-y-4 border-t border-gray-700 pt-4'>
          <SliderRow
            label='効果の強さ'
            value={effectIntensity}
            onChange={setEffectIntensity}
            min={0}
            max={100}
            unit='%'
            leftLabel='控えめ'
            rightLabel='最大'
          />
          <div className='grid grid-cols-2 gap-4'>
            <SliderRow
              label='明るさ'
              value={brightness}
              onChange={setBrightness}
              min={-100}
              max={100}
              unit=''
            />
            <SliderRow
              label='鮮やかさ'
              value={saturation}
              onChange={setSaturation}
              min={-100}
              max={100}
              unit=''
            />
            <SliderRow
              label='コントラスト'
              value={contrast}
              onChange={setContrast}
              min={-100}
              max={100}
              unit=''
            />
            <SliderRow
              label='暖かさ'
              value={warmth}
              onChange={setWarmth}
              min={-100}
              max={100}
              unit=''
            />
          </div>
        </div>
      )}
    </div>
  )
}
