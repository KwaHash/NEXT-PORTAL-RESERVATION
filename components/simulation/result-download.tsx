'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useCallback } from 'react'
import { FaDownload } from 'react-icons/fa6'

type ResultDownloadProps = {
  imageDataUrl: string
}

export const ResultDownload = ({ imageDataUrl }: ResultDownloadProps) => {
  const handleDownloadFiltered = useCallback(() => {
    if (!imageDataUrl) return
    const a = document.createElement('a')
    a.href = imageDataUrl
    a.download = `空室演出-${Date.now()}.png`
    a.click()
  }, [imageDataUrl])

  return (
    <div className='flex flex-col gap-2.5'>
      <div className='rounded overflow-hidden bg-gray-800/80 shadow-lg flex flex-col'>
        <div className='relative aspect-video w-full shrink-0'>
          <Image
            src={imageDataUrl}
            alt='編集後'
            className='absolute inset-0 w-full h-full object-cover'
            width={500}
            height={400}
          />
        </div>
        <Button
          onClick={handleDownloadFiltered}
          className='w-full rounded-none gap-2 bg-orange-600 hover:bg-orange-600/80 text-white font-bold py-2 h-auto transition-all duration-300'
        >
          <FaDownload className='w-4 h-4' />
          <span>ダウンロード</span>
        </Button>
      </div>
    </div>
  )
}
