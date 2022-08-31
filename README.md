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
-Firebase: para tener una base de datos en la nube

Mapa de nuestra app:
Se creo una carpeta componentes donde en cada carpeta tiene una funcionalidad

--Adapters
-productAdapter: adaptador de los datos de la base de datos al codigo
 
--Components
-CartContainer: contenedor de todos los productos agregador al carro
-CartItem: Carrito de compras donde se detalla cada producto comprado
-CartWidget : es el carrito de nuesto Navbar donde se ve la cantidad total de elementos que se seleccionaron en él
-Checkout: toma los datos de los productos comprados, donde presenta un formulario para llenar y lo envia a la base de datos como una orden de compra
-Item: aqui se diseña la tarjeta que puede ver al inicio
-ItemCount: es nuestro contador a la hora de agregar las cantidades que queremos de nuesto elementos
-ItemDetail: aqui se diseña la tarjeta que puede ver a detalle el producto seleccionado
-ItemDetailContainer: el que hace que todo funcione en el ItemDetail
-ItemList: el que se encarga de transformar que lo que recibe sea legible para el codigo Item y asi mas manejable a la hora de programar
-ItemLisContainer : el que hace que todo funcione en el Item
-Navbar: barra de navegacion de nuestra pagina y carrito

--Context
-CartContext: es el encargado el agarrar toda la información del item solicitado para luego en el carrito : añadir al carrito, eliminar solo un producto, eliminar todo o pasar al checkout y continuar con la compra
-UserContext: toma al CartContext para darle forma 

--Hooks
-useAsync: codigo reutilizable

--Notification
-Notification: activa notificaciones a la derecha de la pantalla cuando realiza una compra

--Service
-firestore: filtra por categoria la base
-index: conecta la base de datos de firestore

--Utils
-fetcher: recopila el hook y los parametros para retornar el codigo modificicado

Ya que es imposible hacer un gif mostrando todo en 30 seg, le comparto el link del video de 1min, monstrado su funcionamiento:
https://drive.google.com/file/d/1GvakQo8TYrZznvitC4Effi8xtTMMyC9R/view?usp=sharing