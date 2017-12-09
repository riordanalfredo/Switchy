

def build_graph(n):
    # complexity: O(N^2)
    ranges = [[] for _ in range(n)]
    total = 0
    numb = n
    rank = [-1 for _ in range(n)]
    while total < n:
        pos = int(random.random() * n) % n
        if rank[pos] == -1:
            rank[pos] = numb - 1
            numb -= 1
            total += 1
    realRank = [-1 for _ in range(n)]
    for i in range(n):
        realRank[rank[i]] = i
    print("rr: ", realRank)

    bigger = ""

    for j in range(n):
        ranges[realRank[j]] = bigger
        bigger += str(realRank[j]) + " "
    final = []
    for k in range(n):
        final.append(ranges[k].split())

    print(final)


    return rank

def build_graph1(n):
    # complexity: O(N^2)
    ranges = [[] for _ in range(n)]
    total = 0
    rand = int(random.random() * n)
    numb = n
    rank = [-1 for _ in range(n)]
    while total < n:
        visited = [-1 for _ in range(n)]
        counter = numb - 1
        pos = rand % n

        if len(ranges[pos]) == 0:
            rank[pos] = counter
            while counter > 0:
                calc = int((rand + random.random() * n) % n)
                if visited[calc] == -1 and calc is not pos:  # something cheesy here
                    ranges[pos].append(calc)
                    counter -= 1
                    visited[calc] = 1  # means it has been visited
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

    n = 4
    onoff = [False for _ in range(n)]

    # build the graph
    ranges = build_graph(n)
    print(ranges)

    """
   
    # sort the graph
    length_edges = []

    for i in range(n):
        length_edges.append([len(ranges[i]),i])


    wohoo = int(random.random()*n % n)
    print("random number: " , wohoo)
    result = selection(wohoo,onoff,ranges)
    print(result)

 """


if __name__ == "__main__":
    main()

