function solution(num_list, n) {
    let res = 0;
    num_list.forEach((num) => {
        if(num === n){
            res = 1;
        }
    });
    return res;
}