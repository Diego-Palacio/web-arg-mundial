import { Navigate, Route, Routes } from "react-router-dom"
import { App } from "../App"
import { Partidos } from "./Partidos"
import { Contenido } from "./Contenido"

export const Rutas = () => {
  return (
      <>

        <Routes>
        <Route path="/inicio" element={<App/>}/>
        <Route path="/partidos" element={<Partidos/>}/>
        <Route path="/212108" element={<Contenido url={"212108"} />}/>
        <Route path="/212427" element={<Contenido url={"212427"} />}/>
        <Route path="/212520" element={<Contenido  url={"212520"} />}/>
        <Route path="/212876" element={<Contenido url={"212876"} />}/>
        <Route path="/212939" element={<Contenido url={"212939"} />}/>
        <Route path="/213072" element={<Contenido url={"213072"} />}/>
        <Route path="/194824" element={<Contenido url={"194824"} />}/>
        <Route path="/*" element={<Navigate to={"/App"} />}/>
        </Routes>
      
      </>
  )
}
