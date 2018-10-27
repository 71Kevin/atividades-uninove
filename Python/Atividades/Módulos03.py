#Calculo do angulo

import math

angulo = float (input("Digite o angulo: "))
cos = math.sin(angulo)
tan = math.tan(angulo)
seno = math.sin(angulo)
print("O seu cosseno é {:.2f} o seu tangente é {:.2f} e o seu seno é {:.2f}"
      .format(cos, tan, seno))