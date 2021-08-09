import React from 'react'
import portfolio1 from "../assets/p1.jpg"
import portfolio2 from "../assets/p2.jpg"
import portfolio3 from "../assets/p3.jpg"

function Testimonial() {
    return (
        <>
             <section id="instructors" class="p-5  bg-testimonial mt-5">
                      <div class="container text-center">
                           <h2 class=" text-white">Testimonials</h2>
                            <p class="lead text-light mb-5 mt-5 testimonialpara">
                                Our instructors all have 5+ years working as a web developer in the
                                industryOur instructors all have 5+ years working as a web developer in the
                                industryOur instructors all have 5+ years working as a web developer in the
                                industryOur instructors all have 5+ years working as a web developer in the
                                industryOur instructors all have 5+ years working as a web developer in the
                                
                            </p>

                            <div className='row'>
                                              <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio1} alt='error' className='w-100 img-thumbnail'/>
                                                             {/* <h3 className='text-capitalize my-2 fs-4'>Team Section</h3> */}
                                                             {/* <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p> */}
                                                             <p className='text-light pt-3'> Our instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                            </p>
                                                       </div> 
                                               </div>
                                               <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio2} alt='error' className='w-100 img-thumbnail'/>
                                                             {/* <h3 className='text-capitalize my-2 fs-4'>Team Section</h3> */}
                                                             {/* <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p> */}
                                                             <p className='text-light pt-3'> Our instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                            </p>
                                                       </div> 
                                               </div>
                                               <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio3} alt='error' className='w-100 img-thumbnail'/>
                                                             {/* <h3 className='text-capitalize my-2 fs-4'>Team Section</h3> */}
                                                             {/* <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p> */}
                                                             <p className='text-light pt-3'> Our instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                            </p>
                                                       </div> 
                                               </div>
                            </div>
                      </div>
            </section>
        </>
    )
}

export default Testimonial
