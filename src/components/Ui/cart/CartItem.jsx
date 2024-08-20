import React from 'react'
import { ListGroupItem } from 'reactstrap'
import productImg from '../../../assets/images/product_01.1.jpg'
import '../../../styles/cart-item.css'

const CartItem = ({item}) => {
    const {id,price,image01,title,quantity,totalPrice}=item
  return (
    <ListGroupItem className='border-0 cart_item'>
        <div className="cart_item-info d-flex gap-2">
            <img src={image01} alt='product-img'/>
            <div className="cart_product-info d-flex align-items-center gap-5 justify-content-between w-100">
               <div>
                <h6 className='cart_product-title'>{title}</h6>
                <p className='d-flex align-items-center gap-5 cart_price '>{quantity}x <span>${totalPrice}</span></p>
                <div className='d-flex align-items-center justify-content-between incr_dec-btn'>
                    <span className='inc_btn'>
                    <i class="ri-add-line"></i>
                    </span>
                    <span className='quantity'>{quantity}</span>
                    <span className='dec_btn'>
                    <i class="ri-subtract-fill"></i>
                    </span>
                </div>
               </div>
               <span className='dlt_btn'>
               <i class="ri-close-line"></i>
               </span>
            </div>
        </div>
    </ListGroupItem>
  )
}

export default CartItem