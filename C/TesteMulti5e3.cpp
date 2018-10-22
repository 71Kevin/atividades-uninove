#include <stdio.h>
#include <stdlib.h>

int main(){
	
	
	int i, j;
	
	scanf("%d", &i);
	j = i;
	
	i = i%3;
	j = j%5;
	
	if (i == 0 ){
		printf("%d eh multiplico de 3\n", i);
	}
	
	if (j == 0 ){
		printf("%d eh multiplico de 5\n", j);
	}
	
	system("pause");
	return 0;
	
}
