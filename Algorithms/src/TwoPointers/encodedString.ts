// Given a string your task is to complete the function encode that returns the run length encoded string for the given string.
////     eg. if the input string is "wwwwaaadexxxxxx" then the function should return "w4a3d1e1x6".
////     You are required to complete the function encode that takes only one argument the string which is to be encoded and returns the encoded string.
//
//     Example 1:
//// Input:
//     str = aaaabbbccc
// output= a4b3c3
//
// Explanation: a repeats 4 times
// consecutively b 3 times, c also 3 times
//
// Example 2:
//// Input
// str = abbbcdddd
// output = a1b3c1d4
//
// Complete the function encode() which takes a character array as a input parameter and returns the encoded string.

function encodeString(s: string): string {
    let result = "";
    let count = 1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            count++;
        } else {
            result += s[i] + count;
            count = 1;
        }
    }

    return result;
}

console.log(encodeString("aaaabbbccc")); // a4b3c3
console.log(encodeString("abbbcdddd"));  // a1b3c1d4
console.log(encodeString("wwwwaaadexxxxxx")); // w4a3d1e1x6



function encodeStringRegex(s: string): string {
    return s.replace(/(.)\1*/g, (group) => group[0] + group.length);
}

