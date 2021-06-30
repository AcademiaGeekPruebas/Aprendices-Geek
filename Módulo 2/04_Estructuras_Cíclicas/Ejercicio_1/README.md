for (let i = 0; i < 20; i++) {
  console.log('Me encantan los bucles');
}

En este ejemplo de código, hacemos aparecer 20 veces en la consola el texto Me encantan los bucles. Funciona de la siguiente forma:
Se ejecuta el código de inicialización (let i = 0)
Se comprueba que la condición se cumple (i < 20), en este caso el resultado es true
Como la condición se cumple, se ejecuta el código que hay dentro del bloque entre las llaves ({}), es decir el console.log
Se ejecuta la actualización del bucle (i++) y la variable i pasa a valer 1
Vuelta al paso 2
Cuando la variable i llega al valor de 20, la condición ya no se cumple (20 no es menor que 20), por lo tanto el bloque que contiene el console log no se ejecuta y el bucle acaba


Otro aspecto interesante de los bucles for es que dentro del bloque de código que se repite (el que va entre llaves { }) podemos usar la variable i. Por ejemplo:

for (let i = 0; i < 20; i++) {
    console.log('Voy por la vuelta ' + i);
  }
  
Este ejemplo hará aparecer 20 veces, en la consola, el texto:
Voy por la vuelta 0
Voy por la vuelta 1
Voy por la vuelta 2
...
Voy por la vuelta 19
