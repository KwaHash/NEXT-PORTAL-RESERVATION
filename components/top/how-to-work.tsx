import HowToWorkItem from '@/components/item/how-to-work-item'
import { HOMEHOWTOS } from '@/constants/home'

const HowToWork = () => {
  return (
    <section className='relative py-24 bg-white overflow-hidden'>
      <div className='absolute inset-0 opacity-[0.04]'
        style={{
          backgroundImage: `
            linear-gradient(to right, #1f2937 1px, transparent 1px),
            linear-gradient(to bottom, #1f2937 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className='w-full mx-auto px-6 sm:px-10 lg:px-24'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-4 mb-4'>
            <span className='flex-1 max-w-12 h-px bg-indigo-300' aria-hidden />
            <span className='text-xs md:text-sm font-semibold tracking-[0.2em] text-indigo-500'>ご利用方法</span>
            <span className='flex-1 max-w-12 h-px bg-indigo-300' aria-hidden />
          </div>
          <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight'>ご利用方法</h2>
        </div>
        <div className='flex flex-col gap-8 mx-auto px-6 sm:px-10 lg:px-24'>
          {HOMEHOWTOS.map((item) => (
            <HowToWorkItem key={item.step} step={item.step} title={item.title} description={item.description} items={item.items} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowToWork