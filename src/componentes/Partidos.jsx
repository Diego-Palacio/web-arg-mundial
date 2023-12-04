import { Navigate, Route, Routes } from "react-router-dom"
import { partidos } from "../data/partidos"
import { Contenido } from "./Contenido"


export const Partidos = () => {


  return (
     
   <div>
    
      <section  className="container-grid">

        <div className="partidos">
    
            {partidos.map((partido,index) =>

                  <div key={index} className={partido.clase}> 
                  <a>{partido.versus}</a>
                    <div className="flex-data"> 
                        <img src="src/imagenes/arg.png" alt=""/>
                        <img src={partido.imagen} alt=""/>
                    </div>
                   <button id="boton-ver-partido"><a id="ver-partido"href={partido.video}>VER PARTIDO</a></button> 
                  </div>

            )}

        </div>

    </section>    

<div>



</div>


</div>

  )
}
