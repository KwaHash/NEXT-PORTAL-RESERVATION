import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FaDesktop } from 'react-icons/fa6'

const DesktopRequired = () => {
  return (
    <div className='h-screen flex-1 flex md:hidden flex-col items-center justify-center bg-[#1A1A1A] text-white px-6'>
      <FaDesktop size={48} />
      <h1 className='text-xl font-bold my-3'>デスクトップが必要</h1>
      <p className='text-gray-400 text-center text-sm mb-8 max-w-xs leading-relaxed'>
        写真編集スタジオはデスクトップまたはタブレット画面で最適にご利用いただけます。
      </p>
      <Button asChild className='bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-sm px-8 py-4 h-auto w-auto transition-all duration-500'>
        <Link href='/'>トップページに戻る</Link>
      </Button>
    </div>
  )
}

export default DesktopRequired