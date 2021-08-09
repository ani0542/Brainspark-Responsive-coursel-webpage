// import React from 'react'
// import { Card, Image } from "semantic-ui-react";
// import { SliderData } from './SliderData';
// import Carousel from 'react-elastic-carousel';


// function CourselCard() {

//     const breakPoints=[
//         {width:500,itemsToShow:1},
//         {width:768,itemsToShow:4},
//         {width:1200,itemsToShow:3},
//         {width:1500,itemsToShow:4},
//     ]

//     return (
//         <div className='d-flex mt-3'>
//         <Carousel breakPoints={breakPoints}>
//                  {
//                     SliderData.map((value)=>{
                       
//                         return (
                            
//                                 <Card className='cards'>
//                                        <Image src={value.image}  className='img-fluid corimg'/>
//                                 </Card>
                         
                         
//                         )
//                     })
//                  }
//          </Carousel>
//         </div>
//     )
// }

// export default CourselCard





// import React from 'react'
// import Slider from "react-slick";
// import { Card, Image } from "semantic-ui-react";
// import { SliderData } from './SliderData';

// function CourselCard() {

//     const settings = {
//         className: "center",
//         centerMode: true,
//         infinite: true,
//         centerPadding: "60px",
//         slidesToShow: 3,
//         speed: 500
//       };


//     return (
//         <>
//             <div>
        
//         <Slider {...settings}>
        //    {
        //             SliderData.map((value)=>{
                       
        //                 return (
                            
        //                         <Card className='cards'>
        //                                <Image src={value.image}  className='img-fluid corimg'/>
        //                         </Card>
                         
                         
        //                 )
        //             })
        //          }
//         </Slider>
//       </div>
//         </>
//     )
// }

// export default CourselCard





import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Image } from "semantic-ui-react";
import { SliderData } from './SliderData';
import ReactPlayer from 'react-player/youtube'
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
    } from 'swiper/core';
    SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);


function CourselCard() {
    return (
        // <div className='d-flex'>
        //       <Swiper  loop={true} slidesPerView={3} spaceBetween={30}   className="mySwiper " navigation={true} pagination={true} mousewheel={true} keyboard={true}>
        //         <SwiperSlide>
                // {
                //     SliderData.map((value)=>{
                       
                //         return (
                            
                //                 <Card className='cards'>
                //                        <Image src={value.image}  className='img-fluid corimg'/>
                //                 </Card>
                         
                         
                //         )
                //     })
                //  }
        //         </SwiperSlide>
        //         </Swiper>
        // </div>
        <div>
        <Swiper  style={{marginTop:"4rem"}} loop={true} slidesPerView={1} spaceBetween={5}   className="mySwiper" navigation={true} pagination={true} mousewheel={true} keyboard={true}  fullWidth={true}
                breakpoints={{
                // "489": {
                // "slidesPerView": 4,
                // // "slidesPerGroup": 2
                // },
                // "768": {
                //     "slidesPerView": 2,
                //     // "slidesPerGroup": 2
                //     },
                //     "992": {
                //         "slidesPerView": 4,
                //         // "slidesPerGroup": 2
                //         },



                // when window width is >= 640px

                        640: {
                            width: 640,
                            slidesPerView: 1,
                          },
                          // when window width is >= 768px
                          768: {
                            // width: 768,
                            width:800,
                            // fullWidth:800,
                            slidesPerView: 2,
                          },

                           // when window width is >= 768px
                           992: {
                            width: 1960,
                            slidesPerView: 4,
                          },

            }} 
     >
            {/* <SwiperSlide>
                      
                        <ReactPlayer url='https://youtu.be/kNVGgOAmvYA' />
            </SwiperSlide> 
            
            <SwiperSlide>
                <ReactPlayer url='https://youtu.be/8sz8poVaSZU' />
               
            </SwiperSlide>
            <SwiperSlide>
            <ReactPlayer url='https://youtu.be/mxNXPWBP_Vw'/>
               
            </SwiperSlide> */}
               {
                    SliderData.map((value)=>{
                       
                        return (
                            <SwiperSlide>
                                <Card className='cards '>
                                       <Image src={value.image}  className='img-fluid corimg' width='100%'/>
                                </Card>
                             </SwiperSlide>
                         
                         
                        )
                    })
                 }
         </Swiper>
         </div>
    )
}

export default CourselCard
