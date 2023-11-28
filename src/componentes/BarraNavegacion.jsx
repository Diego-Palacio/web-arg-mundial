
export const BarraNavegacion = () => {
  return (
    <section className="container-grid">

<div className="partidos">

  
  <div className="arg-ar"> 
       <a>Argentina 1 vs Arabia Saudita 2</a>
          <div className="flex-data"> 
              <img src="src/imagenes/arg.png" alt=""/>
              <img src="src/imagenes/ar.png" alt=""/>
          </div>
          <input type="button" value="Ver video" />
  </div>

  <div className="arg-mex"> 
       <a>Argentina 2 vs Mexico 0</a>
          <div className="flex-data"> 
            <img src="src/imagenes/arg.png" alt=""/>
            <img src="src/imagenes/mex.png" alt=""/>
          </div>
          <input type="button" value="Ver video" />
  </div>

  <div className="arg-pol"> 
       <a>ARGENTINA 2 vs Polonia 0</a>
          <div className="flex-data"> 
            <img src="src/imagenes/arg.png" alt=""/>
            <img src="src/imagenes/pol.png" alt=""/>
          </div>
          <input type="button" value="Ver video" />
  </div>

  <div className="octavos">
       <a>Argentina 2 vs Australia 1</a>
          <div className="flex-data"> 
            <img src="src/imagenes/arg.png" alt=""/>
            <img src="src/imagenes/aus.png" alt=""/>
          </div>
          <input type="button" value="Ver video" />
  </div>

  <div className="cuartos">
      <a>Argentina 2(4) vs Paises Bajos 2(3)</a>
        <div className="flex-data"> 
          <img src="src/imagenes/arg.png" alt=""/>
          <img src="src/imagenes/hol.png" alt=""/>
        </div>
        <input type="button" value="Ver video" />
  </div>

  <div className="semifinal">
      <a>Argentina 3 vs Croacia 0</a>
        <div className="flex-data"> 
          <img src="src/imagenes/arg.png" alt=""/>
          <img src="src/imagenes/cro.png" alt=""/>
        </div>  
        <input type="button" value="Ver video" />
  </div>

  <div className="final">
       <a>Argentina 3(4) vs Francia 3(2)</a>
        <div className="flex-data"> 
           <img src="src/imagenes/arg.png" alt=""/>
           <img src="src/imagenes/fra.png" alt=""/>
        </div>
        <input type="button" value="Ver video" />
  </div>
</div>

    </section>    
  )
}
