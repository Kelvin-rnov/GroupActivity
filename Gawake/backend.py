#!/usr/bin/python
# -*- coding: utf-8
import os

"""
Estrutura da array:
    ======================================================================
    ||   Nome da regra   |   Dias(7)    |   Horário    |    Comando     ||
    ======================================================================
"""

rules = []

rules.append(['Regra 1', t, 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', '19:30', 'firefox'])
rules.append(['Regra 2', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', '19:30', 'firefox'])

l = len(rules)
print(l)

for r in rules:
  print(r)

rules.pop(1)
print('')

l = len(rules)
print(l)

for r in rules:
  print(r)

os.system('echo "teste"')