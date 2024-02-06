


import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return <>


    <div className="">



      <div className= {` ${style.background}   text-center text-light py-5`}>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>LOCATION</h2>
              <p>2215 John Daniel Drive</p>
              <span>Clark, MO 65243</span>
            </div>
            <div className="col-md-4">
              <h2>AROUND THE WEB</h2>
              <span>2215 John Daniel Drive</span>
              Clark, MO 65243
              <div className="icon pt-2 ">
                <i class="fa-brands fa-facebook px-2 "></i>
                <i class="fa-brands fa-twitter px-2 "></i>
                <i class="fa-brands fa-linkedin px-2"></i>
                <i class="fa-solid fa-globe px-2"></i>
              </div>
            </div>
            <div className="col-md-4">
              <h2>ABOUT FREELANCER</h2>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

            </div>



          </div>
        </div>


      </div>


      <div className={` ${style.backgroundFooter}  text-light text-center  p-3 `}>
        <p>Copyright © Your Website 2021</p>

      </div>
    </div>
  </>


}
