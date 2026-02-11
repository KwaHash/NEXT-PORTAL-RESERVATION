import { BeforeAfterSlider } from '@/components/simulation/before-after-slider'
import { benefits, companyInfo, faqs, features, processSteps } from '@/utils/data'
import Link from 'next/link'
import React from 'react'
import { BsLampFill, BsStars } from 'react-icons/bs'
import { FaArrowRight, FaPhoneAlt } from 'react-icons/fa'
import { FcHome } from 'react-icons/fc'
import { FiCheckCircle, FiHelpCircle } from 'react-icons/fi'
import { HiOutlineCalculator } from 'react-icons/hi'
import { PiCloudWarningFill } from 'react-icons/pi'


const TopPage = () => {
  return (
    <div className='w-full grow bg-white'>
      <section className='relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-24 overflow-hidden'>
        <div className='absolute inset-0 opacity-10 animate-pulse'></div>
        <div className='absolute -top-40 -right-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 animate-blob'></div>
        <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000'></div>
        
        <div className='w-full mx-auto px-6 sm:px-10 lg:px-24 relative'>
          <div className='flex flex-col xl:flex-row gap-12 items-center'>
            <div className='w-full xl:w-3/5'>
              <div className='inline-flex items-center bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-bold shadow-lg'>
                <PiCloudWarningFill className='w-7 h-7 mr-3 text-yellow-300 animate-bounce' />
                <span className='text-lg'>ハウスメーカー経由だと2倍以上の費用に！</span>
              </div>
              
              <h1 className='text-5xl md:text-6xl font-black my-10 leading-tight'>
                <span className='block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 text-6xl md:text-7xl mb-2'>適正価格で</span>
                <span className='block drop-shadow-lg'>リフォームしませんか？</span>
              </h1>
              
              <div className='bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-10 border border-white/20 shadow-xl hover:shadow-2xl transition-shadow duration-300'>
                <p className='flex items-center gap-3 text-2xl font-bold text-yellow-300 mb-6'>
                  <FcHome className='w-8 h-8' />
                  <span>あなたはこんなお悩みありませんか？</span>
                </p>
                <ul className='space-y-4 text-blue-50'>
                  <li className='flex items-start transform hover:translate-x-2 transition-transform duration-300'>
                    <FiCheckCircle className='w-6 h-6 mr-3 text-yellow-400 flex-shrink-0' />
                    <span className='font-semibold text-lg'>リフォームの適正価格が分からない</span>
                  </li>
                  <li className='flex items-start transform hover:translate-x-2 transition-transform duration-300'>
                    <FiCheckCircle className='w-6 h-6 mr-3 text-yellow-400 flex-shrink-0' />
                    <span className='font-semibold text-lg'>信頼できる業者の見つけ方が分からない</span>
                  </li>
                  <li className='flex items-start transform hover:translate-x-2 transition-transform duration-300'>
                    <FiCheckCircle className='w-6 h-6 mr-3 text-yellow-400 flex-shrink-0' />
                    <span className='font-semibold text-lg'>ハウスメーカーの見積もりが高すぎる</span>
                  </li>
                  <li className='flex items-start transform hover:translate-x-2 transition-transform duration-300'>
                    <FiCheckCircle className='w-6 h-6 mr-3 text-yellow-400 flex-shrink-0' />
                    <span className='font-semibold text-lg'>複数社の比較が面倒で時間がかかる</span>
                  </li>
                </ul>
              </div>
              
              <p className='text-2xl mb-10 text-blue-50 font-bold leading-relaxed'>
                <span className='text-yellow-400'>今すぐ</span>私たちの
                <span className='text-yellow-400 px-2 py-1 rounded bg-white/10 mx-2'>「適正お見積もり診断」</span>
                を受けて、リフォーム予算をスマートに管理しましょう！
              </p>
              
              <div className='flex flex-col sm:flex-row justify-center gap-6'>
                <Link href='/ai-simulation'
                  className='flex items-center justify-center px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold text-xl rounded-xl hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 gap-3'
                >
                  <span className='text-xl'>今すぐ適正お見積もり診断を受ける</span>
                  <FaArrowRight className='w-5 h-5 animate-bounce' />
                </Link>
                <Link href='/color-simulation'
                  className='flex items-center justify-center px-10 py-5 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transform hover:-translate-y-1 transition-all duration-300 gap-3'
                >
                  <BsStars className='text-2xl animate-spin' />
                  <span className='text-xl'>カラーシミュレーション</span>
                </Link>
              </div>
            </div>
            <div className='w-full xl:w-2/5 bg-white/10 backdrop-blur-md rounded-3xl p-8'>
                <div className='bg-white rounded-2xl p-8 shadow-2xl'>
                  <div className='flex items-center mb-8'>
                    <div className='w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg'>
                      <HiOutlineCalculator className='w-10 h-10 text-white' />
                    </div>
                    <div className='ml-5'>
                      <h3 className='font-black text-gray-900 text-2xl'>AI概算</h3>
                      <p className='text-base text-gray-600'>キッチンリフォーム</p>
                    </div>
                  </div>
                  <div className='space-y-4 text-gray-900'>
                    <div className='flex items-center font-bold justify-between text-lg'>
                      <span>材料費</span>
                      <span>¥450,000</span>
                    </div>
                    <div className='flex items-center font-bold justify-between text-lg'>
                      <span>工事費</span>
                      <span>¥380,000</span>
                    </div>
                    <div className='border-t-2 pt-4 flex justify-between text-xl font-black'>
                      <span>合計</span>
                      <span className='text-blue-600'>¥830,000</span>
                    </div>
                    <div className='bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl mt-6'>
                      <p className='flex gap-3 text-base text-red-700 font-bold mb-2'>
                        <BsLampFill className='w-6 h-6 text-red-500' />
                        <span>ハウスメーカー経由なら約160万円</span>
                      </p>
                      <p className='font-black text-red-800 text-xl'>約77万円もお得！</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className='py-24 bg-white'>
        <div className='w-full mx-auto px-6 sm:px-10 lg:px-24'>
          <div className='text-center mb-12'>
            <div className='flex items-center justify-center gap-4 mb-4'>
              <span className='flex-1 max-w-12 h-px bg-indigo-300' aria-hidden />
              <span className='text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500'>空室演出</span>
              <span className='flex-1 max-w-12 h-px bg-indigo-300' aria-hidden />
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight'>
              空室演出
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed w-full mx-auto'>
              AIによる画像補正で空室の魅力を演出。Before / After でスライダー比較できます。
            </p>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <BeforeAfterSlider
              beforeImage='/images/sample-space/01_before.png'
              afterImage='/images/sample-space/01_after.png'
              beforeLabel='前'
              afterLabel='後'
            />
            <BeforeAfterSlider
              beforeImage='/images/sample-space/02_before.png'
              afterImage='/images/sample-space/02_after.png'
              beforeLabel='前'
              afterLabel='後'
            />
            <BeforeAfterSlider
              beforeImage='/images/sample-space/03_before.png'
              afterImage='/images/sample-space/03_after.png'
              beforeLabel='前'
              afterLabel='後'
            />
          </div>
        </div>
      </section>

      <section className='py-24 bg-gray-100'>
        <div className='w-full mx-auto px-6 sm:px-10 lg:px-24'>
          <div className='text-center mb-12'>
            <div className='flex items-center justify-center gap-4 mb-4'>
              <span className='flex-1 max-w-12 h-px bg-indigo-300' aria-hidden />
              <span className='text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-indigo-500'>
                色替え
              </span>
              <span className='flex-1 max-w-12 h-px bg-indigo-300' aria-hidden />
            </div>
            <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-4 leading-tight'>
              色替え
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed w-full mx-auto'>
              AIによる画像の色替えイメージを、スライダーで比較できます。
            </p>
          </div>
          <div className='flex justify-center items-center gap-4'>
            <BeforeAfterSlider
              beforeImage='/images/sample-color/01_before.png'
              afterImage='/images/sample-color/01_after.png'
              beforeLabel='前'
              afterLabel='後'
            />
            <BeforeAfterSlider
              beforeImage='/images/sample-color/02_before.png'
              afterImage='/images/sample-color/02_after.png'
              beforeLabel='前'
              afterLabel='後'
            />
            <BeforeAfterSlider
              beforeImage='/images/sample-color/03_before.png'
              afterImage='/images/sample-color/03_after.png'
              beforeLabel='前'
              afterLabel='後'
            />
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className='py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50'>
        <div className='w-full mx-auto px-6 sm:px-10 lg:px-24'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight'>
              <span className='bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent'>たった4ステップ</span>で
              <br className='md:hidden' />
              <span className='relative'>
                適正価格を診断
                <span className='absolute -bottom-2 left-0 w-full h-1 bg-blue-400/30'></span>
              </span>
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed'>
              面倒な見積もりプロセスを、<span className='font-bold text-blue-600'>最新のAI技術</span>で劇的に効率化。
              <br />
              わずか<span className='font-black'>3分</span>で、あなたの理想のリフォームの適正価格が分かります。
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-12'>
            {processSteps.map((step, index) => {
              const Icon = step.icon as React.ElementType
              return (
                <div key={index} className='relative group'>
                  <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-[320px] flex flex-col justify-center items-center p-8'>
                    <div className='text-5xl mb-6 transform transition-transform duration-300'>
                      <Icon className='w-12 h-12 mx-auto' />
                    </div>
                    <div className='w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md'>
                      <span className='text-white font-black text-lg'>{step.step}</span>
                    </div>
                    <h3 className='font-bold text-xl text-gray-900 mb-3'>{step.title}</h3>
                    <p className='text-center text-gray-600'>{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className='hidden xl:block absolute top-1/2 -right-10 transform -translate-y-1/2'>
                      <FaArrowRight className='w-8 h-8 text-blue-400 animate-pulse' />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className='text-center mt-16'>
            <Link href='/ai-simulation'
              className='inline-flex items-center px-6 sm:px-12 py-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-black text-xl rounded hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-xl transform hover:-translate-y-1'
            >
              <HiOutlineCalculator className='w-7 h-7 mr-4 shrink-0' />
              <span>今すぐ適正お見積もり診断を開始</span>
              <FaArrowRight className='ml-4 w-5 h-5 shrink-0' />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='py-24 bg-white'>
        <div className='w-full mx-auto px-6 sm:px-10 lg:px-24'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-black text-gray-900 mb-8 leading-tight'>
              <span className='relative inline-block'>
                AIの力で、リフォームがもっと身近に
                <span className='absolute -bottom-2 left-0 w-full h-1 bg-blue-400/30'></span>
              </span>
            </h2>
            <p className='text-xl text-gray-600 leading-relaxed'>
              従来の煩雑な見積もりプロセスを、<span className='font-bold text-blue-600'>最新のAI技術</span>で効率化。
              <br />
              東京都内のリフォームに特化した<span className='font-black'>4つの便利な機能</span>をご提供します。
            </p>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 xl:gap-12'>
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Link
                  key={index}
                  href={feature.link}
                  className='relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 h-[320px] p-8'
                >
                  <div className='flex flex-col items-center justify-center h-full'>
                    <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className='w-8 h-8 text-white' />
                    </div>
                    <h3 className='font-bold text-xl text-gray-900 mb-3'>{feature.title}</h3>
                    <p className='text-gray-600 text-center mb-6'>{feature.description}</p>
                    <div className='flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors'>
                      <span className='text-lg'>詳しく見る</span>
                      <FaArrowRight className='ml-2 w-4 h-4 shrink-0 group-hover:translate-x-1 transition-transform duration-300' />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

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