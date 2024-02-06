

import React from 'react'
import style from './Contact.module.css'
export default function Contact() {
  return <>
    <div className="container  ">
      <h1 className='text-center mt-4'>CONATCT SECTION</h1>
      <div className={` ${style.Auto} mt-5 mb-5 `}>

        <div class="form-floating mb-3 ">
          <input type="email" class="form-control w-75  " id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control w-75 " id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-floating mb-3">
          <input type="password" class="form-control w-75 " id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>

        <div class="form-floating mb-3">
          <input type="password" class="form-control w-75" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="btn btn-success ps-4 pe-4">Submit</button>
      </div>
    </div>


  </>
}
