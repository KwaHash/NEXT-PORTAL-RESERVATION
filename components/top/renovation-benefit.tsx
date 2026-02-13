import RenovationBenefitItem from '@/components/item/renovation-benefit-item'
import { HOMEBENEFITS } from '@/constants/home'

const RenovationBenefit = () => {
  return (
    <section className='py-24 bg-gray-100'>
      <div className='w-full mx-auto px-6 sm:px-10 lg:px-24'>
        <div className='mb-16'>
          <div className='flex items-center gap-3 mb-4'>
            <span className='w-16 h-px bg-indigo-500' aria-hidden />
            <span className='text-sm font-bold uppercase text-indigo-500'>選ばれる理由</span>
          </div>
          <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight'>なぜゆたかホームが選ばれるのか</h2>
          <p className='text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl'>30年の実績と最新技術で、お客様の住まいづくりをサポート</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 px-6 sm:px-10 lg:px-24'>
          {HOMEBENEFITS.map((benefit, index) => (
            <RenovationBenefitItem key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RenovationBenefit