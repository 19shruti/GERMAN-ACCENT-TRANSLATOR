list1=list(map(int,input().split(" "))) #Mapping the elements of the list as int


moves=0

while (list1 != sorted(list1)):
    
    for i in range(len(list1)-1):
        if any(x < list1[i]
            for x in list1[i:]):
            
                n = list1[i]
                list1 = list1[:i] + list1[i+1:]
                list1.append(n)
                moves =moves +1
                break

print('\n=>No of moves:',moves)