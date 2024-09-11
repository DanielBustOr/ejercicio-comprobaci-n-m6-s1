//Definicion de las Variables 
const numero = 56;
const palabra = 'casa';

//Ejemplo de una función que simula una petición a una base de datos  con callback
function obtenerRendimientoAlumno(idAlumno, callback) {
    //Simulamos una operación asíncrona con SetTimeout
    setTimeout(() => {
        const rendimiento = 'Excelente'; //Simulación de un resultado de la base de datos 
        callback(rendimiento); // llamada a la función callback con el resultado
    }, 2000) //Simula un retraso de 2 segundos en la petición
}

//Resultados en consola
obtenerRendimientoAlumno(1, function (rendimiento) {
    console.log('El rendimiento del Alumno fue:' + rendimiento);
});

console.log(numero);
console.log(palabra);

/* El orden de los de aparición en cosola será: 
>56
>casa
>El Rendimiento del Alumno fue: rendimiento */

//Variables Incial con array de objetos
var mascotasJson = [
    {
        "nombre": "fluffy",
        "mascota": true,
        "animal": "gato",
        "edadHumana": 7
    },
    {
        "nombre": "Balto",
        "mascota": true,
        "animal": "perro",
        "edadHumana": 11
    },
    {
        "nombre": "Mandibulas",
        "mascota": false,
        "animal": "tiburon",
         "edadHumana": 50
    }
];

//Mascota 1
var mascota1 = 
    {
        "nombre": "chispas",
        "mascota": true,
        "animal": "gato",
        "edadHumana": 21
    };
    
//Mascota 2
var mascota2 = 
    {
        "nombre": "cariñosito",
        "mascota": false,
        "animal": "oso",
        "edadHumana": 30
    };

//Agregamos un setTimeout para ver los resultados de forma ordenada en consola 
setTimeout (()=>{
    //Contamos la cantidad Inicial de Objetos 
    console.log('Cantidad de Objetos inicial:' + mascotasJson.length);

    // Agregamos las nuevas mascotas al array
    mascotasJson.push(mascota1);
    mascotasJson.push(mascota2);
    // Contamos la cantidad final de objetos después de agregar las nuevas mascotas
    console.log('Cantidad de objetos final: ' + mascotasJson.length);

    //Mostrar el Array Actualizado en formato JSON
    console.log('Array de Objetos Resultantes: ' + JSON.stringify(mascotasJson, null, 2));
},3000);
