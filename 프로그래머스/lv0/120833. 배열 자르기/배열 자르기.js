function solution(numbers, num1, num2) {
    let res = [];
    for(let i=num1; i<=num2; i++){
        res.push(numbers[i])
    }
    return res;
}