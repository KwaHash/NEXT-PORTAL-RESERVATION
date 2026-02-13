import type { ElementType } from 'react'

export type RenovationBenefitItemProps = {
  benefit: {
    title: string
    description: string
    icon: ElementType
  }
}

const RenovationBenefitItem = ({ benefit }: RenovationBenefitItemProps) => {
  const Icon = benefit.icon
  return (
    <div className='text-center'>
      <div className='w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4'>
        <Icon className='w-9 h-9 text-white' />
      </div>
      <h3 className='font-bold text-gray-900 mb-2 text-xl'>{benefit.title}</h3>
      <p className='text-gray-600'>{benefit.description}</p>
    </div>
  )
}

export default RenovationBenefitItem
