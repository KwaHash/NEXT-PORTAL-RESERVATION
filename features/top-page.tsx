import ColorChangePresentation from '@/components/top/color-change-presentation'
import HowToWork from '@/components/top/how-to-work'
import RenovationFeature from '@/components/top/renovation-feature'
import StagePresentation from '@/components/top/stage-presentation'
import TopHero from '@/components/top/top-hero'
import { benefits, companyInfo, faqs } from '@/utils/data'
import Link from 'next/link'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'
import { FiHelpCircle } from 'react-icons/fi'

const TopPage = () => {
  return (
    <div className='w-full grow bg-white'>
      <TopHero />
      <StagePresentation />
      <ColorChangePresentation />
      <HowToWork />
      <RenovationFeature />

      {/* Benefits Section */}
      <section className='py-24 bg-gray-50'>
        <div className='w-full mx-auto px-6 sm:px-10 lg:px-24'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight'>
              なぜゆたかホームが選ばれるのか
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed'>
              30年の実績と最新技術で、お客様の住まいづくりをサポート
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 xl:gap-12'>
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className='text-center'>
                  <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
                    <Icon className='w-9 h-9 text-white' />
                  </div>
                  <h3 className='font-bold text-gray-900 mb-2 text-xl'>{benefit.title}</h3>
                  <p className='text-gray-600'>{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className='py-24 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden'>
        <div className='absolute inset-0 opacity-5'></div>
        <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-24 relative'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
              よくあるご質問
            </h2>
            <p className='text-xl text-gray-600'>
              お客様からよくいただくご質問にお答えします
            </p>
          </div>
          
          <div className='space-y-6'>
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className='bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100'
              >
                <div className='flex items-start'>
                  <div className='flex-shrink-0'>
                    <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg'>
                      <FiHelpCircle className='w-6 h-6 text-white' />
                    </div>
                  </div>
                  <div className='ml-6'>
                    <h3 className='font-bold text-gray-900 mb-3 text-lg'>{faq.question}</h3>
                    <p className='text-gray-600 leading-relaxed'>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-16 overflow-hidden'>
        <div className='w-full mx-auto px-6 sm:px-10 lg:px-24 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            あなたの理想のリフォームを適正価格で実現しませんか？
          </h2>
          <p className='text-xl mb-8 text-blue-100 leading-relaxed'>
            まずは無料の空室演出シミュレーションから始めてみましょう。
            <br />
            <span className='font-bold text-yellow-300'>わずか3分で適正価格が分かります！</span>
          </p>
          <div className='flex flex-col lg:flex-row gap-4 justify-center items-center'>
            <Link href='/ai-simulation'
              className='flex items-center justify-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-xl rounded-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 gap-3'
            >
              <span className='text-xl'>今すぐ適正お見積もり診断を受ける</span>
              <FaArrowRight className='w-5 h-5' />
            </Link>
            <div className='flex flex-col w-full sm:flex-row gap-4 max-w-[432px]'>
              <a
                href={`tel:${companyInfo.phone}`}
                className='flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 gap-3'
              >
                <FaPhoneAlt className='w-5 h-5 mr-2 shrink-0' />
                電話で相談
              </a>
              <Link
                href='/my-page'
                className='flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 gap-3'
              >
                マイページで管理
              </Link>
            </div>
          </div>
          <div className='mt-8 pt-6 border-t border-blue-500 text-blue-200 text-sm flex items-center justify-center leading-relaxed'>
            <FaPhoneAlt className='w-4 h-4 mr-3 text-red-600' />
            <p className='flex flex-col sm:flex-row'>
              <span className='mr-2'>お急ぎの方は直接お電話ください：</span>
              <span>
                <a href={`tel:${companyInfo.phone}`} className='font-bold text-yellow-300 hover:underline'>{companyInfo.phone}</a>
                <span>（平日 9:00-18:00）</span>
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TopPage