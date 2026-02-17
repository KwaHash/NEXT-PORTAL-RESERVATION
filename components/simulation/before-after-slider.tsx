'use client'

import Image from 'next/image'
import React, { useCallback, useRef, useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'

type BeforeAfterSliderProps = {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const clamp = (value: number) => Math.min(100, Math.max(0, value))

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = (x / rect.width) * 100
    setPosition((prev) => {
      const next = clamp(percent)
      return next !== prev ? next : prev
    })
  }, [])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()
      updatePosition(e.clientX)
      const onMouseMove = (moveEvent: MouseEvent) => {
        moveEvent.preventDefault()
        updatePosition(moveEvent.clientX)
      }
      const onMouseUp = () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseup', onMouseUp)
      }
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onMouseUp)
    },
    [updatePosition]
  )

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      const touch = e.touches[0]
      if (touch) updatePosition(touch.clientX)
      const onTouchMove = (moveEvent: TouchEvent) => {
        moveEvent.preventDefault()
        const t = moveEvent.touches[0]
        if (t) updatePosition(t.clientX)
      }
      const onTouchEnd = () => {
        window.removeEventListener('touchmove', onTouchMove)
        window.removeEventListener('touchend', onTouchEnd)
      }
      window.addEventListener('touchmove', onTouchMove, { passive: false })
      window.addEventListener('touchend', onTouchEnd)
    },
    [updatePosition]
  )

  return (
    <div ref={containerRef}
      className={`relative w-full aspect-video overflow-hidden rounded-xl bg-gray-100 shadow-lg ${className}`}
    >
      <Image
        src={afterImage}
        alt='AI編集後の室内'
        width={500}
        height={400}
        className='absolute inset-0 w-full h-full object-cover'
      />

      <div className='absolute top-0 left-0 bottom-0 overflow-hidden' style={{ width: `${position}%` }}>
        <div className='absolute top-0 left-0 h-full'
          style={{ width: position > 0 ? `${10000 / position}%` : '100%' }}
        >
          <Image
            src={beforeImage}
            alt='AI編集前の室内'
            width={500}
            height={400}
            className='absolute top-0 left-0 w-full h-full object-cover object-left'
          />
        </div>
      </div>

      <div
        role='slider'
        aria-valuenow={position}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label='ビフォー・アフター比較スライダー'
        tabIndex={0}
        className='absolute top-0 bottom-0 w-5 -translate-x-1/2 cursor-ew-resize z-10 select-none flex items-center justify-center'
        style={{ left: `${position}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className='w-[3px] sm:w-1 h-full bg-white/70 backdrop-blur-sm rounded-full shrink-0' />
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center ring-1 ring-slate-200 pointer-events-none'>
          <div className='flex items-center text-slate-500 gap-0.5'>
            <HiChevronLeft className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
            <HiChevronRight className='w-3.5 h-3.5 sm:w-4 sm:h-4' />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className='absolute top-4 left-4 z-20 pointer-events-none'>
        <span className='inline-block px-2.5 py-1 bg-slate-700/70 text-white text-xs font-medium rounded-full backdrop-blur-sm shadow'>
          {beforeLabel}
        </span>
      </div>
      <div className='absolute top-4 right-4 z-20 pointer-events-none'>
        <span className='inline-block px-2.5 py-1 bg-blue-600/80 text-white text-xs font-medium rounded-full backdrop-blur-sm shadow'>
          {afterLabel}
        </span>
      </div>
    </div>
  )
}
