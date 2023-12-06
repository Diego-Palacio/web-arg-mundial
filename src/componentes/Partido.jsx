import { partidos } from "../data/partidos"

export const Partido = () => {

  return (
     
   <div>
    
      <section  className="container-grid">

        <div className="partidos">
    
            {partidos.map((partido,index) =>

                  <div key={index} className={partido.clase}> 
                  <a>{partido.versus}</a>
                    <div className="flex-data"> 
                        <img src="imagenes/arg.png" alt=""/>
                        <img src={partido.imagen} alt=""/>
                    </div>
                   <button id="boton-ver-partido"><a id="ver-partido"href={"video"+partido.video}>VER PARTIDO</a></button> 
                  </div>

            )}

        </div>

    </section>    

<div>



</div>


</div>

  )
}
