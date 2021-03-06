var numCom=0;
cargarComentarios();

function comenta(id) {
  var mensaje = document.getElementById("mensaje");
  mensaje=mensaje.value;
  //console.log(mensaje);

  var comentario = document.createElement("div");
  comentario.setAttribute("class","comentario");

  var perfilComentario = document.createElement("img");
  perfilComentario.setAttribute("class","perfilComentario");
  perfilComentario.setAttribute("src","img/perfil.jpg");

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
  //var id = Math.floor(Date.now() / 60000);
  tiempo.setAttribute("id",id);
  nombre = document.createTextNode(" 0 Minutes ago ");
  tiempo.appendChild(nombre);
  //console.log(id);

  var comment = document.createElement("a");
  comment.setAttribute("class","linkInt");
  comment.setAttribute("href","#");
  comment.setAttribute("title", "Leave a comment");
  nombre = document.createTextNode(" Comment ");
  comment.appendChild(nombre);

  var like = document.createElement("a");
  like.setAttribute("class","linkInt");
  like.setAttribute("id","com"+numCom);
  like.setAttribute("title", "Like this comment");
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

  contenido.insertBefore(comentario, contenido.children[3]);

  numCom++;
  borraCaja();
  actualizaTiempo();
}

function crearError(mens){
  //var comentario = document.createElement("div");
  //console.log(mens);
  alert(mens);

  /*var textoError = document.createElement("span");
  nombre = document.createTextNode(mens);
  textoError.appendChild(nombre);

  var contenido = document.getElementById("contenido");
  contenido.appendChild(comentario);
  console.log("herror");*/
}

function guardarComentario(){
  var time = Math.floor(Date.now() / 60000);
  var mensaje = document.getElementById("mensaje");
  mensaje=mensaje.value;
  if(mensaje!=""){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      var textoResp =xmlhttp.responseText;
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
          var textoResp =xmlhttp.responseText;
          if(!textoResp){
            comenta(time);
          }else{crearError(textoResp);}
      }
    }
    document.getElementById("mensaje").focus();
    xmlhttp.open("POST", "php/guardar.php", true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send("mensaje=" + mensaje +"&time=" +time);
  }
}


function crearComentariosCargados(usuario, cmm, timestamp) {

  var comentario = document.createElement("div");
  comentario.setAttribute("class","comentario");

  var perfilComentario = document.createElement("img");
  perfilComentario.setAttribute("class","perfilComentario");
  perfilComentario.setAttribute("src","img/perfil.jpg");

  var tituloComentario = document.createElement("span");
  tituloComentario.setAttribute("class","tituloComentario");
  var nombre = document.createTextNode(usuario);
  tituloComentario.appendChild(nombre);

  var textoComentario = document.createElement("span");
  textoComentario.setAttribute("class","textoComentario");
  nombre = document.createTextNode(cmm);
  textoComentario.appendChild(nombre);

  var interacciones = document.createElement("div");
  interacciones.setAttribute("class","interacciones");

  var tiempo = document.createElement("span");
  tiempo.setAttribute("class","tiempo");
  var id = timestamp;
  tiempo.setAttribute("id",id);
  nombre = document.createTextNode(" 0 Minutes ago ");
  tiempo.appendChild(nombre);
  //console.log(id);

  var comment = document.createElement("a");
  comment.setAttribute("class","linkInt");
  comment.setAttribute("href","#");
  comment.setAttribute("title", "Leave a comment");
  nombre = document.createTextNode(" Comment ");
  comment.appendChild(nombre);

  var like = document.createElement("a");
  like.setAttribute("class","linkInt");
  like.setAttribute("id","com"+numCom);
  like.setAttribute("title", "Like this comment");
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
  if (com.innerHTML==" Like ")
    com.innerHTML=" Unlike ";
  else
    com.innerHTML=" Like ";
}


function cargarComentarios() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              var jsonComentarios = JSON.parse(xmlhttp.responseText);
              for (var x=jsonComentarios.length-1; x>=0; x--) {
                crearComentariosCargados(jsonComentarios[x].usuario, jsonComentarios[x].comentario, jsonComentarios[x].timestamp);
              }
            }
        }
        //document.getElementById("mensaje").focus();
        xmlhttp.open("POST", "php/cargar.php", true);
        xmlhttp.send();
  }
