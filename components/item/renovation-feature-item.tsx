import Link from 'next/link'
import type { ElementType } from 'react'

const FEATURE_ICON_BG: Record<string, string> = {
  'bg-blue-500': 'bg-blue-500',
  'bg-yellow-500': 'bg-yellow-500',
  'bg-green-500': 'bg-green-500',
  'bg-purple-500': 'bg-purple-500'
}

export type RenovationFeatureItemProps = {
  feature: {
    title: string
    description: string
    link: string
    icon: ElementType
    color: string
  }
}

const RenovationFeatureItem = ({ feature }: RenovationFeatureItemProps) => {
  const Icon = feature.icon
  const iconBgClass = FEATURE_ICON_BG[feature.color] ?? 'bg-gray-500'
  return (
    <Link
      href={feature.link}
      className='relative group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-[320px] px-8 py-6'
    >
      <div className='flex flex-col items-center justify-center h-full'>
        <div className={`w-14 h-14 ${iconBgClass} rounded-sm flex items-center justify-center mb-6 shadow-lg`}>
          <Icon className='w-8 h-8 text-white' />
        </div>
        <h3 className='font-bold text-xl text-gray-900 mb-3'>{feature.title}</h3>
        <p className='text-gray-600 text-center mb-6'>{feature.description}</p>
        <div className='flex items-center text-blue-600 font-bold group-hover:text-blue-700 transition-colors'>
          <span className='text-lg'>詳しく見る</span>
        </div>
      </div>
    </Link>
  )
}

export default RenovationFeatureItem
