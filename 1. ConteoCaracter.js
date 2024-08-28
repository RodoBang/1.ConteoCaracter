// Primero tenemos que crear la funcion contarCaracteres
function contarCaracteres(cadena){
    // Despues utilizaremos la propiedad length para contar los caracteres
    let numeroDeCaracteres = cadena.length;


    // Luego imprimimos el resultado
    console.log("La cadena contiene " + numeroDeCaracteres + " caracteres");
}

// Ejemplo de uso
let texto = "Hola, mundo!";
contarCaracteres(texto);

// La cadena contiene 12 caracteres