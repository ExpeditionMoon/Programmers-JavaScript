function solution(s) {
    const num = s.slice(1);
    const mark = s.charAt(0);
    if (mark === '-') {
        return -1 * parseInt(num);
    } else if (mark === '+') {
        return parseInt(num);
    }
    return parseInt(mark + num);
}