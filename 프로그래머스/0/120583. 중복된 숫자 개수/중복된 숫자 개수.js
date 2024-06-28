function solution(array, n) {
    let answer = 0;
    array.forEach(a => {
        if (a === n) answer++;
    });
    return answer;
}