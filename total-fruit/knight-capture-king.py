class Solution:
    def add(self, pos, move):
        return [pos[0] + move[0], pos[1] +move[1], pos[2]]
    
    def in_bounds(self, pos, n):
        return 0 <= pos[0] and pos[0] < n and 0 <= pos[1] and pos[1] < n
    
    def sing_coord(self, pos, n):
        return pos[1] * n + pos[0]

    def solve(self, board):
        # Find all knights
        knights = []
        king = []
        for i, row in enumerate(board):
            for j, item in enumerate(row):
                if item == 1:
                    knights.append([j, i, 0]) # Save x and y coordinates
                elif item == 2:
                    king = [j,i]
        
        knight_moves = [
            [2,-1],
            [1,-2],
            [-1,-2],
            [-2,-1],
            [2,1],
            [1,2],
            [-2,1],
            [-1,2]
        ]

        # put all knights in a queue
        q = [k for k in knights]
        seen = set()
        min_move = -1
        n = len(board)
        while len(q) > 0:
            knight = q[0]
            if knight[0] == king[0] and knight[1] == king[1]:
                min_move= knight[2]
                break
            seen.add(self.sing_coord(knight, n))
            for move in knight_moves:
                new_pos = self.add(knight, move) 
                if self.in_bounds(new_pos,n ) and self.sing_coord(new_pos, n) not in seen:
                    q.append([new_pos[0], new_pos[1], new_pos[2] + 1])
            del q[0]
        return min_move 



board = [
    [1, 2],
    [1, 1]
]

s = Solution()
print(s.solve(board))