def verifica_fibonacci(numero):
    
    if numero == 0 or numero == 1:
        return True

    a, b = 0, 1

    while b <= numero:
        if b == numero:
            return True
        a, b = b, a + b

    return False

numero = 21

if verifica_fibonacci(numero):
    print(f'O número {numero} está na sequência de Fibonacci.')
else:
    print(f'O número {numero} não está na sequência de Fibonacci.')