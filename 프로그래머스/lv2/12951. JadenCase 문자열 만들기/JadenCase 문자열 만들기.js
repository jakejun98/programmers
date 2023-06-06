function solution(s) {
    var arr = s.split(' ');
    for(var i = 0; i<arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1, arr[i].length).toLowerCase();
    }
    return arr.join(' ');
}