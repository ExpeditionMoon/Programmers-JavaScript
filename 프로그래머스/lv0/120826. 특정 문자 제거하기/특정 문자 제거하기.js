function solution(my_string, letter) {
    const res = my_string.split(letter).join("");
    return res;
}