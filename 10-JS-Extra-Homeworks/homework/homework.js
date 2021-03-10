// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let nuevaMatriz = [];

  for (elemento in objeto){
    nuevaMatriz.push(new Array(elemento, objeto[elemento]))
  }

  return nuevaMatriz;

}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  let objeto = {};
  const palabra = string;

  for (let i = 0; i < palabra.length; i++){
    let contador = 0;
    
    for (let j = 0; j < palabra.length; j++){
      if(palabra[i] === palabra[j]){
        contador++;
      }
    }

  
    if(!objeto.hasOwnProperty(palabra[i])){
      objeto[palabra[i]] = contador;
      
    }
  }
   return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí

  let letraMayusculas = [];
  let letrasMinusculas = [];
  
  let palabra = s;
  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    const mayuscula = letra.toUpperCase();

    if (letra === mayuscula) {
      letraMayusculas.push(letra);
    } else {
      letrasMinusculas.push(letra);
    }
  }

   let combinado = letraMayusculas.concat(letrasMinusculas);
  
  return combinado.join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arrayPalabras = str.split(" ");
  let contador = 1;
  let frase = arrayPalabras.map((palabra)=>{
    let newPalabra = '';
    for (let i = palabra.length-1; i >= 0 ; i--) {
        newPalabra = newPalabra + palabra[i];
    }
    if (contador < arrayPalabras.length) {
      contador++;
      return newPalabra + " ";
    }
    return newPalabra;
  });

  return frase.join('');

} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let numeroString = numero.toString();
  let numerovolteado = '';
  for (let i = numeroString.length-1; i >= 0; i--) {
    numerovolteado += numeroString[i];
  }

  if (numeroString === numerovolteado) {
    return "Es capicua";
  } else {
    
    return "No es capicua"
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  let nuevacadena = '';
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] === 'a' || cadena[i] ==='b' || cadena[i] ==='c') {
      continue;
    }else{
      nuevacadena += cadena[i]

    }
    
  }
  return nuevacadena
}

let arr =["You", "are", "beautiful", "looking"];
function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {

      //console.log(i + " --- " + j);
      //console.log(arr[i]+ " --- " + arr[j]);
      //console.log(arr[i].length + " --- " + arr[j].length);
      //console.log(arr[i].length > arr[j].length);
      if(arr[i].length > arr[j].length){
        [arr[i], arr[j]] = [ arr[j], arr[i]]
        //console.log(arr);
      }
      //console.log("____________________________");
      //console.log(' ');
    }
        
  }
 return arr
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let newArray = [];

  for (let i = 0; i < arreglo1.length; i++) {
    for (let j = 0; j < arreglo2.length; j++) {
      if (arreglo1[i] === arreglo2[j]) {
        newArray.push(arreglo1[i]);
      }
      
    }
    
  }
  return newArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

