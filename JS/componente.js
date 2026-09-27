/* rosenotify
esta es mi libreria para crear notificaciones visuales */

const RoseNotify = {

    // aqui guardo los iconos que voy a utilizar
    // cada tipo de notificacion tiene un icono diferente
    iconos: {
        exito: "✓",
        error: "×",
        advertencia: "!",
        informacion: "i"
    },


    // esta funcion se encarga de obtener el contenedor
    // donde se van a mostrar las notificaciones
    obtenerContenedor: function(posicion) {

        // creo un id usando la palabra rose y la posicion
        // por ejemplo: rose-superior-derecha
        const id = "rose-" + posicion;

        // busco si ya existe un contenedor con ese id
        let contenedor = document.getElementById(id);


        // si el contenedor todavia no existe entra en este if
        if (!contenedor) {

            // creo un nuevo div para guardar las notificaciones
            contenedor = document.createElement("div");

            // le asigno el id que cree anteriormente
            contenedor.id = id;

            // le agrego las clases para darle el diseño y la posicion
            contenedor.className =
                "rose-contenedor " + posicion;

            // agrego el contenedor dentro del body de la pagina
            document.body.appendChild(contenedor);
        }


        // regreso el contenedor para poder utilizarlo
        return contenedor;
    },


    /*
        esta es la funcion principal de mi componente

        recibe:
        titulo: el titulo que va a tener la notificacion
        mensaje: el texto que quiero mostrar
        tipo: puede ser exito, error, advertencia o informacion

        tambien puedo mandar opciones como:
        - duracion
        - posicion
    */

    mostrar: function(
        titulo,
        mensaje,
        tipo = "informacion",
        opciones = {}
    ) {

        // aqui obtengo la duracion que mande en las opciones
        // si no mando ninguna duracion se utilizan 4000 milisegundos
        // 4000 milisegundos son 4 segundos
        const duracion = opciones.duracion || 4000;
        // aqui obtengo la posicion que mande
        // si no mando ninguna se coloca arriba a la derecha
        const posicion =
            opciones.posicion || "superior-derecha";
        // llamo a mi funcion obtenerContenedor
        // para saber donde voy a colocar la notificacion
        const contenedor =
            this.obtenerContenedor(posicion);
        // aqui creo un div que sera la notificacion
        const notificacion =
            document.createElement("div");
        // le agrego las clases necesarias
        // tambien agrego el tipo para cambiar su diseño
        // por ejemplo rose-exito o rose-error
        notificacion.className =
            "rose-notificacion rose-" + tipo;
        // creo un div para colocar el icono
        const icono =
            document.createElement("div");
        // le agrego la clase que tiene el diseño del icono
        icono.className = "rose-icono";
        // busco el icono dependiendo del tipo de notificacion
        // si no encuentra el tipo utilizo la letra i
        icono.textContent =
            this.iconos[tipo] || "i";
        // creo otro div para guardar el titulo y el mensaje
        const contenido =
            document.createElement("div");
        // le agrego su clase para darle estilo
        contenido.className = "rose-contenido";
        // creo un h3 para mostrar el titulo
        const tituloElemento =
            document.createElement("h3");
        // coloco dentro del h3 el titulo que recibi
        tituloElemento.textContent = titulo;
        // creo un parrafo para mostrar el mensaje
        const mensajeElemento =
            document.createElement("p");
        // coloco dentro del parrafo el mensaje recibido
        mensajeElemento.textContent = mensaje;

        // creo el boton que sirve para cerrar la notificacion
        const cerrar =
            document.createElement("button");
        // agrego la clase del boton
        cerrar.className = "rose-cerrar";
        // coloco una x dentro del boton
        cerrar.innerHTML = "&times;";
        // creo un div que va a funcionar como barra de tiempo
        const barra =
            document.createElement("div");
        // agrego la clase de la barra
        barra.className = "rose-barra";
        // agrego el titulo dentro del contenido
        contenido.appendChild(tituloElemento);
        // agrego el mensaje dentro del contenido
        contenido.appendChild(mensajeElemento);
        // agrego el icono dentro de la notificacion
        notificacion.appendChild(icono);
        // agrego el contenido dentro de la notificacion
        notificacion.appendChild(contenido);
        // agrego el boton para cerrar
        notificacion.appendChild(cerrar);
        // agrego la barra de tiempo
        notificacion.appendChild(barra);
        // finalmente agrego la notificacion al contenedor
        // con esto ya se coloca dentro de la pagina
        contenedor.appendChild(notificacion);
        // este settimeout espera 10 milisegundos
        // antes de agregar la clase mostrar
        // esto permite que se vea la animacion de entrada
        setTimeout(function() {
            // agrego la clase mostrar
            // esta clase hace visible la notificacion con css
            notificacion.classList.add("mostrar");
        }, 10);

        // aqui preparo la animacion de la barra
        // la duracion depende del tiempo de la notificacion
        barra.style.transition =
            "width " + duracion + "ms linear";
        // este settimeout espera 50 milisegundos
        // para comenzar a disminuir la barra
        setTimeout(function() {
            // cambio el ancho de la barra hasta llegar a cero
            // con la transicion se ve como va disminuyendo poco a poco
            barra.style.width = "0%";

        }, 50);


        // esta funcion sirve para cerrar y eliminar
        // la notificacion de la pagina
        function eliminar() {
            // primero quito la clase mostrar
            notificacion.classList.remove("mostrar");
            // despues agrego la clase ocultar
            // para que se vea la animacion de salida
            notificacion.classList.add("ocultar");
            // espero 350 milisegundos para que termine
            // la animacion antes de eliminarla completamente
            setTimeout(function() {
                // elimino la notificacion del html
                notificacion.remove();

            }, 350);

        }


        // este es un evento automatico por tiempo
        // cuando pasa el tiempo indicado en duracion
        // se ejecuta la funcion eliminar
        const temporizador =
            setTimeout(eliminar, duracion);
        // este es el evento click del boton cerrar
        // se ejecuta cuando el usuario presiona la x
        cerrar.addEventListener("click", function() {
            // cancelo el temporizador automatico
            // porque el usuario ya decidio cerrar la notificacion
            clearTimeout(temporizador);
            // llamo a eliminar para cerrar la notificacion
            eliminar();

        });

    }

};
