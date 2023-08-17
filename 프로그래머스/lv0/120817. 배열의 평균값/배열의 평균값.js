function solution(numbers) {
    let res = 0;
    numbers.forEach((num) => res += num)
    return res/numbers.length;
}