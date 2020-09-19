var findMinStep = function(board, hand) {
    const handpermutations = [];
    permute(hand, 0, handpermutations);

    let min = -1;
    for (let i = 0; i < handpermutations.length; i++) {
        const v = bt(board, handpermutations[i], 0);
        if (v > 0) {
            if (min === -1) {
                min = v;
            } else {
                min = Math.min(min, v);
            }
        }
    }
    return min;
};

function bt(b, h, c) {
    if (b.length === 0) {
        return c;
    }
    if (h.length === 0) {
        return -1;
    }
    const l = h[0];
    let min = -1;
    for (let i = 0; i <= b.length; i++) {
        const str = b.substring(0, i) + l + b.substring(i);
        const re = reduce(str);
        const v = bt(re, h.substring(1), c+1);
        if (v > 0) {
            if (min === -1) {
                min = v;
            } else {
                min = Math.min(min, v);
            }
        }
    }
    return min;
}
 
function reduce(s) {
    if (s.length <= 1) {
        return s;
    } else {        
        let re = s;
        let i = 0;
        while(i < re.length) {
            let j = i + 1;
            let r = 1;
            while (j < s.length && re[j] === re[j-1]) {
                j++;
                r++;
            }
            
            if (r >= 3) {
                re = re.substring(0, i) + re.substring(j);
                i = 0;
            } else {
                i++;
            }
        }
        
        return re;

    }
}

function permute(h, i, save) {
    if (i === h.length) {
        save.push(h);
        return;
    }
    
    let sws = h;
    for (let x = i; x < h.length; x++)  {
        let p = '';
        let m = '';
        let s = '';
        if (x > i) {
            p = sws.substring(0, i);
        
            m = sws.substring(i + 1, x);
            s = sws.substring(x+1);
            sws = p + h[x] + m + h[i] + s;
        }

        permute(sws, i+1, save);

        if (x > i) {
            sws = p + h[i] + m + h[x] + s;
        }
    }
}

console.log(findMinStep("RBYYBBRRB", "YRBGB"))