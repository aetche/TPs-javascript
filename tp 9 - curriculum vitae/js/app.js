/*
Crear un formulario con los siguientes campos
Nombre (input=text)
Apellido (input=text)
Género (2 radio button: )
Edad (input=number)
Ocupación (select)
Estudios -> (input=text)
Foto -> (input=text solo con la ruta de la imagen)
La página debe tener un botón que diga “Generar cv”.

Una vez presionado el botón, El formulario tiene que ocultarse y se mostrará un CV con toda la información ingresada.
Una vez renderizado el CV abajo debe aparecer 2 botones: 
Imprimir” -> imprime el CV generado
“Ingresar otro CV” -> volvemos al formulario
*/

$('.generar').click(function(event){
	event.preventDefault();
	
	var nombre = 'Nombre: '+ $('#nombre').val();
	var apellido = 'Apellido: '+ $('#apellido').val();
	var genero = 'Género: '+ $('input[name=genero]:checked');
	var edad = 'Edad: '+ $('#edad').val();
	var ocupacion = $('select option:checked');
	var estudios = $('#estudios').val();
	var foto = 'img/' + $('#foto').val();
	var contenedordefoto =$('#foto');
	

	$("h1").text($('#nombre').val()+' '+$('#apellido').val());

	var crearDatos = function(datos){
		for( var i=0; i < datos.length ; i++){
			var p = $('<p>'+datos[i]+'</p>');
			$('#datos').append(p);
		}
	}

	
	var datos = [nombre, apellido, edad];
	crearDatos(datos);

	$('#imagen').attr("src",foto);
	$('#ocupacion').append(ocupacion);
	$('#contenedorestudios').append(estudios);
	
	$('form').hide();
	$('#cv-generado').show();
	$('.imprimir-ingresar').show();

})

$('.nuevo-cv').click(function(event){
	event.preventDefault();
	$('form').show();
	$('#cv-generado').hide();
	$('.imprimir-ingresar').hide();
	
})