//s = "1234";
/*
Complete the reverseString function; it has one parameter, s. You must perform the following actions:

1. Try to reverse string s using the split, reverse, and join methods.
2. If an exception is thrown, catch it and print the contents of the exception's message on a new line.
3. Print s on a new line. If no exception was thrown, then this should be the reversed string; if an exception was thrown, this should be the original string.
*/
function reverseString(s) {
    var result = "";
    try{
        var array = s.split('');
        array.reverse();
        for(var i = 0; i < array.length; i++) {
            result += array[i];
        }

    }catch(e){
        console.log(e.message)
    }
    console.log("Original string: " + s);
    console.log("Reversed string: " + result);
    return result;
}

var s = "1234";

console.log(reverseString(s));