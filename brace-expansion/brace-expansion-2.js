var braceExpansionII = function(expression) {
    return R(expression);
};

function R(exp) {    
    const stack = [];
    let i = 0;

    while (i < exp.length) {
        if (exp[i] === '}') {
            let prev = [];
            let itm = stack.pop();
            while(itm !== '{') {
                if (Array.isArray(itm)) {
                    prev = cross(itm, prev);
                } else if (itm === ',') {
                    prev = stack.pop().concat(prev);
                }
                itm = stack.pop();
            }

            while (Array.isArray(stack[stack.length - 1])) {
                const top = stack.pop();
                prev = cross(top, prev);
            }
            stack.push(prev);
        } else {
            if (exp[i] === '{' || exp[i] === ',') {
                stack.push(exp[i]);
            } else {
                stack.push([exp[i]]);
                while (stack.length > 1 && stack[stack.length - 2] !== '{' && stack[stack.length - 2] !== ',') {
                    const itm = stack.pop();
                    const itm2 = stack.pop();
                    stack.push(cross(itm2, itm));
                }
            }
        }
        i++;
    }
    return Array.from(new Set(stack[0]));
}

function union(a, b) {
    return a.concat(b);
}

function cross(a, b) {
    if(a.length === 0) return b;
    if (b.length === 0) return a;
    const crossResult = [];

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            crossResult.push(a[i] + b[j]);
        }
    }
    return crossResult;
}