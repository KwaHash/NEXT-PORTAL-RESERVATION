import { ThreeDot } from 'react-loading-indicators'

const LoadingIndicator = () => {
  return (
    <div className='fixed w-full h-screen flex z-50 items-center justify-center bg-[#f9fafb] bg-opacity-80 inset-0'>
      <div className='sm:hidden'>
        <ThreeDot
          variant='pulsate'
          color={['#4338CA', '#CA3876', '#BFCA38', '#38CA8C']}
          speedPlus={-1}
          size='medium'
        />
      </div>
      <div className='hidden sm:block'>
        <ThreeDot
          variant='pulsate'
          color={['#4338CA', '#CA3876', '#BFCA38', '#38CA8C']}
          speedPlus={-1}
          size='large'
        />
      </div>
    </div>
  )
}

export default LoadingIndicator
