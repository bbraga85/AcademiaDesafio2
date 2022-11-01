var botaoincluir=document.querySelector("#formulario");

botaoincluir.addEventListener("submit", iniciainclusao)
function iniciainclusao(event){
	event.preventDefault();
	var formulario = document.querySelector("#formulario");
	var cadastro = obterDados(formulario);
	var cadastroTr = montaString(cadastro);
	if (cadastro.renda<1212){
		alert("Atenção: renda inferior a um salário mínimo");
	};
	var tabela = document.querySelector("#tabelacorpo");
	var pushstring = converteparastring(cadastroTr);
	incluirnoAPI(pushstring);
	setTimeout(() => {
  			listaclientes();
	}, 500);
	formulario.reset();

}

function obterDados(formulario){
	var cadastro = {
		cpf : formulario.cpf.value,
		nome : formulario.nome.value,
		data_nascimento : formulario.data_nascimento.value,
		idade : calculaidade(formulario.data_nascimento.value),
		renda : formulario.renda.value
	}
	return cadastro
}

function montaString(cadastro){
	var cadastroTr = document.createElement("tr");

	var idTd = montaTd(cadastro.id, "id");
	var nomeTd = montaTd(cadastro.nome, "nome");
	var dataTd = montaTd(cadastro.data_nascimento, "data_nascimento");
	var rendaTd = montarendaTd(cadastro.renda);
	var cpfTd = montaTd(cadastro.cpf, "cpf");
	var age = calculaidade(cadastro.data_nascimento);
	var idadeTd = montaTd(age);

	cadastroTr.appendChild(idTd)
	cadastroTr.appendChild(nomeTd)
	cadastroTr.appendChild(dataTd)
	cadastroTr.appendChild(rendaTd)
	cadastroTr.appendChild(cpfTd)
	cadastroTr.appendChild(idadeTd)


	return cadastroTr;
}


//{"nome": “Flávia","data_nascimento": "1991-09-05",
//"renda": 1000,"cpf": 12345678912,"matricula": "F3295813“}
function converteparastring(tabela){
	var pushstring = "{\"nome\": \"";
	pushstring += tabela.cells[1].textContent;
	pushstring += "\",\"data_nascimento\": \"";
	pushstring += tabela.cells[2].textContent;
	pushstring += "\",\"renda\": ";
	pushstring += parseFloat(tabela.cells[3].textContent);
	pushstring += ",\"cpf\": ";
	pushstring += parseInt(tabela.cells[4].textContent);
	pushstring += ",\"matricula\": \"F1692357\"\}";
	console.log(pushstring);
    return pushstring;
}

