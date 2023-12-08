import { App } from "../App"
import { partidos } from "../data/partidos"
import argentina from "../../imagenes/arg.png"

export const Partido = () => {

  return (
     
   <div>
    
      <section  className="container-grid">

        <div className="partidos">
    
            {partidos.map((partido,index) =>

                  <div key={index} className={partido.clase}> 
                  <a>{partido.versus}</a>
                    <div className="flex-data"> 
                        <img src={argentina} alt=""/>
                        <img src={partido.imagen} alt=""/>
                    </div>
                   <button id="boton-ver-partido"><a id="ver-partido"href={"/web-arg-mundial/#"+partido.video}>VER PARTIDO</a></button> 
                  </div>

            )}

        </div>

    </section>    

<div>



</div>


</div>

  )
}
