import RenovationFeatureItem from '@/components/item/renovation-feature-item'
import { HOMEFEATURES } from '@/constants/home'

const RenovationFeature = () => {
  return (
    <section className='relative py-24 bg-white overflow-hidden'>
      <div className='absolute inset-0'
        style={{
          backgroundImage: `
            linear-gradient(45deg, rgba(245, 158, 11, 0.07) 3px, transparent 3px),
            linear-gradient(-45deg, rgba(245, 158, 11, 0.07) 3px, transparent 3px)
          `,
          backgroundSize: '40px 40px'
        }}
      />

      <div className='w-full mx-auto px-6 sm:px-10 lg:px-24'>
        <div className='mb-16'>
          <div className='flex items-center gap-3 mb-4'>
            <span className='w-16 h-px bg-indigo-500' aria-hidden />
            <span className='text-sm font-bold uppercase text-indigo-500'>機能</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight'>AIの力で、リフォームがもっと身近に</h2>
          <p className='text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl'>特化した4つの便利な機能をご提供します。</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 px-6 sm:px-10 lg:px-24'>
          {HOMEFEATURES.map((feature, index) => (
            <RenovationFeatureItem key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RenovationFeature