function solution(x, n) {
    let res = [];
    for(let i=0; i<n; i++){
        let n = x + i*x;
        res.push(n);
    }
    return res;
}