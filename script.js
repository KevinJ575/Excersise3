// Ejercicio 1
let firstName = "TuNombre";
let lastName = "TuApellido";
let country = "TuPais";
let city = "TuCiudad";
let age = 25;
let isMarried = false;
let yearVariable = 2023;

//verificar los diferentes tipos de datos
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof yearVariable);

// Ejercicio 2
console.log(typeof '10' === typeof 10); // Compara si los tipos de datos son iguales

// Ejercicio 3
console.log(parseInt('9.8') === 9); // Convierte la cadena a un número entero y compara

// Ejercicio 4
// Valores que se consideran verdaderos
console.log(Boolean(1));
console.log(Boolean("Hola")); 
console.log(Boolean(true)); 

// ii. Valores que se consideran falsos (falsy)
console.log(Boolean(0)); 
console.log(Boolean("")); 
console.log(Boolean(false)); 

// Ejercicio 5
// Realiza comparaciones y verifica los resultados usando console.log
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 !== '4');

// Ejercicio 6
let currentDate = new Date();

// Obtener el año actual
console.log(currentDate.getFullYear());

// Obtener el mes actual como número (0-11)
console.log(currentDate.getMonth());

// Obtener la fecha actual (día del mes)
console.log(currentDate.getDate());

// Obtener el día actual como número (0-6, donde 0 es domingo)
console.log(currentDate.getDay());

// Obtener las horas actuales
console.log(currentDate.getHours());

// Obtener los minutos actuales
console.log(currentDate.getMinutes());

// Calcular los segundos transcurridos desde el 1 de enero de 1970
console.log(Math.floor(currentDate.getTime() / 1000));

// Ejercicio 7
let base = parseFloat(prompt("Ingresa la base del triángulo:"));
let height = parseFloat(prompt("Ingresa la altura del triángulo:"));
let area = 0.5 * base * height;
console.log("El área del triángulo es: " + area);

// Ejercicio 8
let sideA = parseFloat(prompt("Ingresa el lado A del triángulo:"));
let sideB = parseFloat(prompt("Ingresa el lado B del triángulo:"));
let sideC = parseFloat(prompt("Ingresa el lado C del triángulo:"));
let perimeter = sideA + sideB + sideC;
console.log("El perímetro del triángulo es: " + perimeter);
