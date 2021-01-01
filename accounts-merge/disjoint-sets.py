from pprint import PrettyPrinter

pp = PrettyPrinter()
class DisjointSet:
    def __init__(self):
        self.universe = ['a','b','c','d','e']
        self.PARENT = {}
        for item in self.universe:
            self.PARENT[item] = item
        self.PARENT[self.universe[3]] = self.universe[1]

        self.GRAPH = []
        for item in self.universe:
            row = []
            for item in self.universe:
                row.append(0)
            self.GRAPH.append(row)
        
        n = len(self.universe)
        for key in self.PARENT.keys():
            value = self.PARENT[key]

            row_index = self.universe.index(key)
            col_index = self.universe.index(value)

            self.GRAPH[row_index][col_index] = 1
            self.GRAPH[col_index][row_index] = 1
        
    
    def find(self, item):
        if self.PARENT == item:
            return item
        else:
            return self.find(self.PARENT[item])
    
    def union(self, item1, item2):
        self.PARENT[item1] = item2
        row_index = self.universe.index(item1)
        col_index = self.universe.index(item2)
        self.GRAPH[row_index][col_index] = 1
        self.GRAPH[col_index][row_index] = 1
    
    def print(self, item):
        seen = set()
        def dfs(item):
            print(item)
            seen.add(item)
            row_index = self.universe.index(item)
            for i, col in enumerate(self.GRAPH[row_index]):
                if col == 1 and self.universe[i] not in seen:
                    dfs(self.universe[i])
        dfs(item)

            

    

s = DisjointSet()
s.union('a', 'b')
s.union('c', 'a')
s.print('d')
s.print('e')