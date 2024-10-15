function repeatString(n, s) {
    // Your code here
    var result = "";
    for (var index = 0; index < n; index++) {
        result += s;
    }
    return result;
}
console.log(repeatString(3, "hello"));
