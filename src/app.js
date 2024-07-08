/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

window.onload = function() {
  for (let primero of pronoun) {
    for (let segundo of adj) {
      for (let tercero of noun) {
        console.log(primero + segundo + tercero + ".com");
      }
    }
  }
};
