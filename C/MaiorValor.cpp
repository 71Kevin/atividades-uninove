#include <stdio.h>
#include <stdlib.h>

int main(){
	
	float var1, var2;
	
	printf("Digite o valor 1: ");
	scanf("%f", &var1);
	printf("Digite o valor 2: ");
	scanf("%f", &var2);
	if(var1 > var2){
		printf("Var1 eh maior q Var2 \n");
	}else{
		(var2 > var1);        
		printf("Var2 eh maior q Var1 \n");
	}
	
	system("PAUSE");
	return 0;
	
	
}
