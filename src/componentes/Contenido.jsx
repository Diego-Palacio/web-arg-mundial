
export const Contenido = ({url,url2} ) => {
 
  return ( 
    <div class="container-video">
   
       {/*  <iframe src= { `https://www.tokyvideo.com/es/embed/${url}` } width="640" height="360" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="true" style={{display:"block",maxWidth:"100%",margin:"0 auto 10px"}}></iframe>*/}
        
        <h1 className="textoTiempos">PRIMER TIEMPO</h1>
        
         <iframe src= { `https://archive.org/download/${url}` } width="640" height="360" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="true" style={{display:"block",maxWidth:"100%",margin:"0 auto 10px"}}></iframe> 

        <h1 className="textoTiempos">SEGUNDO TIEMPO</h1>

         <iframe src= { `https://archive.org/download/${url2}` } width="640" height="360" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="true" style={{display:"block",maxWidth:"100%",margin:"0 auto 10px"}}></iframe> 

       
       
       
       
        { //Si es el partido contra francia agrega el alargue y penales
          url.includes("Francia")&&( 
            <>
             <h1 className="textoTiempos">AlARGUE Y PENALES</h1>
             <iframe src= { "https://archive.org/download/argentinavsfrancia2022/Argentina%20vs%20Francia%20%283%29.ia.mp4" } width="640" height="360" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="true" style={{display:"block",maxWidth:"100%",margin:"0 auto 10px"}}></iframe>
            </>
            )
        }

       
       
        { //Si es el partido contra holanda agrega el alargue y penales
          url.includes("holanda")&&( 
            <>
             <h1 className="textoTiempos">AlARGUE Y PENALES</h1>
             <iframe src= { "https://archive.org/download/holandavsargentina2022/Pa%C3%ADses%20Bajos%20vs%20Argentina%20%283%29.ia.mp4" } width="640" height="360" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="true" style={{display:"block",maxWidth:"100%",margin:"0 auto 10px"}}></iframe>
            </> 
          )
        }


     

        <button id="volver"><a id="volver-a"href="/web-arg-mundial/#/partidos">VOLVER ATRAS</a></button>
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />

    </div>

    


    
  )
}

