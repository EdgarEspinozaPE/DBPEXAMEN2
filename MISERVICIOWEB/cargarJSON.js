function cargarJSON() {
 
    // Creo el objeto que hara la llamada
    let llamada = new XMLHttpRequest();
 
    // Ruta de donde esta el fichero
    let url = "http://localhost:8080/CategoryRestService/FindAll";
 
    // Indico que debo hacer cuando reciba una respuesta
    llamada.onreadystatechange = function () {
        // Si todo esta bien
        if (this.readyState == 4 && this.status == 200) {
 
            // Parseo la informacion y la muestro
            let datos = JSON.parse(this.responseText);
            console.log(datos);
        }
    }
 
    // Abro la llamada o peticion
    llamada.open("GET", url, true);
    // lanzo la peticion
    llamada.send();
 
}
 
window.onload = cargarJSON;