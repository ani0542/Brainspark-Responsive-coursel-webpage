import React from 'react'
import profile from "../assets/profile.png"
import home from "../assets/home.png"
import whatsapp from "../assets/watsapp.svg";
function Home() {
    return (
        <>
               <section
                //text-sm-start means in smaller device it ll start from start and above that center
                     class=" text-light p-5 p-lg-0 pb-5 text-center text-sm-start"
                 >
                   <div class="container">
                           <div class=" row d-sm-flex align-items-center justify-content-between pt-0"> 

                      <div className='col-md-6 col-sm-12'>
                            <div>
                                        <h1>Enabling Kids to<br/>
                                            dream,discover & develop
                                        </h1>
                                            <p class="lead my-4">
                                                We focus on teaching our students the fundamentals of the latest
                                                and greatest technologies to prepare them for their first dev role
                                            </p>
                                            <button
                                                class="btnd btn-warning btn-lg p-2"
                                                data-bs-toggle="modal"
                                                data-bs-target="#enroll"
                                            >
                                                IT ALL BEGIN WITH A SPARK
                                            </button>
                                    </div>
                      </div>   

                      <div className='col-md-6 col-sm-12'>
                                   {/* //d-none d-sm- block means i dont want to show image in small device */}
                            {/* <div  className='imgshome'> */}
                            <img
                                // class="img-fluid w-50 d-none d-sm-block"
                                className='  homeimg'
                                src={home}
                                alt="error"
                            />
                             <img
                                // class="img-fluid w-50 d-none d-sm-block"
                                className='whatsapp'
                                src={whatsapp}
                                alt="error"
                            />
                           {/* </div> */}
                      </div>          
                          
                           </div>
                   </div>
              </section>
        </>
    )
}

export default Home
