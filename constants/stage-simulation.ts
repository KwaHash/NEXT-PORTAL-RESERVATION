import { BiWater } from 'react-icons/bi'
import { CgDockWindow } from 'react-icons/cg'
import { HiOutlineMoon } from 'react-icons/hi2'
import { LiaTrashAlt } from 'react-icons/lia'
import { LuLightbulb, LuSun } from 'react-icons/lu'
import { RiLeafLine, RiSofaLine } from 'react-icons/ri'
import { TbDeviceTv } from 'react-icons/tb'

export const exteriorTools = [
  { id: '空の置き換え', label: '空の置き換え', icon: LuSun },
  { id: 'バーチャル夕暮れ', label: 'バーチャル夕暮れ', icon: HiOutlineMoon },
  { id: '芝生の修復', label: '芝生の修復', icon: RiLeafLine },
  { id: 'プールの強化', label: 'プールの強化', icon: BiWater },
] as const

export const interiorTools = [
  { id: '片付け', label: '片付け', icon: LiaTrashAlt },
  { id: '空室演出', label: '空室演出', icon: RiSofaLine },
  { id: 'テレビ画面の交換', label: 'テレビ画面の交換', icon: TbDeviceTv },
  { id: '照明オン', label: '照明オン', icon: LuLightbulb },
  { id: '窓マスキング', label: '窓マスキング', icon: CgDockWindow },
] as const
