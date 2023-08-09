function solution(n) {
    let list = n.toString().split("");
    list.reverse();
    
    let res = [];
    for(let num of list){
        res.push(parseInt(num));
    }
    return res;
}
