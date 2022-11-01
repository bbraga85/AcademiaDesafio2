function montaTr(cadastro){
	var cadastroTr = document.createElement("tr");

	var idTd = montaTd(cadastro.id, "id");
	var nomeTd = montaTd(cadastro.nome, "nome");
	var dataTd = montaTd(cadastro.data_nascimento, "data_nascimento");
	var rendaTd = montarendaTd(cadastro.renda);
	var cpfTd=montaCPF(cadastro.cpf);
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

function montaCPF(dado){
	var cpfeditado = "";
	var td = document.createElement("td");
	if(dado.length>11){
		cpfeditado = "CPF invalido";
	}
	else{
		var i=0;
		if(dado.length<11){
			var dadotemp=""
			for (i; i<(11-dado.length); i++){
				dadotemp +="0";
			}
			for (i=0;i<dado.length;i++){
				dadotemp +=dado[i];;
			}
			dado=dadotemp;
		}
		for (i=0; i<3; i++){
			cpfeditado +=dado[i];
		}
		cpfeditado +="."
		for (i; i<6; i++){
			cpfeditado +=dado[i];
		}
		cpfeditado +="."	
		for (i; i<9; i++){
			cpfeditado +=dado[i];
		}
		cpfeditado +="-"	
		for (i; i<11; i++){
			cpfeditado +=dado[i];
		}
	}
	td.textContent = cpfeditado;
	td.classList.add("celula");	
	td.classList.add("cpf");
	return td;
}

function montaTd(dado, label){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add("celula");	
	td.classList.add(label);
	return td;
}

function calculaidade(dateString){
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function montarendaTd(dado){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add("celula");	
	td.classList.add("renda");
	if (dado<1212) {
		td.classList.add("trabalhoescravo");
	}
	
	return td;
}