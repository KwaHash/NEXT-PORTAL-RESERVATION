import { BsFillBarChartLineFill } from 'react-icons/bs'
import { FaCameraRetro, FaRegChartBar, FaSearch } from 'react-icons/fa'
import { FiHome, FiUploadCloud, FiUser } from 'react-icons/fi'
import { HiOutlineCalculator } from 'react-icons/hi'
import { LuAward, LuBuilding2, LuClock, LuShieldCheck } from 'react-icons/lu'
import { MdOutlinePalette } from 'react-icons/md'
import { RiRobot2Fill } from 'react-icons/ri'


export const companyInfo = {
	address: '東京都新宿区西新宿1-1-1',
	phone: '03-1234-5678',
	mail: 'info@yutakahome.jp',
	working: '平日 9:00-18:00'
}

export const services = [
	{
		text: 'ホーム',
		linkUrl: '/',
		icon: FiHome,
	},
	{
		text: 'AI概算',
		linkUrl: '/ai-simulation',
		icon: HiOutlineCalculator,
	},
	{
		text: '色替え',
		linkUrl: '/color-simulation',
		icon: MdOutlinePalette,
	},
	{
		text: '見積送信',
		linkUrl: '/estimate-upload',
		icon: FiUploadCloud,
	},
	{
		text: '比較結果',
		linkUrl: '/comparison',
		icon: FaRegChartBar,
	},
	{
		text: 'マイページ',
		linkUrl: '/my-page',
		icon: FiUser,
	},
	{
		text: '施工会社',
		linkUrl: '/builder',
		icon: LuBuilding2,
	}
]

export const supports = [
  { linkUrl: '/terms', text: '利用規約' },
  { linkUrl: '/privacy', text: 'プライバシーポリシー' },
  { linkUrl: '/faq', text: 'よくある質問' },
  { linkUrl: '/contact', text: 'お問い合わせ' },
]

export const processSteps = [
	{
		step: '01',
		title: '写真アップロード',
		description: 'リフォーム箇所を撮影・アップロード',
		icon: FaCameraRetro,
	},
	{
		step: '02',
		title: 'AI診断実行',
		description: 'AIが瞬時に適正価格を算出・分析',
		icon: RiRobot2Fill
	},
	{
		step: '03',
		title: '業者マッチング',
		description: '条件に合った優良業者を自動選定',
		icon: FaSearch
	},
	{
		step: '04',
		title: '見積もり比較',
		description: '複数社の見積もりを透明性高く比較',
		icon: BsFillBarChartLineFill
	}
]

export const features = [
	{
		title: 'AI概算シミュレーション',
		description: '写真をアップロードするだけで、AIが瞬時にリフォーム費用を算出します。',
		link: '/ai-simulation',
		icon: HiOutlineCalculator,
		color: 'bg-blue-500'
	},
	{
		title: 'カラーシミュレーション',
		description: '実際の写真に色を合成して、リフォーム後のイメージを確認できます。',
		link: '/color-simulation',
		icon: MdOutlinePalette,
		color: 'bg-yellow-500'
	},
	{
		title: '見積書解析',
		description: '他社の見積書をアップロードして、詳細な価格比較と分析を行います。',
		link: '/estimate-upload',
		icon: FiUploadCloud,
		color: 'bg-green-500'
	},
	{
		title: '価格比較',
		description: '複数の施工会社の見積もりを一覧で比較検討できます。',
		link: '/comparison',
		icon: FaRegChartBar,
		color: 'bg-purple-500'
	}
]

export const benefits = [
	{
		title: '安心・安全',
		description: '厳選された東京都内の優良施工会社のみが参加しています。',
		icon: LuShieldCheck
	},
	{
		title: '時間短縮',
		description: 'AIによる自動化で、従来の半分の時間で見積もりを取得できます。',
		icon: LuClock,
	},
	{
		title: '品質保証',
		description: '全ての施工に対して、ゆたかホームの品質保証が適用されます。',
		icon: LuAward,
	}
]

export const faqs = [
	{
		question: 'AI見積もりの精度はどの程度ですか？',
		answer: '過去10,000件以上の施工データを学習したAIにより、実際の見積もりとの誤差は平均5%以内です。ただし、詳細な仕様により変動する場合があります。'
	},
	{
		question: 'ハウスメーカー経由との価格差はどの程度ですか？',
		answer: 'ハウスメーカー経由の場合、中間マージンにより20-40%高くなることが一般的です。当サービスでは直接施工会社とマッチングするため、適正価格でのご提案が可能です。'
	},
	{
		question: '東京都内のどのエリアに対応していますか？',
		answer: '23区全域および多摩エリア（八王子市、立川市、武蔵野市、三鷹市等）に対応しています。各エリアの地域特性に合わせた最適なご提案をいたします。'
	},
	{
		question: '見積もり後のキャンセルは可能ですか？',
		answer: '見積もりは無料で、契約前であればいつでもキャンセル可能です。お客様にご納得いただけるまで、じっくりとご検討ください。'
	},
	{
		question: '工事の品質保証はありますか？',
		answer: '全ての施工に対して最低5年間の品質保証を提供しています。また、定期点検やアフターサービスも充実しています。'
	}
]

export const areas = [
	{ id: 'chiyoda', label: '千代田区' },
	{ id: 'chuo', label: '中央区' },
	{ id: 'minato', label: '港区' },
	{ id: 'shinjuku', label: '新宿区' },
	{ id: 'bunkyo', label: '文京区' },
	{ id: 'taito', label: '台東区' },
	{ id: 'sumida', label: '墨田区' },
	{ id: 'koto', label: '江東区' },
	{ id: 'shinagawa', label: '品川区' },
	{ id: 'meguro', label: '目黒区' },
	{ id: 'ota', label: '大田区' },
	{ id: 'setagaya', label: '世田谷区' },
	{ id: 'shibuya', label: '渋谷区' },
	{ id: 'nakano', label: '中野区' },
	{ id: 'suginami', label: '杉並区' },
	{ id: 'toshima', label: '豊島区' },
	{ id: 'kita', label: '北区' },
	{ id: 'arakawa', label: '荒川区' },
	{ id: 'itabashi', label: '板橋区' },
	{ id: 'nerima', label: '練馬区' },
	{ id: 'adachi', label: '足立区' },
	{ id: 'katsushika', label: '葛飾区' },
	{ id: 'edogawa', label: '江戸川区' },
]

export const periods = [
	{
		id: 'immediate',
		label: 'すぐに'
	},
	{
		id: '1month',
		label: '1ヶ月以内'
	},
	{
		id: '3months',
		label: '3ヶ月以内'
	},
	{
		id: '6months',
		label: '6ヶ月以内'
	},
	{
		id: '1year',
		label: '1年以内'
	},
]