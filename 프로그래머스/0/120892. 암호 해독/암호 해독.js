function solution(cipher, code) {
    const ci = cipher.split('');
    let result = '';
    for(let i = -1; i < ci.length;) {
        i += code;
        if (i < ci.length) result += ci[i];
    }
    return result;
}