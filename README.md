# Kriptta

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Objetivos de aprendizaje](#2-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker Edition](#6-hacker-edition)
* [7. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. Resumen del Proyecto

Kriptta es una aplicación web la cual puede ser usado como "Herramienta de mensajería secreta", esta aplicación ofrece el servicio de encriptar mensajes en línea.

Las conversiones se realizan mediante el Navegador Web las cuales pueden ser "Google Chrome o Mozilla Firefox" sin interactuar con algun servidor, lo que significa que la información que se ingresa no se almacena en ninguna base de datos, por lo tanto esta aplicación es segura y confiable.

Puedes encriptar datos privados como números de teléfono, direcciones, correos, etc. Incluso puedes usar esta herramienta para generar una contraseña segura. Por ejemplo, puedes ingresar una frase y una clave para cifrar la frase, el resultado cifrado puedes usarlo como contraseña.

## 3. Consideraciones generales

* Este proyecto se debe resolver de manera individual.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando GitHub pages. Si no sabes lo que es GitHub, no
  te preocupes, lo aprenderás durante este proyecto.
* Tiempo para completarlo: Toma como referencia 2 semanas. Trabaja durante el
  primer Sprint (una semana) y al final, trata de fijar un estimado de cuándo lo
  terminarás.


## 2. Objetivos de aprendizaje

El objetivo principal de aprendizaje es adquirir experiencia desarrollando aplicaciones web (WebApp) que interactúen con el usuario a través del navegador y la lógica, utilizando HTML5, CCS3 y JavaScript como herramientas.

A continuación se muestra los objetivos que se ha llegado a
**entender** y **aplicar** en este proyecto.

### UX

- [ ] Diseñar la aplicación pensando y entendiendo al usuario.
- [X] Crear prototipos para obtener feedback e iterar.
- [X] Aplicar los principios de diseño visual (contraste, alineación, jerarquía).

### HTML y CSS

- [X] Uso correcto de HTML semántico.
- [X] Uso de selectores de CSS.
- [ ] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

- [X] Uso de selectores del DOM.
- [X] Manejo de eventos del DOM.
- [ ] Manipulación dinámica del DOM.

### Javascript

- [X] Manipulación de strings.
- [X] Uso de condicionales (if-else | switch).
- [X] Uso de bucles (for | do-while).
- [X] Uso de funciones (parámetros | argumentos | valor de retorno).
- [X] Declaración correcta de variables (const & let).

### Testing
- [ ] Testeo de tus funciones.

### Git y GitHub
- [ ] Comandos de git (add | commit | pull | status | push).
- [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages).

### Buenas prácticas de desarrollo
- [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica).
- [ ] Uso de linter para seguir buenas prácticas (ESLINT).




## 5. Criterios de aceptación mínimos del proyecto

Usa este alfabeto simple (solamente mayúsculas y sin ñ).

* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

La interfaz debe permitir al usuario:

* Elegir un desplazamiento (_offset_) indicando cuántas posiciones queremos que
  el cifrado desplace cada caracter.
* Insertar un mensaje (texto) que queremos cifrar.
* Ver el resultado del mensaje cifrado.
* Insertar un mensaje (texto) a descifrar.
* Ver el resultado del mensaje descifrado.

### Scripts / Archivos

#### UX (Diseño de experiencia de usuario)

Antes de iniciar a codear, debes entender el problema que quieres solucionar y
cómo tu aplicación lo soluciona.

* Trabaja tu primer prototipo con papel y lápiz (blanco y negro).
* Luego valida esta solución con una compañera (pedir feedback).
* Toma lo aprendido al momento de validar tu primer prototipo y desarrolla un
  nuevo prototipo usando alguna herramienta para diseño de prototipos
  ([Balsamiq](https://balsamiq.com/), [Figma](https://www.figma.com/),
  [Google Slides](https://www.google.com/intl/es/slides/about/), etc.)
Estos puntos los presentarás en el `README.md`.

**`README.md`**:

Debe contener lo siguiente:

* Un título con el nombre de tu proyecto.
* Un resumen de 1 o 2 líneas de qué se trata tu proyecto.
* La imagen final de tu proyecto.
* Investigación UX:
  1. Explicar quiénes son los usuarios y los objetivos en relación con el
    producto.
  2. Explicar cómo el producto soluciona los problemas/necesidades de dichos
    usuarios.
  3. Luego colocarás la foto de tu primer prototipo en papel.
  4. Agregar un resumen del feedback recibido indicando las mejoras a realizar.
  5. Imagen del prototipo final.

#### Visualmente (HTML5 y CSS3)

Deberás maquetar de forma exacta el prototipo final que hiciste en balsamiq
utilizando HTML5 y CSS3. En este momento elegirás los colores, tipo de fuente,
etc a usar.

A continuación describimos los archivos que utilizarás:

**`src/index.html`**:

En este archivo va el contenido que se mostrará al usuario (esqueleto HTML).
Encontrarás 3 etiquetas iniciales, las cuales si deseas puedes borrar y empezar
de cero:

* `<header>`: encabezado de tu proyecto.
* `<main>`: contenido principal de tu proyecto.
* `<footer>`: pie de página de tu proyecto.

**`src/style.css`**:

Este archivo debe contener las reglas de estilo. Queremos que escribas tus
propias reglas, por eso NO está permitido el uso de frameworks de CSS3
(Bootstrap, materialize, etc).

#### Funcionalmente (JavaScript - pruebas unitarias)

* La lógica del proyecto debe estar implementada completamente en JavaScript.
* En este proyecto NO está permitido usar librerías o frameworks, sólo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).
* No se debe utilizar la _pseudo-variable_ `this`.

Vas a tener 2 archivos JavaScript separando responsabilidades, a continuación
indicamos qué harás en cada archivo:

**`src/cipher.js`**:

Acá escribirás las 2 funciones necesarias para el usuario pueda cifrar o descifrar.
Para esto debes implementar el **objeto `cipher`**, el cual ya se encuentra _exportado_ en el
objeto global (`window`). Este objeto (`cipher`) contiene dos métodos:

  - **`cipher.encode(offset, string)`**: `offset` es el número de posiciones que queremos
  mover a la derecha en el alfabeto y `string` el mensaje (texto) que queremos cifrar.
  - **`cipher.decode(offset, string)`**: `offset` es el número de posiciones que queremos
  mover a la izquierda en el alfabeto y `string` el mensaje (texto) que queremos descifrar.

**`src/index.js`**:

Acá escribirás todo el código que tenga que ver con la interacción del DOM (seleccionar,
actualizar y manipular elementos del DOM y eventos).
Es decir, en este archivo deberás invocar a `cipher.encode(offset, string)` y
`cipher.decode(offset, string)` según sea necesario para actualizar el resultado en la
pantalla(UI).

**`test/cipher.spec.js`**:

En este archivo tendrás que completar las pruebas unitarias de las funciones
`cipher.encode(offset, string)` y `cipher.decode(offset, string)` implementadas en `cipher.js`
utilizando Jest.
Tus pruebas unitarias deben dar un 70% en _coverage_ (cobertura), _statements_ (sentencias),
_functions_ (funciones) y _lines_ (líneas); y un mínimo del 50% de _branches_ (ramas).

## 6. Hacker edition

Las secciones llamadas Hacker Edition son opcionales. Si terminaste con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

La descripción general de este proyecto no menciona qué pasaría con las letras minúsculas y otros caracteres (como espacios, puntuación, ñ, ...). El boilerplate incluye algunos tests (comentados en principio) que puedes usar como punto de partida para implementar el soporte para estos casos.

Tampoco se menciona qué pasaría si el offset fuera negativo. Como parte del hacker edition te invitamos a explorar también esta caso por tu cuenta.

## 7. Pistas, tips y lecturas complementarias

### Primeros pasos

1. Antes que nada, asegúrate de tener un :pencil: editor de texto en
  condiciones, algo como [Atom](https://atom.io/) o
  [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :shell:
  [UNIX Shell](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/shell),
  que es un programita que interpreta líneas de comando (command-line
  interpreter) así como tener [git](https://lms.laboratoria.la/cohorts/lim-2019-09-bc-core-lim011/courses/scm/01-git/01-git)
  instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
  ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
  también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
  aunque recomendaría que consideres probar :penguin: GNU/Linux.
3. Haz tu propio :fork_and_knife: [fork](https://help.github.com/articles/fork-a-repo/)
  del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo y te
  darán acceso de lectura en ese repo.
4. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
  tu _fork_ a tu computadora (copia local).
5. 📦 Instala las dependencias del proyecto con el comando `npm
  install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
  incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
  pruebas unitarias (unit tests) con el comando `npm test`.
7. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
8. A codear se ha dicho! :rocket:

### Recursos y temas relacionados

A continuación un video de Michelle que te lleva a través de la fórmula
matemática del Cifrado César y un par de cosas más que debes saber para
resolver este proyecto. ¡Escúchala con detenimiento y sigue sus consejos! :)

[![tips caesar cipher](https://img.youtube.com/vi/zd8eVrXhs7Y/0.jpg)](https://www.youtube.com/watch?v=zd8eVrXhs7Y)

[https://www.youtube.com/watch?v=f0zL6Ot9y_w](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

Diseño de experiencia de usuario (User Experience Design):

* Ideación
* Prototipado (sketching)
* Testeo e Iteración

Desarrollo Front-end:

* Valores
* Tipos
* Variables
* Control de flujo
* Tests unitarios
* [Aprende más sobre `charCodeAt()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/charCodeAt)
* [Aprende más sobre `String.fromCharCode()`](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/String/fromCharCode)
* [Aprende más sobre `ASCII`](http://conceptodefinicion.de/ascii/)
* [Documentación de NPM](https://docs.npmjs.com/)

Herramientas:

* GitHub y GitHub Pages.

Organización del Trabajo:

* [Metodologías Ágiles](https://www.youtube.com/watch?v=v3fLx7VHxGM)
* [Scrum en menos de 2 minutos](https://www.youtube.com/watch?v=TRcReyRYIMg)
* [Scrum en Detalle](https://www.youtube.com/watch?v=nOlwF3HRrAY&t=297s). No
  esperamos que hagas todo eso desde este proyecto. Iremos profundizando poco a
  poco a lo largo del -_bootcamp_.
