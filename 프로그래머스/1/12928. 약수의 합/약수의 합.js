function solution(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        if (Number.isInteger(n / i)) sum += i;
    }
    return sum;
}