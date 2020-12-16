document.write("Hola Mundeichon");
// Variables y tipos de Datos, Parte practica
/* var nombre = 'David';
document.write("Nombre:    ", nombre);
document.write(typeof(nombre));
var edad = 17;
document.write("Edad:    ", edad);
document.write(typeof(edad));
var sueldaso = 1090000;
document.write("El sueldo de este pelao' es:    ", sueldaso);
document.write(typeof(sueldaso));
edad = 'Wenas';
document.write("Edad:    ", edad);
document.write(typeof(edad));

var tieneTrabajo = true;
document.write("Este empleado tiene trabajo:", tieneTrabajo);
document.write(typeof(tieneTrabajo)); */


//Operadores Matematicos (+,-,*,/)
/*
var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

//Años
edadAna = 28;
edadMaria = 17;
yearActual = 2020;
//Operadores Matematicos con las variables
diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;
yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

document.write("Estamos en el año:  " + yearActual);
document.write("La edad de Ana es de:   " + edadAna);
document.write("Ana Nació en el Año:" + yearAna);
document.write("La edad de Maria es de:  " + edadMaria);
document.write("María Nació en el año:   " + yearMaria);
document.write("Ana y maria tienen una diferencia de edad de:  " + diferenciaEdad);
document.write("La sumatoria de la edad de María y de Ana es:    " + sumaEdades);
document.write(yearMaria * yearAna);*/


//Operadores Lógicos,unarios y de asignacion

//Lógicos <> <= >= == !($,$)

/*var edadAna, edadMaria, diferenciaEdad;

edadAna = 28;
edadMaria = 34;
var mayorEdad = edadAna == edadMaria;
document.write(mayorEdad);


//Unarios, ++incremento, --decremento
//edadAna++;
document.write(++edadAna);


//Asignación  +=, -=, *=, /=, %
var a = 12;
var b = 5;
var c = a % b; //Operador( Modulo ); Residuo de Division
document.write(c);
a += b;
document.write(a);*/



//Sentencias o Condicionales


//Condicional IF / ELSE
/*var nombre = 'David';
var esCasado = true;

if (esCasado == true) {
    document.write(nombre + '  Está casado');

} else {
    document.write(nombre + '  Está solteroski');
}*/


//operadores Lógicos ( and && , or ||, not !)


//If aninado - Sentencia lógica

var nombre = 'David';
var edad = 17;
//edad <12 es un niño
//edad >11 es <18 es un adolescente
//edad >17, es <60 es un adulto
//edad >60 es un anciano
if (edad < 12) {
    document.write(nombre + ' Es un niño');
} else if ((edad > 11) && (edad < 18)) {
    document.write(nombre + ' Es un adolescente');
} else if ((edad > 17) && (edad < 60)) {
    document.write(nombre + ' Es un adulto');
} else if ((edad > 60) && (edad < 95)) {
    document.write(nombre + ' Es un anciano');
} else if (edad > 95) {
    document.write(nombre + ' Ya debería haber muerto');
}

//sentencia Switch

//Evalua el valor de una variable con posibles casos

var mes = 5;
switch (mes) {
    case 1:
        document.write('  enero');
        breack;
    case 2:
        document.write('  Febrero');
        break;
    case 3:
        document.write('  Marzo');
        break;
    case 4:
        document.write('  Abril');
        break;
    case 5:
        document.write('  Mayo');
        break;
    default:
        document.write('  Este mes no Existe');
}

//Sentencia FOR 

//Crea un bucle de expresiones opcionales
for (var i = 5; i <= 25; i += 5) {
    document.write('  ' + i);
}

//Sentencia While - do While

var ii = 10;
while (ii >= 1) {
    document.write('  ' + ii);
    ii--;
}

//do WHILE
var iii = 1;
do {
    document.write('  ' + iii);
    iii++;
} while (iii <= 10);

//Funciones
//Funcion sencilla

//Funcion utilaza con valores externos

function mensaje(msj) {
    document.write(msj);
}
var msj = "Wenas que pasa chavales esta es mi primera funcion, Funcional"
mensaje(msj);

//Funcion con return y una variable externa

function mensaje1() {
    return 'Mensaje de retorno';
}
var msj1 = mensaje1();
document.write(msj1);

// Funcion normal
function mensaje2() {
    document.write('Bienvenidos a todos');
}
mensaje2();

//ARGUMENTOS DE UNA FUNCION

//Funcion sumar

function sumar(a, b, c = 4) {
    return a * b * c;
}
var resultado = sumar(4, 8, 2);
let resultado1 = sumar(4, 2);
document.write(resultado1);
document.write(resultado);

// Funciones anonimas

var sumar1 = function(a, b, c) {
    return a + b + c;
}
let resultado2 = sumar1(2, 5, 6);
document.write(resultado2);

//Funciones recursivas, RECURSIVIDAD

//La recursividad consiste en llamar funciones adentro de si misma,Creando un ciclo hasta tener un resultado especifico.

var factorial = function(n) {
    if ((n == 0) || (n == 1))
        return 1;
    else
        return (n * factorial(n - 1));
}
document.write(factorial(7));

//FUNCIONES PREDEFINIDAS

//Funciones de nivel superior, se refiere a que ya estan predefinida por JS, Sirven para hacer validaciones y/o conversiones.
/*****
 * algunas son: eval, isFinite, isNaN, parseInt / parseFloat, Number / String.
 * Unas de las mas utilizadas son: 
 * Eval: Consiste en evaluar un codigo JS que se representa en una cadena de texto(string).
 * isFinite: Para evaluar numeros infinitos.
 * isNaN:
 */

//Arreglos, son objetos de tipo lista, Que permiten guardar un conjunto de datos

//Mi primer arreglo

var bebidas = ['Café', 0, 'Limón'];
var bebidas2 = new Array("Café", 'Té', 'Limonada', 5);

document.write(bebidas[0]);
document.write(bebidas2[2]);

bebidas[0] = 'Su padrino';

document.write(bebidas[0]);

document.write(bebidas.length);

for (var iuno = 0; iuno <= bebidas.length - 1; iuno++) {
    document.write(bebidas[iuno]);
}
bebidas2.forEach(function(elemento, indice) {
    document.write(elemento, indice);
})
document.write(bebidas);

//--------

bebidas.push('Gasiosa');
document.write(bebidas);
//--------

bebidas.unshift('Chocolate');
document.write(bebidas);
//--------

bebidas.pop();
document.write(bebidas);
//--------

bebidas.shift();
document.write(bebidas);
//--------

var positionBebidas = bebidas.indexOf('Café');
document.write(positionBebidas);
//--------

bebidas.splice(1, 2);
document.write(bebidas);
//--------

//MANIPULANDO EL DOM HTML CON JS

document.title = 'Wu popo';
document.write(document.title);
var h1 = document.getElementsByTagName('h1');
document.write(h1);
h1[0].innerHTML = 'Me cago en todo';

var botonjs = document.getElementById('botonjs');

botonjs.addEventListener('click', texto);

function texto() {
    alert('Bienvenido a Wo Popo');
}

var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');