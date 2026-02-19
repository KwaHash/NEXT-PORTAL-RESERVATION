'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FaUpload } from 'react-icons/fa6'

type ImageUploadButtonProps = {
  setBeforeImage: (image: string) => void
  setAfterImage: (image: string | null) => void
  className?: string
  children?: React.ReactNode
}

export const ImageUploadButton = ({
  setBeforeImage,
  setAfterImage,
  className = '',
  children,
}: ImageUploadButtonProps) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setBeforeImage(e.target?.result as string)
        setAfterImage(null)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <Button asChild
      className={`rounded-none gap-2 bg-green-500/40 border border-green-500/40 hover:bg-green-500/60 transition-all duration-500 text-white px-6 cursor-pointer ${className}`}
    >
      <Label className='inline-flex items-center justify-center gap-2 cursor-pointer'>
        <Input type='file' accept='image/*' onChange={handleImageUpload} className='hidden' />
        {children ?? (
          <>
            <FaUpload className='w-4 h-4' />
            <span>アップロード</span>
          </>
        )}
      </Label>
    </Button>
  )
}
