import "./diseño/styles.css"
import { Navbar } from "./componentes/Navbar"
import { Rutas } from "./componentes/Rutas"
import { RouterProvider, createHashRouter } from "react-router-dom"
import { Partido } from "./componentes/Partido"
import { Goles } from "./componentes/Goles"
import { Contenido } from "./componentes/Contenido"

const router= createHashRouter( [
    {
      path:"/*",
      element: <Partido/>
    },
    {
      path:"/partidos",
      element: <Partido/>
    },
    {
      path:"/goles",
      element: <Goles/>
    },
    {
        path:"/212108",
        element:<Contenido url={"212108"}  />
      },
      {
        path:"/212427",
        element: <Contenido url={"212427"}  />
      },
      {
        path:"/212520",
        element: <Contenido url={"212520"}  />
      },
      {
        path:"/212876",
        element: <Contenido url={"212876"}  />
      },
      {
        path:"/212939",
        element: <Contenido url={"212939"}  />
      },
      {
        path:"/213072",
        element: <Contenido url={"213072"}  />
      },
      {
        path:"/194824",
        element:<Contenido url={"194824"}  />
      },
  


  ])


export const App = () => {
    return (
        <div>        
            <div className="body">
            <h1 className="titulo">
                Partidos enteros de argentina en el mundial 2022
            </h1>
            <Navbar/>
            <RouterProvider router={router} />           
            </div>
        </div>
    )
}