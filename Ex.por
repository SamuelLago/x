programa
{
		//Nome: Samuel Lago

	
	funcao inicio()
	{
		inteiro n1, seg, min, hora 



		
		escreva("Digite a quantidade de segundos: \n")
		leia(n1)
	
		
		seg = n1 % 60
		hora = n1 / 3600
		min = (n1 - hora * 3600) / 60
		
		escreva(hora , "h ",min , "m ", seg,"s")
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 32; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */