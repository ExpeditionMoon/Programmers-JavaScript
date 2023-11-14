function solution(n_str) {
    let res = "";
    const arr = n_str.split("");
    
    let l = n_str.length;
    let n = 0; 
    for(let i=0; i<l; i++){
        if(arr[i] !== "0"){
            n = i;
            break;
        }
    }
    
    res = n_str.substring(n, l);
    return res;
}