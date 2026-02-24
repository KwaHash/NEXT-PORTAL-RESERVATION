'use client'

import Image from 'next/image'

type ThumbnailBarProps = {
  beforeImage: string
}

export const ThumbnailBar = ({ beforeImage }: ThumbnailBarProps) => (
  <div className='shrink-0 border-t border-gray-700 p-4'>
    <div className='w-24 h-16 shrink-0 rounded-none overflow-hidden border-none'>
      <Image src={beforeImage} alt='変更前' width={96} height={64} className='w-full h-full object-cover' />
    </div>
  </div>
)
