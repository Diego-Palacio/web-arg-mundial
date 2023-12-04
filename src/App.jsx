import { Partidos } from "./componentes/Partidos"
import { Contenido } from "./componentes/Contenido"
import "./diseño/styles.css"
import { Navbar } from "./componentes/Navbar"
import { Navigate, Route, Routes } from "react-router-dom"
import { Rutas } from "./componentes/rutas"

export const App = () => {
    return (<div>        <div className="body">
            <h1 className="titulo">
                Partidos enteros de argentina en el mundial 2022
            </h1>
            <Navbar/>
            <Rutas/>

        </div>

        
            
        
        </div>
    )
}