import React from 'react'

function Navbar() {
    return (
        <>
               <nav class="navbar navbar-expand-lg  navbar-dark py-3">
                    <div class="container">
                        <a href="#" class="navbar-brand ">BRAIN<span className='text-warning'>SPARK</span></a>

                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#data"
                        >
                        <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse text-center bg-warnings" id="data">
                                <ul class="navbar-nav ms-auto">
                                    <li class="nav-item ">
                                        <a href="#learn" class="nav-link text-white mrs-5 a">SESSIONS</a>
                                    </li>
                                    <li class="nav-item ">
                                       <a href="#questions" class="nav-link text-white mrs-5 a">PRICING</a>
                                    </li>
                                    <li class="nav-item ">
                                       <a href="#instructors" class="nav-link text-white mrs-5 a">TESTIMONIALS</a>
                                    </li>
                                    <li class="nav-item ">
                                       <a href="#instructors" class="nav-link text-white mrs-5 a">INSTRUCTORS</a>
                                    </li>
                                    <li class="nav-item ">
                                       <a href="#instructors" class="nav-link text-white mrs-5 a">ABOUT</a>
                                    </li>
                                    <li class="nav-item">
                                       <span href="features.html" class="btns">START TRIAL CLASS</span>
                                    </li>
                                </ul>
                        </div>
                    </div>
         </nav>
        </>
    )
}

export default Navbar
