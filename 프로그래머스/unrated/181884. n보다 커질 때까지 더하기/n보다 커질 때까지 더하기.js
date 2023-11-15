function solution(numbers, n) {
    let res = 0;
    for(let i=0; i<numbers.length; i++){
        res += numbers[i];
        if(res > n){
            break;
        }
    }
    return res;
}