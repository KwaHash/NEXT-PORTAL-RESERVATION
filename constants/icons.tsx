import { FaLine, FaTiktok } from 'react-icons/fa'
import { FaFacebook, FaLinkedin, FaSquareInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6'

const sizeClass = 'w-8 h-8 p-1 rounded-sm'

export const WEBSITE_ICONS: Record<string, React.ReactNode> = {
  facebook: <FaFacebook className={sizeClass} style={{ background: '#1877F2' }} />,
  twitter: <FaXTwitter className={sizeClass} style={{ background: '#000000' }} />,
  youtube: <FaYoutube className={sizeClass} style={{ background: '#FF0000' }} />,
  line: <FaLine className={sizeClass} style={{ background: '#00C300' }} />,
  instagram: <FaSquareInstagram className={sizeClass} style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }} />,
  tiktok: <FaTiktok className={sizeClass} style={{ background: '#000000' }} />,
  linkedin: <FaLinkedin className={sizeClass} style={{ background: '#0A66C2' }} />,
}