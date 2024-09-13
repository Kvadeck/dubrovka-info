import Slide1l from '@/assets/img/slides/slide1_large.jpg'
import Slide2l from '@/assets/img/slides/slide2_large.jpg'
import Slide3l from '@/assets/img/slides/slide3_large.jpg'

import Slide1s from '@/assets/img/slides/slide1_medium.jpg'
import Slide2s from '@/assets/img/slides/slide2_medium.jpg'
import Slide3s from '@/assets/img/slides/slide3_medium.jpg'
import the360 from '@/assets/img/360.svg'
import document from '@/assets/img/document.svg'
import metro from '@/assets/img/metro.svg'

// breakpoints didn't have xl value from uno.config.ts
export const breakpoints = {
  sm: 0,
  md: 768,
  lg: 1280,
}

export const slideImages = [
  { medium: Slide1s, large: Slide1l },
  { medium: Slide2s, large: Slide2l },
  { medium: Slide3s, large: Slide3l },
]

export const navLinks = [
  { label: 'О проекте', href: '#' },
  { label: 'Каталог', href: '#' },
  { label: 'Галерея', href: '#' },
  { label: 'Новости', href: '#' },
]

export const iconLinks = [
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
