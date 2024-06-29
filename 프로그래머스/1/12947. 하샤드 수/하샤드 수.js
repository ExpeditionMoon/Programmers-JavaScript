function solution(x) {
    const arr = x.toString().split('');
    let sum = 0;
    arr.forEach(a => {
        sum += Number(a);
    });
    return Number.isInteger(x / sum);
}