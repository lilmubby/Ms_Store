// Nike Products
import nikeAirForce1 from '../assets/Product/Nike/Nike-airforce1.jpg'
import nikeAirForce1_1 from '../assets/Product/Nike/Nike-airforce1-1.jpg'

import nikeAir from '../assets/Product/Nike/Nike-air.jpg'
import nikeAir_1 from '../assets/Product/Nike/Nike-air-1.jpg'

import nikeAirBlack from "../assets/Product/Nike/Nike-air-black.jpg"
import nikeAirMax from "../assets/Product/Nike/Nike-air-max.jpg"

// Puma
import pumaAxelion from "../assets/Product/Puma/Axelion.jpg"
import pumaAxelion1 from "../assets/Product/Puma/Axelion-1.jpg"

import pumaClassic from "../assets/Product/Puma/Classic.jpg"

import pumaDivide from "../assets/Product/Puma/divide.jpg"

import pumaXBMW from "../assets/Product/Puma/PumaXBMW.jpg"

import pumaXFerrari from "../assets/Product/Puma/PumaXFerrari.jpg"

import pumaRunner from "../assets/Product/Puma/Runner.jpg"

// Adidas

import sply from '../assets/Product/Adidas/sply.jpg'
import sply_1 from '../assets/Product/Adidas/sply-1.jpg'
import sply_2 from '../assets/Product/Adidas/sply-2.jpg'
import sply_3 from '../assets/Product/Adidas/sply-3.jpg'
import sply_4 from '../assets/Product/Adidas/sply-4.jpg'

import y350 from'../assets/Product/Adidas/y350-fff.jpg'
import y350_1 from'../assets/Product/Adidas/y350-fff-1.png'
import y350_2 from'../assets/Product/Adidas/y350-fff-2.jpg'
import y350_3 from'../assets/Product/Adidas/y350-fff-3.jpg'

import y350_v2 from "../assets/Product/Adidas/y350-v2.jpg"
import y350_v2_1 from "../assets/Product/Adidas/y350-v2-1.jpg"
import y350_v2_2 from "../assets/Product/Adidas/y350-v2-2.png"
import y350_v2_3 from "../assets/Product/Adidas/y350-v2-3.png"
import y350_v2_4 from "../assets/Product/Adidas/y350-v2-4.jpg"

import y700 from "../assets/Product/Adidas/y700.jpg"
import y700_1 from "../assets/Product/Adidas/y700-1.jpg"
import y700_2 from "../assets/Product/Adidas/y700-2.jpg"
import y700_3 from "../assets/Product/Adidas/y700-3.jpg"





const productArr = [
    {
      id: 'p1',
      name: 'Nike AirForce',
      imgSrc: nikeAirForce1,
      brand: 'Nike',
      price: 100,
      description: 'This is beautiful',
      thumbnail: [nikeAirForce1, nikeAirForce1_1],
    },
    {
      id: 'p2',
      name: 'Nike Air',
      imgSrc: nikeAir,
      brand: 'Nike',
      price: 120,
      description: 'This is beautiful',
      thumbnail: [nikeAir, nikeAir_1],
    },
    {
      id: 'p3',
      name: 'Nike All Balck',
      imgSrc: nikeAirBlack,
      brand: 'Nike',
      price: 150,
      description: 'This is beautiful',
      thumbnail: [nikeAirBlack],
    },
    {
      id: 'p4',
      name: 'Nike Air Max',
      imgSrc: nikeAirMax,
      brand: 'Nike',
      price: 125,
      description: 'This is beautiful',
      thumbnail: [nikeAirMax],
    },
    {
      id: 'p5',
      name: 'Puma Axelion',
      imgSrc: pumaAxelion,
      brand: 'Puma',
      price: 75,
      description: 'This is beautiful',
      thumbnail: [pumaAxelion, pumaAxelion1],
    },
    {
      id: 'p6',
      name: 'Puma Classic',
      imgSrc: pumaClassic,
      brand: 'Puma',
      price: 100,
      description: 'This is beautiful',
      thumbnail: [pumaClassic],
    },
    {
      id: 'p7',
      name: 'Puma Divide',
      imgSrc: pumaDivide,
      brand: 'Puma',
      price: 180,
      description: 'This is beautiful',
      thumbnail: [pumaDivide],
    },
    {
      id: 'p8',
      name: 'Puma X BMW',
      imgSrc: pumaXBMW,
      brand: 'Puma',
      price: 200,
      description: 'This is beautiful',
      thumbnail: [pumaXBMW],
    },
    {
      id: 'p9',
      name: 'Puma X Ferrari',
      imgSrc: pumaXFerrari,
      brand: 'Puma',
      price: 190,
      description: 'This is beautiful',
      thumbnail: [pumaXFerrari],
    },
    {
      id: 'p10',
      name: 'Puma Runner',
      imgSrc: pumaRunner,
      brand: 'Puma',
      price: 120,
      description: 'This is beautiful',
      thumbnail: [pumaRunner],
    },
    {
      id: 'p11',
      name: 'Yeezy Sply',
      imgSrc: sply,
      brand: 'Adidas',
      price: 130,
      description: 'This is beautiful',
      thumbnail: [sply, sply_1, sply_2, sply_3, sply_4],
    },
    {
      id: 'p12',
      name: 'Yeezy 350',
      imgSrc: y350,
      brand: 'Adidas',
      price: 200,
      description: 'This is beautiful',
      thumbnail: [y350, y350_1, y350_2, y350_3],
    },
    {
      id: 'p13',
      name: 'Yeezy 350-v2',
      imgSrc: y350_v2,
      brand: 'Adidas',
      price: 100,
      description: 'This is beautiful',
      thumbnail: [y350_v2, y350_v2_1, y350_v2_2, y350_v2_3, y350_v2_4],
    },
    {
      id: 'p14',
      name: 'Yeezy 700',
      imgSrc: y700,
      brand: 'Adidas',
      price: 150,
      description: 'This is beautiful',
      thumbnail: [y700, y700_1, y700_2, y700_3],
    },
    // {
    //   id: '',
    //   name: '',
    //   imgSrc: '',
    //   brand: '',
    //   price: 0,
    //   description: 'This is beautiful',
    //   thumbnail: [],
    // },
    // {
    //   id: '',
    //   name: '',
    //   imgSrc: '',
    //   brand: '',
    //   price: 0,
    //   description: 'This is beautiful',
    //   thumbnail: [],
    // },
    
  ];


export default productArr;