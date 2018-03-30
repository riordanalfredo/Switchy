class Heap:
    def __init__(self):
        self.min_heap = [0]
        self.currentSize = 0
        self.vertices = [-2 for _ in range(6105)]

    def rise(self, i):
        while i // 2 > 0:
            if self.min_heap[i][1] < self.min_heap[i // 2][1]:
                self.vertices[self.min_heap[i // 2][0]], self.vertices[self.min_heap[i][0]] = self.vertices[self.min_heap[i][0]], self.vertices[self.min_heap[i // 2][0]]
                self.min_heap[i // 2], self.min_heap[i] = self.min_heap[i], self.min_heap[i // 2]

            i = i // 2

    def insert(self,k):
        self.min_heap.append(k)
        self.currentSize = self.currentSize + 1
        self.vertices[k[0]] = self.currentSize
        self.rise(self.currentSize)

    def update(self,u,change):
        index_min = self.vertices[u]
        self.min_heap[index_min][1] = change
        self.rise(index_min)

    def sink(self, i):
        while (i * 2) <= self.currentSize:
            mc = self.minChild(i)
            if self.min_heap[i][1] > self.min_heap[mc][1]:
                self.min_heap[i],self.min_heap[mc] = self.min_heap[mc], self.min_heap[i]
                self.vertices[self.min_heap[mc][0]], self.vertices[self.min_heap[i][0]] = self.vertices[self.min_heap[i][0]], self.vertices[self.min_heap[mc][0]]
            i = mc

    def minChild(self,i):
        if i * 2 + 1 > self.currentSize:
            return i * 2
        else:
            if self.min_heap[i*2][1] < self.min_heap[i*2+1][1]:
                return i * 2
            else:
                return i * 2 + 1

    def is_empty(self):
        return self.currentSize == 0

    def pop(self):
        if not self.is_empty():
            result = self.min_heap[1]
            index = self.min_heap[self.currentSize]

            self.min_heap[1] = index
            self.vertices[result[0]],self.vertices[index[0]] = self.vertices[index[0]],self.vertices[result[0]]
            self.currentSize = self.currentSize - 1
            self.min_heap.pop()
            self.sink(1)

            return result
