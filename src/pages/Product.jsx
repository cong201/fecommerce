import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../components/breadcrum/Breadcrum';
import ProductDisplay from '../components/productDisplay/ProductDisplay'
import DescriptionBox from '../components/descriptionBox/DescriptionBox';
import RelateProduct from '../components/relateProduct/RelateProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelateProduct/>
    </div>
  )
}

export default Product
