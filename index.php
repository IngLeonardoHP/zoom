<DOCTYPE HTML>
<html>
<head>
	<link href="zoom.css" rel="stylesheet">
	<script src="jquery-1.11.0.min.js"></script>
	<script src="zoom.js">
	</script>
	<script type="text/javascript">
		//url donde estaran las imagenes
		url="images/";
	</script>
</head>
	<body>
		<div><a onclick='atras()'>Anterior</a>|<a onclick='siguiente()'>Siguiente</a>|<a id='zoomID'>Zoom</a></div>
		<div id="contenedor_img">
			<!-- Aqui la libreria agregara la imagen -->
			<img id="img_mostrar" src="images/primera.jpg"/><!-- tambien podemos dejarlo vacio -->
		</div>
		<div id="menu_img">
			<div id="imgs">
				<!-- listamos las imagenes que estan disponibles para mostrar -->
				<a onclick="cambiar('primera')"><img src="images/primera.jpg" width="70" class="mons img_menu"/></a>
				<a onclick="cambiar('segunda')"><img src="images/segunda.jpg" width="70" class="mons img_menu"/></a>
				<!-- numeramos las imagenes que mostraremos -->
				<script>
					numerar('primera');
					numerar('segunda');
				</script>
			</div>
		</div>
	</body>
</html>
