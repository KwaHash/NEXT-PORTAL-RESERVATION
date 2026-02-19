'use client'

import { ImageUploadButton } from '@/components/button/image-upload'
import DesktopRequired from '@/components/desktop-required'
import { MainCompare } from '@/components/simulation/main-compare'
import { ToolButton } from '@/components/simulation/tool-button'
import { Button } from '@/components/ui/button'
import { exteriorTools, interiorTools } from '@/constants/stage-simulation'
import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FaShareNodes } from 'react-icons/fa6'
import { HiChevronDown, HiChevronUp, HiUser } from 'react-icons/hi2'

const StageSimulationPage = () => {
  const [exteriorOpen, setExteriorOpen] = useState(true)
  const [interiorOpen, setInteriorOpen] = useState(true)
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [beforeImage, setBeforeImage] = useState<string | null>('/images/sample-color/01_before.png')
  const [afterImage, setAfterImage] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleApplyTool = () => {
    setIsProcessing(true)
    setTimeout(() => {
      setAfterImage('/images/sample-color/01_after.png')
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <>
      <DesktopRequired />
      <div className='flex-1 hidden md:flex md:flex-col bg-[#1A1A1A] text-white'>
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
        <div className='flex-1 flex min-h-0'>
          <aside className='w-60 lg:w-80 shrink-0 flex flex-col border-r border-gray-700'>
            <h2 className='font-bold p-4 border-b border-gray-700 text-base md:text-lg uppercase tracking-wider'>AIツール</h2>
            <div className='flex-1 overflow-y-auto'>
              <div className='border-b border-gray-700'>
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
              <div className='border-b border-gray-700'>
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
            <div className='p-4 lg:p-6 border-t border-gray-700 space-y-2.5'>
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

          <div className='relative flex-1 flex flex-col min-w-0'>
            <MainCompare beforeImage={beforeImage} afterImage={afterImage} />
          </div>

          <aside className='w-52 lg:w-64 shrink-0 flex flex-col border-l border-gray-700'>
            
          </aside>
        </div>
      </div>
    </>
  )
}

export default StageSimulationPage
