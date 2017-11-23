from theheap import Heap


def build_graph(n):
    # complexity: O(N^2)
    ranges = [[] for _ in range(n)]
    total = 0
    rand = int(random.random() * n)
    numb = n

    while total < n:
        visited = [-1 for _ in range(n)]
        counter = numb - 1
        pos = rand % n
        if len(ranges[pos]) == 0:
            while counter > 0:
                calc = int((rand + random.random() * n)% n)
                if visited[calc] == -1:
                    ranges[pos].append(calc)
                    counter -= 1
                    visited[calc] = 1 # means it has been visited
            rand += 1
            numb -= 1
        total += 1
    return ranges


def selection(i,onoff,ranges):

    onoff[i] = not onoff[i]  #change itself

    #change connected graph

    for j in ranges[i]:
        loop = (len(ranges[i])+1) - len(ranges[j])
        for _ in range(loop+1):
            onoff[j] = not onoff[j]

    return onoff

import random
def main():

    n = 5
    onoff = [False for _ in range(n)]

    # build the graph
    ranges = build_graph(n)
    print(ranges)

    # sort the graph
    length_edges = []

    for i in range(n):
        length_edges.append([len(ranges[i]),i])


    wohoo = int(random.random()*n % n)
    print("random number: " , wohoo)
    result = selection(wohoo,onoff,ranges)
    print(result)




if __name__ == "__main__":
    main()

