import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import User from './components/User.jsx'
import Github,{githubInfoLoader} from './components/Github.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/' element={<User/>} >
       <Route path=':userid' element={<User/>}  />
      </Route>
      <Route 
      loader={githubInfoLoader} 
      path='github' 
      element={<Github/>} />
      <Route path='about' element={<About/>} >
      

      

      {/* <Route path='profile' element={<div>Profile</div>}>
      </Route> */}
      </Route>
      <Route path='*' element={<div>Not Found</div>} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(



  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
