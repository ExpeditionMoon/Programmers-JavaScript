function solution(str1, str2) {
    let res = 2;
    if(str1.includes(str2)){
        res = 1;
    }
    return res;
}