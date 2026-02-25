'use client'

import { ImageUploadButton } from '@/components/button/image-upload'
import DesktopRequired from '@/components/desktop-required'
import { ColorPalette } from '@/components/simulation/color-palette'
import { MainCompare } from '@/components/simulation/main-compare'
import { SampleRoom } from '@/components/simulation/sample-room'
import { ThumbnailBar } from '@/components/simulation/thumbnail-bar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { samplePalettes, sampleRooms } from '@/constants/color-simulation'
import { cn } from '@/lib/utils'
import styles from '@/styles/scroll.module.css'
import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FaArrowRotateLeft, FaShareNodes } from 'react-icons/fa6'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi2'

const COLOR_AFTER_FILTER = 'hue-rotate(20deg) saturate(1.2)'

const ColorSimulationPage = () => {
  const [roomOpen, setRoomOpen] = useState(true)
  const [paletteOpen, setPaletteOpen] = useState(true)
  const [beforeImage, setBeforeImage] = useState<string | null>('')
  const [afterImage, setAfterImage] = useState<string | null>('')
  const [selectedColor, setSelectedColor] = useState(samplePalettes[0].colors[0])
  const [isProcessing, setIsProcessing] = useState(false)

  const handleColorSimulation = () => {
    if (!beforeImage || !selectedColor) return
    setIsProcessing(true)
    setTimeout(() => {
      setAfterImage(beforeImage)
      setIsProcessing(false)
    }, 1000)
  }

  const resetSimulation = () => {
    setBeforeImage('')
    setAfterImage(null)
    setSelectedColor(samplePalettes[0].colors[0])
  }

  return (
    <>
      <DesktopRequired />
      <div className='h-[calc(100vh_-_80px)] hidden md:flex md:flex-col bg-[#1A1A1A] text-white'>
        <div className='shrink-0 flex items-center justify-between gap-4 px-4 lg:px-6 py-3 border-b border-gray-700'>
          <h2 className='flex items-center font-bold text-2xl gap-3 min-w-0'>色替え</h2>
          <div className='flex items-center gap-2 shrink-0'>
          <Button className='rounded-none gap-2 bg-gray-700 border border-gray-700/80 hover:bg-gray-600 transition-all duration-500 text-white px-6'>
              <FaShareNodes className='w-4 h-4' />
              <span>共有</span>
            </Button>
            <ImageUploadButton setBeforeImage={setBeforeImage} setAfterImage={setAfterImage} />
          </div>
        </div>

        <div className='flex max-h-[calc(100vh_-_145px)] h-full'>
          <aside className='w-60 lg:w-80 shrink-0 flex flex-col border-r border-gray-700'>
            <h3 className='shrink-0 font-bold p-4 text-base md:text-lg'>パラメータ</h3>
            <div className={cn('grow overflow-y-auto', styles.scrollbar)}>
              <div className='flex flex-col'>
                <Button
                  onClick={() => setRoomOpen((o) => !o)}
                  className='w-full flex items-center justify-between px-4 py-3 rounded-none bg-transparent hover:bg-gray-800 transition-colors duration-300 h-auto'
                >
                  <span className='font-bold text-base uppercase tracking-wider text-orange-500'>サンプル画像</span>
                  {roomOpen ? (
                    <HiChevronUp className='w-4 h-4 text-orange-500' />
                  ) : (
                    <HiChevronDown className='w-4 h-4 text-orange-500' />
                  )}
                </Button>
                {roomOpen && (
                  <div className='px-4 py-3 grid grid-cols-2 gap-2'>
                    {sampleRooms.map((room) => (
                      <SampleRoom
                        key={room.id}
                        room={room}
                        selectedImage={beforeImage}
                        onSelect={setBeforeImage}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className='flex flex-col'>
                <Button
                  variant='ghost'
                  onClick={() => setPaletteOpen((o) => !o)}
                  className='w-full flex items-center justify-between px-4 py-3 rounded-none text-left hover:bg-gray-800 transition-colors duration-300 h-auto'
                >
                  <span className='font-bold text-base uppercase tracking-wider text-orange-500'>カラー</span>
                  {paletteOpen ? (
                    <HiChevronUp className='w-4 h-4 text-orange-500' />
                  ) : (
                    <HiChevronDown className='w-4 h-4 text-orange-500' />
                  )}
                </Button>
                {paletteOpen && (
                  <div className='px-4 py-3 flex flex-col gap-2'>
                    {samplePalettes.map((palette) => (
                      <ColorPalette
                        key={palette.name}
                        palette={palette}
                        selectedColor={selectedColor}
                        onSelect={setSelectedColor}
                      />
                    ))}
                    <div className='flex flex-col mt-3'>
                      <h3 className='text-sm font-semibold text-gray-300 mb-2'>カスタムカラー</h3>
                      <div className='flex items-center gap-2'>
                        <Input
                          type='color'
                          value={selectedColor}
                          onChange={(e) => setSelectedColor(e.target.value)}
                          className='w-11 h-11 p-0 rounded-none border-none cursor-pointer bg-transparent'
                        />
                        <Input
                          type='text'
                          value={selectedColor}
                          onChange={(e) => setSelectedColor(e.target.value)}
                          className='flex-1 min-w-0 px-3 py-2 border border-gray-600 rounded-none bg-gray-800 text-white'
                          placeholder='#000000'
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className='shrink-0 p-4 lg:p-6 border-t border-gray-700 space-y-2.5'>
              <Button
                onClick={handleColorSimulation}
                disabled={!beforeImage || isProcessing}
                className='w-full bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-none gap-2'
              >
                {isProcessing ? (
                  <>
                    <div className='animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent' />
                    <span>処理中...</span>
                  </>
                ) : (
                  <>
                    <BsStars className='w-4 h-4' />
                    <span>適用する</span>
                  </>
                )}
              </Button>
              <Button
                onClick={resetSimulation}
                variant='outline'
                className='w-full border-orange-600/50 text-orange-500/80 bg-orange-500/10 hover:bg-orange-600/10 transition-colors duration-300 rounded-none gap-2'
              >
                <FaArrowRotateLeft className='w-5 h-5' />
                <span>リセット</span>
              </Button>
            </div>
          </aside>

          <div className='relative flex-1 flex flex-col min-h-0 min-w-0'>
            <div className='flex-1 min-h-0 overflow-hidden'>
              <MainCompare
                beforeImage={beforeImage}
                afterImage={afterImage}
              />
            </div>
            {beforeImage && <ThumbnailBar beforeImage={beforeImage} />}
          </div>

          <aside className={cn('w-52 lg:w-64 shrink-0 flex flex-col border-l border-gray-700 p-3 lg:p-4 overflow-y-auto', styles.scrollbar)}>
            
          </aside>
        </div>
      </div>
    </>
  )
}

export default ColorSimulationPage
