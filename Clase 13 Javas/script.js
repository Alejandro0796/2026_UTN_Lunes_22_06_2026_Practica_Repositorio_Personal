/*
CONDICIONES
Estructuras que van a permitir controlar el flujo de nuestro codigo

IF = el "IF" permite controlar si un bloque de codigo se ejecuta o no bajo una cierta condicion
ELSE: Va siempre seguido de un IF y se ejecuta cuando a la condicion de este NO sea verdadera
ELSE IF: 
*/

let password = promnt ("ingrese la contraseña")

let contraseniaCorrecta = password === "pepe_123"


if(contraseniaCorrecta)

{
    console.log("bienvenido!")
}


else(!contraseniaCorrecta)
{
    console.log ("Credenciales invalidas")
}

/*
if(password === "pepe_123")

{
    console.log("bienvenido!")
}


if(password !== "pepe_123")
{
    console.log ("Credenciales invalidas")
}
/*


/* 

Solicitar al usuario su edad (Imaginemos para practicos que el dato siempre es valido (un numero positivo))

Si la edad del usuario es menor a 16 entonces indicar por consola "Es menor de edad"

Si la edad del usuario es entre 16 y 18 entonces indicar por consola "Casi deja de ser menor de edad"

Si la edad del usuario es mayor a 18 entonces indicar por consola "Es mayor de edad"

Para saber si un numero esta en cierto rango podemos usar el && (AND)

Si esta entre tanto && tanto

*/

/*let edad = Number(prompt("ingrese su edad"));

if (edad < 16) {

    console.log("es menor de edad");

} else if (edad >= 16 && edad <= 18) {

    console.log("casi deja de ser menor de edad");

} else {

    console.log("es mayor de edad");

}
*/


/* 

Solicitar al usuario un numero A (Asumimos que el usuario escribira correctamente un numero)

Solicitar al usuario un numero B (Asumimos que el usuario escribira correctamente un numero)

Solicitar al usuario una operacion 

Si la operacion es "+" o "sumar" entonces deberemos por consola mostrar el resultado de la suma de A + B es C

Si la operacion es '-' o "restar" entonces deberemos por consola mostrar el resultado de la resta de A - B es C 

Si la operacion no es ninguno de los anteriores deberemos decir por consola "Operacion invalida, vuelva a intentar"

*/


/*
let numeroA = Number(prompt("Ingrese el primer número"));
let numeroB = Number(prompt("Ingrese el segundo número"));
let operacion = prompt("Ingrese la operación (+, -, sumar o restar)");


if (operacion === "+" || operacion === "sumar") {

    let resultado = numeroA + numeroB;
    console.log("El resultado es: " + resultado);

} 

else if (operacion === "-" || operacion === "restar") {

    let resultado = numeroA - numeroB;
    console.log("El resultado es: " + resultado);

} 

else {

    console.log("Operación inválida, vuelva a intentar");

}
*/


//while



/* 
//switch

Solicitar al usuario un numero A (Asumimos que el usuario escribira correctamente un numero)

Solicitar al usuario un numero B (Asumimos que el usuario escribira correctamente un numero)

Solicitar al usuario una operacion 

USANDO SWITCH

Si la operacion es "+" o "sumar" entonces deberemos por consola mostrar el resultado de la suma de A + B es C

Si la operacion es '-' o "restar" entonces deberemos por consola mostrar el resultado de la resta de A - B es C 

Si la operacion no es ninguno de los anteriores deberemos decir por consola "Operacion invalida, vuelva a intentar"

*/


let A = Number(prompt("Ingrese el número A:"));
let B = Number(prompt("Ingrese el número B:"));
let operacion = prompt("Ingrese la operación:");

switch (operacion) {
  case "+":
  case "sumar":
    console.log("El resultado de la suma de " + A + " + " + B + " es " + (A + B));
    break;

  case "-":
  case "restar":
    console.log("El resultado de la resta de " + A + " - " + B + " es " + (A - B));
    break;

  default:
    console.log("Operación inválida, vuelva a intentar.");
}



let operacion = prompt("Ingrese una operación (+, -, sumar, restar):");

while (operacion != "+" && operacion != "-" && operacion != "sumar" && operacion != "restar") {
  operacion = prompt("Operación inválida, vuelva a ingresar:");
}