
export const Contenido = ({url}) => {
  const volverAtras=()=>{
    localStorage.setItem('partidos',JSON.stringify(true));
  }
  return ( 
    <div class="container-video">
       <iframe src= { `https://www.tokyvideo.com/es/embed/${url} ` } width="640" height="360" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="true" style={{display:"block",maxWidth:"100%",margin:"0 auto 10px"}}></iframe>
       <button id="volver" onClick={()=>volverAtras()} type="button"><a id="avolver"href="">VOLVER ATRAS</a></button>
    </div>

    
  )
}
