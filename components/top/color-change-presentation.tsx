import { BeforeAfterSlider } from '@/components/simulation/before-after-slider'

const ColorChangePresentation = () => {
  return (
    <section className='py-24 bg-gray-100'>
      <div className='w-full mx-auto px-6 sm:px-10 lg:px-24'>
        <div className='text-center mb-12'>
          <div className='flex items-center justify-center gap-4 mb-4'>
            <span className='flex-1 max-w-12 h-px bg-indigo-300' aria-hidden />
            <span className='text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500'>色替え</span>
            <span className='flex-1 max-w-12 h-px bg-indigo-300' aria-hidden />
          </div>
          <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight'>色替え</h2>
          <p className='text-xl text-gray-600 leading-relaxed w-full mx-auto'>
            AIによる画像の色替えイメージを、スライダーで比較できます。
          </p>
        </div>
        <div className='flex justify-center items-center gap-4'>
          {[1, 2, 3].map((num) => (
            <BeforeAfterSlider
              key={num}
              beforeImage={`/images/sample-color/0${num}_before.png`}
              afterImage={`/images/sample-color/0${num}_after.png`}
              beforeLabel='前'
              afterLabel='後'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ColorChangePresentation