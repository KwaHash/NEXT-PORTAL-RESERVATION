'use client'

import { BeforeAfterSlider, type ImageAdjust } from '@/components/simulation/before-after-slider'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { FaUpload } from 'react-icons/fa6'

type MainCompareProps = {
  beforeImage: string | null
  afterImage: string | null
  className?: string
  imageAdjust?: ImageAdjust
}

export const MainCompare = ({ beforeImage, afterImage, className, imageAdjust }: MainCompareProps) => {
  if (!beforeImage && !afterImage) {
    return (
      <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
        <FaUpload className='w-10 h-10 text-gray-500' />
        <p className='text-center text-gray-500 font-medium'>画像をアップロードして開始してください</p>
      </div>
    )
  }

  if (!beforeImage) return null

  return (
    <div className='flex flex-col h-full'>
      <div className={cn('flex items-center justify-center w-full max-w-5xl m-auto p-3 overflow-auto', className)}>
        {afterImage ? (
          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeLabel='変更前'
            afterLabel='変更後'
            className='w-full aspect-video'
            imageAdjust={imageAdjust}
          />
        ) : (
          <div className='relative w-full aspect-video overflow-hidden rounded-lg bg-gray-100 shadow-lg'>
            <Image
              src={beforeImage}
              alt='変更前'
              width={500}
              height={400}
              className='absolute inset-0 w-full h-full object-cover'
            />
          </div>
        )}
      </div>
    </div>
  )
}
