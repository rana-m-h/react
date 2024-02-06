

import React from 'react'
import style from './About.module.css'
export default function About() {
    return <>

        <div className={` ${style.background} ${style.padding}  text-light `}>


            <div className="container">
                <h1 className="text-center pb-4">ABOUT COMPONENT</h1>
                <div className="row ">
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                </div>



            </div>


        </div>
    </>
}
