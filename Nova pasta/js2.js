function ex1(){
    let num1 = Number(document.getElementById("1").value)
    let num2 = Number(document.getElementById("2").value)
    let num3 = Number(document.getElementById("3").value)
    let num4 = Number(document.getElementById("4").value)
    let media = (num1 + num2 + num3 + num4) / 4
    let resultado 
    
    if(media >= 7)
        resultado = "Aprovado"

    else
        resultado = "Reprovado"

    document.getElementById("resultado").innerHTML = resultado
}

function ex2(){
    let num1 = Number(document.getElementById("1").value)
    let num2 = Number(document.getElementById("2").value)
    let media = (num1 + num2) / 2
    let resultado

    if(media >= 7)
        resultado = "Aprovado"
    
    else if(media >= 3)
        resultado = "Exame"

    else
        resultado = "reprovado"

    document.getElementById("resultado").innerHTML = resultado
}

function ex3(){
    let num1 = Number(document.getElementById("1").value)
    let num2 = Number(document.getElementById("2").value)
    let resultado

    if(num1 < num2)
        resultado = num1 + " é menor que " + num2
    
    else if (num2 < num1)
        resultado = num2 + " é menor que " + num1

    else
        resultado = "Ambos iguais"
    
    document.getElementById("resultado").innerHTML = resultado

}

function ex4(){
    let num1 = Number(document.getElementById("1").value)
    let num2 = Number(document.getElementById("2").value)
    let num3 = Number(document.getElementById("3").value)
    let resultado

    if (num1 > num2 && num1 > num3)
        resultado = num1 + " é o maior número"    
    
    else if(num2 > num1 && num2 > num3)
        resultado = num2 + " é o maior número"
    
    else 
        resultado = num3 + " é o maior número"

    document.getElementById("resultado").innerHTML = resultado
    
}

function ex5(){
    let num1 = Number(document.getElementById("1").value)
    let num2 = Number(document.getElementById("2").value)
    let op = document.getElementById("3").value
    let resultado

    if(op == "media")
        resultado = (num1 + num2) / 2
           
    if(op == "-" || op == "diferença" && num1 >= num2)
        resultado = num1 - num2
    
    if(op == "-" || op == "diferença" && num1 <= num2)
        resultado = num2 - num1
    
    if(op == "*" || op == "produto")
        resultado = num1 * num2

    if(op == "divisão" || op == "/")
        resultado = num1 / num2

    
    document.getElementById("resultado").innerHTML = resultado



}