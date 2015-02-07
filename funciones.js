var numCom=0;

function comenta() {
  var mensaje = document.getElementById("mensaje");
  mensaje=mensaje.value;
  console.log(mensaje);

  var comentario = document.createElement("div");
  comentario.setAttribute("class","comentario");

  var perfilComentario = document.createElement("img");
  perfilComentario.setAttribute("class","perfilComentario");
  perfilComentario.setAttribute("src","perfil.jpg");

  var tituloComentario = document.createElement("span");
  tituloComentario.setAttribute("class","tituloComentario");
  var nombre = document.createTextNode("Roberto Mtz");
  tituloComentario.appendChild(nombre);

  var textoComentario = document.createElement("span");
  textoComentario.setAttribute("class","textoComentario");
  nombre = document.createTextNode(mensaje);
  textoComentario.appendChild(nombre);

  var interacciones = document.createElement("div");
  interacciones.setAttribute("class","interacciones");

  var tiempo = document.createElement("span");
  tiempo.setAttribute("class","tiempo");
  var id = Math.floor(Date.now() / 60000);
  tiempo.setAttribute("id",id);
  nombre = document.createTextNode(" 0 Minutes ago ");
  tiempo.appendChild(nombre);

  var comment = document.createElement("a");
  comment.setAttribute("class","linkInt");
  comment.setAttribute("href","#");
  nombre = document.createTextNode(" Comment ");
  comment.appendChild(nombre);

  var like = document.createElement("a");
  like.setAttribute("class","linkInt");
  like.setAttribute("id","com"+numCom);
  like.setAttribute("onClick","funcLike(com"+numCom+")");
  nombre = document.createTextNode(" Like ");
  like.setAttribute("href","#");
  like.appendChild(nombre);

  var share = document.createElement("a");
  share.setAttribute("class","linkInt");
  share.setAttribute("href","#");
  nombre = document.createTextNode(" Share ");
  share.appendChild(nombre);

  var contenido = document.getElementById("contenido");

  interacciones.appendChild(tiempo);
  interacciones.appendChild(comment);
  interacciones.appendChild(like);
  interacciones.appendChild(share);

  comentario.appendChild(perfilComentario);
  comentario.appendChild(tituloComentario);
  comentario.appendChild(textoComentario);
  comentario.appendChild(interacciones);

  contenido.appendChild(comentario);

  numCom++;
  borraCaja();
  actualizaTiempo();
}


function borraCaja(){
  //console.log("hola");
  var area = document.getElementById("mensaje");
  area.value="";
}

function actualizaTiempo(){
  var tiempos = document.getElementsByClassName('tiempo');
  for (var a=0; a<tiempos.length; a++){
    var primerTiempo = tiempos[a].id;
    var tiempoActual = Math.floor(Date.now() / 60000);
    var tiempoTrans = tiempoActual - primerTiempo;
    tiempos[a].innerHTML= " " +tiempoTrans +" Minutes ago ";
  }
}

function funcLike(com){
  //console.log(com);
  if (com.innerHTML==" Like ")
    com.innerHTML=" Unlike ";
  else
    com.innerHTML=" Like ";
}
