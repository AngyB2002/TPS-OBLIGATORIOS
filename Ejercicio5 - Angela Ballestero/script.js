document.addEventListener('DOMContentLoaded', () => {
    const API_URL = 'https://6398b453fe03352a94dbe15d.mockapi.io/api/empleados';

    let tabla = document.getElementById('tabla-empleados');
    let cuerpo = tabla.querySelector('tbody');
    let botonAgregar = document.getElementById('agregar-empleado');
    let detalles = document.getElementById('detalles-empleado');
    let foto = document.getElementById('foto-empleado');
    let formulario = document.getElementById('formulario-empleado');
    let nombreInput = document.getElementById('nombre-empleado');
    let apellidoInput = document.getElementById('apellido-empleado');
    let areaInput = document.getElementById('area-empleado');
    let domicilioInput = document.getElementById('domicilio-empleado');

    botonAgregar.addEventListener('click', () => {
        formulario.classList.remove('oculto');
    });

    function limpiarFormulario() {
        nombreInput.value = '';
        apellidoInput.value = '';
        areaInput.value = '';
        domicilioInput.value = '';
    }

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        let nombre = nombreInput.value;
        let apellido = apellidoInput.value;
        let area = areaInput.value;
        let domicilio = domicilioInput.value;

        agregarEmpleado(nombre, apellido, area, domicilio)
            .then(() => {
                limpiarFormulario();
                formulario.classList.add('oculto');
                mostrarEmpleados();
            })
            .catch((error) => {
                console.error('Error al agregar el empleado:', error);
            });
    });

    function agregarEmpleado(nombre, apellido, area, domicilio) {
        let data = {
            nombre: nombre,
            apellido: apellido,
            area: area,
            domicilio: domicilio,
            foto: `https://picsum.photos/200`,
            id: Math.floor(Math.random() * 1000)
        };

        return fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((respuesta) => {
                if (respuesta.ok) {
                    return Promise.resolve();
                } else {
                    return Promise.reject(new Error('Error al agregar el empleado: ' + respuesta.statusText));
                }
            })
            .catch((error) => {
                return Promise.reject(new Error('Error al realizar la solicitud POST: ' + error));
            });
    }

    function mostrarEmpleados() {
        cuerpo.innerHTML = '';
        fetch(API_URL)
            .then((respuesta) => {
                if (respuesta.ok) {
                    return respuesta.json();
                } else {
                    return Promise.reject(new Error('Error al obtener los empleados: ' + respuesta.statusText));
                }
            })
            .then((datos) => {
                datos.forEach((empleado) => {
                    agregarFilaATabla(cuerpo, empleado);
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    function agregarFilaATabla(tabla, empleado) {
        let fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${empleado.nombre}</td>
            <td>${empleado.area}</td>
            <td><button class="ver-empleado" data-id="${empleado.id}">Ver</button></td>
        `;

        fila.querySelector('.ver-empleado').addEventListener('click', () => mostrarDetallesEmpleado(empleado));
        tabla.appendChild(fila);
    }

    function mostrarDetallesEmpleado(empleado) {
        foto.src = empleado.foto;
        document.getElementById('nombre-detalle').textContent = empleado.nombre;
        document.getElementById('apellido-detalle').textContent = empleado.apellido;
        document.getElementById('area-detalle').textContent = empleado.area;
        document.getElementById('domicilio-detalle').textContent = empleado.domicilio;
        detalles.classList.remove('oculto');
    }

    mostrarEmpleados();
});