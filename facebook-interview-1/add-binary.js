var addBinary = function(a, b) {
    const top = a.length > b.length ? a : b;
    const bottom = a === top ? b : a;

    let c = 0;
    let sum = '';
    for (let i = 0; i < top.length; i++) {
        const t = parseInt(top[top.length - 1 - i]);
        if (bottom[bottom.length - 1 - i]) {
            const sumNum = (t + parseInt(bottom[bottom.length - 1 - i]) + c) % 2;
            c = parseInt((t + parseInt(bottom[bottom.length - 1 - i]) + c) / 2);
            sum = sumNum + sum;
        } else {
            const sumNum = (t + c) % 2;
            c = parseInt((t + c) / 2);
            sum = sumNum + sum;
        }
    }
    if (c === 1) {
        sum = '1' + sum;
    }
    return sum;
};

console.log(addBinary('11', '1'));
console.log(addBinary('1010', '1011'));