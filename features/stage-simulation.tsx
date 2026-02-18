'use client'

import { BeforeAfterSlider } from '@/components/simulation/before-after-slider'
import { ToolButton } from '@/components/simulation/tool-button'
import { Button } from '@/components/ui/button'
import { exteriorTools, interiorTools } from '@/constants/stage-simulation'
import { useState } from 'react'
import { BsStars } from 'react-icons/bs'
import { FaCheck, FaXmark } from 'react-icons/fa6'
import { HiChevronDown, HiChevronUp, HiUser } from 'react-icons/hi2'

const BEFORE_IMAGE = '/images/sample-color/01_before.png'

const StageSimulationPage = () => {
  const [exteriorOpen, setExteriorOpen] = useState(true)
  const [interiorOpen, setInteriorOpen] = useState(true)
  const [selectedTool, setSelectedTool] = useState<string | null>(null)

  return (
    <div className='h-screen flex-1 flex bg-[#1A1A1A] text-white'>
      <aside className='w-72 md:w-80 shrink-0 flex flex-col border-r border-gray-700'>
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
        <div className='p-6 border-t border-gray-700 space-y-2.5'>
          <Button
            className='w-full bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-none gap-2'
            disabled={selectedTool === null}
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

      <main className='relative flex-1 flex flex-col min-w-0'>
        <div className='flex-1 flex items-center justify-center p-6 min-h-0'>
          <div className='w-full max-w-5xl h-full min-h-[360px]'>
            <BeforeAfterSlider
              beforeImage={BEFORE_IMAGE}
              afterImage='/images/sample-color/01_after.png'
              beforeLabel='変更前'
              afterLabel='変更後'
              className='w-full h-full min-h-[360px] aspect-video'
            />
          </div>
        </div>

        <div className='border-t border-gray-700 shrink-0'>
          <div className='flex items-center justify-between px-6 py-4 gap-4'>
            <div className='flex items-center gap-4 min-w-0'>
              <div className='w-14 h-14 shrink-0 rounded-lg overflow-hidden border border-gray-600 bg-gray-700'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={BEFORE_IMAGE} alt='変更前' className='w-full h-full object-cover' />
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <Button
                variant='destructive'
                className='rounded-lg gap-2 bg-red-600 hover:bg-red-700'
              >
                <FaXmark className='w-4 h-4' />
                破棄
              </Button>
              <Button className='rounded-lg gap-2 bg-green-600 hover:bg-green-700'>
                <FaCheck className='w-4 h-4' />
                承認して保存
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default StageSimulationPage
