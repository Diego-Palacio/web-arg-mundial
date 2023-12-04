import { Route, Routes } from "react-router-dom"
import { partidos } from "../data/partidos"
import { Contenido } from "./Contenido"


let estados=JSON.parse(localStorage.getItem('partidos'))

estados!==false?localStorage.setItem('partidos',JSON.stringify(true)):""

export const Partidos = () => {

  const estado=()=>{
  localStorage.setItem('partidos',JSON.stringify(false));
  }

  return (
     
   <div>
    
      <section style={{visibility:estados!==false?"none":"hidden",height:estados!==false?"100%":"0"}}  className="container-grid">

        <div className="partidos">
    
            {partidos.map((partido,index) =>

                  <div key={index} className={partido.clase}> 
                  <a>{partido.versus}</a>
                    <div className="flex-data"> 
                        <img src="src/imagenes/arg.png" alt=""/>
                        <img src={partido.imagen} alt=""/>
                    </div>
                   <button id="boton-ver-partido" onClick={()=>estado()}><a id="ver-partido"href={partido.video}>VER PARTIDO</a></button> 
                  </div>

            )}

        </div>

    </section>    

<div>

{estados===false?

<Routes>
<Route path="/212108" element={<Contenido url={"212108"} />}/>
<Route path="/212427" element={<Contenido url={"212427"} />}/>
<Route path="/212520" element={<Contenido  url={"212520"} />}/>
<Route path="/212876" element={<Contenido url={"212876"} />}/>
<Route path="/212939" element={<Contenido url={"212939"} />}/>
<Route path="/213072" element={<Contenido url={"213072"} />}/>
<Route path="/194824" element={<Contenido url={"194824"} />}/>
</Routes>

:""

}

</div>


</div>

  )
}
