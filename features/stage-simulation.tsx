'use client'

import { ImageUploadButton } from '@/components/button/image-upload'
import { ToolButton } from '@/components/button/tool-button'
import DesktopRequired from '@/components/desktop-required'
import { buildImageFilter } from '@/components/simulation/before-after-slider'
import { MainCompare } from '@/components/simulation/main-compare'
import { ResultDownload } from '@/components/simulation/result-download'
import { ThumbnailBar } from '@/components/simulation/thumbnail-bar'
import { AdjustSlider } from '@/components/slider/adjust-slider'
import { Button } from '@/components/ui/button'
import { exteriorTools, interiorTools } from '@/constants/stage-simulation'
import { cn } from '@/lib/utils'
import styles from '@/styles/scroll.module.css'
import { useCallback, useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FaShareNodes } from 'react-icons/fa6'
import { HiAdjustmentsHorizontal, HiArrowPath, HiCheck, HiChevronDown, HiChevronUp, HiUser, HiXMark } from 'react-icons/hi2'

const StageSimulationPage = () => {
  const [exteriorOpen, setExteriorOpen] = useState(true)
  const [interiorOpen, setInteriorOpen] = useState(true)
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [beforeImage, setBeforeImage] = useState<string | null>('/images/sample-color/01_before.png')
  const [afterImage, setAfterImage] = useState<string | null>('/images/sample-color/01_before.png')
  const [isApplied, setIsApplied] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSettingExpanded, setIsSettingExpanded] = useState(false)
  const [brightness, setBrightness] = useState(0)
  const [saturation, setSaturation] = useState(0)
  const [contrast, setContrast] = useState(0)
  const [warmth, setWarmth] = useState(0)
  const [filteredImageDataUrl, setFilteredImageDataUrl] = useState<string | null>(null)

  const handleApplyTool = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setAfterImage('/images/sample-color/01_after.png')
      setIsApplied(true)
      setIsProcessing(false)
    }, 2000)
  }

  const handleApplyImage = useCallback(() => {
    if (!afterImage) return
    const img = new window.Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.naturalWidth
      canvas.height = img.naturalHeight
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const filterStr = buildImageFilter({ brightness, saturation, contrast, warmth })
      if (filterStr) ctx.filter = filterStr
      ctx.drawImage(img, 0, 0)
      const dataUrl = canvas.toDataURL('image/png')
      setFilteredImageDataUrl(dataUrl)
    }
    img.onerror = () => setFilteredImageDataUrl(null)
    img.src = afterImage
    setIsApplied(false)
    setIsSettingExpanded(false)
  }, [afterImage, brightness, saturation, contrast, warmth])

  const handleReset = () => {
    setBrightness(0)
    setSaturation(0)
    setContrast(0)
    setWarmth(0)
  }

  const handleDiscard = () => {
    setAfterImage(null)
    setIsSettingExpanded(false)
    setIsApplied(false)
    setFilteredImageDataUrl(null)
  }

  return (
    <>
      <DesktopRequired />
      <div className='h-[calc(100vh_-_80px)] hidden md:flex md:flex-col bg-[#1A1A1A] text-white'>
        <div className='shrink-0 flex items-center justify-between gap-4 px-4 lg:px-6 py-3 border-b border-gray-700'>
          <h2 className='flex items-center font-bold text-2xl gap-3 min-w-0'>空室演出</h2>
          <div className='flex items-center gap-2 shrink-0'>
            <Button className='rounded-none gap-2 bg-gray-700 border border-gray-700/80 hover:bg-gray-600 transition-all duration-500 text-white px-6'>
              <FaShareNodes className='w-4 h-4' />
              <span>共有</span>
            </Button>
            <ImageUploadButton setBeforeImage={setBeforeImage} setAfterImage={setAfterImage} />
          </div>
        </div>
        <div className='flex max-h-[calc(100vh_-_145px)] h-full'>
          <aside className='w-60 lg:w-80 grow shrink-0 flex flex-col border-r border-gray-700'>
            <h3 className='shrink-0 font-bold p-4 text-base md:text-lg uppercase tracking-wider'>AIツール</h3>
            <div className={cn('grow overflow-y-auto', styles.scrollbar)}>
              <div className='flex flex-col'>
                <Button
                  variant='ghost'
                  onClick={() => setExteriorOpen((o) => !o)}
                  className='w-full flex items-center justify-between px-4 py-3 rounded-none hover:bg-gray-800 transition-colors duration-300 h-auto'
                >
                  <span className='font-bold text-base uppercase tracking-wider text-orange-500'>外観</span>
                  {exteriorOpen ? (
                    <HiChevronUp className='w-4 h-4 text-orange-500' />
                  ) : (
                    <HiChevronDown className='w-4 h-4 text-orange-500' />
                  )}
                </Button>
                {exteriorOpen && (
                  <div className='pb-2'>
                    {exteriorTools.map((tool) => (
                      <ToolButton
                        key={tool.id}
                        icon={tool.icon}
                        label={tool.label}
                        isSelected={selectedTool === tool.id}
                        onClick={() => setSelectedTool(tool.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className='flex flex-col'>
                <Button
                  variant='ghost'
                  onClick={() => setInteriorOpen((o) => !o)}
                  className='w-full flex items-center justify-between px-4 py-3 rounded-none text-left hover:bg-gray-800 transition-colors duration-300 h-auto'
                >
                  <span className='font-bold text-base uppercase tracking-wider text-orange-500'>室内</span>
                  {interiorOpen ? (
                    <HiChevronUp className='w-4 h-4 text-orange-500' />
                  ) : (
                    <HiChevronDown className='w-4 h-4 text-orange-500' />
                  )}
                </Button>
                {interiorOpen && (
                  <div className='pb-2'>
                    {interiorTools.map((tool) => (
                      <ToolButton
                        key={tool.id}
                        icon={tool.icon}
                        label={tool.label}
                        isSelected={selectedTool === tool.id}
                        onClick={() => setSelectedTool(tool.id)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className='shrink-0 p-4 lg:p-6 border-t border-gray-700 space-y-2.5'>
              <Button
                className='w-full bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-none gap-2'
                disabled={selectedTool === null}
                onClick={handleApplyTool}
              >
                <BsStars className='w-4 h-4' />
                <span>{selectedTool ? `${selectedTool}を適用する`: 'ツールを選択してください'}</span>
              </Button>
              <Button
                variant='outline'
                className='w-full border-orange-600/50 text-orange-500/80 bg-orange-500/10 hover:bg-orange-600/10 transition-colors duration-300 rounded-none gap-2'
              >
                <HiUser className='w-4 h-4' />
                <span>編集を依頼</span>
              </Button>
            </div>
          </aside>

          <div className='relative flex flex-col w-[calc(100%-256px)] grow'>
            <MainCompare
              beforeImage={beforeImage}
              afterImage={afterImage}
              className={isSettingExpanded ? 'max-w-2xl' : 'max-w-5xl'}
              imageAdjust={{ brightness, saturation, contrast, warmth }}
            />
            { afterImage && isApplied && (
              <div className='shrink-0 border-t border-gray-700 overflow-hidden'>
                <div className='flex items-center justify-between px-6 py-3'>
                  <Button
                    onClick={() => setIsSettingExpanded((e) => !e)}
                    className={cn('flex items-center gap-2 rounded-sm h-auto py-2 px-3 transition-all duration-300', 
                      isSettingExpanded ? 'bg-orange-500/20 border border-orange-500/50 text-orange-500 hover:bg-orange-500/30' : 'bg-gray-700/80 border border-gray-600 text-white hover:bg-gray-600' 
                    )}
                  >
                    <HiAdjustmentsHorizontal className='w-5 h-5 shrink-0' />
                    <span className='font-medium'>設定を調整</span>
                    {isSettingExpanded ? (
                      <HiChevronUp className='w-4 h-4 shrink-0' />
                    ) : (
                      <HiChevronDown className='w-4 h-4 shrink-0' />
                    )}
                  </Button>

                  <div className='flex items-center gap-2'>
                    <Button
                      onClick={handleDiscard}
                      className='rounded-none gap-2 bg-red-600/90 hover:bg-red-500 text-white border-0 h-auto py-2 px-4 transition-all duration-300'
                    >
                      <HiXMark className='w-4 h-4' />
                      <span>リセット</span>
                    </Button>
                    <Button
                      onClick={handleApplyImage}
                      className='rounded-none gap-2 bg-green-600 hover:bg-green-500 text-white border-0 h-auto py-2 px-4 transition-all duration-300'
                    >
                      <HiCheck className='w-4 h-4' />
                      <span>適用して保存</span>
                    </Button>
                  </div>
                </div>
                {isSettingExpanded && (
                  <div className='flex flex-col p-4'>
                    <div className='py-4 border-t border-gray-700 grid grid-cols-2 gap-8'>
                      <AdjustSlider
                        label='明るさ'
                        value={brightness}
                        onChange={setBrightness}
                        min={-50}
                        max={50}
                      />
                      <AdjustSlider
                        label='コントラスト'
                        value={contrast}
                        onChange={setContrast}
                        min={-50}
                        max={50}
                      />
                      <AdjustSlider
                        label='鮮やかさ'
                        value={saturation}
                        onChange={setSaturation}
                        min={-50}
                        max={50}
                      />
                      <AdjustSlider
                        label='暖かさ'
                        value={warmth}
                        onChange={setWarmth}
                        min={-50}
                        max={50}
                      />
                    </div>
                    <Button
                      variant='ghost'
                      onClick={handleReset}
                      className='self-start gap-2 h-auto px-0 py-1 text-xs text-gray-400 hover:text-gray-300 transition-all duration-300'
                    >
                      <HiArrowPath className='w-4 h-4 shrink-0' />
                      <span>初期設定に戻す</span>
                    </Button>
                  </div>
                )}
              </div>
            )}
            {beforeImage && <ThumbnailBar beforeImage={beforeImage} />}
          </div>

          <aside className={cn('w-52 lg:w-64 shrink-0 flex flex-col border-l border-gray-700 p-3 lg:p-4 overflow-y-auto', styles.scrollbar)}>
            {filteredImageDataUrl && (
              <ResultDownload imageDataUrl={filteredImageDataUrl} />
            )}
          </aside>
        </div>
      </div>
    </>
  )
}

export default StageSimulationPage
