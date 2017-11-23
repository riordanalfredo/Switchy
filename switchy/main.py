from theheap import Heap

n = 4
onoff = [False for _ in range(n)]
ranges = [[] for _ in range(n)]

def build_graph():
    # complexity: O(N^2)
    total = 0
    rand = int(random.random() * n)
    numb = n
    while total < n:
        counter = numb - 1
        pos = rand % n
        if len(ranges[pos]) == 0:
            tot = rand
            while counter > 0:
                ranges[pos].append((tot + 1) % n)
                tot += 1
                counter -= 1
            rand += 1
            numb -= 1
        total += 1
    print(ranges)
    return 0

import math

def edges_modifier():
    dist = [ 0 for _ in range(n)]
    pred = [ math.inf for _ in range(n)]

    for i in range(n-1):
        for each edges:





    print(pred)
    return 0


def selection(i):

    onoff[i] = not onoff[i]  #change itself

    #change connected graph
    for j in ranges[i]:
        onoff[j] = not onoff[j]
        for k in ranges[j]:
            onoff[k] = not onoff[k]
            #for

    # it will create O(N^N) worst case time complexity,
    # solution: use bellman ford's algorithm

    print(onoff)

    count_a = 0
    count_b = 0
    for z in range(n):
        if onoff[z] == True:
            count_a += 1
        else:
            count_b += 1
    print(count_a, "  =====  ", count_b)

    return 0

import random
def main():
    the_heap = Heap()

    # build the graph
    build_graph()
    # put them in the heap

    wohoo = int(random.random()*n % n)
    print("random number: " , wohoo)
    selection(wohoo)






if __name__ == "__main__":
    main()

