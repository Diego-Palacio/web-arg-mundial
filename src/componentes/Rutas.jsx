import { createHashRouter,RouterProvider, Route, Routes } from "react-router-dom"
import { App } from "../App"
import { Contenido } from "./Contenido"
import { Goles } from "./Goles"
import { Partido } from "./Partido"


export const Rutas = () => {
  return (
      <>
        
        <Routes>
        <Route path="/inicio" element={<App/>}/>
        <Route path="/web-arg-mundial/partidos" element={<Partido/>}/>
        <Route path="/web-arg-mundial/goles" element={<Goles />}/>
        <Route path="/web-arg-mundial/212108" element={<Contenido url={"212108"}  />}/>
        <Route path="/web-arg-mundial/212427" element={<Contenido url={"212427"}  />}/>
        <Route path="/web-arg-mundial/212520" element={<Contenido  url={"212520"} />}/>
        <Route path="/web-arg-mundial/212876" element={<Contenido url={"212876"}  />}/>
        <Route path="/web-arg-mundial/212939" element={<Contenido url={"212939"}  />}/>
        <Route path="/web-arg-mundial/213072" element={<Contenido url={"213072"}  />}/>
        <Route path="/web-arg-mundial/194824" element={<Contenido url={"194824"}  />}/>
        </Routes>
      
      </>
  )
}
