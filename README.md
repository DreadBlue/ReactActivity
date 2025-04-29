Descripción:
La aplicación tiene las rutas requeridas por la actividad, y los botones necesarios para una interacción fluida e interconectada entre cada una de las rutas, haciendo posible el acceso a todas las demás desde cada una. No tiene diseño css pero usé Chakra como UI framework para un desarrollo más rapido.

    El home renderiza la lista de pelicula populares, cada card tiene dirección a los detalles de las peliculas en cuetión y se incluye el input para realizar busquedas de peliculas.

Instrucciones para ejecutar el proyecto y pruebas: 1. Clonar el proyecto 2. Ejecutar npm i 3. Ejecutar npm run dev

    API KEY configurada, no es necesario reemplazarla.

Estructura del proyecto:
SPA: En el caso del proyecto SPA, la estructura está con la carpeta pages, se hace uso de los hooks convencionales que funcionan en los client components como useEffect y useState. Se hacen los llamados a API dentro de useEffect y se hace uso de useState para el manejo de estados. En la comunicación de los componentes se hace uso de queries con react router.

    SSR: Se hace la estructura de la app con el formato de app router y todas las paginas iniciales excepto una se ejecuta del lado del servidor, eliminando el uso de useEffect, useState, react router y queries. En su lugar se usan params y se ejecutan los llamados a API del lado del servidor.
