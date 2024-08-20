import React, { useEffect, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, ListGroup, ListGroupItem, Row } from "reactstrap";
import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";
import { Link } from "react-router-dom";
import Category from "../components/Ui/category/Category";
import "../styles/home.css";
import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products";
import foodCategoryImg01 from "../assets/images/hamburger.png";
import foodCategoryImg02 from "../assets/images/pizza.png";
import foodCategoryImg03 from "../assets/images/bread.png";
import ProductCard from "../components/Ui/productcard/ProductCard";

import whyImg from "../assets/images/location.png";
import networkImg from "../assets/images/network.png";
import TestimonialPart from "../components/Ui/slider/TestimonialPart";

const featureData = [
  {
    title: "Quick Delivery",
    imgURL: featureImg01,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sint.",
  },
  {
    title: "Super Dine In",
    imgURL: featureImg02,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sint.",
  },
  {
    title: "Easy Pick Up",
    imgURL: featureImg03,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, sint.",
  },
];

const Home = () => {
  const [category, setCategory] = useState(" ALL");
  const [allProducts, setAllProducts] = useState(products);
  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const sortedPizza = products.filter((item) => item.category === "Pizza");
    const slicedPizza = sortedPizza.slice(0, 4);
    setHotPizza(slicedPizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "BURGER") {
      const sortedProducts = products.filter(
        (item) => item.category === "Burger"
      );
      setAllProducts(sortedProducts);
    }
    if (category === "PIZZA") {
      const sortedProducts = products.filter(
        (item) => item.category === "Pizza"
      );
      setAllProducts(sortedProducts);
    }
    if (category === "BREAD") {
      const sortedProducts = products.filter(
        (item) => item.category === "Bread"
      );
      setAllProducts(sortedProducts);
    }
  }, [category]);
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <h5 className="mb-3">Easy way to place an order</h5>
                <h1 className="mb-4 hero_title">
                  <span>Hungry?</span>Just wait for food
                  <span> at your door</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Architecto ex aliquid recusandae pariatur magni quis saepe ut
                  quia aut iste?
                </p>
                <div className="hero_btn d-flex align-items-center gap-4 ">
                  <button className="order_btn d-flex justify-content-between align-items-center">
                    Order Now <i class="ri-arrow-right-line"></i>
                  </button>
                  <button className="all_foods-btn">
                    <Link to="/foods">See all Foods</Link>
                  </button>
                </div>
                <div className=" hero_services d-flex align-items-center gap-4 mt-5">
                  <p className="d-flex align-items-center gap-4">
                    <span className="shipping_icon">
                      <i class="ri-roadster-fill"></i>
                    </span>{" "}
                    No shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-4">
                    <span className="shipping_icon">
                      <i class="ri-shield-check-fill"></i>
                    </span>{" "}
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="hero_img" className="w-100" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Category />
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-1">
              <h5 className="feature_subtitle">What we serve</h5>
              <h2 className="feature_title">Just sit back at home</h2>
              <h2 className="feature_title">
                {" "}
                We will<span> take care</span>
              </h2>
              <p className="feature_text mb-1 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia, obcaecati!
              </p>
              <p className="feature_text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
                placeat?
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="4" key={index} className="mt-5">
                <div className="feature_item text-center px-3 py-3">
                  <img src={item.imgURL} alt="feature_img" className="w-25 " />
                  <h5 className="fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h3>Popular Foods</h3>
            </Col>
            <Col lg="12">
              <div className="food_category d-flex align-items-center justify-content-center gap-5">
                <button
                  className={`all_btn ${
                    category === "ALL" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("ALL")}
                >
                  All
                </button>
                <button
                  className={`d-flex align-items-center gap-4 ${
                    category === "BURGER" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BURGER")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Burger
                </button>
                <button
                  className={`d-flex align-items-center gap-4 ${
                    category === "PIZZA" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("PIZZA")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Pizza
                </button>
                <button
                  className={`d-flex align-items-center gap-4 ${
                    category === "BREAD" ? "foodBtnActive" : ""
                  }`}
                  onClick={() => setCategory("BREAD")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bread
                </button>
              </div>
            </Col>
            {allProducts.map((item) => (
              <Col lg="3" md="4" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why_get-img" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="why_get-food">
                <h2 className="why_get-title mb-4">
                  Why<span> get food?</span>
                </h2>
                <p className="get_food-desc">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Optio, ipsam reprehenderit doloribus facere voluptatibus
                  repudiandae temporibus, officiis nisi id quam, quibusdam
                  soluta omnis! In velit placeat nemo aspernatur laboriosam
                  omnis.
                </p>
                <ListGroup className="mt-5">
                  <ListGroupItem className="border-0 ps-0">
                    <p className=" choose_us-item d-flex align-items-center gap-4">
                      <i class="ri-checkbox-circle-line"></i>
                      Get Fresh Food
                    </p>
                    <p className="chosse_us-desc">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus, excepturi?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-item d-flex align-items-center gap-4">
                      <i class="ri-checkbox-circle-line"></i>
                      Quality Support
                    </p>
                    <p className="chosse_us-desc">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus, excepturi?
                    </p>
                  </ListGroupItem>
                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose_us-item d-flex align-items-center gap-4">
                      <i class="ri-checkbox-circle-line"></i>
                      Order from any Location
                    </p>
                    <p className="chosse_us-desc">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Voluptatibus, excepturi?
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2> Hot Pizza</h2>
            </Col>
            {hotPizza.map((item) => (
              <Col lg="3" md="4" key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial_subtitle mb-4">Testimonial</h5>
                <h2 className="testimonial_title mb-4">
                  What our <span> Customers </span> are saying
                </h2>
                <p className="testimonial_desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
                  distinctio sit asperiores sint sed, iure voluptatem quisquam
                  odio omnis fugit at, excepturi facere provident perspiciatis
                  dolor vero qui? Totam, animi?
                </p>
                <TestimonialPart/>
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
