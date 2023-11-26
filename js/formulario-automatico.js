document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento de entrada de correo electrónico
    const emailInput = document.getElementById('emailInput');

    // Establecer el valor predeterminado al cargar la página
    emailInput.value = 'dreyjasrl@gmail.com';

    // Agregar un evento al formulario para interceptar el envío
    document.getElementById('subscribeForm').addEventListener('submit', function(event) {
        // Evitar el envío predeterminado
        event.preventDefault();

        // Realizar cualquier acción adicional que desees aquí

        // Simular el envío del formulario (puedes eliminar esto en tu implementación real)
        Swal.fire('Proximamente nuestro newsletter!' + emailInput.value);
    });
});