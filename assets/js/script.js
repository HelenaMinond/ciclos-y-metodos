const opc1 = document.getElementById('opc1');
const opc2 = document.getElementById('opc2');
const opc3 = document.getElementById('opc3');
const opc4 = document.getElementById('opc4');
const opc5 = document.getElementById('opc5');

let opcion;

const sw = function(op){
  switch(op) {
    case 1:
      let numero = Number(prompt('Ingrese un número entre 1 y 100'));
      for (let i=0 ; i<=numero ; i++) {
        console.log(i);
      }
      break;

    case 2:
      let respuesta = '';
      do {
        respuesta = prompt('¿De qué color es el caballo blanco de Napoleón?');
      } while (respuesta.trim().toLowerCase() !== 'blanco');
      /*
      El método trim( ) elimina los espacios en blanco en ambos extremos del string. Los espacios en blanco en este   contexto, son todos los caracteres sin contenido (espacio, tabulación, etc.) y todos los caracteres de nuevas   lineas (LF,CR,etc.).

      El método toLowerCase() devuelve el valor en minúsculas de la cadena que realiza la llamada.
      */
      break;

    case 3:
      let promMatematicas = Number(prompt('Ingrese promedio de la asignatura de Matemáticas'));
      let promFisica = Number(prompt('Ingrese promedio de la asignatura de Física'));
      let promCiencias = Number(prompt('Ingrese promedio de la asignatura de Ciencias'));

      const promTotal = function(valor1, valor2, valor3){
        return (valor1 + valor2 + valor3)/3;
      };
      alert(`El promedio general de sus notas es ${Math.round(promTotal(promMatematicas, promFisica, promCiencias))}.`);
      /*
      La función Math.round() retorna el valor de un número redondeado al entero más cercano.
      */
      break;

    case 4:
      let frutas = ['', '', ''];

      for(const i of frutas){
        frutas = i;
        frutas = prompt('Ingrese el nombre de una fruta');
        if(frutas === 'manzana'){

        } else console.log(`Fruta ingresada: ${frutas}.`);
      };
      break;

    case 5:
      let nombre = prompt('Ingrese su nombre');
      const vocales = /[aeiou]/ig;
      const consonantes = /[bcdfghjklmnñpqrstvwxyz]/ig;

      alert(`La cantidad de vocales de su nombre son ${nombre.match(vocales).length} y la cantidad de consonantes de su nombre son ${nombre.match(consonantes).length}.`);
      break;
  }
};

opc1.addEventListener('click', function(){
  opcion = 1
  sw(opcion);
});

opc2.addEventListener('click', function(){
  opcion = 2
  sw(opcion);
});

opc3.addEventListener('click', function(){
  opcion = 3
  sw(opcion);
});

opc4.addEventListener('click', function(){
  opcion = 4
  sw(opcion);
});

opc5.addEventListener('click', function(){
opcion = 5
sw(opcion);
});
