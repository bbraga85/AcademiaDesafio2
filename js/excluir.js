var tabela = document.querySelector("#tabelacorpo");

tabela.addEventListener("dblclick", function(event) {
		excluilinha(event.target.parentNode.querySelector(".id").textContent);
		alert("Entrada excluida");
});


function excluilinha(linhan){
	var pushstring = "{\"cd_clientes\":";
	pushstring += linhan;
	pushstring += "}";
    excluirnoAPI(pushstring);
	setTimeout(() => {
  			listaclientes();
	}, 500);
}
