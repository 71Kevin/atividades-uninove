#Calculo da hipotenusa

import math

catetoO = float(input("Digite o cateto oposto: "))
catetoA = float(input("Digite o caceto adjacente: "))
hipotenusa = math.hypot(catetoO, catetoA)
print("O valor da hipotenusa é: {:.2f}".format(hipotenusa))

