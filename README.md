# platzigram-db
Base de Datos para platzigram


standard: libreria para obligar al programador a programar con un standard predeterminado 
linter: agente que nos obligara a seguir los lineamientos de standard 
AVA: Libreria para hacer Test 
yield: convierte promesas javascript en arreglos
co: utilidad que permise hacer el intermedio entre usar promesas y el async await
bluebird: implementacion de promesas muy buena.
uuid-base62: libreria para generar id's unicos




- Se agrego standard-linter  al proyecto 
- Se instalo AVA para poder hacer test del codigo
- Se agregaron las validaciones para la api que estamos desarrollando con test para los hashtags.
- Se agrego la libreria co como intermediario de las promesas y bluebird para implementar promesas y se realizo el escript de conexion basico para la base de datos db.js.
- Se instalo uuid-base62 para generar id unicos para nuestras fotos y se agregaron metodos de test que conectaran y desconectaran a nuestra bd 
- Se agrego el codigo para insertar los datos de la imagen en la Base de Datos
- Se agrego funcionalidad para separar tags de la imagen y se creo un id mas corto para la imagen
- Se añadio la funcionalidad y el test para los likes de la imagen
- Se añadio la funcionalidad y el test para obtener una imagen
- Se añadio la funcionalidad y el test para obtener varias imagenes y se cambiaron los test para crear y eliminar conexiones a la bd en cada test para que no se afecten entre ellos.
- Se añadieron test y funciones para generar Hash de los usuarios y poder guardarlos en la bd
- Se agrego la funcion getUser que obtiene el usuario de la bd y se agrego un indice a la bd para poder hacer las busquedas