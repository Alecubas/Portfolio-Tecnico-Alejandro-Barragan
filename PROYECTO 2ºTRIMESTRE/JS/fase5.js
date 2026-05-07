function cambiarModo(){
    if(document.getElementById("pagina").className=="claro")
        document.getElementById("pagina").className="oscuro";
    else
        document.getElementById("pagina").className="claro";
}

function ocultarMostrarInfo(){
    if(document.getElementById("infoExtra").className=="mostrar")
    {
        document.getElementById("infoExtra").className="ocultar";
        document.getElementById("botonInfo").innerText="Leer más";
    }
    else
    {
        document.getElementById("infoExtra").className="mostrar";
        document.getElementById("botonInfo").innerText="Leer menos";
    }
}