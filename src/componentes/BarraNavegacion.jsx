
export const BarraNavegacion = () => {
  return (
    <section className="container-grid">

<div className="partidos">

  
  <div className="arg-ar"> 
       <a>ARGENTINA 1 vs ARABIA SAUDITA 2</a>
          <div className="flex-data"> 
              <img src="src/imagenes/arg.png" alt=""/>
              <img src="src/imagenes/ar.png" alt=""/>
          </div>
          <input type="button" value="Ver video" />
  </div>

  <div className="arg-mex"> 
       <a>ARGENTINA 2 vs MEXICO 0</a>
          <div className="flex-data"> 
            <img src="src/imagenes/arg.png" alt=""/>
            <img src="src/imagenes/mex.png" alt=""/>
          </div>
          <input type="button" value="Ver video" />
  </div>

  <div className="arg-pol"> 
       <a>ARGENTINA 2 vs POLONIA 0</a>
          <div className="flex-data"> 
            <img src="src/imagenes/arg.png" alt=""/>
            <img src="src/imagenes/pol.png" alt=""/>
          </div>
          <input type="button" value="Ver video" />
  </div>

  <div className="octavos">
       <a>ARGENTINA 2 vs AUSTRALIA 1</a>
          <div className="flex-data"> 
            <img src="src/imagenes/arg.png" alt=""/>
            <img src="src/imagenes/aus.png" alt=""/>
          </div>
          <input type="button" value="Ver video" />
  </div>

  <div className="cuartos">
      <a>ARGENTINA 2(4) vs PAISES BAJOS 2(3)</a>
        <div className="flex-data"> 
          <img src="src/imagenes/arg.png" alt=""/>
          <img src="src/imagenes/hol.png" alt=""/>
        </div>
        <input type="button" value="Ver video" />
  </div>

  <div className="semifinal">
      <a>ARGENTINA 3 vs CROACIA 0</a>
        <div className="flex-data"> 
          <img src="src/imagenes/arg.png" alt=""/>
          <img src="src/imagenes/cro.png" alt=""/>
        </div>  
        <input type="button" value="Ver video" />
  </div>

  <div className="final">
       <a>ARGENTINA 3(4) vs FRANCIA 3(2)</a>
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
