
import { FaRegChartBar } from 'react-icons/fa'
import { FiHome, FiUploadCloud, FiUser } from 'react-icons/fi'
import { LuBuilding2 } from 'react-icons/lu'
import { MdOutlinePalette } from 'react-icons/md'
import { TbBrandDatabricks } from 'react-icons/tb'

export const SERVICES = [
	{ label: 'ホーム', url: '/', icon: FiHome },
	{ label: '空室演出', url: '/stage-simulation', icon: TbBrandDatabricks },
	{ label: '色替え', url: '/color-simulation', icon: MdOutlinePalette },
	{ label: '見積送信', url: '/estimate-upload', icon: FiUploadCloud },
	{ label: '比較結果', url: '/comparison', icon: FaRegChartBar },
	{ label: 'マイページ', url: '/my-page', icon: FiUser },
	{ label: '施工会社', url: '/builder', icon: LuBuilding2 }
]

export const SUPPORTS = [
  { label: '利用規約', url: '/terms' },
  { label: 'プライバシーポリシー', url: '/privacy' },
  { label: 'よくある質問', url: '/faq' },
  { label: 'お問い合わせ', url: '/contact' },
]

export const COMPANYINFO = {
	address: '東京都新宿区西新宿1-1-1',
	phone: '03-1234-5678',
	mail: 'info@yutakahome.jp',
	time: '平日 9:00-18:00',
	socials: [
		{ label: 'facebook', url: 'https://facebook.com/' },
		{ label: 'twitter', url: 'https://twitter.com/' },
		{ label: 'youtube', url: 'https://youtube.com/' },
		{ label: 'line', url: 'https://line.me/' },
		{ label: 'instagram', url: 'https://instagram.com/' },
		{ label: 'tiktok', url: 'https://tiktok.com/' },
		{ label: 'linkedin', url: 'https://linkedin.com/' },
	],
}