import { FaRegChartBar } from 'react-icons/fa'
import { FiUploadCloud } from 'react-icons/fi'
import { MdOutlinePalette } from 'react-icons/md'
import { TbBrandDatabricks } from 'react-icons/tb'

export const HOWTOWORKSTEPS = [
  {
    step: '01',
    title: '物件の作成と写真のアップロード',
    description: 'まずプロジェクト名と所在地を入力してください。その後、掲載する物件写真（室内、外観、カバー写真など）をアップロードします。',
    items: ['物件ごとに写真を整理できます。', '複数の画像を一括でアップロード可能。', '標準フォーマット（JPG、PNG、HEIC）に対応。']
  },
  {
    step: '02',
    title: 'やりたいことを伝える',
    description: '実現したい内容を自由にご記入いただくか、「家具配置」や「カバー写真生成」などガイド付きのプリセットから選択できます。',
    items: [
      '希望内容を自由に入力できます。',
      '「家具配置」「カバー写真生成」など専用プリセットもご用意。',
      '1枚のみ・全写真まとめて、柔軟に編集可能。'
    ]
  },
  {
    step: '03',
    title: '確認と調整',
    description: 'イメージが完璧でない場合もご安心ください。「ソファーを青く」など、追加の指示を入力するだけで簡単に調整可能です。納得いくまで何度でも繰り返し編集できます。',
    items: [
      'AI生成結果をすぐにプレビュー。',
      'テキストで手軽に追加調整。',
      '理想の写真になるまで何度でも修正可能。'
    ]
  },
  {
    step: '04',
    title: '完成・ダウンロード',
    description: '魅力的な画像が完成します！商用利用可能な高解像度（最大4K）の写真をいつでも取得できます。',
    items: [
      '写真を1枚ずつ、またはまとめて一括ダウンロード。',
      'MLS、Web、SNS、印刷用途にも最適な画質。',
      'チーム共有に便利なシェア用リンク（公開・非公開）を発行可能。'
    ]
  },
]

export const TOPFEATURES = [
	{
		title: '空室演出',
		description: '写真をアップロードするだけで、AIが瞬時に空室をステージングします。',
		link: '/stage-simulation',
		icon: TbBrandDatabricks,
		color: 'bg-blue-500'
	},
	{
		title: '色替え',
		description: '実際の写真に色を合成して、リフォーム後のイメージを確認できます。',
		link: '/color-simulation',
		icon: MdOutlinePalette,
		color: 'bg-yellow-500'
	},
	{
		title: '見積送信',
		description: '他社の見積書をアップロードして、詳細な価格比較と分析を行います。',
		link: '/estimate-upload',
		icon: FiUploadCloud,
		color: 'bg-green-500'
	},
	{
		title: '比較結果',
		description: '複数の施工会社の見積もりを一覧で比較検討できます。',
		link: '/comparison',
		icon: FaRegChartBar,
		color: 'bg-purple-500'
	}
]