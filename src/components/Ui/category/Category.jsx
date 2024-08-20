import React from 'react'
import { Col, Container, Row } from 'reactstrap'
 import categoryImg01 from '../../../assets/images/category-01.png'
 import categoryImg02 from '../../../assets/images/category-02.png'
 import categoryImg03 from '../../../assets/images/category-03.png'
 import categoryImg04 from '../../../assets/images/category-04.png'
 import '../../../styles/category.css'


 const categoryData=[
    {
        display:'Fast Food',
        imgURL:categoryImg01
    },
    {
        display:'Pizza',
        imgURL:categoryImg02
    },
    {
        display:'Asian Food',
        imgURL:categoryImg03
    },
    {
        display:'Row Meat',
        imgURL:categoryImg04
    },
 ]

const Category = () => {
  return (
    <Container>
        <Row>
            {
                categoryData.map((item,index)=>(
                    <Col lg='3'md='4' xs='6'sm='6'>
                        <div className="category_item d-flex align-items-center gap-3">
                            <div className="category_img">
                                <img src={item.imgURL}alt='category_img'/>
                            </div>
                            <h3>{item.display}</h3>
                        </div>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}

export default Category