function incluirnoAPI(pushstring){
	var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://www.ksamochvalov.com/academia/inserirCliente.php");
    xhr.send(pushstring);
}


function excluirnoAPI(pushstring){
    var xhr = new XMLHttpRequest();
    xhr.open("DELETE", "http://www.ksamochvalov.com/academia/removerCliente.php")
    xhr.send(pushstring);
}