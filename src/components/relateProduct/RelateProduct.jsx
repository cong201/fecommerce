import React from 'react'
import './RelateProduct.css'
import data_product from '../assets/data'
import Item from '../item/Item'

const RelateProduct = () => {
  return (
    <div className='relatedproduct'>
      <h1>Telated Products</h1>
      <hr />
      <div className="relatedproduct-item">
        {data_product.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default RelateProduct
