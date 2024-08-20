import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import '../../../styles/shopping-cart.css'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/CartUiSlice'



const Cart = () => {
    const dispatch=useDispatch();
    const toggleCloseCart=()=>{
        dispatch(cartUiActions.toggle())
    }
    const cartProducts=useSelector(state=>state.Cart.CartItem)
  return (
   <div className="cart_container">
    <ListGroup className='cart'>
        <div className="cart_close">
            <span onClick={toggleCloseCart}>
            <i class="ri-close-line"></i>
            </span>
        </div>
        <div className="cart_list">
            {
                cartProducts.length ===0 ? <h6>No Item on cart</h6>:
                cartProducts.map((item,index)=>(
                    <CartItem item={item} key={index}/>
                ))
            }


        </div>
        <div className="cart_bottom d-flex align-items-center justify-content-between">
            <h6>Subtotal : <span>$124.00</span></h6>
            <button><Link to='/checkout'>Checkout</Link></button>
        </div>
    </ListGroup>
   </div>
  )
}

export default Cart