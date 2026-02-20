import { COMPANYINFO, SERVICES, SUPPORTS } from '@/constants/common'
import { WEBSITE_ICONS } from '@/constants/icons'
import Link from 'next/link'
import { FiPhone } from 'react-icons/fi'
import { LuClock4, LuMapPin } from 'react-icons/lu'
import { MdOutlineMailOutline } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-blue-900 to-gray-900 text-white relative overflow-hidden'>
      <div className='relative z-10 max-w-[1440px] mx-auto px-10 sm:px-8 py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-10'>
          <div className='col-span-1 flex flex-col justify-between'>
            <div className='flex flex-col'>
              <h3 className='text-2xl font-extrabold mb-4 flex items-center gap-2'>
                <span className='bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-lg'>外壁ぽっけ</span>
              </h3>
              {/* <p className='text-gray-300 mb-4 leading-relaxed'>
                <span className='font-semibold text-blue-200'>東京都特化</span>のリフォーム専門会社として、<br />
                <span className='text-indigo-200'>AI × 住まい</span>で安心・安全・満足いただける住まいづくりをお手伝いします。
              </p> */}
              <div className='flex flex-col gap-3 text-gray-400 text-sm'>
                <div className='flex items-center gap-2'>
                  <LuMapPin className='w-4 h-4 text-blue-400' />
                  <span>{COMPANYINFO.address}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <FiPhone className='w-4 h-4 text-blue-400' />
                  <a href={`tel:${COMPANYINFO.phone}`} className='hover:text-blue-200 transition-colors'>{COMPANYINFO.phone}</a>
                </div>
                <div className='flex items-center gap-2'>
                  <MdOutlineMailOutline className='w-4 h-4 text-blue-400' />
                  <a href={`mailto:${COMPANYINFO.mail}`} className='hover:text-blue-200 transition-colors'>{COMPANYINFO.mail}</a>
                </div>
                <div className='flex items-center gap-2'>
                  <LuClock4 className='w-4 h-4 text-blue-400' />
                  <span>{COMPANYINFO.time}</span>
                </div>
              </div>
            </div>
            <div className='mt-6 flex flex-wrap items-center gap-3'>
              {COMPANYINFO.socials.map((item) => {
                return (
                  <Link
                    key={item.label}
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='transition-all duration-300 hover:opacity-80'
                  >
                    {WEBSITE_ICONS[item.label]}
                  </Link>
                )
              })}
            </div>
          </div>

          <div className='flex flex-row justify-between sm:justify-around'>
            <div className='flex flex-col'>
              <h4 className='font-semibold text-xl mb-4 border-b border-blue-700/30 pb-1'>サービス</h4>
              <ul className='space-y-2 text-gray-300'>
                {SERVICES.map((service) => (
                  <li key={service.url}>
                    <Link
                      href={service.url}
                      className='hover:text-blue-300 transition-colors font-medium flex items-center gap-3 group'
                    >
                      <span className='inline-block w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform' />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className='flex flex-col'>
              <h4 className='font-semibold text-xl mb-4 border-b border-indigo-700/30 pb-1'>サポート</h4>
              <ul className='space-y-2 text-gray-300'>
                {SUPPORTS.map(support => (
                  <li key={support.url}>
                    <Link
                      href={support.url}
                      className='hover:text-indigo-300 transition-colors font-medium flex items-center gap-3 group'
                    >
                      <span className='inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:scale-125 transition-transform' />
                      {support.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm flex flex-col items-center gap-2'>
          <p>&copy; 2026 <span className='font-bold text-blue-200'>外壁ぽっけ</span>. All rights reserved.</p>
          <p className='inline-block px-2 py-0.5 rounded bg-blue-700/30 text-blue-200 font-semibold text-xs tracking-wide'>AI × リフォームで未来の住まいを創造</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer