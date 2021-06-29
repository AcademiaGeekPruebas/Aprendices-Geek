/*3)	Crear un algoritmo que calcule los años que usted tiene en base a 
su año de nacimiento, debe crear una constante con un valor numérico 
(año de su nacimiento) y hacer el cálculo.*/

let a_Nacimiento;
let a_Actual;
let edad;

a_Nacimiento = Number(prompt('Ingrese el ño de nacimiento'));
a_Actual = Number(prompt('Ingrese el ño actual'));

edad= a_Actual - a_Nacimiento;

document.write('Su edad es: ' + edad )
