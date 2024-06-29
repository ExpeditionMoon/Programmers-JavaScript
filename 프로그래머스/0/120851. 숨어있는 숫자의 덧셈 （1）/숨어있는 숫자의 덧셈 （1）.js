function solution(my_string) {
    const str = my_string.split('');
    let result = 0;
    str.forEach(s => {
        const asc = s.charCodeAt();
        if (asc >= 49 && asc <= 57) result += parseInt(s);
    })
    return result;
}