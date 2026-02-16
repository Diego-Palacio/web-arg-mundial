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
        path:"/arg-mex",
        element:<Contenido url={"argentinavsmexico2022/Argentina%20vs%20M%C3%A9xico%20%281%29.ia.mp4"} url2={"argentinavsmexico2022/Argentina%20vs%20M%C3%A9xico%20%282%29.ia.mp4"} />
      },
      {
        path:"/arg-ar",
        element: <Contenido url={"argentinavsarabia2022/Argentina%20vs%20Arabia%20%281%29.mp4"} url2={"argentinavsarabia2022/Argentina%20vs%20Arabia%20%282%29.mp4"}  />
      },
      {
        path:"/arg-pol",
        element: <Contenido url={"poloniavsargentina2022/Argentina%20vs%20Polonia%20%281%29.ia.mp4"} url2={"poloniavsargentina2022/Argentina%20vs%20Polonia%20%282%29.ia.mp4"} />
      },
      {
        path:"/octavos",
        element: <Contenido url={"argentinavsaustralia2022/Argentina%20Australia%201.ia.mp4"} url2={"argentinavsaustralia2022/Argentina%20Australia%202.ia.mp4"}  />
      },
      {
        path:"/cuartos",
        element: <Contenido url={"holandavsargentina2022/Pa%C3%ADses%20Bajos%20vs%20Argentina%20%281%29.ia.mp4"}  url2={"holandavsargentina2022/Pa%C3%ADses%20Bajos%20vs%20Argentina%20%282%29.ia.mp4"} />
      },
      {
        path:"/semifinal",
        element: <Contenido url={"argentinavscroacia2022/Argentina%20vs%20Croacia%20%281%29.ia.mp4"}  url2={"argentinavscroacia2022/Argentina%20vs%20Croacia%20%282%29.ia.mp4"}  />
      },
      {
        path:"/final",
        element:<Contenido url={"argentinavsfrancia2022/Argentina%20vs%20Francia%20%281%29.ia.mp4"} url2={"argentinavsfrancia2022/Argentina%20vs%20Francia%20%282%29.ia.mp4"}  />
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