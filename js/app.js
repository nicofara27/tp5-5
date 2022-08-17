let tiempo = document.getElementById("tiempo");
let btnIniciar = document.getElementById("iniciar");
let btnPausar = document.getElementById("pausar");
let btnReiniciar = document.getElementById("reiniciar");

let h = 0;
let m = 0;
let s = 0;

//Funcion que va modificando el contador del cronometro
function contador() {
  let hCon0;
  let mCon0;
  let sCon0;
  s++;

  //Reinicia el valor a 0 en caso de que segundos y minutos lleguen a 60
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }

  //Agrega un 0 delante de segundos, minutos y horas en caso de que estos sean menores a 10
  if (s < 10) {
    sCon0 = "0" + s;
  } else {
    sCon0 = s;
  }
  if (m < 10) {
    mCon0 = "0" + m;
  } else {
    mCon0 = m;
  }
  if (h < 10) {
    hCon0 = "0" + h;
  } else {
    hCon0 = h;
  }

  tiempo.innerHTML = hCon0 + ":" + mCon0 + ":" + sCon0;
}

//Funcion para iniciar el contador y establecer que cambie con cada segundo
function iniciarCronometro() {
  contador();
  id = setInterval(contador, 1000);
  //Remueve el evento iniciarCronometro() para evitar que se pueda presionar varias veces
  btnIniciar.removeAttribute("onclick");
}

//Funcion para pausar el cronometro y agregar el evento iniciarCronometro() al boton iniciar
function pausar() {
  clearInterval(id);
  btnIniciar.setAttribute("onclick", "iniciarCronometro()");
}

//Funcion para reiniciar el cronometro a 0 y agregar el evento iniciarCronometro() al boton iniciar
function reiniciar() {
  clearInterval(id);
  tiempo.innerHTML = "00:00:00";
  h = 0;
  m = 0;
  s = 0;
  btnIniciar.setAttribute("onclick", "iniciarCronometro()");
}
