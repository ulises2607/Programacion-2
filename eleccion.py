import random

nombres = ['Rodrigo', 'Dario', 'Karen', 'Ulises']

def elegir(arr):
    numero = random.randint(0,3)
    return arr[numero]



print(elegir(nombres))

