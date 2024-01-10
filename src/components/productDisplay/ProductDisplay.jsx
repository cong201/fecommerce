import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img__list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main__img' src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right__star">
            <img src={star_dull_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div className="productdisplay-right__prices">
            <div className="productdisplay-right__price-old">${product.old_price}</div>
            <div className="productdisplay-right__price-new">${product.new_price}</div>
        </div>
        <div className="productdisplay-right__description">
            This is a deep blue suit crafted from thick fabric, meticulously tailored, paired with a crisp white shirt and black leather shoes, creating a sophisticated and elegant look.
        </div>
        <div className="productdisplay-right__size">
            <h1>Select Size</h1>
            <div className="productdisplay-right__sizes">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
            <button onClick={()=> {addToCart(product.id)}}>ADD TO CART</button>
            <p className='productdisplay-right__category'><span>Category :</span>Women , T-Shirt , Crop Top</p>
            <p className='productdisplay-right__category'><span>Tags :</span>Modern , Latest </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
