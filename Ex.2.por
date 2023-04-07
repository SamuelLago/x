programa
{
	//Nome: Samuel Lago
	
	funcao inicio()
	{
		real nt, na, ne, media
	
		escreva("Digite a sua nota do trabalho:\n")
		leia(nt)
		escreva("Digite a sua nota da avaliação:\n")
		leia(na)
		escreva("Digite a sua nota do exame:\n")
		leia(nt)

		media = ((nt * 3) + (na * 4) + (nt * 3)) / 10

		
		se(media >= 8 e media <= 10)
			escreva("Nota A")
		
		senao se(media < 8 e media >= 7)
				escreva("Nota B")
		
			senao se(media < 7 e media >= 6)
					escreva("Nota C")
			
				senao se(media >= 5 e media < 6)
						escreva("Nota D")
				
					senao se(media < 5 e media >= 0)
							escreva("Nota E")
					
		senao
			escreva("nota incorreta")			
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 298; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */