'use client'

import { ColorPalette } from '@/components/simulation/color-palette'
import { SampleRoom } from '@/components/simulation/sample-room'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { samplePalettes, sampleRooms } from '@/constants/color-simulation'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowRotateLeft, FaDownload, FaUpload } from 'react-icons/fa6'
import { LuEye } from 'react-icons/lu'
import { MdOutlinePalette } from 'react-icons/md'

const ColorSimulationPage = () => {
  const [selectedImage, setSelectedImage] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState(samplePalettes[0].colors[0])
  const [simulationResult, setSimulationResult] = useState<string>('')
  const [isProcessing, setIsProcessing] = useState(false)
  
  useEffect(() => {
    setSimulationResult('')
  }, [selectedImage, selectedColor])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleColorSimulation = () => {
    if (!selectedImage || !selectedColor) return
    
    setIsProcessing(true)
    setTimeout(() => {
      setSimulationResult(selectedImage)
      setIsProcessing(false)
    }, 2000)
  }

  const resetSimulation = () => {
    setSelectedImage('')
    setSimulationResult('')
    setSelectedColor(samplePalettes[0].colors[0])
  }

  const handleDownloadResult = () => {
    if (!simulationResult || !selectedColor) return
    const img = new window.Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.filter = 'hue-rotate(20deg) saturate(1.2)'
      ctx.drawImage(img, 0, 0)
      ctx.filter = 'none'
      ctx.fillStyle = selectedColor
      ctx.globalAlpha = 0.1
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1
      canvas.toBlob((blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `シミュレーション結果-${Date.now()}.png`
        a.click()
        URL.revokeObjectURL(url)
      }, 'image/png', 1)
    }
    img.src = simulationResult
  }

  return (
    <div className='w-full xl:max-w-[1440px] mx-auto xl:py-12'>
      <div className='bg-white xl:rounded-xl shadow-lg px-6 py-12 xl:p-8'>
        <div className='flex items-center mb-8'>
          <MdOutlinePalette className='w-10 h-10 text-blue-600 mr-3' />
          <h2 className='text-2xl sm:text-3xl font-bold tracking-tight'>カラーシミュレーション</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='flex flex-col'>
            <div className='flex flex-col'>
              <h3 className='text-lg font-semibold mb-4'>画像を選択</h3>
              <div className='flex flex-col items-center justify-center border border-dashed border-gray-300 rounded-none p-6 gap-5 bg-gray-100'>
                <FaUpload className='w-11 h-11 text-gray-400' />
                <p className='text-sm'>リフォームしたい部屋の写真をアップロード</p>
                <Label className='inline-flex items-center px-5 py-3 bg-blue-600 text-white cursor-pointer hover:bg-blue-700 transition-all duration-300'>
                  <FaUpload className='w-4 h-4 mr-2' />
                  <span className='text-base'>写真を選択</span>
                  <Input
                    type='file'
                    accept='image/*'
                    onChange={handleImageUpload}
                    className='hidden'
                  />
                </Label>
              </div>
            </div>

            <div className='flex flex-col mt-8'>
              <h3 className='text-lg font-semibold mb-4'>またはサンプル画像を使用</h3>
              <div className='grid grid-cols-2 gap-2.5'>
                {sampleRooms.map((room) => (
                  <SampleRoom
                    key={room.id}
                    room={room}
                    selectedImage={selectedImage}
                    onSelect={setSelectedImage}
                  />
                ))}
              </div>
            </div>

            <div className='flex flex-col mt-8'>
              <h3 className='text-lg font-semibold mb-4'>カラー選択</h3>
              <div className='flex justify-between flex-wrap gap-4'>
                {samplePalettes.map((palette) => (
                  <ColorPalette
                    key={palette.name}
                    palette={palette}
                    selectedColor={selectedColor}
                    onSelect={setSelectedColor}
                  />
                ))}
              </div>
            </div>

            <div className='flex flex-col mt-8'>
              <h3 className='text-lg font-semibold mb-4'>カスタムカラー</h3>
              <div className='flex items-center gap-3'>
                <Input
                  type='color'
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className='w-11 h-11 p-0 rounded-none border-none cursor-pointer shadow-none'
                />
                <Input
                  type='text'
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className='flex-1 max-w-[300px] px-3 py-2 border rounded-none'
                  placeholder='#000000'
                />
              </div>
            </div>

            <div className='flex items-center gap-3 mt-8'>
              <Button
                onClick={handleColorSimulation}
                disabled={!selectedImage || isProcessing}
                className='flex-1 text-white h-auto px-8 py-4 rounded-none bg-blue-600 hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed'
              >
                {isProcessing ? (
                  <div className='flex items-center gap-2'>
                    <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3'></div>
                    <span className='text-[15px] font-bold'>処理中...</span>
                  </div>
                ) : (
                  <div className='flex items-center gap-2'>
                    <LuEye className='w-5 h-5' />
                    <span className='text-[15px] font-bold'>シミュレーション実行</span>
                  </div>
                )}
              </Button>
              <Button
                onClick={resetSimulation}
                className='flex-1 text-white h-auto px-8 py-4 rounded-none bg-gray-500 hover:bg-gray-600 transition-all duration-300 flex items-center gap-2'
              >
                <FaArrowRotateLeft className='w-5 h-5' />
                <span className='text-[15px] font-bold'>リセット</span>
              </Button>
            </div>
          </div>

          {/* Preview */}
          <div className='flex flex-col'>
            <h3 className='text-lg font-semibold mb-4'>プレビュー</h3>
            <div className='flex flex-col gap-8'>
              <div className='flex flex-col gap-1'>
                <h4 className='text-sm font-bold mb-2'>変更前</h4>
                <div className={cn('relative w-full h-auto aspect-video bg-gray-100 rounded-none border-2', selectedImage ? 'border-none' : '')}>
                  {selectedImage ? (
                    <Image
                      src={selectedImage}
                      alt='変更前'
                      width={800}
                      height={600}
                      className='absolute inset-0 w-full h-full object-cover'
                    />
                  ) : (
                    <div className='absolute inset-0 w-full h-full font-medium flex items-center justify-center text-gray-600'>
                      画像を選択してください
                    </div>
                  )}
                </div>
              </div>

              <div className='flex flex-col gap-1'>
                <h4 className='text-sm font-bold mb-2'>
                  変更後イメージ
                  <span className='ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-sm'>AI生成</span>
                </h4>
                <div className={cn('relative w-full h-auto aspect-video bg-gray-100 rounded-none border-2', simulationResult ? 'border-none' : '')}>
                  {simulationResult ? (
                    <div className='relative w-full h-full'>
                      <Image
                        src={simulationResult}
                        alt='変更後イメージ（AI生成）'
                        className='absolute inset-0 w-full h-full object-cover'
                        width={800}
                        height={600}
                        style={{ filter: `hue-rotate(20deg) saturate(1.2)` }}
                      />
                      <div className='absolute inset-0 bg-gradient-to-r from-transparent to-transparent'
                        style={{ backgroundColor: selectedColor, opacity: 0.1 }}>
                      </div>
                    </div>
                  ) : (
                    <div className='absolute inset-0 w-full h-full font-medium flex items-center justify-center text-gray-600'>
                      シミュレーション結果がここに表示されます
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-1 my-8'>
              <h4 className='text-sm font-bold mb-2'>選択中のカラー</h4>
              <div className='flex items-center gap-3'>
                <div
                  className='w-10 h-10 rounded-none border-none'
                  style={{ backgroundColor: selectedColor }}
                />
                <div>
                  <div className='text-sm font-medium'>{selectedColor}</div>
                  <div className='text-xs text-gray-500'>HEX カラーコード</div>
                </div>
              </div>
            </div>

            {simulationResult && (
              <Button
                onClick={handleDownloadResult}
                className='w-full text-white h-auto px-8 py-4 rounded-none bg-blue-600 hover:bg-blue-700 transition-all duration-300 max-w-[600px] mx-auto mt-auto'
              >
                <FaDownload className='w-5 h-5 mr-2' />
                <span className='text-[15px] font-bold'>シミュレーション結果を保存</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ColorSimulationPage