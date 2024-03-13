/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = ["before the class", "right on time", "when I finished"];

  let whoIndex = Math.floor(Math.random() * who.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whenIndex = Math.floor(Math.random() * when.length);
  return (
    who[whoIndex] +
    "  " +
    action[actionIndex] +
    " " +
    what[whatIndex] +
    " " +
    when[whenIndex]
  );
};

/*  //Funcion Declaracion
///            58.   329
function suma(num1, num2 = 10) {
  let resultado = num1 + num2;
  return resultado;
}

let resultadoPrimeraSuma = suma(58, 329);
console.log("El resultado de la funcion suma es: ", resultadoPrimeraSuma);

//funcion por Expresión

let resta = function() {
  return num1 - num2;
};
let multiplica = function (num1, num2);{
  console.log(num1 * num2)
}
multiplica()
let resultadoResta = resta(50, 24);

console.log("el resultado de la resta es:", resultadoResta);

//Funcion Flecha
(num1, num2) => {
  return;
  num1 * num2;
};



window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let excusePhrase = document.getElementById("excuse");
  console.log({ excusePhrase });
  let newPhrase = "Este es el texto que agregue desde JS";
  excusePhrase.innerText = newPhrase;

  let fourGeeks = { students: 19, class: 7 };
  console.log(fourGeeks.class);
};
*/
