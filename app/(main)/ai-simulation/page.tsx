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
import { FaCameraRetro } from 'react-icons/fa'
import { FaAsterisk } from 'react-icons/fa6'
import { FiUploadCloud } from 'react-icons/fi'
import { HiOutlineCalculator } from 'react-icons/hi'
import { IoClose, IoStar } from 'react-icons/io5'

const AISimulationPage = () => {
  const [isDragging, setIsDragging] = useState(false)

  const [renovation, setRenovation] = useState<string>('')
  const [property, setProperty] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [timeline, setTimeline] = useState<string>('')
  const [area, setArea] = useState<number>(0)
  const [budget, setBudget] = useState<number>(0)
  const [images, setImages] = useState<UploadImage[]>([])

  const handleImages = async (files: FileList) => {
    const uploadImages = Array.from(files).map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }))
    setImages(prev => [...prev, ...uploadImages])
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      void handleImages(files)
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
      void handleImages(files)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className='w-full xl:max-w-[1200px] mx-auto xl:py-12'>
      <div className='bg-white xl:rounded-2xl shadow-lg px-6 py-12 xl:p-8'>
        <div className='flex items-center mb-8'>
          <HiOutlineCalculator className='w-10 h-10 text-blue-600 mr-3' />
          <h2 className='text-2xl sm:text-3xl font-bold'>AI概算シミュレーション</h2>
        </div>
        
        <div className='flex flex-col space-y-10'>
          {/* Photo Upload */}
          <div className='flex flex-col'>
            <Label className='flex items-center text-lg font-bold text-blue-700 mb-3'>
              <IoStar className='w-6 h-6 mr-3 text-yellow-500' />
              <span className='mr-1'>現在の状況を写真でアップロード</span>
              <FaAsterisk className='w-2.5 h-2.5 text-red-500' />
            </Label>
            <div
              className={cn('w-full p-8 bg-white rounded-xl border-2 border-dashed border-gray-200 sm:bg-gray-50 text-center shadow-xl transition-all duration-300 hover:shadow-2xl', isDragging && 'border-blue-500 bg-blue-50 sm:bg-blue-50')}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <FaCameraRetro className='w-12 h-12 text-blue-500 mx-auto mb-4 animate-bounce' />
              <p className='font-semibold mb-12'>
                写真クリックしてアップロードするか、<br className='md:hidden' />ドラッグアンドドロップしてください
              </p>
              <Label className='inline-flex items-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded shadow-lg cursor-pointer hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1'>
                <FiUploadCloud className='w-6 h-6 mr-4 animate-fade-in' />
                <span className='text-[17px] tracking-wide'>写真を選択</span>
                <Input
                  type='file'
                  multiple
                  accept='image/*'
                  onChange={handleImageChange}
                  className='hidden'
                />
              </Label>
              <div className='mt-4 text-xs text-gray-700'>※ AIが画像から最適なプランを導き出します！</div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'>
              {images.map((image, index) => (
                <div key={index} className='border relative aspect-video'>
                  <Image
                    src={image.url}
                    alt={image.file.name}
                    fill
                    className='absolute object-cover'
                    priority
                  />
                  <Button
                    onClick={() => setImages(images.filter((image, idx) => idx !== index))}
                    className='absolute right-0 w-auto h-auto p-2 bg-transparent hover:bg-transparent text-red-400 hover:text-red-600'
                  >
                    <IoClose className='w-5 h-5' />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Renovation Type */}
          <div className='flex flex-col'>
            <Label className='flex items-center text-lg font-bold text-blue-700 mb-3'>
              <IoStar className='w-6 h-6 mr-3 text-yellow-500' />
              <span className='mr-1'>リフォーム種類</span>
              <FaAsterisk className='w-2.5 h-2.5 text-red-500' />
            </Label>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
              {renovations.map((rnv) => {
                const Icon = rnv.icon
                return (
                  <Button key={rnv.id} variant='ghost'
                    onClick={() => setRenovation(rnv.id)}
                    className={`flex flex-col gap-3 h-auto p-4 rounded border-2 transition-all duration-300 hover:bg-gray-100 hover:text-neutral-900
                      ${renovation === rnv.id ? 'border-blue-500 bg-blue-50' : 'border-neutral-200 hover:border-neutral-300'}`}
                  >
                    <Icon className='w-7 h-7' />
                    <span className='text-[17px] font-bold'>{rnv.label}</span>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Property Type */}
          <div className='flex flex-col'>
            <Label className='flex items-center text-lg font-bold text-blue-700 mb-3'>
              <IoStar className='w-6 h-6 mr-3 text-yellow-500' />
              <span className='mr-1'>物件タイプ</span>
              <FaAsterisk className='w-2.5 h-2.5 text-red-500' />
            </Label>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3'>
              {properties.map((pty) => {
                const Icon = pty.icon
                return (
                  <Button key={pty.id} variant='ghost'
                    onClick={() => setProperty(pty.id)}
                    className={`flex flex-col gap-3 h-auto p-4 rounded border-2 transition-all duration-300 hover:bg-gray-100 hover:text-neutral-900
                      ${property === pty.id ? 'border-blue-500 bg-blue-50' : 'border-neutral-200 hover:border-neutral-300'}`}
                  >
                    <Icon className='w-7 h-7' />
                    <span className='text-[17px] font-bold'>{pty.label}</span>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Area Selection & Hope Period */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <Label className='flex items-center text-lg font-bold text-blue-700 mb-3'>
                <IoStar className='w-6 h-6 mr-3 text-yellow-500' />
                <span className='mr-1'>東京都内エリア</span>
                <FaAsterisk className='w-2.5 h-2.5 text-red-500' />
              </Label>
              <Select value={location}
                onValueChange={(value) => setLocation(value)}
              >
                <SelectTrigger className='h-auto p-3 rounded border-gray-300'>
                  <SelectValue placeholder='エリアを選択してください' />
                </SelectTrigger>
                <SelectContent className='rounded shadow-lg border border-gray-200'>
                  {areas.map((area) => (
                    <SelectItem key={area.id} value={area.id} className='p-2'>
                      {area.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className='flex flex-col'>
              <Label className='flex items-center text-lg font-bold text-blue-700 mb-3'>
                <IoStar className='w-6 h-6 mr-3 text-yellow-500' />
                <span>希望開始時期</span>
              </Label>
              <Select value={timeline}
                onValueChange={(value) => setTimeline(value)}
              >
                <SelectTrigger className='h-auto p-3 rounded border-gray-300'>
                  <SelectValue placeholder='選択してください' />
                </SelectTrigger>
                <SelectContent className='rounded shadow-lg border border-gray-200'>
                  {periods.map((period) => (
                    <SelectItem key={period.id} value={period.id} className='p-2'>
                      {period.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Area & Budget */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div className='flex flex-col'>
              <Label className='flex items-center text-lg font-bold text-blue-700 mb-3'>
                <IoStar className='w-6 h-6 mr-3 text-yellow-500' />
                <span>面積（m<sup>2</sup>）</span>
              </Label>
              <Input
                type='number'
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className='w-full h-auto p-3 border border-gray-300 rounded focus:border-1.5'
                min={0}
                placeholder='例: 10'
              />
            </div>
            <div className='flex flex-col'>
              <Label className='flex items-center text-lg font-bold text-blue-700 mb-3'>
                <IoStar className='w-6 h-6 mr-3 text-yellow-500' />
                <span>予算（万円）</span>
              </Label>
              <Input
                type='number'
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className='w-full h-auto p-3 border border-gray-300 rounded focus:border-1.5'
                min={0}
                placeholder='例: 100'
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            disabled={images.length === 0 || !renovation || !property || !location}
            variant='outline'
            className='w-full border-2 border-primary-light bg-primary-light hover:bg-primary-dark px-16 py-7 text-white flex items-center gap-2'
          >
            <BsStars className='text-lg' />
            <span className='text-lg font-bold'>AI概算を実行</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AISimulationPage