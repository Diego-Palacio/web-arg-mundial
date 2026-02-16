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
        <Route path="/web-arg-mundial/arg-mex" element={<Contenido url={"argentinavsmexico2022/Argentina%20vs%20M%C3%A9xico%20%281%29.ia.mp4"} url2={"argentinavsmexico2022/Argentina%20vs%20M%C3%A9xico%20%282%29.ia.mp4"}  />}/>
        <Route path="/web-arg-mundial/arg-ar" element={<Contenido url={"argentinavsarabia2022/Argentina%20vs%20Arabia%20%281%29.mp4"} url2={"argentinavsarabia2022/Argentina%20vs%20Arabia%20%282%29.mp4"}  />}/>
        <Route path="/web-arg-mundial/arg-pol" element={<Contenido  url={"poloniavsargentina2022/Argentina%20vs%20Polonia%20%281%29.ia.mp4"} url2={"poloniavsargentina2022/Argentina%20vs%20Polonia%20%282%29.ia.mp4"}/>}/>
        <Route path="/web-arg-mundial/octavos" element={<Contenido url={"argentinavsaustralia2022/Argentina%20Australia%201.ia.mp4"} url2={"argentinavsaustralia2022/Argentina%20Australia%202.ia.mp4"} />}/>
        <Route path="/web-arg-mundial/cuartos" element={<Contenido url={"holandavsargentina2022/Pa%C3%ADses%20Bajos%20vs%20Argentina%20%281%29.ia.mp4"} url2={"holandavsargentina2022/Pa%C3%ADses%20Bajos%20vs%20Argentina%20%282%29.ia.mp4"} />}/>
        <Route path="/web-arg-mundial/semifinal" element={<Contenido url={"argentinavscroacia2022/Argentina%20vs%20Croacia%20%281%29.ia.mp4"} url2={"argentinavscroacia2022/Argentina%20vs%20Croacia%20%282%29.ia.mp4"} />}/>
        <Route path="/web-arg-mundial/final" element={<Contenido url={"argentinavsfrancia2022/Argentina%20vs%20Francia%20%281%29.ia.mp4"} url2={"argentinavsfrancia2022/Argentina%20vs%20Francia%20%282%29.ia.mp4"} />}/>
        </Routes>
      
      </>
  )
}
