function calculadoraAvancada() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let operacao = prompt("Digite a operação desejada (+, -, *, /, %, **):");

    let resultado;

    if (operacao === "+") {
        resultado = numero1 + numero2;
    }
    else if (operacao === "-") {
        resultado = numero1 - numero2;
    }
    else if (operacao === "*") {
        resultado = numero1 * numero2;
    }
    else if (operacao === "/") {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            document.writeln("Erro: divisão por zero.");
            return;
        }
    }

    else if (operacao === "%") {
        resultado = numero1 % numero2;
    }

    else if (operacao === "**") {
        resultado = numero1 ** numero2;
    }
    else {
        document.writeln("Operação inválida.");
        return;
    }

    document.writeln("Resultado: " + resultado);
}

// Questão 2 – Classificação Etária
// Descrição:
// Peça a idade do usuário e classifique em:
// • Até 12: Criança
// • 13 a 17: Adolescente
// • 18 a 59: Adulto
// • 60 ou mais: Idoso
function classificarIdade() {
    let idade = prompt("Digite a sua idade:")

    if (idade <= 12) {
        document.writeln("Criança")
    }
    else if (idade > 12 && idade <= 16) {
        document.writeln("Adolescente")
    }
    else if (idade > 17 && idade <= 59) {
        document.writeln("Adulto")
    }
    else if (idade >= 60) {
        document.writeln("Idoso")
    }
}

// Questão 3 – Tabuada com Intervalo
// Função: tabuadaPersonalizada()
// Descrição:
// Peça um número base e um número final. 
// Mostre a tabuada do número base até o limite escolhido usando for

// function tabuada() {
//     let numeroBase = 0
//     let numeroFinal = 0
//     for (i = numeroBase; i < numeroFinal; i++) {
//         let tabuada = prompt(`Digite um número base para iniciar ${numeroBase} a Tabuada e número final ${numeroFinal} `)
//     }

// }

// Questão 4 – Soma de Pares com while
// Função: somaParesWhile()
// Descrição:
// Peça um número limite e some todos os pares de 1 até ele usando 
// while. Mostre a soma com document.write().

function somaParesWhile() { // revisar não faz 
    let soma = 0
    let count = 1
    let pares = 1

    let numeroLimite = Number(prompt("Digite número limite e para somar todos os pares de 1 até ele"))

    while (count <= numeroLimite) {
        for (i = 1; i < numeroLimite; i++) {
            count++

            pares = i % 2

            if (pares === 0) {
                soma += pares
            }
        }
    }

    document.writeln(`Soma dos pares: ${soma}`)
}


// Questão 5 – Validação de Senha com Tentativas
// Função: validaSenha()
// Descrição:
// Peça uma senha via prompt(). Permita até 3 tentativas. Senha correta: "senai123". Mostre "Acesso permitido" ou 
// "Acesso bloqueado".
    function validaSenha(){ // imprimindo valida senha
        const senha = "senai123"
        for(let i = 1; i < 4; i++){
            let inputSenha  = prompt("Digite uma senha valida")
            if(inputSenha == senha){
                document.writeln("Acesso permitido")

            }else{
                document.writeln("Acesso permitido")
            }
        }
    }

// Questão 6 – Fatorial com Validação
// Função: calcularFatorial()
// Descrição:
// Peça um número inteiro positivo e calcule o fatorial usando for. Valide a entrada e exiba o resultado.

function calcularFatorial() {
    let numero = parseInt(prompt("Digite um número inteiro positivo:"));

    if (isNaN(numero) || numero < 0) {
        document.writeln("Entrada inválida. Por favor, insira um número inteiro positivo.");
        return;
    }

    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial *= i;
    }

    document.writeln("Fatorial de " + numero + " é: " + fatorial);
}


// Questão 7 – Verificação de Número Primo
// Função: verificarPrimo()
// Descrição:
// Peça um número inteiro. Verifique se é primo e 
// mostre uma mensagem com document.write().
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
// function verificarPrimo(numero) {
//     let primo;
//     let numero = prompt("Digite um número inteiro maior que 1 para verificar se é primo:")
//     primo = numero % numero
//     if (primo == 0) {
//         document.writeln(`O número ${primo} é primo!!`)
//     }
//     else {
//         document.writeln(`O número ${primo} não é primo!!`)
//     }
// }
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// Questão 8 – Média com Entradas Ilimitadas
// Função: mediaAritmetica()
// Descrição:
// Peça números até o usuário digitar "fim".
// Calcule a média dos números inseridos com while.
function mediaAritmetica() { // Ajuda
  let soma = 0;
  let quantidade = 0;
  let entrada = prompt("Digite um número ou 'fim' para encerrar:");

  while (entrada.toLowerCase() !== "fim") {
    let numero = parseFloat(entrada);

    if (!isNaN(numero)) {
      soma += numero;
      quantidade++;
    } else {
      alert("Entrada inválida. Digite um número ou 'fim'.");
    }

    entrada = prompt("Digite um número ou 'fim' para encerrar:");
  }

  if (quantidade === 0) {
    document.writeln("Nenhum número válido foi inserido.");
  } else {
    let media = soma / quantidade;
  }
}
// Questão 9 – Contador Regressivo
// Função: contadorRegressivo()
// Descrição:
// Peça um número maior que zero.
// Mostre contagem regressiva até 0 com while
function contadorRegressivo() { // correto
    let num = prompt(`Digite um numero maior que zero:`)
    document.writeln(`${num}`)
    while (num > 0) {
        num--
        document.writeln(`${num}`)
    }
}

// Questão 10 – Verificação de múltiplos critérios com for e operadores lógicos
// Peça ao usuário um número inicial e um número final. Use um
// laço for para percorrer esse intervalo e:
// Exibir apenas os números que sejam pares e múltiplos de 3 ao mesmo tempo.
// Exiba uma mensagem se nenhum número satisfizer a condição.
// Utilize os operadores lógicos (&&, ||) para aplicar a regra.
// Exemplo:
// Se o usuário informar início = 1 e fim = 15, o script deve exibir:
// 6 e 12 (são pares e múltiplos de 3)

function verificaçãoMúltiplosCriterios() {
    let inicial = parseInt(prompt("Digite o número inicial:"));
    let final = parseInt(prompt("Digite o número final:"));

    document.writeln("Números pares e múltiplos de 3 entre " + inicial + " e " + final + ":<br>");
    
    for (let i = inicial; i <= final; i++) {
        if (i % 2 === 0 && i % 3 === 0) {
            document.writeln(i + "<br>");
        }
    }
    
}

