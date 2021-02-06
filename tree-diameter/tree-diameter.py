from collections import defaultdict
adjList = defaultdict(list)
edges = [[0,1],[1,2],[2,3],[1,4],[4,5]]
for edge in edges:
    adjList[edge[0]].append(edge[1])
    adjList[edge[1]].append(edge[0])

from pprint import PrettyPrinter
pp = PrettyPrinter()
pp.pprint(adjList)