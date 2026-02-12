import { FiCheckCircle } from 'react-icons/fi'
import { GiDiamonds } from 'react-icons/gi'

interface HowToWorkItemProps {
  step: string
  title: string
  description: string
  items: string[]
}

const HowToWorkItem = ({ step, title, description, items }: HowToWorkItemProps) => {
  return (
    <div className='flex max-w-4xl gap-6 even:ml-auto'>
      <div className='flex flex-col items-center shrink-0'>
        <GiDiamonds className='w-6 h-6 text-indigo-500/80 shrink-0' aria-hidden />
        <div className='mt-[-3px] w-px flex-1 min-h-[100px] bg-indigo-500/80' aria-hidden />
      </div>
      <div className='pt-1 pb-8'>
        <span className='text-sm font-semibold uppercase tracking-wider text-indigo-500'>ステップ {step}</span>
        <h2 className='text-xl sm:text-2xl font-bold text-gray-900 my-4'>{title}</h2>
        <p className='mb-6'>{description}</p>
        <ul className='flex flex-col gap-2'>
          {items.map((item, i) => (
            <li key={i} className='flex items-center gap-2'>
              <FiCheckCircle className='w-5 h-5 shrink-0' />
              <span className='text-sm'>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HowToWorkItem