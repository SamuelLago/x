function ex2(){
    var preco; var qtdd; var ingresso;
    
    preco = 5
    qtdd = 120

    for(let i = 0; i < 9; i++){ //<-- 0 conta como (1*)
        ingresso = (preco * qtdd) - 200

        alert(`${i + 1}n. situacao (${preco} * ${qtdd} - 200): R$ ${ingresso}`)
            
        preco -= 0.50
        qtdd += 26
    }
}

function ex3(){
    var idade; var idaden; var idadev //<-- Var funciona entre couchetes
    let p1 = 0; let p2 = 0; let p3 = 0; let p4 = 0; p5 = 0

    idaden = 0
    idadev = 0

    for(let i = 0; i < 8; i++){
        idade = Number(prompt(`Digite sua idade: `))//<-- nao esquecer (X = Prompt)

        if(idade <= 15){
            p1++
        }
        
        else if(idade >=16 && idade <=30){
            p2++
        }

        else if(idade >= 31 && idade <= 45){
            p3++
        }

        else if(idade >= 46 && idade <= 60){
            p4++
        }

        if(idade >= 60){
            p5++
        }
    }

    idaden = (p1 / 8) * 100
    idadev = (p5 / 8) * 100

    alert(`menor que 15: ${p1} pessoa(s) \n16-30: ${p2} pessoa(s) \n31-45: ${p3} pessoa(s) \n46-60: ${p4} pessoa(s) \nacima de 60: ${p5} pessoa(s)`)
    alert(`Porcentagem de jovens abaixo de 15 anos: ${idaden}%`)
    alert(`Porcentagem de idosos acima de 60 anos: ${idadev}% `)
}

function ex4(){
    let x

    x = Number(prompt(`Digite o numero para a tabuada: `))
    saida = ""

    for(let i = 0; i <= 10; i++){
        
        saida = saida + `\n ${x} * ${i} = ${x * i}`
    }

    alert(saida)
}

function ex5(){
    let x = 1       //<-- do while: Faz o laco pelo menos uma vez
                    //no while: Nao faz o laco 
    while(x <= 10){ //For: Ja eh pre-determinado     
        let i = 0   
        let saida = ""
        while(i <= 10){
            saida = saida + `\n ${x} * ${i} = ${x * i}`
            i++
        }
        alert(saida)
        x++
    }
}

//Substituicao while por for
/*function ex5(){  
    let x = 1   

    for(x = 1; x <= 10; x++){    
        let saida = ""
        for(i = 0; i <= 10; i++){
            saida = saida + `\n ${x} * ${i} = ${x * i}`
        }
        alert(saida)
    }
}
*/

function ex6(){
    let codigo; let p1 = 0; let p2 = 0; var somaP = 0; var somaV = 0; var somaParcela = 0

    for(let valor = 0; valor < 3; valor++){
        let valorT = 0;

        valorT = Number(prompt(`Digite o valor da compra: `))

        codigo = (prompt("Digite o codigo V(vista) ou P(prazo): ")).toUpperCase()

        if(codigo == 'V'){
            somaV += valorT
        }

        else if(codigo == 'P'){
            somaP += valorT
            somaParcela += valorT / 3
        }
        else{
            alert("Valor invalido, digite novamente")
            valor --
        }


    }
    alert(`Valor total a vista: R$${somaV} \nValor total a prazo: R$${somaP} \nValor total das compras: R$${somaV + somaP} \nValor da primeira prestacao: R$${somaParcela}`)
    
}

function ex7(){
    let idade; let altura; let peso; let idade50 = 0; let alturaTT = 0; let pesoTT = 0; let alturaP = 0 //<-- Nao esquecer de nomear como zeero

    for(let i = 0; i < 5; i++){
        idade = Number(prompt("Digite sua idade: "))
        altura = Number(prompt("Digite sua altura: "))
        peso = Number(prompt("Digite seu peso: "))

        if(idade > 50){
            idade50++
        }

        else if(idade >= 10 && idade <= 20){
            alturaTT += altura
            alturaP ++
        }

        else if(peso < 40){
            pesoTT ++
        }
    }

    alert(`Pessoas com idade superior a 50 anos: ${idade50}\nMedia de altura de pessoas entre 10 e 20 anos: ${alturaTT / alturaP}\nPorcentagem de pessoas com peso inferior a 40Kg: ${pesoTT / 5 * 100}% `)
}

