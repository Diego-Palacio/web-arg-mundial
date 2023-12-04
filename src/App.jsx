import { Partidos } from "./componentes/Partidos"
import { Contenido } from "./componentes/Contenido"
import "./diseño/styles.css"
import { Navbar } from "./componentes/Navbar"
import { Navigate, Route, Routes } from "react-router-dom"

export const App = () => {
    return (<div>        <div className="body">
            <h1 className="titulo">
                Partidos enteros de argentina en el mundial 2022
            </h1>
            <Navbar/>

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
           
        </div>

        
            
        
        </div>
    )
}