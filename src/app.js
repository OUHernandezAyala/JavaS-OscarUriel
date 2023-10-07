/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = new Array();
  quien[0] = "Mi perro";
  quien[1] = "Mi mama";
  quien[2] = "Mi hermana";

  let accion = new Array();
  accion[0] = "rompio";
  accion[1] = "perdio";
  accion[2] = "escondio";

  let que = new Array();
  que[0] = "mi tarea";
  que[1] = "mis llaves";
  que[2] = "mi mochila";

  let cuando = new Array();
  cuando[0] = "ayer";
  cuando[1] = "en la tarde";
  cuando[2] = "hoy";

  {
    document.querySelector("#parte1").innerHTML =
      quien[Math.floor(Math.random() * quien.length)];
    document.querySelector("#parte2").innerHTML =
      accion[Math.floor(Math.random() * accion.length)];
    document.querySelector("#parte3").innerHTML =
      que[Math.floor(Math.random() * que.length)];
    document.querySelector("#parte4").innerHTML =
      cuando[Math.floor(Math.random() * cuando.length)];
  }
};
