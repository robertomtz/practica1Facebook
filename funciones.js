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
  nombre = document.createTextNode(" 0 Minutes ago ");
  tiempo.appendChild(nombre);

  var comment = document.createElement("a");
  comment.setAttribute("class","linkInt");
  nombre = document.createTextNode(" Comment ");
  comment.appendChild(nombre);

  var like = document.createElement("a");
  like.setAttribute("class","linkInt");
  nombre = document.createTextNode(" Like ");
  like.appendChild(nombre);

  var share = document.createElement("a");
  share.setAttribute("class","linkInt");
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
}
