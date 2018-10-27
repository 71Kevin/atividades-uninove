# 5 + 3 * 2 == 11
# 3 * 5 + 4 ** 2 == 31
# 3 * ( 5 + 4 ) ** 2 == 243


# Ordem

# 1 - (  )
# 2 - **
# 3 - * / // %
# 4 - + -

n1 = int (input ('Digite um número'))
n2 = int (input ('Digite outro número'))
n3 = int (input ('Digite outro número'))
n4 = (n1+n2+n3)/3
print ('A média é {}'.format(n4))