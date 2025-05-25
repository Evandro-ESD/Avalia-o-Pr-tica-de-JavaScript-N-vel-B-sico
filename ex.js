// Questão 1 – Calculadora Avançada
// Função: calculadoraAvancada()
// Descrição:
// Peça dois números e a operação desejada (+, -, *, /, %, **). Use if/else para realizar a operação. Mostre o resultado com
// document.write().
function calculadoraAvancada() {
    let numeros = [];

    for (let i = 1; i <= 2; i++) {
        let num = parseFloat(prompt(`Insira o ${i}º de dois para realizar uma operação matematica!!`))
        if (isNaN(num)) {
            alert(`Operação cancelada!! Insira apenas números`)
            return
        }
        numeros.push(num)
        // alert(`numeros=[${numeros}]`)
    }

    let operacao = prompt(`Escolha um operação ( +, -, *, /, %, ** `)

    let res;

    if (operacao === "+") {
        res = numeros[0] + numeros[1]
    }

    else if (operacao === "-") {
        res = numeros[0] - numeros[1]
    }

    else if (operacao === "*") {
        res = numeros[0] * numeros[1]
    }

    else if (operacao === "**") {
        res = numeros[0] ** numeros[1]
    }

    else if (operacao === "%") {
        res = ` O resto da operação ${numeros[0]} % ${numeros[1]} é >>><strong>${numeros[0] % numeros[1]}</strong><<<`
    }

    else if (operacao === "/") {
        if (numeros[0] === 0) {
            res = `Operação invalida!! divisão por zero não é permitida!${res = 0}`
        } else if (numeros[1] === 0) {
            res = 0
        } else { res = numeros[0] / numeros[1] }
    }

    else {
        alert("Operação inválida!");
        return;
    }
    document.writeln(`Resultado: ${res}`)
}

// Questão 2 – Classificação Etária
// Função: classificarIdade()
// Descrição:
// Peça a idade do usuário e classifique em:
// • Até 12: Criança
// • 13 a 17: Adolescente
// • 18 a 59: Adulto
// • 60 ou mais: Idoso
function classificarIdade() {
    let idade = Number(prompt(`Digite sua idade:`))
    if (idade < 13) {
        document.writeln(`Criança`)
    }
    else if (idade > 12 && idade < 18) {
        document.writeln(`Adolescente`)
    }
    else if (idade > 18 && idade < 60) {
        document.writeln(`Adulto`)
    }
    else {
        document.writeln(`Idoso`)

    }
}

// Questão 3 – Tabuada com Intervalo
// Função: tabuadaPersonalizada()
// Descrição:
// Peça um número base e um número final. Mostre a tabuada do número base até o limite escolhido usando for.
function tabuadaPersonalizada() {
    let base = parseInt(prompt(`Digite um número "base" para exibir a tabuada desse número`))
    let final = parseInt(prompt(`Digite um número para o limite dessa tabuada`))
    document.writeln(`TABUADA DO  <u>${base}</u> <br><br>`)
    for (let i = base; i <= final; i++) {
        let res = i * base
        document.writeln(`${base} x ${i} = ${res}<br>`)
    }
}

// Questão 4 – Soma de Pares com while
// Função: somaParesWhile()
// Descrição:
// Peça um número limite e some todos os pares de 1 até ele usando while. Mostre a soma com document.write().
function somaParesWhile() {
    let count = 1
    let soma = 0
    let numSoma = []
    let numLimite = parseFloat(prompt(`Digite um número limite para exibir a soma de todos os pares de 1 até ele`))

    if (isNaN(numLimite) || numLimite < 1) {
        alert("Entrada invalida!!");
        return;
    }
    while (count <= numLimite) {
        if (count % 2 === 0) {
            numSoma.push(count)
            soma += count
        }
        count++
    }
    document.writeln(`A soma dos números pares ${numSoma.join(", ")} `)
    document.writeln(`é igual a ${soma}`)
}

