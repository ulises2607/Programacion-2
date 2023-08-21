@staticmethod
def binDec(binario,binDecimal=''):
    result = []
    entera = 0
    c = 1
    for i in binario:
        result.append(int(i))
    while(c < len(binario)+1):
        result[c-1] = result[c-1] * (2**(len(binario)-c))
        entera += result[c-1]
        c += 1
    if(binDecimal != ''):
        resultDec = []
        decimal = 0

        for i in binDecimal:
            resultDec.append(int(i))
        c = 1
        while(c < len(binDecimal)+1):
            resultDec[c-1] = resultDec[c-1] * (2**(-c))
            decimal += resultDec[c-1]
            c += 1
        return entera+decimal
    else:
        return entera
    
