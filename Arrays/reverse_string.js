var reverse_string1 = function(s) {
    let n = s.length;
    let temp = new Array(n);
    for (let i = 0; i < n; i++) {
        temp[i] = s[n-1-i];
    }
    s = temp;
}


var reverse_string2 = function(s) {
    let n = s.length;
    let i = 0; j = s.length-1;
    while (i < j) {
        [s[i],s[j]] = [s[j], s[i]]; 
        i++;
        j--;
    }
    return s;
}


let s = ['h', 'a', 'r', 'i'];
reverse_string2(s);
console.log(s);