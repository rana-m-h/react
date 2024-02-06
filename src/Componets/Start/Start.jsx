


import React from 'react'

import img from '../../Assets/imges/avataaars.svg'
import style from './Start.module.css'

export default function Start() {
  return <>


    <div className={`${style.padding} ${style.background}`} >

      <div className="text-center ">
        <img src={img} alt="" className={style.img} />
        <h1 className='text-light'>START FRAMEWORK</h1>
        <p className='text-light'>Graphic Artist - Web Designer - Illustrator</p>
      </div>


    </div>


  </>
}
