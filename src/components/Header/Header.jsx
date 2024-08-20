import React, { useEffect, useRef } from 'react'
import { Container } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'
import { NavLink,Link } from 'react-router-dom'
import '../../styles/header.css'
import { useSelector,useDispatch } from 'react-redux'
import { cartUiActions } from '../../store/shopping-cart/CartUiSlice'


const nav__links=[
    {
        display:'Home',
        path:'/home'
    },
    {
        display:'Foods',
        path:'/food'
    },
    {
        display:'Cart',
        path:'/cart'
    },
    {
        display:'Contact',
        path:'/contact'
    },
]
const Header = () => {
    const menuRef=useRef(null);
    const headerRef=useRef(null)
    const dispatch=useDispatch()
    const toggleMenu=()=>menuRef.current.classList.toggle('show_menu')
    const toggleCart=()=>{
        dispatch(cartUiActions.toggle())
    }
    const totalQuantity=useSelector(state=>state.cart.totalQuantity)

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop>80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add("header_shrink")
            }
            else{
                headerRef.current.classList.remove("header_shrink")
            }
            return()=>window.removeEventListener('scroll')
        })
    },[])
  return (
    <header className="header" ref={headerRef}>
        <Container>
            <div className="nav__wrapper d-flex align-items-center justify-content-between">
                <div className="logo">
                    <img src={logo}alt=''/>
                    <h5>Take Food</h5>
                </div>
                {/* === Menu Section === */ }
            <div className="navigate" ref={menuRef} onClick={toggleMenu}>
                <div className="menu d-flex align-items-center gap-5 ">
                    {nav__links.map((item,index)=>(
                        <NavLink to={item.path} key={index} className={navClass=>navClass.isActive?"active_menu":""} >
                                {item.display}
                        </NavLink>
                    ))}
                </div>
            </div>
            {/* === Navbar Right Icon === */ }
            <div className="nav_right d-flex align-items-center gap-5">
                <span className='cart_icon' onClick={toggleCart}>
                <i class="ri-shopping-basket-line"></i>
                <span className="cart_badge">{totalQuantity}</span>
                </span>
                <span className="user">
                <Link to='/login'>
                <i class="ri-shield-user-line"></i>
                </Link>
                </span>
                <span className="mobile_menu" onClick={toggleMenu}>
                <i class="ri-menu-line"></i>
                </span>
            </div>
            </div>
        </Container>
    </header>
  )
}

export default Header