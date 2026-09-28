const RoseNotify = {

    // aqui guardo los iconos que voy a utilizar
    iconos: {
        exito: "✓",
        error: "×",
        advertencia: "!",
        informacion: "i"
    },


    // esta es la funcion principal de mi componente
    mostrar: function(titulo, mensaje, tipo = "informacion", botonId) {

        // busco el boton donde quiero mostrar la notificacion
        const boton = document.getElementById(botonId);

        // obtengo la fila donde esta colocado el boton
        const fila = boton.parentElement;


        // reviso si ya existe una notificacion en esa fila
        const anterior = fila.querySelector(".rose-notificacion");

        // si ya existe una, la elimino
        // para no repetir la misma notificacion muchas veces
        if (anterior) {
            anterior.remove();
        }


        // creo el contenedor de la notificacion
        const notificacion = document.createElement("div");

        // agrego las clases dependiendo del tipo
        notificacion.className =
            "rose-notificacion rose-" + tipo;


        // creo el icono
        const icono = document.createElement("div");

        icono.className = "rose-icono";

        // coloco el icono correspondiente
        icono.textContent =
            this.iconos[tipo] || "i";


        // creo el espacio para el titulo y mensaje
        const contenido = document.createElement("div");

        contenido.className = "rose-contenido";


        // creo el titulo
        const tituloElemento = document.createElement("h3");

        tituloElemento.textContent = titulo;


        // creo el mensaje
        const mensajeElemento = document.createElement("p");

        mensajeElemento.textContent = mensaje;


        // creo el boton para cerrar
        const cerrar = document.createElement("button");

        cerrar.className = "rose-cerrar";

        cerrar.innerHTML = "&times;";


        // agrego el titulo y mensaje
        contenido.appendChild(tituloElemento);

        contenido.appendChild(mensajeElemento);


        // agrego todo dentro de la notificacion
        notificacion.appendChild(icono);

        notificacion.appendChild(contenido);

        notificacion.appendChild(cerrar);


        // agrego la notificacion al lado del boton
        fila.appendChild(notificacion);


        // espero un momento para mostrar
        // la animacion de entrada
        setTimeout(function() {

            notificacion.classList.add("mostrar");

        }, 10);


        // funcion para eliminar la notificacion
        function eliminar() {

            // quito la clase mostrar
            notificacion.classList.remove("mostrar");

            // agrego la animacion de salida
            notificacion.classList.add("ocultar");


            // despues de terminar la animacion
            // elimino la notificacion
            setTimeout(function() {

                notificacion.remove();

            }, 300);

        }


        // la notificacion solamente se cierra
        // cuando el usuario presiona la x
        cerrar.addEventListener("click", function() {

            eliminar();

        });

    }

};