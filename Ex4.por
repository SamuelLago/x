programa
{
	//Nome: Samuel Lago
	
	inclua biblioteca Matematica --> mat
	
	funcao inicio()
	{
		real A, B, C
	
		escreva("Digite 3 comprimentos para um triangulo: \n")
		leia(A, B, C)

		se(A > B e A > C)

			se(mat.potencia(A, 2) < mat.potencia(B, 2) + mat.potencia(C, 2))
				escreva("Um triângulo acutângulo é formado")
		
			senao se(mat.potencia(A, 2) == mat.potencia(B, 2) + mat.potencia(C, 2))
					escreva("Um triângulo retângulo é formado")

				senao se(mat.potencia(A, 2) > mat.potencia(B, 2) + mat.potencia(C, 2))
						escreva("Um triângulo obtusângulo é formado")

					senao se(A >= B + C)
						escreva("Nenhum triangulo é formado")

		
		se(B > A e B > C)

			se(mat.potencia(B, 2) < mat.potencia(A, 2) + mat.potencia(C, 2))
				escreva("Um triângulo acutângulo é formado")
		
			senao se(mat.potencia(B, 2) == mat.potencia(A, 2) + mat.potencia(C, 2))
					escreva("Um triângulo retângulo é formado")

				senao se(mat.potencia(B, 2) > mat.potencia(A, 2) + mat.potencia(C, 2))
						escreva("Um triângulo obtusângulo é formado")
						
					senao se(B >= A + C)
						escreva("Nenhum triangulo é formado")

		
		se(C > A e C > B)

			se(mat.potencia(C, 2) < mat.potencia(B, 2) + mat.potencia(A, 2))
				escreva("Um triângulo acutângulo é formado")
		
			senao se(mat.potencia(C, 2) == mat.potencia(B, 2) + mat.potencia(A, 2))
					escreva("Um triângulo retângulo é formado")

				senao se(mat.potencia(C, 2) > mat.potencia(B, 2) + mat.potencia(A, 2))
						escreva("Um triângulo obtusângulo é formado")

					senao se(C >= A + B)
						escreva("Nenhum triangulo é formado")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 649; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */