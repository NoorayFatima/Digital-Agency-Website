import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'  
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Blog from './pages/Blog'
import Layout from './Layout.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import BlogDetail from './pages/BlogDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'services',
        element: <Services />,
      },
      {
        path: 'services/:serviceId', // moved out from children
        element: <ServiceDetail />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'blog/:postId', // moved out from children
        element: <BlogDetail />,
      },
      {
        path: '*',
        element: <div className="p-6 text-center text-xl text-red-500">404 - Page Not Found</div>,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
