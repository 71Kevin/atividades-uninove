r = int(input("Digite o número de linhas da Matriz 1: \n"))
c = int(input("Digite o número de colunas da Matriz 1: \n"))

element = ''
print('Adicione os valores aos locais correspondentes: ')
for vr in range(0, r):
    for vc in range(0, c):
        element += 'M' + str(vr + 1) + str(vc + 1) + ' '
    print('|', element, '\b|')

Matriz1 = [[] for vr in range(0, r)]
for vr in range(0, r):
    Matriz1[vr] = [0 for vc in range(0, c)]

for vr in range(0, r):
    for vc in range(0, c):
        Matriz1[vr][vc] = int(input('M' + str(vr + 1) + str(vc + 1) + ': '))

v = int(input("Digite o número de colunas da Matriz 2: \n "))
print('Adicione os valores aos locais correspondentes: \n')

for vr in range(0, c):
    for vc in range(0, v):
        element += 'M' + str(vr + 1) + str(vc + 1) + ' '
    print('|', element, '\b|')
    element = ''

Matriz2 = [[] for vr in range(0, c)]
for vr in range(0, c):
    Matriz2[vr] = [0 for vc in range(0, v)]

for vr in range(0, c):
    for vc in range(0, v):
        Matriz2[vr][vc] = int(input('M' + str(vr + 1) + str(vc + 1) + ': '))

Product = [[] for vr in range(0, r)]
for vr in range(0, r):
    Product[vr] = [0 for columns in range(v)]

Products = 0
for vv in range(0, v):
    for vr in range(0, r):
        for vc in range(0, c):
            Products += Matriz1[vr][vc] * Matriz2[vc][vv]
        Product[vr][vv] = Products
        Products = 0

print('Matriz 1:', Matriz1)
print('Matriz 2:', Matriz2)
print('Resultado da multiplicação das matrizes:', Product)