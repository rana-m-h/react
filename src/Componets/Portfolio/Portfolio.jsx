


import React from 'react'

import img1 from '../../Assets/imges/poert1.png'
import img2 from '../../Assets/imges/port2.png'
import img3 from '../../Assets/imges/port3.png'

export default function Portfolio() {
  return <>
  
  <div className="container">
    <h1 className="text-center mt-5">PORTFOLIO COMPONENT</h1>
    <div className="row g-4 mb-5 mt-5">
        <div className="col-md-4">
           
                <img src={img1} className="w-100 rounded-2"  alt="" />
            
        </div>
        <div className="col-md-4">
           
                <img src={img2}  className="w-100 rounded-2" alt="" />
            
        </div>
        <div className="col-md-4">
           
                <img src={img3}className="w-100 rounded-2" alt="" />
            
        </div>
        <div className="col-md-4">
           
                <img src={img1} className="w-100 rounded-2"  alt="" />
            
        </div>
        <div className="col-md-4">
           
                <img src={img2}  className="w-100 rounded-2" alt="" />
            
        </div>
        <div className="col-md-4">
           
                <img src={img3}  className="w-100 rounded-2" alt="" />
            
        </div>
    </div>
  </div>
  
  </>
}
