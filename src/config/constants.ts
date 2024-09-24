import Slide1l from '@/assets/img/slides/slide1_large.jpg'
import Slide2l from '@/assets/img/slides/slide2_large.jpg'
import Slide3l from '@/assets/img/slides/slide3_large.jpg'

import Slide1s from '@/assets/img/slides/slide1_medium.jpg'
import Slide2s from '@/assets/img/slides/slide2_medium.jpg'
import Slide3s from '@/assets/img/slides/slide3_medium.jpg'

import jkSlide1l from '@/assets/img/jk-dubrovka-slides/slide1_large.jpg'
import jkSlide2l from '@/assets/img/jk-dubrovka-slides/slide2_large.jpg'

import jkSlide1s from '@/assets/img/jk-dubrovka-slides/slide1_medium.jpg'
import jkSlide2s from '@/assets/img/jk-dubrovka-slides/slide2_medium.jpg'

import infraAll_l from '@/assets/img/infrastructure/all_large.jpg'
import infraAll1_s from '@/assets/img/infrastructure/all_medium.jpg'

import infraDosug_l from '@/assets/img/infrastructure/dosug_large.jpg'
import infraDosug_s from '@/assets/img/infrastructure/dosug_medium.jpg'

import infraEdu_l from '@/assets/img/infrastructure/edu_large.jpg'
import infraEdu_s from '@/assets/img/infrastructure/edu_medium.jpg'

import infraOther_l from '@/assets/img/infrastructure/other_large.jpg'
import infraOther_s from '@/assets/img/infrastructure/other_medium.jpg'

import infraShops_l from '@/assets/img/infrastructure/shops_large.jpg'
import infraShops_s from '@/assets/img/infrastructure/shops_medium.jpg'

import infraVeln_l from '@/assets/img/infrastructure/veln_large.jpg'
import infraVeln_s from '@/assets/img/infrastructure/veln_medium.jpg'

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

export const qualitySlideImages: SlideImage[] = [
  { medium: jkSlide1s, large: jkSlide1l },
  { medium: jkSlide2s, large: jkSlide2l },
]

export const infrastructureImages: SlideImage[] = [
  { medium: infraAll1_s, large: infraAll_l },
  { medium: infraDosug_s, large: infraDosug_l },
  { medium: infraEdu_s, large: infraEdu_l },
  { medium: infraShops_s, large: infraShops_l },
  { medium: infraVeln_s, large: infraVeln_l },
  { medium: infraOther_s, large: infraOther_l },
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

interface SectionItem {
  title: string
  description: string
}

export const dubrovkaList: SectionItem[] = [
  {
    title: 'Спокойствие',
    description: 'Жилой комплекс «Дубровка» во Фрунзенском районе в двух шагах от Лиговского проспекта. Живописный двор с пейзажным парком, роскошное лобби, коворкинг для жителей и муниципальный детский сад в доме.',
  },
  {
    title: 'Надежность',
    description: 'Для общего пользования сохранена естественная парковая зона в 6 Га. Инфраструктура комплекса включает в себя все необходимое для жизни: детские и спортивные площадки, мини-зоопарк, детский сад, школу, рестораны, торговый центр, дом быта, отделение банка и страховое отделение и многое другое.',
  },
]

export const infrastructureList: SectionItem[] = [
  {
    title: '10 минут',
    description: 'На авто до МКАД',
  },
  {
    title: '2 минуты',
    description: 'На авто до Калужского шоссе',
  },
  {
    title: '15 минут',
    description: 'Пешком до м. Ольховая',
  },
]

interface TabItem {
  title: string
}

export const galleryTabItems: TabItem[] = [
  {
    title: 'Двор',
  },
  {
    title: 'Лобби',
  },
  {
    title: 'Паркинг',
  },
  {
    title: 'Архитектура',
  },
]

export const infrastructureTabItems: TabItem[] = [
  {
    title: 'Все',
  },
  {
    title: 'Досуг',
  },
  {
    title: 'Образование',
  },
  {
    title: 'Магазины',
  },
  {
    title: 'Здоровье',
  },
  {
    title: 'Прочее',
  },
]

interface galleryPlateItem {
  first_title: string
  first_description: string
  second_title: string
  second_description: string
}

export const galleryPlateItems: galleryPlateItem[] = [
  {
    first_title: 'Безопасность',
    first_description: 'Территория жилого комплекса полностью огорожена и находится под круглосуточной охраной и видеонаблюдением. Въезд на территорию осуществляется строго по пропускам. Внутри обеспечено круглосуточное пешее и автомобильное патрулирование.',
    second_title: 'Комфорт',
    second_description: 'Хотите, чтобы квартира радовала своей продуманной, эргономичной планировкой, хорошей технической оснащенностью и выгодным расположением, но при этом цена ее была умеренной?',
  },
  {
    first_title: 'Надежность',
    first_description: 'Грузопассажирские лифты повышенной комфортности от всемирно известного немецкого концерна ThyssenKrupp AG (откидное сиденье, аудио и видеотрансляция, подвесной потолок, структурированная сталь, мраморное покрытие пола). Подъезды имеют специальные помещения для консьержа. Единая система диспетчеризации, обеспечивающая контроль над работой всего оборудования.',
    second_title: 'Перфоманс',
    second_description: 'Лобби жилого комплекса оформлено с использованием натурального мрамора больших зеркал. Особую атмосферу создают испанские светильники, выполненные в традиционном стиле. Их мягкий свет создает гармоничное и уютное пространство. Лобби становится местом, где каждый житель и гость чувствует себя комфортно и окружён красотой и изяществом.',
  },
  {
    first_title: 'Доступность',
    first_description: 'Наличие наземной и подземной парковки (с возможностью спуститься на парковку новостройки на лифте).',
    second_title: 'Достаточность',
    second_description: 'Парковочные места в нашем жилом комплексе доступны как на подземном, так и на наземном уровне, обеспечивая максимальное удобство с прямым доступом в здание на лифте, благодаря современным грузопассажирским лифтам',
  },
  {
    first_title: 'Функциональность',
    first_description: 'Технология вентилируемых фасадов с дополнительным утеплением. Переменная этажность новостройки: 7-8 этажей. Монолитные стены и перекрытия. От 2 до 5 подъездов на новостройку. Эксплуатируемая кровля, покрытая защитным слоем.',
    second_title: 'Элегантность',
    second_description: 'Оригинальный дизайн фасадов новостроек, облицованный итальянским керамогранитом фабрики Italon. Архитектура зданий, выполненная с использованием высококачественного итальянского керамогранита и технологии вентилируемых фасадов, обеспечивает не только эстетическое наслаждение, но и дополнительную теплоизоляцию.',
  },
]
