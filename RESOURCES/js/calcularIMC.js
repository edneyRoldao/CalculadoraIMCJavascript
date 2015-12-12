window.onload = function() {
	document.getElementById("realizarCalculo").onclick = function() {

		//Declaração de variáveis e recuperando os elementos na página
		var sex = document.getElementsByName("sexo");
		var peso = document.getElementById("element-1");
		var altura = document.getElementById("element-2");
		var exibeErro = document.getElementById("erro");

		if(validarForm(sex, peso, altura, exibeErro, true)) {
			var valorPeso = converterValor(peso.value);
			var valorAltura = converterValor(altura.value);
			var resultadoIMC = calcularIMC(valorPeso, valorAltura).toFixed(2);

			exibeIMGDesc(resultadoIMC, sex);

			document.getElementById("appearBeforeResult").style.display = "none";
			document.getElementById("appearAfterResult").style.display = "block";

		}


	}	
}

function validarForm(sex, peso, altura, exibeErro, isFormValid) {
	//Validando o campo peso
		if(peso.value == "") {
			exibeErro.innerHTML = "Informe o peso !";
			isFormValid = false;
		}
	//Validando o campo altura
	if(isFormValid) {
		exibeErro.innerHTML = "";
		if(altura.value == "") {
			exibeErro.innerHTML = "Informe a altura !";
			isFormValid = false;
		}

	}
	//Validando campo radioButton sexo
	if(isFormValid) {
		exibeErro.innerHTML = "";
		if(sex[0].checked == false && sex[1].checked == false) {
			exibeErro.innerHTML = "Selecione o sexo !";
			isFormValid = false;
		}
	}
	return isFormValid;
}


function converterValor(valor) {
	var valorAux = valor;
	while(valorAux.indexOf(".") > 0) {
		valorAux = valorAux.replace('.' , '');
	}
	valorAux = valorAux.replace(',' , '.');
	valorAux = Number(valorAux);
	return valorAux;
}


function calcularIMC(peso, altura) {
	return peso / (altura * altura);
}


function exibeIMGDesc(resultado, sexo) {

	var verImagem = "";
	var descricao = "";
	var genero = "";

	if(sexo[0].checked) {
		genero = sexo[0].value;
	}else {
		genero = sexo[1].value;
	}

	if(resultado <= 18.5) {
		descricao = "Você está abaixo do peso considerado ideal";
		verImagem = (genero == "feminino") ? "skinnyWoman" : "skinnyMan";
	}

	if(resultado > 18.5 && resultado < 25) {
		descricao = "Parabéns ! Seu peso é considerado ideal";
		verImagem = (genero == "feminino") ? "normalWoman" : "normalMan";
	}

	if(resultado >= 25 && resultado < 30) {
		descricao = "Você um pouco acima do peso";
		verImagem = (genero == "feminino") ? "fatWoman" : "fatMan";
	}

	if(resultado >= 30 && resultado < 35) {
		descricao = "Você está acima do peso, obesidade: GRAU I";
		verImagem = (genero == "feminino") ? "fatWoman1" : "fatMan2";
	}

	if(resultado >= 35 && resultado < 40) {
		descricao = "Você está acima do peso, obesidade: GRAU II (crítica)";
		verImagem = (genero == "feminino") ? "fatWoman2" : "fatMan2";
	}

	if(resultado >= 40) {
		descricao = "Você está com obesidade Móbida, GRAU III";
		verImagem = (genero == "feminino") ? "fatWoman2" : "fatMan2";
	}

	//Exibindo os resultados
	document.getElementById("mostrarImagem").src = "../RESOURCES/img/" + verImagem + ".png";
	document.getElementById("resultDesc").innerHTML = descricao;
	document.getElementById("resultIMC").innerHTML = resultado.toString().replace('.' , ',');
}




















































