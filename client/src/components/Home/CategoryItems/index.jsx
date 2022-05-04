import { CatItem, CatWappper, Img,Image, H6 } from "./CatStyles";

// import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import one from "../CategoryItems/one.png"

import two from "../CategoryItems/two.png"

import three from "../CategoryItems/three.png"

import four from "../CategoryItems/four.png"

import five from "../CategoryItems/five.png"

import six from "../CategoryItems/six.png"

import {Container, Row, Col} from "../../Utils/Elements"

import { useEffect,useState } from "react";

const CategorySlide = () => {
    const [show, setShow] = useState(3)

    const productHandler = () => {

       if(window.outerWidth < 991 && window.outerWidth > 768){
           setShow(3)
       }else if(window.outerWidth < 767 && window.outerWidth > 558){
         setShow(3)
       }else if(window.outerWidth < 557){
        setShow(1)
      }else{
           setShow(5)
       }

    }
    useEffect(() => {
        productHandler()
    })
    window.addEventListener('resize', productHandler)
    return (
        <CatWappper>
            <Container>
              <Row>
                  <Col W="100">
                    <Swiper
                    slidesPerView={show}
                       spaceBetween={30}
                        pagination={{
                        type: "progressbar",
                        }}
                   
                        className="mySwiper"
                    >
                        <SwiperSlide>
                        <CatItem>
                              <Image>
                                  <Img src={one} alt="one"/>
                              </Image>
                              <H6>Cone Ice Cream</H6>       
                            </CatItem>
                        </SwiperSlide>
                        <SwiperSlide>
                        <CatItem>
                              <Image>
                                  <Img src={two} alt="two"/>
                              </Image>
                              <H6>Cone Ice Cream</H6>       
                            </CatItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CatItem>
                              <Image>
                                  <Img src={three} alt="three"/>
                              </Image>
                              <H6>Cone Ice Cream</H6>       
                            </CatItem>
                        </SwiperSlide>
                        <SwiperSlide>
                        <CatItem>
                              <Image>
                                  <Img src={four} alt="four"/>
                              </Image>
                              <H6>Cone Ice Cream</H6>       
                            </CatItem>
                        </SwiperSlide>
                        <SwiperSlide>
                        <CatItem>
                              <Image>
                                  <Img src={five} alt="five"/>
                              </Image>
                              <H6>Cone Ice Cream</H6>       
                            </CatItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CatItem>
                              <Image>
                                  <Img src={six} alt="six"/>
                              </Image>
                              <H6>Cone Ice Cream</H6>       
                            </CatItem>
                        </SwiperSlide>
                        <SwiperSlide>
                            <CatItem>
                              <Image>
                                  <Img src={one} alt="one"/>
                              </Image>
                              <H6>Cone Ice Cream</H6>       
                            </CatItem>
                        </SwiperSlide>
                    </Swiper>
                  </Col>
              </Row>
            </Container>
        </CatWappper>
    );
}

export default CategorySlide;