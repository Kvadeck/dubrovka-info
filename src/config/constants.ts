import Slide1l from '@/assets/img/slides/slide1_large.jpg'
import Slide2l from '@/assets/img/slides/slide2_large.jpg'
import Slide3l from '@/assets/img/slides/slide3_large.jpg'

import Slide1s from '@/assets/img/slides/slide1_medium.jpg'
import Slide2s from '@/assets/img/slides/slide2_medium.jpg'
import Slide3s from '@/assets/img/slides/slide3_medium.jpg'
import the360 from '@/assets/img/360.svg'
import document from '@/assets/img/document.svg'
import metro from '@/assets/img/metro.svg'

export const breakpoints: { [key: string]: number } = {
  sm: 0,
  md: 768,
  lg: 1280,
}

interface SlideImage {
  medium: string
  large: string
}

export const slideImages: SlideImage[] = [
  { medium: Slide1s, large: Slide1l },
  { medium: Slide2s, large: Slide2l },
  { medium: Slide3s, large: Slide3l },
]

interface navLink {
  label: string
  href: string
}

export const navLinks: navLink[] = [
  { label: 'О проекте', href: '#' },
  { label: 'Каталог', href: '#' },
  { label: 'Галерея', href: '#' },
  { label: 'Новости', href: '#' },
]

interface iconLink {
  label: string
  icon: string
  class?: string
}

export const iconLinks: iconLink[] = [
  {
    label: 'Панорама 360',
    icon: the360,
  },
  {
    label: 'Буклет',
    icon: document,
  },
  {
    label: 'Ольховая',
    icon: metro,
    class: 'tracking-wider uppercase',
  },
]

interface qualityItem {
  title: string
  description: string
}

export const qualityList: qualityItem[] = [
  {
    title: 'Спокойствие',
    description: 'Жилой комплекс «Дубровка» во Фрунзенском районе в двух шагах от Лиговского проспекта. Живописный двор с пейзажным парком, роскошное лобби, коворкинг для жителей и муниципальный детский сад в доме.',
  },
  {
    title: 'Надежность',
    description: 'Для общего пользования сохранена естественная парковая зона в 6 Га. Инфраструктура комплекса включает в себя все необходимое для жизни: детские и спортивные площадки, мини-зоопарк, детский сад, школу, рестораны, торговый центр, дом быта, отделение банка и страховое отделение и многое другое.',
  },
]
