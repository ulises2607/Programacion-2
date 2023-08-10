/*Ejercicio 8
Crear un objeto persona que contenga nombre, apellido, edad, sexo y teléfono. Luego crear 
una tabla (con JavaScript) e insertar los datos con su respectivo encabezado.
*/
let personas = [
    {
        nombre: 'Karen',
        apellido: 'Gutierrez',
        edad: 24,
        sexo: 'Femenino',
        telefono: '1234567890'
    },
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 30,
        sexo: 'Masculino',
        telefono: '9876543210'
    }
];

function crearTabla(personas) {
    let tablaHtml = '';

    personas.forEach(persona => {
        tablaHtml += '<tr>';
        tablaHtml += '<td>' + persona.nombre + '</td>';
        tablaHtml += '<td>' + persona.apellido + '</td>';
        tablaHtml += '<td>' + persona.edad + '</td>';
        tablaHtml += '<td>' + persona.sexo + '</td>';
        tablaHtml += '<td>' + persona.telefono + '</td>';
        tablaHtml += '</tr>';
    });

    document.querySelector('.table-container tbody').innerHTML = tablaHtml;
}

crearTabla(personas);
