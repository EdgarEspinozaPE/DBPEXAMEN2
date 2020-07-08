$(document).ready(function(){
	$("#submit").click(function(e){
		e.preventDefault();
		var datosdeenvio={name: document.getElementById("nombre").value, description:document.getElementById("descripcion").value}		
		$.ajax({
        	type: "PUT",
        	url: 'http://localhost:8080/CategoryRestService/Add',
        	contentType: 'application/json', 
        	data: JSON.stringify(datosdeenvio),
        });
	});
});
