import { Partidos } from "./componentes/Partidos"
import { Contenido } from "./componentes/Contenido"
import "./diseño/styles.css"

export const App = () => {
    return (
        <div className="body">
            <h1 className="titulo">
                Partidos enteros de argentina en el mundial 2022
            </h1>
            <Partidos/>
        </div>
    )
}