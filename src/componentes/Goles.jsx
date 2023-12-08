import { jugadores } from "../data/jugadores"

export const Goles = () => {
  return (
        
    <section  className="container-grid">

       <div className="jugadores">

            {jugadores.map((jugador,index)=>
            
                    <div key={index} className={jugador.clase}> 
                    
                        <div id="container-cards">

                            <div id="container-fondo-jug" style={{backgroundImage:`url(${jugador.imagen})`}}>

                            </div>

                            <div id="container-flex-jug"> 
                                    <div id="jugador-versus"><h3 id="versus">{jugador.versus}</h3></div>
                                    <div id="container-min-gol">
                                        <h2 id="nombre-jugador"> {jugador.jugador} </h2>
                                        <h3> Min :{jugador.minuto} </h3>
                                        <button id="boton-ver-partido"><a href={jugador.video} target="_blank" id="ver-partido" style={{fontSize:"16px"}}>VER GOL</a></button> 
                                    </div>
                            </div>
                        </div>
                    </div>
            )}


        </div>

       
    </section>
  )
}
