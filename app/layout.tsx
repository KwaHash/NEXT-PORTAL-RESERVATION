import '@/styles/globals.scss'

import Providers from '@/app/providers'
import Footer from '@/components/footer/footer'
import NavBar from '@/components/header/nav-bar'
import ScrollTopButton from '@/components/scroll-top-button'
import TailwindIndicator from '@/components/tailwind-indicator'
import { env } from '@/lib/config'
import HolyLoader from 'holy-loader'
import { type Metadata, type Viewport } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { StrictMode } from 'react'

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#030712' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
  width: 'device-width',
  initialScale: 1.0,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_HOST),
  title: '東京都特化型リフォーム×AIポータル',
  applicationName: '東京都特化型リフォーム×AIポータル',
  description:
    '東京都に特化したリフォーム情報とAI技術を融合したポータルサイトです。地域密着の施工事例や最新のリフォームプランを、AIによる自動提案やシミュレーション機能でわかりやすく提供します。見積り比較、カラーシミュレーション、費用概算など、リフォームに必要な情報をワンストップでサポートし、理想の住まいづくりを効率的に実現します。',
  openGraph: {
    title: '東京都特化型リフォーム×AIポータル',
    siteName: '東京都特化型リフォーム×AIポータル',
    description:
      '東京都に特化したリフォーム情報とAI技術を融合したポータルサイトです。地域密着の施工事例や最新のリフォームプランを、AIによる自動提案やシミュレーション機能でわかりやすく提供します。見積り比較、カラーシミュレーション、費用概算など、リフォームに必要な情報をワンストップでサポートし、理想の住まいづくりを効率的に実現します。',
    type: 'website',
    images: [''],
  },
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    {
      url: '/android-chrome-192x192.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      url: '/android-chrome-512x512.png',
      sizes: '512x512',
      type: 'image/png',
    },
  ],
}

const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StrictMode>
      <html lang='jp' suppressHydrationWarning>
        <body className={notoSansJP.className}>
          <HolyLoader color='#4338CA' height='2px' easing='linear' />
          <Providers>
            <div className='flex flex-col w-full min-h-screen overflow-x-hidden overflow-y-auto'>
              <NavBar />
              <main className='flex flex-col w-full min-h-[calc(100dvh_-_80px)] mt-20'>
                {children}
              </main>
              <Footer />
              <ScrollTopButton />
            </div>
            <TailwindIndicator />
          </Providers>
        </body>
      </html>
    </StrictMode>
  )
}
