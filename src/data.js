import imgProduct1 from './assets/images/img-product1.png'
import imgProductHover1 from './assets/images/img-product1-hover.png'
import imgProduct2 from './assets/images/img-product2.png'
import imgProductHover2 from './assets/images/img-product2-hover.png'
import imgProduct3 from './assets/images/img-product3.png'
import imgProductHover3 from './assets/images/img-product3-hover.png'
import imgCompare from './assets/images/compare.svg'
import imgAdded from './assets/images/ok.svg'

export const products = [
  {
    id: 1,
    name: 'Шампунь',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    imageProduct: imgProduct1,
    imageProductHover: imgProductHover1,
    imageCompare: imgCompare,
    imageAdded: imgAdded,
    price: 200,
    volume: ['100', '200', '300'],
    options: ['Красный', 'Розовый', 'Оранжевый', 'Синий', 'Желтый'],
    isChecked: true
  },
  {
    id: 2,
    name: 'Шампунь',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    imageProduct: imgProduct2,
    imageProductHover: imgProductHover2,
    imageCompare: imgCompare,
    imageAdded: imgAdded,
    price: 200,
    volume: ['100', '200', '300'],
    options: ['Красный', 'Розовый', 'Оранжевый', 'Синий', 'Желтый'],
    isChecked: true
  },
  {
    id: 3,
    name: 'Шампунь',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    imageProduct: imgProduct3,
    imageProductHover: imgProductHover3,
    imageCompare: imgCompare,
    imageAdded: imgAdded,
    price: 200,
    volume: ['100', '200', '300'],
    options: ['Красный', 'Розовый', 'Оранжевый', 'Синий', 'Желтый'],
    isChecked: true
  },
]