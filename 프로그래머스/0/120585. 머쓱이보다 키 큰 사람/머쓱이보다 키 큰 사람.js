function solution(array, height) {
    let tall = array.filter(a => a > height);
    return tall.length;
}