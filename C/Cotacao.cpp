#include <stdio.h>
#include <stdlib.h>

int main() {
	
	
	float cotacao, num1;
	
	printf("Digite seu valor em reais para descobrir o valor em dolar: ");
	scanf("%f", &num1);
	cotacao = num1*0.26;
	printf("O seu real ficou como = %f\n", num1);
	printf("E equivale em dolar = %f\n", cotacao);
	system("PAUSE");
	return 0; 
	
	
	
	
}
