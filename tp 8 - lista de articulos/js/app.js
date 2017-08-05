/*
Crear un formulario con 3 campos:
Título del Artículo. 
Texto del Artículo
importancia (será un select box con los valores: “normal”, “novedad” y “urgente” )

A partir de un botón que diga “agregar” ir agregando las noticias en un contenedor en la página. 
Dependiendo del valor que tenga el select “importancia”, se cambiaran los estilos de cada noticia. 
Para eso, deberán generarse previamente clases de CSS para cada uno de los valores obtenidos del select.
*/

$('form button').click(function(event){
	event.preventDefault();
	console.log('click');

	(function(){
		var inputTitulo = $('#titulo').val();
		var inputTexto = $('#texto').val();
		var inputImportancia = $( "select option:checked" ).attr('class');
		
		var clasesDeImportancia = inputImportancia.split(' ');
		console.log(clasesDeImportancia);

		var elemento = $('<div></div>').addClass('thumbnail');
		
		var titulo = $('<h2></h2>').text(inputTitulo);
		var texto = $('<p></p>').text(inputTexto);

		titulo.addClass(clasesDeImportancia[1]+ ' '+clasesDeImportancia[2]);
		
		$("body").append(elemento);
		$(elemento).append(titulo,texto);

	})()
})