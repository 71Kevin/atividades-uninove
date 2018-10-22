#include <stdio.h>
#include <stdlib.h>

int main() {

int funcionario, trabalhadas;
float valor;


scanf("%i", &funcionario);
scanf("%i", &trabalhadas);
scanf("%f", &valor);
valor = trabalhadas*valor;

printf("NUMBER = %i\n", funcionario);
printf("SALARY = U$ %.2f", valor);

return 0;

}
