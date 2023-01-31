// Task 1

let userChar = prompt("Enter the character");
let ascii_Value = userChar.charCodeAt(userChar)
console.log(ascii_Value)
if(ascii_Value  >= 65 && ascii_Value <= 80){
    alert(`you press ${userChar} and it is upperCase Letter and its ASCII code is ${userChar.charCodeAt(userChar)}`)
}else if(ascii_Value  >= 97 && ascii_Value  <= 122){
    alert(`you press ${userChar} and it is lowerCase Letter and its ASCII code is ${userChar.charCodeAt(userChar)}`)
}else if(ascii_Value  >= 48 && ascii_Value  <= 57){
    alert(`you press ${userChar} and it is number and its ASCII code is ${userChar.charCodeAt(userChar)}`)
}else{
    alert('you press any other special character')
}


// Task 2

let valOne = prompt("Enter first number")
let valTwo = prompt("Enter second number")

if(valOne > valTwo){
    alert(`${valOne} is greater than ${valTwo}`)
}else if(valOne < valTwo){
    alert(`${valOne} is smaller than ${valTwo}`)
}else{
    alert(`${valOne} is equal to ${valTwo}`)
}

// Task 3

let numberEval = prompt("Enter first number")

if(numberEval > 0){
    alert(`${valOne} is greater than 0 and positive number`)
}else if(numberEval < 0){
    alert(`${valOne} is smaller than 0 and negative number`)
}else{
    alert(`${valOne} is zero not positive nor negative`)
}

// Task 4

let vowelsChar = ['a','e','i','o','u'];
let userString = prompt('Enter the user Input String')

txt = "";
for(let i in vowelsChar){
    if(userString === vowelsChar[i]){
        alert(`you enter ${userString} which is vowel container`)
        break;
    }else{
        alert(`you enter ${userString} which is not vowel container`)
        break;
    }
    console.log(txt)
}


// Task 5

let passwordReal = "Walideveloper123";
let userPassword = prompt("Enter the password")

if(userPassword === passwordReal){
    alert('Correct')
}else{
    alert('Not Matched')
}

// Task 6

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
}else{
greeting = "Good evening";
}

// Task 7

let userTime = +prompt('Enter the Time that user give in prompt')


if(userTime >= 0000 && userTime <1200){
    alert('Good Morning')
}else if(userTime >= 1200 && userTime <1700){
    alert('Good Afternoon')
}else if(userTime >= 1700 && userTime <2100){
    alert('Good Evening')
}else{
    alert('Good Night')
}