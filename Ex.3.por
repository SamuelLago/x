programa
{
	//Nome: Samuel
	funcao inicio()
	{
		caracter ss
		inteiro qb
		real pb
		
		escreva("Escolha o sabor abaixo: \nU-Uva\nC-Chocolate\n")
		leia(ss)
		escreva("Quantidades de bolas de sorvete: \n")
		leia(qb)
		escreva("Preço por bola: \n")
		leia(pb)

		se(ss == 'C' e ss == 'c')

			se(qb >= 3)
				escreva("Desconto de 20%\nO valor a ser pago: ", (qb * pb) * 0.8)

			senao
				escreva("Sem desconto\nO valor a ser pago: ", pb * qb)

		senao

			se(qb >= 2 e qb < 5)
				escreva("Desconto de 15%\nO valor a ser pago: ", (pb * qb) * 0.85)

			senao
				escreva("Desconto de 30%\nO valor a ser pago: ", (pb * qb) * 0.7)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 288; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */