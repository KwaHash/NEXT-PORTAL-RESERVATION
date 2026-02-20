import ColorChangePresentation from '@/components/top/color-change-presentation'
import FAQ from '@/components/top/faq'
import Hero from '@/components/top/hero'
import HowToWork from '@/components/top/how-to-work'
import RenovationFeature from '@/components/top/renovation-feature'
import StageRoomPresentation from '@/components/top/stage-room-presentation'

const MainHome = () => {
  return (
    <div className='w-full grow bg-white'>
      <Hero />
      <StageRoomPresentation />
      <ColorChangePresentation />
      <HowToWork />
      <RenovationFeature />
      {/* <RenovationBenefit /> */}
      <FAQ />
    </div>
  )
}

export default MainHome