// Questão 5 – Validação de Senha com Tentativas
// Função: validaSenha()
// Descrição:
// Peça uma senha via prompt(). Permita até 3 tentativas. Senha correta: "senai123". Mostre "Acesso permitido" ou
// "Acesso bloqueado"
function validaSenha() { // imprimindo valida senha
    const senha = "senai123"
    let tentativas = 3
    let inputSenha = prompt("Digite uma senha valida")
    if (senha === inputSenha) {
        document.writeln("Acesso permitido")
        return
    }
    alert(`Senha invalida!! Tentativas restantes: ${tentativas - 1}`)

    while (tentativas > 1) {
        inputSenha = prompt(`Digite a senha novamente:`)

        if (senha === inputSenha) {
            document.writeln("Acesso permitido")

        } else {
            tentativas--
            if (tentativas > 1) {
                alert(`Senha invalida!! Tentativas restantes: ${tentativas - 1}`)
            }
        }
    }
    document.writeln("Acesso negado!!!")
}

// Questão 6 – Fatorial com Validação
// Função: calcularFatorial()
// Descrição:
// Peça um número inteiro positivo e calcule o fatorial usando for. Valide a entrada e exiba o resultado.
function calcularFatorial() {
    let fatorial = Number(prompt(`Digite um número inteiro positivo para calcular seu fatorial`))
    
    if(isNaN(fatorial) || fatorial < 0){alert(`Digite apenas números positivos inteiros`); return}

    let res_fatorial = 1

    for (let i = 1; i <= fatorial; i++) {
        res_fatorial *= i // 1*1*2*3*4*5*6*7*8*9
    }

    document.writeln(`O fatorial de ${fatorial} é ${res_fatorial}`)
    
}

// Questão 7 – Verificação de Número Primo
// Função: verificarPrimo()
// Descrição:
// Peça um número inteiro. Verifique se é primo e mostre uma mensagem com document.write().
function verificarPrimo() {
    let numero = parseInt(prompt("Digite um número para saber se é primo:"));

    if (isNaN(numero) || numero <= 1) {
        document.writeln("O número tem que ser maior que 1 para ser um número primo.");
        return;
    }

    let ehPrimo = true;

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            ehPrimo = false;
            break;
        }
    }

    if (ehPrimo) {
        document.writeln(`O número ${numero} é um número primo.`);
    } else {
        document.writeln(`O número ${numero} NÃO é um número primo.`);
    }
}

// Questão 8 – Média com Entradas Ilimitadas
// Função: mediaAritmetica()
// Descrição:
// Peça números até o usuário digitar "fim". Calcule a média dos números inseridos com while.
function mediaAritmetica() {
    let sum = 0
    let count = 0;

    let input = prompt(`Digite números para calcular a média dos números inseridos. 
                        Para encerrar/calcular digite "fim".  `)

    while (input.toLowerCase() !== 'fim') {
        let number = parseFloat(input)

        if (!isNaN(number)) {
            sum += number
            count++
        }

        input = prompt(`Entrada invalida!! Digite um número`)
    }

    document.writeln(`A média dos números digitados é: ${sum / count}`)
}

// Questão 9 – Contador Regressivo
// Função: contadorRegressivo()
// Descrição:
// Peça um número maior que zero. Mostre contagem regressiva até 0 com while.
function contadorRegressivo() { // correto
    let num = prompt(`Digite um numero maior que zero:`)
    document.writeln(`${num}`)
    while (num > 0) {
        num--
        document.writeln(`${num}`)
    }
}

// Questão 10 – Verificação de múltiplos critérios com for e operadores lógicos
// Peça ao usuário um número inicial e um número final. Use um laço for para percorrer esse intervalo e:
// Exibir apenas os números que sejam pares e múltiplos de 3 ao mesmo tempo.
// Exiba uma mensagem se nenhum número satisfizer a condição.
// Utilize os operadores lógicos (&&, ||) para aplicar a regra
function verificaçãoMúltiplosCriterios() {
    let inicial = Number(prompt(`Digite um número inicial`))
    let final = Number(prompt(`Digite um número final`))
    let condicao_satisfeita = false

    if (isNaN(inicial) || isNaN(final)) {
        alert(`Digite apenas números`)
        return
    }

    document.writeln(`Números pares e múltiplos de 3 ao mesmo tempo entre ${inicial} e ${final}:<br>`)
    
    for (let i = inicial; i <= final; i++) {
        if (i % 2 == 0 && i % 3 == 0) {
            document.writeln(`${i} <br>`)
            condicao_satisfeita = true
        }
    }
    if(!condicao_satisfeita){
        document.writeln(`Não foram encotrados números pares e múltiplos de 3 ao mesmo tempo entre ${inicial} e ${final}`)
    }

}
