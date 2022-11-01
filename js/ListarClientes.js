function listaclientes(){
    var zeratabela = document.querySelector("#tabelacorpo");
        zeratabela.innerHTML = "";
    var totalizador = document.querySelector(".totalizador");
        totalizador.innerHTML = 0;
    var total = 0;
	var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://www.ksamochvalov.com/academia/listarClientes.php?matricula=F1692357");
	xhr.onload = function () {
        var tabelaDB=JSON.parse(xhr.responseText);
        for (var i= 0; i< tabelaDB.length; i++){
            var cadastroDB = {
                id : tabelaDB[i].id,
                cpf : tabelaDB[i].cpf,
                nome : tabelaDB[i].nome,
                data_nascimento : tabelaDB[i].data_nascimento,
                renda : tabelaDB[i].renda
            }
            total += (parseFloat(tabelaDB[i].renda));
            totalizador.innerHTML = total.toFixed(2);
            var cadastroTr=montaTr(cadastroDB);
            var tabela = document.querySelector("#tabelacorpo");
            tabela.appendChild(cadastroTr);

        }
    }
    xhr.send();
}
