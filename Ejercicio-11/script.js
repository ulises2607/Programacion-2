// Crea un calendario simple que muestre los eventos programados para un día específico.
// Puedes usar objetos para representar los eventos y mostrarlos en una lista.

// Datos de eventos ejemplo
const eventos = [{
    fecha: '2023-08-09',
    titulo: 'Reunión de equipo',
    descripcion: 'Reunión para discutir el progreso del proyecto.'
},
{
    fecha: '2023-08-10',
    titulo: 'Parcial de Inglés',
    descripcion: 'Parcial de Inglés II de la UPATECO.'
}
];

function showEvents() {
    const datePicker = document.getElementById('date');
    const selectedDate = datePicker.value;

    const eventsList = document.getElementById('eventsList');
    eventsList.innerHTML = '';

    eventos.forEach(evento => {
        if (evento.fecha === selectedDate) {
            const eventItem = document.createElement('li');
            eventItem.innerHTML = `<strong>${evento.titulo}</strong>: ${evento.descripcion}`;
            eventsList.appendChild(eventItem);
    }
});

if (eventsList.children.length === 0) {
    eventsList.innerHTML = 'No hay eventos programados para esta fecha.';
}
}