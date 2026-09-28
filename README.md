Actividad 3 Componente Visual Librería JavaScript de componentes visuales 

# Hernández Guzmán Concepción Escarleth   
# Programación Web
# Demo en vivo: 
https://hernandezguzmanconcepcionescarleth.github.io/A3.ComponenteVisual/
# RoseNotify - Componente Visual de Notificaciones

## ¿Qué es RoseNotify?

RoseNotify es un componente visual que realicé utilizando HTML, CSS y JavaScript.

La idea de este componente es poder mostrar notificaciones dentro de una página web de una forma sencilla y sin utilizar frameworks.

Cuenta con cuatro tipos de notificaciones: éxito, error, advertencia e información.

---
## ¿Qué problema resuelve?

En una página web muchas veces necesitamos avisarle al usuario que ocurrió alguna acción, por ejemplo, que sus datos se guardaron correctamente, que ocurrió un error o que debe revisar cierta información.

Normalmente podemos utilizar `alert()`, pero este aparece como una ventana del navegador y no permite personalizar mucho su diseño.

Por eso realicé **RoseNotify**, para mostrar estos mensajes directamente dentro de la página de una forma más visual.
---

## Instalación

Para utilizar **RoseNotify** en mi proyecto primero tengo que agregar los archivos CSS y JavaScript del componente.

El archivo CSS se agrega dentro de la etiqueta `<head>`:

```html
<link rel="stylesheet" href="CSS/componente.css">
```

Después agrego el archivo JavaScript antes de cerrar la etiqueta `</body>`:

```html
<script src="JS/componente.js"></script>
```

Un ejemplo de cómo quedaría en una página HTML es el siguiente:

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Componente Visual</title>

    <link rel="stylesheet" href="CSS/componente.css">
</head>

<body>

    <h1>Componente Visual de Notificaciones</h1>

    <script src="JS/componente.js"></script>

</body>

</html>
```

---

## Uso del componente

Para mostrar una notificación utilizo la función:

```javascript
RoseNotify.mostrar();
```

La estructura que utilizo actualmente es:

```javascript
RoseNotify.mostrar("titulo", "mensaje", "tipo", "idBoton");
```

Los datos que recibe son:

- `titulo`: título que tendrá la notificación.
- `mensaje`: información que quiero mostrar.
- `tipo`: puede ser `exito`, `error`, `advertencia` o `informacion`.
- `idBoton`: indica junto a qué botón aparecerá la notificación.

---

## Tipos de notificaciones

Mi componente cuenta con **4 tipos de notificaciones**.

### 1. Notificación de éxito

La utilizo para indicar que una acción se realizó correctamente.

```javascript
RoseNotify.mostrar(
    "Datos guardados",
    "El registro se realizó correctamente.",
    "exito",
    "btnExito"
);
```

Esta notificación utiliza el color verde y el símbolo `✓` para representar que la operación se realizó correctamente.

---

### 2. Notificación de error

La utilizo cuando ocurre algún problema o cuando una operación no puede realizarse correctamente.

```javascript
RoseNotify.mostrar(
    "Error de registro",
    "Faltan datos por completar.",
    "error",
    "btnError"
);
```

Esta notificación utiliza el color rojo y el símbolo `×` para identificar un error.

---

### 3. Notificación de advertencia

La utilizo cuando quiero avisarle al usuario que debe revisar algo antes de continuar.

```javascript
RoseNotify.mostrar(
    "¡Cuidado!",
    "Verifica tus datos antes de continuar.",
    "advertencia",
    "btnAdvertencia"
);
```

Esta notificación utiliza un tono amarillo y el símbolo `!` para representar una advertencia.

---

### 4. Notificación de información

La utilizo para mostrar información o algún mensaje general al usuario.

```javascript
RoseNotify.mostrar(
    "Nuevo mensaje",
    "Tienes una nueva notificación.",
    "informacion",
    "btnInformacion"
);
```

Esta notificación utiliza el color morado y la letra `i` para representar un mensaje informativo.

---

## Funcionamiento con botones

En mi página principal agregué cuatro botones para probar cada tipo de notificación:

- ✓ Éxito
- × Error
- ! Advertencia
- i Información

Cada botón llama una función diferente de JavaScript.

Por ejemplo, mi botón de éxito utiliza:

```html
<button
    id="btnExito"
    class="btn exito"
    onclick="mostrarExito()">
    ✓ Éxito
</button>
```

Después, en mi archivo `index.js`, tengo la función:

```javascript
function mostrarExito() {

    RoseNotify.mostrar(
        "Datos guardados",
        "El registro se realizó correctamente.",
        "exito",
        "btnExito"
    );

}
```

Cuando presiono el botón, RoseNotify crea la notificación y la coloca junto al botón correspondiente.

---

## Cierre de las notificaciones

Las notificaciones de **RoseNotify no desaparecen automáticamente**.

Una vez que aparece una notificación, permanece visible hasta que el usuario presione el botón `×`.

Por ejemplo:

```text
✓  Datos guardados
   El registro se realizó correctamente.     ×
```

Esto permite que el usuario tenga tiempo de leer el mensaje y pueda decidir cuándo cerrarlo.

---

## Prueba desde la consola

También puedo probar mi componente directamente desde la consola del navegador.

Por ejemplo:

```javascript
RoseNotify.mostrar(
    "Datos guardados",
    "El registro se realizó correctamente.",
    "exito",
    "btnExito"
);

RoseNotify.mostrar(
    "Error de registro",
    "Faltan datos por completar.",
    "error",
    "btnError"
);

RoseNotify.mostrar(
    "¡Cuidado!",
    "Verifica tus datos antes de continuar.",
    "advertencia",
    "btnAdvertencia"
);

RoseNotify.mostrar(
    "Nuevo mensaje",
    "Tienes una nueva notificación.",
    "informacion",
    "btnInformacion"
);
```

Con esta prueba puedo comprobar que mi componente también puede utilizarse directamente desde JavaScript y no solamente mediante los botones.

---
## Capturas
Captura de Componentes(Modal):
<img width="2552" height="1320" alt="Captura de pantalla 2026-09-27 183313" src="https://github.com/user-attachments/assets/b382dcfe-76be-47cb-aa4c-bc54b87c2d21" />

Captura con distintos mensajes:
<img width="2548" height="1300" alt="Captura de pantalla 2026-09-27 183434" src="https://github.com/user-attachments/assets/a0c6cf74-8b0d-477a-96ff-230c2ec159da" />

## Autor
https://github.com/HernandezGuzmanConcepcionEscarleth/A3.ComponenteVisual

## Video Demostrativo:
https://youtu.be/n_p9oFcPRss?si=8hnfz7ml38mVhxuW


