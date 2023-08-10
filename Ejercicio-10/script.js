 const tabla = document.getElementById("tabla");

// Hacer la solicitud a la API
fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => {
    // Iterar sobre los datos y llenar la tabla
    data.forEach(user => {
    const row = tabla.insertRow(); // Insertar una fila en la tabla

    // Insertar celdas en la fila
    const nombreCell = row.insertCell();
    const apellidoCell = row.insertCell();
    const emailCell = row.insertCell();
    const empresaCell = row.insertCell();
    const direccionCell = row.insertCell();

    // Llenar las celdas con los datos del usuario
    nombreCell.textContent = user.name;
    apellidoCell.textContent = user.username;
    emailCell.textContent = user.email;
    empresaCell.textContent = user.company.name;
    direccionCell.textContent = user.address.street + ', ' + user.address.suite + ', ' + user.address.city;
    });
})
.catch(error => {
    console.error('Error al obtener los datos:', error);
});