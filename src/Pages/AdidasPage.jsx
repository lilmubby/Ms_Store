import { useSelector } from 'react-redux';
import ProductItem from '../Shop/ProductItem';



const AdidasPage = () => {

  const {productItems} = useSelector(state => state.products);
  

  return (
    <ul>
      {
        productItems.filter(item => {
          if (item.brand === 'Adidas') return item
        }).map(item => (
          <ProductItem
          key={item.id}
          id={item.id}
          name={item.name}
          img={item.imgSrc}
          brand={item.brand}
          price={item.price}
        />
        ))
        
      }
    </ul>
  )
}

export default AdidasPage