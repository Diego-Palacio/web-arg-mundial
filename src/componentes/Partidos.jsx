import { partidos } from "../data/partidos"

export const Partidos = () => {
  return (
   
   <section className="container-grid">

          <div className="partidos">

              {partidos.map((partido) =>

                    <div className={partido.clase}> 
                    <a>{partido.versus}</a>
                      <div className="flex-data"> 
                          <img src="src/imagenes/arg.png" alt=""/>
                          <img src={partido.imagen} alt=""/>
                      </div>
                      <input type="button" value="Ver Partido" />
                    </div>

              )}

          </div>

    </section>    
  )
}
