function solution(s){
    let answer = true; 
    const cnt = [0, 0];
    s.toUpperCase().split('').forEach(alp => {
        if (alp === 'P') cnt[0]++;
        if (alp === 'Y') cnt[1]++;
    })
    if (cnt[0] !== cnt[1]) answer = false;
    return answer;
}