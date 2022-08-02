Este proyecto esta pensado para que una peluqueria pueda tener su pagina web para otogar un excelente servicio de productos, tratamientos, herramientas de peluqueria y demas

Instalación:
Antes que nada tenemos que tenes instalado Visual Code y Node.js
vamos a copiar la siguiente ruta: https://github.com/florenciaverratti/greatserviceReactJS.git
vamos a visual code, abrimos la terminal y escribimos " git clone https://github.com/florenciaverratti/greatserviceReactJS.git"

Librerias:
-Node.js & npm: Usado para el manejo de la app
-React: para la creacion de la app
-React icons : importa iconos en linea para poder utilizarlos en el codigo
-React router: para el manejo de rutas (links) en nuestra app

Mapa de nuestra app:
Se creo una carpeta componentes donde en cada carpeta tiene una funcionalidad

-Navbar: barra de navegacion de nuestra pagina y carrito
-CartWidget : es el carrito de nuesto Navbar donde se ve la cantidad total de elementos que se seleccionaron en él
-Item: aqui se diseña la tarjeta que puede ver al inicio
-ItemCount: es nuestro contador a la hora de agregar las cantidades que queremos de nuesto elementos
-ItemDetail: aqui se diseña la tarjeta que puede ver a detalle el producto seleccionado
-ItemDetailContainer: el que hace que todo funcione en el ItemDetail
-ItemList: el que se encarga de transformar que lo que recibe sea legible para el codigo Item y asi mas manejable a la hora de programar
-ItemLisContainer : el que hace que todo funcione en el Item
-Mercado Libre : api de mercado libre (aun sin uso)
-Animation: practica de animaciones (aun sin uso)