#include <stdio.h>

int main() {
		
   float C1, N1, V1, C2, N2, V2; 
   scanf("%f", &C1);
   scanf("%f", &N1);
   scanf("%f", &V1);
   scanf("%f", &C2);
   scanf("%f", &N2);
   scanf("%f", &V2);
   printf("VALOR A PAGAR: R$ %.2f\n", (N1*V1) + (N2*V2));

   return (0);
}
