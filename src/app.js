/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = ["Mi perro", "Mi mama", "Mi hermana"];

  let accion = ["rompio", "perdio", "escondio"];

  let que = ["mi tarea", "mis llaves", "mi mochila"];

  let cuando = ["ayer", "en la tarde", "hoy"];

  document.querySelector("#parte1").innerHTML =
    quien[Math.floor(Math.random() * quien.length)];
  document.querySelector("#parte2").innerHTML =
    accion[Math.floor(Math.random() * accion.length)];
  document.querySelector("#parte3").innerHTML =
    que[Math.floor(Math.random() * que.length)];
  document.querySelector("#parte4").innerHTML =
    cuando[Math.floor(Math.random() * cuando.length)];
};
