Algoritmo "SuperMercadoBomPrecoParte1"
Var
   posto, turno : inteiro
   parcelaRedutivel, imposto, salarioB, salarioL: real
Inicio
      escreval ("Digite seu salario")
      leia (salarioB)
      escreval ("Digite sua função | Operario (1) | Gerente (2) ")
      Leia (posto)
      escreval ("Digite seu turno | Manhã/ Tarde (1) | Noite (2) ")
      leia (turno)

      se (posto = 1) entao
         escolha turno
           caso 1
                salarioB <- salarioB + (salarioB * 0.005)
           caso 2
                 salarioB <- salarioB + (salarioB * 0.007)
           outrocaso
                    escreval("Digite um posto/funcao valido")
           fimescolha
      fimse

      se (posto = 2) entao
         escolha turno
            caso 1
                  salarioB <- salarioB + (salarioB * 0.01)
            caso 2
                  salarioB <- salarioB + (salarioB * 0.02)
            outrocaso
                  escreval("Digite um posto/funcao valido")
            fimescolha
      fimse

            se (salarioB <= 1499.15) entao
                   imposto <- 0
            fimse
            se (salarioB >= 1499.16) e (salarioB <= 2246.75) entao
                   imposto <- 0.075
                   parcelaRedutivel <- 112.43
            fimse
            se (salarioB >= 2246.76) e (salarioB <= 2995.7) entao
                   imposto <- 0.15
                   parcelaRedutivel <- 280.94
            fimse
            se (salarioB >= 2995.71) e (salarioB <= 3743.19) entao
                   imposto <- 0.225
                   parcelaRedutivel <- 505.62
            fimse
             se (salarioB > 3743.2) entao
                   imposto <- 0.275
                   parcelaRedutivel <- 692.78
             fimse

      imposto <- (salarioB * imposto)- parcelaRedutivel
      salarioL <- salarioB - imposto

      escreval ("Salario Bruto: ", salarioB, " | Imposto(%): ", imposto)
      escreval ("Salario Liquido: ", salarioL)

Fimalgoritmo