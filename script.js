function reverseStringInPairs(input) {
    var reverseString = '';
    for (var s = 0; s < input.length; s += 2) {
        reverseString = input[s] + input[s + 1] + reverseString;
    }
    return reverseString;}

console.log(reverseStringInPairs("abcd"));
console.log(reverseStringInPairs("abcdef"));
console.log(reverseStringInPairs("ab"));
console.log(reverseStringInPairs(""));
