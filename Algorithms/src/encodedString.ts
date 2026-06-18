function encode(str: string): string {
    if (str.length === 0) return "";

    let encodedString = "";
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            encodedString += str[i - 1] + count;
            count = 1;
        }
    }

    // Append the last character group
    encodedString += str[str.length - 1] + count;

    console.log(encodedString);
    return encodedString;
}


encode("wwwwaaadexxxxxx");
encode("aaaabbbccc");
encode("abbbcdddd");