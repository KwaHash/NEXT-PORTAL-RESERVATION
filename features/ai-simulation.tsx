'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { type UploadImage } from '@/types/Image'
import { areas, periods, properties, renovations } from '@/utils/data'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FaUpload } from 'react-icons/fa6'
import { HiOutlineCalculator } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'

const AISimulationPage = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [renovation, setRenovation] = useState<string>('')
  const [property, setProperty] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [timeline, setTimeline] = useState<string>('')
  const [area, setArea] = useState<number>(0)
  const [budget, setBudget] = useState<number>(0)
  const [images, setImages] = useState<UploadImage[]>([])

  const handleImages = (files: FileList) => {
    const uploadImages = Array.from(files).map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }))
    setImages((prev) => [...prev, ...uploadImages])
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleImages(files)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files && files.length > 0) {
      handleImages(files)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, idx) => idx !== index))
  }

  const canSubmit = images.length > 0 && !!renovation && !!property && !!location

  return (
    <div className='w-full xl:max-w-[1440px] mx-auto xl:py-12'>
      <div className='bg-white xl:rounded-xl xl:shadow-lg px-6 py-12 xl:p-8'>
        <div className='flex items-center mb-8'>
          <HiOutlineCalculator className='w-10 h-10 text-blue-600 mr-3' />
          <h2 className='text-2xl sm:text-3xl font-bold tracking-tight'>AI概算シミュレーション</h2>
        </div>

        <div className='flex flex-col gap-8'>
          {/* 画像アップロード */}
          <div className='flex flex-col'>
            <h3 className='text-lg font-semibold mb-4'>現在の状況を写真でアップロード</h3>
            <div
              className={cn(
                'flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-none p-6 gap-5 bg-gray-100 transition-all duration-300',
                isDragging && 'border-blue-500 bg-blue-50'
              )}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <FaUpload className='w-11 h-11 text-gray-400' />
              <p className='text-sm'>写真をクリックしてアップロードするか、ドラッグアンドドロップしてください</p>
              <Label className='inline-flex items-center px-5 py-3 bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-all duration-300'>
                <FaUpload className='w-4 h-4 mr-2' />
                <span className='text-base'>写真を選択</span>
                <Input
                  type='file'
                  multiple
                  accept='image/*'
                  onChange={handleImageChange}
                  className='hidden'
                />
              </Label>
              <p className='text-xs text-gray-600'>※ AIが画像から最適なプランを導き出します</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
              {images.map((image, index) => (
                <div key={index} className='relative aspect-video border-2 rounded-none bg-gray-100'>
                  <Image
                    src={image.url}
                    alt={image.file.name}
                    fill
                    className='object-cover'
                    priority
                  />
                  <Button
                    type='button'
                    onClick={() => removeImage(index)}
                    className='absolute right-0 top-0 w-auto h-auto p-2 bg-transparent hover:bg-transparent text-red-400 hover:text-red-600 rounded-none'
                  >
                    <IoClose className='w-5 h-5' />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* リフォーム種類 */}
          <div className='flex flex-col'>
            <h3 className='text-lg font-semibold mb-4'>リフォーム種類</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
              {renovations.map((rnv) => {
                const Icon = rnv.icon
                return (
                  <Button
                    key={rnv.id}
                    type='button'
                    variant='ghost'
                    onClick={() => setRenovation(rnv.id)}
                    className={cn(
                      'flex flex-col gap-3 h-auto p-4 rounded-none border-2 transition-all duration-300',
                      renovation === rnv.id
                        ? 'border-transparent border-2 border-[#DE3B75] bg-[#FCEEF3] text-[#EA3B7D] hover:bg-[#FCEEF3]'
                        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-100 hover:text-neutral-900'
                    )}
                  >
                    <Icon className={cn('w-7 h-7', renovation === rnv.id && 'text-[#EA3B7D]')} />
                    <span className='text-[17px] font-bold'>{rnv.label}</span>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Property Type */}
          <div className='flex flex-col'>
            <h3 className='text-lg font-semibold mb-4'>物件タイプ</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
              {properties.map((pty) => {
                const Icon = pty.icon
                return (
                  <Button
                    key={pty.id}
                    variant='ghost'
                    onClick={() => setProperty(pty.id)}
                    className={cn(
                      'flex flex-col gap-3 h-auto p-4 rounded-none border-2 transition-all duration-300',
                      property === pty.id
                        ? 'border-transparent border-2 border-[#DE3B75] bg-[#FCEEF3] text-[#EA3B7D] hover:bg-[#FCEEF3]'
                        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-100 hover:text-neutral-900'
                    )}
                  >
                    <Icon className={cn('w-7 h-7', property === pty.id && 'text-[#EA3B7D]')} />
                    <span className='text-[17px] font-bold'>{pty.label}</span>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* 東京都内エリア・希望開始時期 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold mb-4'>東京都内エリア</h3>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className='h-auto p-3 rounded-none border-gray-300'>
                  <SelectValue placeholder='エリアを選択してください' />
                </SelectTrigger>
                <SelectContent className='rounded-none shadow-lg border border-gray-200'>
                  {areas.map((areaOption) => (
                    <SelectItem key={areaOption.id} value={areaOption.id} className='p-2'>
                      {areaOption.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold mb-4'>希望開始時期</h3>
              <Select value={timeline} onValueChange={setTimeline}>
                <SelectTrigger className='h-auto p-3 rounded-none border-gray-300'>
                  <SelectValue placeholder='選択してください' />
                </SelectTrigger>
                <SelectContent className='rounded-none shadow-lg border border-gray-200'>
                  {periods.map((period) => (
                    <SelectItem key={period.id} value={period.id} className='p-2'>
                      {period.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 面積・予算 */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold mb-4'>面積（m²）</h3>
              <Input
                type='number'
                value={area}
                onChange={(e) => setArea(Number(e.target.value) || 0)}
                className='w-full h-auto p-3 border border-gray-300 rounded-none'
                min={0}
                placeholder='例: 10'
              />
            </div>
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold mb-4'>予算（万円）</h3>
              <Input
                type='number'
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value) || 0)}
                className='w-full h-auto p-3 border border-gray-300 rounded-none'
                min={0}
                placeholder='例: 100'
              />
            </div>
          </div>

          {/* 実行ボタン */}
          <div className='flex flex-col sm:flex-row items-center gap-3'>
            <Button
              type='button'
              onClick={handleSubmit}
              disabled={!canSubmit}
              className='w-full sm:w-auto flex-1 text-white h-auto px-8 py-4 rounded-none bg-blue-600 hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center gap-2'
            >
              <BsStars className='w-5 h-5' />
              <span className='text-[15px] font-bold'>AI概算を実行</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AISimulationPage
