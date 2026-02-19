'use client'

import { BeforeAfterSlider } from '@/components/simulation/before-after-slider'
import Image from 'next/image'
import { FaUpload } from 'react-icons/fa6'

type MainCompareProps = {
  beforeImage: string | null
  afterImage: string | null
}

export const MainCompare = ({ beforeImage, afterImage }: MainCompareProps) => {
  if (!beforeImage && !afterImage) {
    return (
      <div className='w-full h-full flex flex-col items-center justify-center gap-4'>
        <FaUpload className='w-10 h-10 text-gray-500' />
        <p className='text-center text-gray-500 font-medium'>画像をアップロードして開始してください</p>
      </div>
    )
  }

  if (!beforeImage) return null

  const thumbnailBar = (
    <div className='border-t border-gray-700 shrink-0 p-4'>
      <div className='w-24 h-16 shrink-0 rounded-none overflow-hidden border-none'>
        <Image src={beforeImage} alt='変更前' width={96} height={64} className='w-full h-full object-cover' />
      </div>
    </div>
  )

  return (
    <div className='flex flex-col h-full'>
      <div className='flex items-center justify-center flex-1 w-full max-w-5xl mx-auto p-3'>
        {afterImage ? (
          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            beforeLabel='変更前'
            afterLabel='変更後'
            className='w-full aspect-video'
          />
        ) : (
          <div className='relative w-full aspect-video overflow-hidden rounded-xl bg-gray-100 shadow-lg'>
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
      {thumbnailBar}
    </div>
  )
}
