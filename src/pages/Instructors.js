import React, { useEffect, useState } from 'react'
import portfolio1 from "../assets/p4.jpg"
import portfolio2 from "../assets/p5.jpg"
import portfolio3 from "../assets/p6.jpg"
import InstructorModal from '../Component/InstructorModal'
import {useBaseModal} from "../Hook/useBaseModal"


function Instructors() {

    const imagemodal = useBaseModal();
    const [s3Url, setS3Url] = useState( 'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' );
    const [modelLoader, setModelLoader] = useState( '' );

    useEffect( () => {
        // if ( s3Url ) 
           setModelLoader(s3Url)
    }, [s3Url]);

    return (
        <>
          <InstructorModal
             isOpen={ imagemodal.isOpen }
             onClose={ imagemodal.close }
             data={ modelLoader }
          />
            <section id="instructors" class="p-5  mt-5">
                      <div class="container text-center">
                           <h2 class=" text-white">Instructors</h2>
                           
                            <div className='row mt-5'>
                                              <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio1} alt='error' className='w-100 img-thumbnail' onClick={() => {imagemodal.open()}} style={{cursor:"pointer"}}/>
                                                             {/* <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p> */}
                                                              <p className='text-light text-start mt-3'> Our instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                               
                                                            </p>
                                                             <p className='text-muted text-start mt-4'>Tara , Coach Head Bangalore</p>
                                                       </div> 
                                               </div>
                                               <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio2} alt='error' className='w-100 img-thumbnail'/>
                                                             
                                                             {/* <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p> */}
                                                             <p className='text-light text-start mt-3'> Our instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                            </p>

                                                            <p className='text-muted text-start mt-4'>Tara , Coach Head Bangalore</p>
                                                             
                                                       </div> 
                                               </div>
                                               <div className='col-md-6 col-lg-4'>
                                                       <div className='portfolio-item'>
                                                             <img src={portfolio3} alt='error' className='w-100 img-thumbnail'/>
                                                            
                                                             {/* <p className='mb-4'><a href='#' className='text-danger  text-decoration-none'>Live Demo</a></p> */}
                                                             <p className='text-light text-start mt-3'> Our instructors all have 5+ years working as a web developer in the
                                                                industryOur instructors all have 5+ years working as a web developer in the
                                                               
                                                            </p>

                                                             <p className='text-muted text-start mt-4'>Tara , Coach Head Bangalore</p>
                                                           
                                                       </div> 
                                               </div>
                            </div>
                      </div>
            </section>
        </>
    )
}

export default Instructors
