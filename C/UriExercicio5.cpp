#include <stdio.h>

int main(){
	
	char vendedor;
	double vendas, salario;
	
	scanf("%s", &vendedor);
	scanf("%lf", &salario);
	scanf("%lf", &vendas);
	vendas = vendas*0.15;
	salario = salario+vendas;
	printf("TOTAL = R$ %.2lf\n", salario);
		
	return 0;
	
}
