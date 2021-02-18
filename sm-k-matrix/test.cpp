#include <iostream>
#include <queue>
#include <vector>
 
using namespace std;

class Solution {
public:
    int kthSmallest(vector<vector<int> >& mat, int k) {
        int m = mat.size();
        int n = min((int)mat[0].size(), k); // Improvement 1
        priority_queue<int, vector<int>> pq; // Improvement 2
        pq.push(0);
        for(int i = 0 ; i < m ; i++) {
            priority_queue<int, vector<int>> nextPq;
            while(!pq.empty()) {
                int val = pq.top();
                pq.pop();
                for(int j = 0; j < n ; j++) {
                    nextPq.push(val + mat[i][j]);
                    if (nextPq.size() > k) {
                        nextPq.pop();
                    }
                }
            }
            pq.swap(nextPq);
        }
        return pq.top();
    }
};

int main() {
    Solution s;
    vector<vector<int>> mat = {
       {1,10,10},{1,4,5},{2,3,6}
    };
    s.kthSmallest(mat, 5);
}