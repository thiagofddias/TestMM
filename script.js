function reverseStringInPairs(input) {
    var result = '';
    for (var s = 0; s < input.length; s += 2) {
        result = input[s] + input[s + 1] + result;
    }
    return result;
}

console.log(reverseStringInPairs("abcd"));
console.log(reverseStringInPairs("abcdef"));
console.log(reverseStringInPairs("ab"));
console.log(reverseStringInPairs(""));
