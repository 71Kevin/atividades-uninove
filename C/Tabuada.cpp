#include <stdio.h>
#include <stdlib.h>

int main(){	
	
	int tabuada, numero = 0;
	
	printf("Digite um numero: ");
	scanf("%d", &numero);
	for (tabuada = 1; tabuada <= 10; tabuada++){
		printf("%d\n", numero*tabuada);
	}

	system("PAUSE");
	return 0;

}
