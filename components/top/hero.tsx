import Link from 'next/link'
import { FiPlayCircle } from 'react-icons/fi'

const Hero = (): React.JSX.Element => {
  return (
    <section className='relative bg-white'>
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-700' />
      <div className='relative max-w-7xl mx-auto px-4 py-24 sm:py-32'>
        <div className='text-center'>
          <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold leading-normal tracking-tight text-white'>理想の家づくりを、AIがサポート</h1>
          <p className='mt-6 text-base sm:text-lg md:text-xl !leading-8 sm:!leading-10 text-gray-100'>
            最新のAI技術で、あなたの家づくりをより確かなものに。
            <br className='hidden sm:block' />
            信頼できる工務店との出会いから、細かな相談までをトータルサポート。
          </p>
          <div className='mt-10 flex items-center justify-center'>
            <Link href='/'
              className='rounded-md bg-white px-6 py-3 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-gray-200 transition-colors duration-300 ease-out flex items-center gap-2'
            >
              <FiPlayCircle className='w-6 h-6' />
              <span className='text-[15px] sm:text-base'>サービス紹介動画を見る</span>
            </Link>
          </div>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 right-0'>
        <svg
          className='w-full h-12 text-white transform rotate-180'
          fill='currentColor'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
        >
          <path d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' />
        </svg>
      </div>
    </section>
  )
}

export default Hero