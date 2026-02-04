'use client'

import { Button } from '@/components/ui/button'
import { useWindowScroll } from '@/hooks/use-window-scroll'
import { ArrowUpIcon } from 'lucide-react'

const ScrollTopButton = () => {
  const [scroll, scrollTo] = useWindowScroll()

  if (scroll.y < 100) {
    return null
  }

  return (
    <Button
      data-test-id='scroll-top-button'
      variant='outline'
      size='icon'
      className='fixed rounded-full right-6 bottom-6 bg-indigo-700'
      onClick={() => scrollTo({ top: 0 })}
    >
      <ArrowUpIcon className='h-5 w-5 text-white animate-pulse' />
    </Button>
  )
}

export default ScrollTopButton
