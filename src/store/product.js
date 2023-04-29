import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: 'product',
  initialState: {
    productArr: [
    {
      id: 'p1',
      name: '',
      imgSrc: '',
      title: '',
      color: '',
      category: '',
    },
    {
      id: 'p2',
      name: '',
      imgSrc: '',
      title: '',
      color: '',
      category: '',
    },
    {
      id: 'p3',
      name: '',
      imgSrc: '',
      title: '',
      color: '',
      category: '',
    },
    {
      id: 'p4',
      name: '',
      imgSrc: '',
      title: '',
      color: '',
      category: '',
    },
    {
      id: 'p5',
      name: '',
      imgSrc: '',
      title: '',
      color: '',
      category: '',
    },
  ]
  }
})