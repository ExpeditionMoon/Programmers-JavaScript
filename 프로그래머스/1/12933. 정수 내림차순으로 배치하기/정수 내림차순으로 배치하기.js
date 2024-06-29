function solution(n) {
    const num = n.toString().split('').sort((a, b) => b - a);
    let result = '';
    num.forEach(n => {
       result += n; 
    });
    return Number(result);
}