function print(a) {
    const q = [a[0]];
    let node = 0;
    console.log(a[0]);
    while (q.length > 0) {
        const levelNodes = [];
        q.forEach((_, i) => {
            if (2 * node + 1 < a.length && typeof a[i] === 'number') {
                q.push(a[2 * node + 1]);
                q.push(a[2 * node + 2]);
                levelNodes.push(a[2 * node + 1]);
                levelNodes.push(a[2 * node + 2]);
                node += 1;
            }
        });
        console.log(levelNodes.join('-'));
        q.splice(0, 1);
    }

}

// print([24,23,25,22,24,24]);
print([24,23,25,22,24,24,26,21,21,23,25,23,25,25,27,20,20,20,22,22,24,24,26,22,24,24,26,24,26,26,28,null,21,null,21,null,19,null,21,null,21,null,25,null,25,25,27,null,21,null,25,null,25,25,27,null,25,null,25,null,27,29,29]);