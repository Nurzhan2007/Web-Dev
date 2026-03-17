def string_bits(str):
    value = ""
    for index in range(len(str)):
        if index % 2 == 0:
            value = value + str[index]
    return value
