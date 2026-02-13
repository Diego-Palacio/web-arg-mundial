
export const Contenido = ({url}) => {
 
  return ( 
    <div class="container-video">
   
       {/*  <iframe src= { `https://www.tokyvideo.com/es/embed/${url}` } width="640" height="360" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="true" style={{display:"block",maxWidth:"100%",margin:"0 auto 10px"}}></iframe>*/}
         <iframe src= { `https://archive.org/download/${url}` } width="640" height="360" allowFullScreen webkitallowfullscreen="true" mozallowfullscreen="true" allowtransparency="true" style={{display:"block",maxWidth:"100%",margin:"0 auto 10px"}}></iframe> 
        <button id="volver"><a id="volver-a"href="/web-arg-mundial/partidos">VOLVER ATRAS</a></button> 
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
        <br /><br />
    </div>


    
  )
}
