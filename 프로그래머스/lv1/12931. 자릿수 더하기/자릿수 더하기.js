function solution(n){
    let res = 0;
    let list = n.toString().split('');
    list.forEach((num)=> res += parseInt(num));
    return res;
}