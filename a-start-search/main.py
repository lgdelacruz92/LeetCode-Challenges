from queue import PriorityQueue
import math

edges = [[1,2,3],[2,4],[1,4,8],[12],[6],[7,11],[8],[5,8],[6,7],[10,11,12],[9,11,12],[9,10],[9,10]]
distances = [[7,2,3],[3,4],[3,4,1],[2],[5],[2,5],[3],[2,2],[3,2],[6,4,4],[6,4,4],[4,4],[4,4]]
d_end = [[9,7,8],[7,8],[9,8,6],[6],[6],[3,3],[6],[0,6],[6,3],[4,3,6],[4,3,6],[4,4],[4,4]]

def a_star(start, end):
    q = []
    cost = [math.inf] * len(edges)
    parent = ['z'] * len(edges)
    in_queue = set()
    q.append([start, math.inf])

    while q: 
        node, w = q[-1]

        if node == end:
            break

        for i in range(len(edges[node])):
            next_node = edges[node][i]
            cost = distances[node][i]
            cost_de = d_end[node][i]
            total_cost = cost + cost_de
            # if in que
            if next_node in in_queue:
                for i in range(len(q)):
                    if q[i][0] == next_node:
                        q[i][1] = min(total_cost, q[i][1])
            else:
                next_queue = [next_node, total_cost]
                in_queue.add(next_node)
                q.append(next_queue)
                parent[next_node] = node
        q.pop()
        q.sort(key=lambda x: x[1])
        q.reverse()
    print(parent)


a_star(0,5)