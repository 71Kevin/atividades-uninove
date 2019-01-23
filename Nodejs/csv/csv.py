# -*- coding: utf-8 -*-
archive = open('kevin.csv')
for line in archive:
    splitted = line.split(',')
    i = 0
    for word in splitted:
        splitted[i] = word.strip()
        i = i + 1

    name = splitted[0]
    age = splitted[1]
    status = splitted[2]
    print('Oi, meu nome é {}, tenho {} anos e sou {}'.format(name, age, status))