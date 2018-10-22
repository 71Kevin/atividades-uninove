#include <stdio.h>

int main(){
	
	float R, VOLUME;
	
	scanf("%f", &R);
	VOLUME = (4/3.0)*3.14159*(R*R*R); 
	printf("VOLUME = %.3f", VOLUME);

	return 0;
}