function ex8(){
    let idade; let peso; let altura; let olhos; let cabelo;
    let P1 = 0; let P2 = 0; let idadeTT = 0; let P3 = 0; let P4 = 0

    for(let i = 0; i < 5; i++){
        idade = Number(prompt("Digite sua idade: "))
        peso = Number(prompt("Digite seu peso: "))
        altura = Number(prompt("Digite sua altura(cm): "))
        olhos = prompt("Escolha a opcao da cor dos olhos: \n(A)-Azul\n(P)-Preto\n(V)-Verde\n(C)-Castanho").toUpperCase
        cabelo = prompt("Escolha a opcao da cor do seu cabelo: \n(P)-Preto\n(C)-Castanho\n(L)-Louro\n(R)-Ruivo").toUpperCase

        if(idade > 50 && peso < 60){
            P1++
        }

        if(altura < 1.50){
            idadeTT += idade
            P2++
        }

        if(olhos == 'A'){
            P3++
        }

        if(cabelo == 'R' && olhos != 'A'){
            P4++
        }
    }

    alert(`Pessoas com mais de 50 anos e acima de 60Kg: ${P1}\nMedia das idades com pessoas com uma altura inferior a 1.50(m): ${idadeTT / P2}\nPorcentagem de pessoas com olhos azuis: ${P3 / 6 * 100}\nQuantidade de pessoas ruivas e sem olhos azuis: ${P4}`)
}

function ex9(){
    let idade; let peso; let altura;
    let media = 0; let somaidade = 0; let P1 = 0; let P2 = 0

    for(let i = 0; i < 10; i++){
        idade = Number(prompt(`Digite a ${i + 1}n idade: `))
        altura = Number(prompt(`Digite a ${i + 1}n altura: `))
        peso = Number(prompt(`Digite seu ${i + 1}n peso(m): `))

        somaidade += idade

        if(peso > 90 && altura < 1.50){
            P1++
        }

        if(idade < 30 && idade > 10 && altura > 1.90){
            P2++
        }

    }

    alert(`Media das idades: ${somaidade / 10}\nNumero de pessoas superios a 90Kg e inferior a 1.50(m): ${P1}\nPorcentagem de pessoas entre 10-30 anos com mais de 1.90(m): ${P2}`)
}

function ex10(){
    let n
    let somapares = 0; let somap = 0

    for(let i = 0; i < 2; i++){
        n = Number(prompt(`Digite o ${i + 1}n numero: `))

        if(n % 2 == 0){
            somapares += n
        }

        else if(n % 3 == 0 || n % 5 == 0 || n % 7 == 0){
        }

        else{
            somap += n
        }
    }
    alert(`Soma dos numeros pares ${somapares} \nSoma dos numeros primos: ${somap}`)
}

function ex11(){
    let precototal; let formapag; let precofinal; let porcentagem = 0; let parcelas

    for(let i = 0; i < 10; i++){
        precototal = Number(prompt(`Digite o valor total:`))
        formapag = prompt(`Digite a forma de pagamento: \n(vista ou prazo)`).toUpperCase
        

        if(formapag == 'prazo'){
            parcelas = Number(prompt(`Digite quantas parcelas: `))
            if(parcelas % 6 == 0 && parcelas <= 60){

               porcentagem = parcelas / 6 * 3
               precofinal = precototal + (precototal - ((100 - parcelas) / 100) * precototal )

               alert(`Preco final: R$${precofinal}(${porcentagem}% de juros)`)
            }
        }
        if(formapag == 'vista'){
            precofinal = precototal * 0.80 
            alert(`Preco final: R$${precofinal}`)
        }
    }
}

function ex12(){
    let saida = ""; let saida2 = ""
    let N

    for(let i = 0; i < 10; i++){
        N = Number(prompt(`Digite o seu ${i + 1} numero: `))

        if(N % 2 == 0 || N % 3 == 0 || N % 5 == 0 || N % 7 == 0){
            if(N != 2 && N != 3 && N != 5 && N != 7){
                saida = saida + (`Numero inteiro nao primo: ${N}\n`)
            }
            else{
                saida2 = saida2 + (`Numero inteiro primo: ${N}\n`)
            }
        }

        else{
            saida2 = saida2 + (`Numero inteiro primo: ${N}\n`)
        }
    }

    alert(saida)
    alert(saida2)
}

function ex13(){
    let idade; let peso;
    let p1 = 0; let p2 = 0; let p3 = 0; let p4 = 0;
    let somapeso1 = 0; let somapeso2 = 0; let somapeso3 = 0; let somapeso4 = 0; let media1 = 0; let media2 = 0; let media3 = 0; let media4 = 0

    for(let i = 0; i < 15; i++){
        idade = Number(prompt(`Digite a sua idade: `))
        peso = Number(prompt(`Digite seu peso: `))

        if(idade >= 1 && idade <= 10){
            somapeso1 += peso
            p1 ++

            media1 = somapeso1 / p1
        }
        
        else if(idade >= 11 && idade <= 20){
            somapeso2 += peso
            p2 ++

            media2 = somapeso2 / p2
        }

        else if(idade >= 21 && idade <= 30){
            somapeso3 += peso
            p3 ++

            media3 = somapeso3 / p3
        }

        else{
            somapeso4 += peso
            p4 ++

            media4 = somapeso4 / p4
        }
    }
    alert(`----------------------\n${media1}\n----------------------\n${media2}\n----------------------\n${media3}\n----------------------\n${media4}`)
}