function solution(angle) {
    let res = 3;
    if(angle <90){
        res = 1;
    } else if(angle === 90){
        res = 2;
    } else if(angle === 180){
        res = 4;
    }
    return res;
}