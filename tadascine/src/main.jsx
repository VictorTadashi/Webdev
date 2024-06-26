import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Filmes from './pages/Filmes.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Home from './pages/Home.jsx'
import PaginaFimes from './pages/PaginaFilme.jsx'
import Noticias from './pages/Noticias.jsx'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {index: true, element: <Home/>},
        {path: "filmes", element: <Filmes />},
        {path: "noticias", element: <Noticias/>},
        {path: "filmes/:id", element: <PaginaFimes/>},
        {path: "*", element: <PageNotFound/>}
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)