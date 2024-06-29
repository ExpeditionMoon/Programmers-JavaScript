function solution(n) {
    const num = Math.pow(n, 0.5);
    if (Number.isInteger(num)) {
        return Math.pow(num + 1, 2);
    } else {
        return -1;
    }
}