function solution(price) {
    const rule = [0, 100000, 300000, 500000];
    const dc = [0, 5, 10, 20];
    let idx = -1;
    rule.forEach(r => {
        if (r > price) return false;
        idx++;
    });
    return Math.floor(price * ((100 - dc[idx]) / 100));
}