const mappings =  {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
};

function romanToInt(s) {
    let i = 0;
    let num = 0;
    // VII
    while (i < s.length) {
        if (mappings[s.substring(i, i+2)]) {
            num += mappings[s.substring(i, i+2)];
            i++;
        } else {
            num += mappings[s[i]];
        }
        i++;
    }
    return num;
}

console.log(romanToInt('XII'));
console.log(romanToInt('III'));
console.log(romanToInt('IV'));
console.log(romanToInt('IX'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));