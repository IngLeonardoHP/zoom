http://zoom.webcindario.com/index.php (Ejemplo)

Bienvenidos a Zoom.js (Versión 1.0)

Primer Paso:
Para usar zoom.js debes descargar zoom.js y zoom.css e incluirlas como libreria en tu proyecto

Es importante que en tu codigo script indiques la url como se puede ver en el ejemplo index.php

  <script type="text/javascript">
		//url donde estaran las imagenes
		url="images/";
	</script>

Esta permite saber en que lugar estaran las imagenes que vas a procesar. En caso de dejarla variable url vacia
esta buscara las imagenes en la carpeta raiz.

Segundo Paso:

Para acceder a los procesos de las imagenes crea:
<div><a onclick='atras()'>Anterior</a>|<a onclick='siguiente()'>Siguiente</a>|<a id='zoomID'>Zoom</a></div>

Debes crear un div con id="contenedor_img" donde se instanciaran tus imagenes en el tamaño que deseas mostrar.
(opcional puede inicializarlo con la primera imagen o dejarlo vacio).

<div id="contenedor_img">
	<!-- Aqui la libreria agregara la imagen -->
	<img id="img_mostrar" src="images/primera.jpg"/><!-- tambien podemos dejarlo vacio -->
</div>

Debes llamar a tus imagenes con la etiqueta "a" de html para como se muestra en el ejemplo antes nombrado

<a onclick="cambiar('primera')"><img src="images/primera.jpg" width="70" class="mons img_menu"/></a>

seguidamente de la numeracion de tus imagenes con un script, llamando a la funcion "numerar"

<script>
	numerar('primera');
	numerar('segunda');
</script>


Click izquierdo amplia, Click derecho reduce el tamaño del zoom

NOTA: No olvides incluir JQuery.js
