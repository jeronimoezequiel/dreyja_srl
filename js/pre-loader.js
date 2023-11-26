document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    // Texto para el auto typing
    var textArray = ["Piensa diferente...", "Piensa en grande...", "Innová con Dreyja!"];
    var index = 0;

    function typeText(currentText, textElement, typingSpeed, delay, callback) {
        var i = 0;

        function typing() {
            var letter = currentText.charAt(i);
            var span = document.createElement("span");

            // Aplica el color específico para la palabra "Dreyja"
            if (currentText === "Dreyja") {
                span.style.color = "rgb(211, 8, 9)"; // Color para la palabra "Dreyja"
            }

            span.innerHTML = letter;
            textElement.appendChild(span);

            // Aplica el efecto de desvanecimiento con transición suave
            span.style.opacity = 0;
            setTimeout(function () {
                span.style.opacity = 1;
            }, 1000); // Ajuste de la velocidad

            i++;

            if (i < currentText.length) {
                setTimeout(typing, typingSpeed);
            } else {
                // Espera un tiempo antes de desaparecer
                setTimeout(function () {
                    // Desaparece la palabra actual con transición suave
                    textElement.style.transition = "opacity 4s ease-out"; // Reducción del tiempo de transición
                    textElement.style.opacity = 0;

                    // Llama a la función de devolución de llamada después de desaparecer
                    setTimeout(callback, 1400); // Reducción del tiempo de espera
                }, delay);
            }
        }

        typing();
    }

    function typeNextText() {
        index++;

        if (index < textArray.length) {
            var currentText = textArray[index];
            var textElement = document.getElementById("typing-text");
            var typingSpeed = 50; // Ajuste de la velocidad
            var delay = 1000; // Reducción del tiempo de espera

            // Restablece la transición antes de escribir la nueva palabra clave
            textElement.style.transition = "none";

            // Resetea el contenido y la opacidad antes de escribir la nueva palabra clave
            textElement.innerHTML = "";
            textElement.style.opacity = 1;

            // Escribe la nueva palabra clave
            typeText(currentText, textElement, typingSpeed, delay, typeNextText);
        } else {
            // Cuando se han escrito todas las palabras, oculta el preloader y muestra el contenido principal
            preloader.style.display = "none";
            content.style.display = "block";
            window.location.href = "#main-header";
        }
    }

    // Inicia el auto typing con la primera palabra clave
    var initialText = textArray[index];
    var textElement = document.getElementById("typing-text");
    var typingSpeed = 50; // Ajuste de la velocidad
    var delay = 500; // Reducción del tiempo de espera

    typeText(initialText, textElement, typingSpeed, delay, typeNextText);
});
