"use strict";

console.log("Solution of Q1")
function max(a, b) {
    if(a > b){
        return a;
    }
    else 
        return b;
}

console.log("The largest between 10 and 25 is: " + max(10, 25));

function maxOfThree(a, b, c){
    if(a>b && a>c) {
        return a;
    }else if(b>a && b>c) {
        return b;
    }
    return c;
}

console.log("Max of 3 between 5, 55, 20 is: " +maxOfThree(5,55,20));

function isVowel(ch){
    return (ch === "a" || ch === "e" || ch==="i" || ch==="o" || ch==="u");
}

console.log("a is a vowel: " +isVowel('a'));
console.log("c is a vowel :" +isVowel('c'));

function sum(numbers) {
    let sum = 0;
    for(let i = 0; i<numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}

console.log("Sum is: " +sum([1,2,3,4]));

function multiply(array) {
    let multiple = 1; 
    for(let i=0; i<array.length; i++){
        multiple *= array[i];
    }

    return multiple;
}

console.log("Multiple is: " +multiply([1,2,3,4]));

function reverse(value){
    let result = "";
    for(let i=value.length-1; i>=0; i--){
        result += value[i];
    }
    return result;
}

console.log("Reverse string :" +reverse("jag testar"));

function findLongestWord(words) {       
    let len = 0;
    for(let i=0; i<words.length; i++){
        if(len < words[i].length) {
            len = words[i].length;
        }
    }

    return len;
}

console.log("Longest Word:" +findLongestWord(["anjana","luzan","sam", "alan"]));

function filterLongWords(words, len) {
    return words.filter(word => word.length > len);
}

console.log("Long Words " +filterLongWords(["hydrogen", "helium", "lithium", "Berrylium"], 7));

function computeSumOfSquares(numbers) {
    return numbers.reduce((acm, value) => acm + Math.pow(value, 2));
}

console.log("Sum of Squares: " +computeSumOfSquares([1,2,3]));

function printOddNumbersOnly(nums){
    let result = [];
    result.push(nums.filter(n => n%2 != 0));
    return result;
}

console.log("Odd number arays: " +printOddNumbersOnly([1,2,3,4,44,12,17,9]));

function computeSumOfSquaresOfEvensOnly(nums){
    let sum = 0;
    nums.forEach(n => {
        if(n%2 === 0) {
            sum += Math.pow(n, 2);
        }
    })
    return sum;
}

console.log("Sum: " +computeSumOfSquaresOfEvensOnly([1,2,3,4,5]));

function sum2(nums) {
    return nums.reduce((a,b) => a+b);   
}

console.log("Sum using reduce:" +sum2([1,2,3,4]));

function multiply2(nums) {
    return nums.reduce((a,b) => a*b);
}

console.log("Multiplication using reduce:" +multiply2([1,2,3,4]));

function findSecondBiggest(nums){
    var max = Math.max.apply(null, nums);
    nums.splice(nums.indexOf(max), 1);
    let secondMax = Math.max.apply(null, nums);
    return secondMax;

}

console.log("Second Biggest of (19,9,11,0,12) is: " +findSecondBiggest([19,9,11,0,12]));

function printFibo(n, a, b) {
    let result = [];
    result.push(a);
    result.push(b);
    for(let i = 0; i<n; i++) {
        result.push(result.reduce((c,d) => c+d));
    }
    return result;
}

console.log("Fibonacci sequence: " +printFibo(10, 0,1));