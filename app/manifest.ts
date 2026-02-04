import { type MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '東京都特化型リフォーム×AIポータル',
    short_name: '東京都特化型リフォーム×AIポータル',
    description: '東京都に特化したリフォーム情報とAI技術を融合したポータルサイトです。地域密着の施工事例や最新のリフォームプランを、AIによる自動提案やシミュレーション機能でわかりやすく提供します。見積り比較、カラーシミュレーション、費用概算など、リフォームに必要な情報をワンストップでサポートし、理想の住まいづくりを効率的に実現します。',
    start_url: '/',
    display: 'fullscreen',
    background_color: '#030712',
    theme_color: '#030712',
    icons: [
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
