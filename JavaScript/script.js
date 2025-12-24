
function calcularIMC(event) {

    // Previne o comportamento padrão do formulário
    event.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const mensagemErro = document.getElementById("mensagemErro");
    const caixaDeErro = document.getElementById("caixaDeErro");
    const pesoId = document.getElementById("pesoId");
    const alturaId = document.getElementById("alturaId");

    function mostrarMensagem(texto, cor = "white") {
        mensagemErro.innerHTML = texto;
        mensagemErro.style.color = cor;
        //caixaDeErro.style.display = "block";



        caixaDeErro.classList.add("show");

        setTimeout(() => {
            caixaDeErro.classList.remove("show");
        }, 10000);
          //validação de dados
    }
    if(isNaN(peso) || isNaN(altura)){
         mostrarMensagem("Por favor, insira valores numéricos válidos para peso e altura.");
         return;
    }
    if(altura <= 0 || peso <= 0){
        mostrarMensagem("Por favor, insira valores positivos tanto para peso quanto para altura.");
        return;
            
    }

    const imc = peso / (altura * altura);
    let classificacao = "";
    let legenda = "";
     
    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
        legenda = "Você está abaixo do peso ideal. Considere consultar um profissional de saúde.";
    } else if (imc < 25){
        classificacao = "Peso normal";
        legenda = "Parabéns! Você está no peso ideal segundo dados da OMS.";
    }else if (imc < 30){
        classificacao = "Sobrepeso";
        legenda = "Voce esta esta na faixa considerada de sobrepeso. Fique atento a sua saude!";
    }else{
        classificacao = "Obesidade";
        legenda = "Cuidado! Você está na faixa de obesidade. Recomenda-se buscar orientação médica.";
    }
    mostrarMensagem(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}. <br><br>  ${legenda}`, "#D4AF37");
   
    //mostrarMensagem(`Seu IMC é ${imc.toFixed(2)}`, "white");
    //pesoId.textContent = "Digite seu peso (kg)";
    //alturaId.textContent = "Digite sua altura (m)";

 
}

