function solution(arr) {
    let sum = 0;
    arr.forEach(a => {
       sum += a; 
    });
    return sum / arr.length;
}