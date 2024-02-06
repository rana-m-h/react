


import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import About from './Componets/About/About.jsx'
import Portfolio from './Componets/Portfolio/Portfolio.jsx'
import Layout from './Componets/Layout/Layout.jsx'
import Start from './Componets/Start/Start.jsx'
import Contact from './Componets/Contact/Contact.jsx'



 let routers = createBrowserRouter([

{
  path: '' , element: <Layout/>, children:[



    {index: true , element: <Start/>},
  {path: 'About', element: <About/>},
  {path: 'Portfolio', element: <Portfolio/>},
  {path: 'Contact' , element: <Contact/>},



]
  
   
  
}


 ])





export default function App() {
  
  return<>
<RouterProvider router={routers}></RouterProvider>

  </>
}
