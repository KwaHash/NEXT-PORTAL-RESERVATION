import { FaBath, FaBed, FaKitchenSet } from 'react-icons/fa6'
import { GiBedLamp, GiHouse } from 'react-icons/gi'
import { HiBuildingOffice } from 'react-icons/hi2'
import { MdOutlineApartment } from 'react-icons/md'
import { PiSolarRoofBold, PiToiletFill } from 'react-icons/pi'

export const renovationTargets = [
	{ id: 'kitchen', label: 'キッチン', icon: FaKitchenSet },
	{ id: 'bathroom', label: 'バスルーム', icon: FaBath },
	{ id: 'living', label: 'リビング', icon: GiBedLamp },
	{ id: 'bedroom', label: '寝室', icon: FaBed },
	{ id: 'toilet', label: 'トイレ', icon: PiToiletFill },
	{ id: 'exterior', label: '外壁・屋根', icon: PiSolarRoofBold }
]

export const propertyCategories = [
	{ id: 'apartment', label: 'マンション', icon: MdOutlineApartment },
	{ id: 'house', label: '戸建て', icon: GiHouse },
	{ id: 'office', label: 'オフィス', icon: HiBuildingOffice }
]