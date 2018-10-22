def fibonacci(n):
    if(n <= 1):
        return n
    else:
        return(fibonacci(n-1) + fibonacci(n-2))

n = int(input("Digite um número inteiro que seja maior que 1: \n"))
print("Cálculo da sequência de Fibonacci versão recursiva: ")

for i in range(n):
    print ('{} → '.format(fibonacci(i)), end='')

print('\n Cálculo da sequência de Fibonacci versão não-recursiva: ')

n1 = n
t1 = 0
t2 = 1

print('{} → {}'.format(t1, t2), end='')
cont = 3

while cont <= n1:
    t3 = t1 + t2
    print(' → {}'.format(t3), end='')
    t1 = t2
    t2 = t3
    cont += 1