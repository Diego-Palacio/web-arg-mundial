import "./diseño/styles.css"
import { Navbar } from "./componentes/Navbar"
import { Rutas } from "./componentes/Rutas"

export const App = () => {
    return (
        <div>        
            <div className="body">
            <h1 className="titulo">
                Partidos enteros de argentina en el mundial 2022
            </h1>
            <Navbar/>
            <Rutas/>
            </div>
        </div>
    )
}