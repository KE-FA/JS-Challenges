// Challenge 1: Sum of two numbers
function addition(a,b){
    return a+b;
}
let sum = addition(3,5)
console.log(`The sum is ${sum}`)

//Challenge 2: Convert Minutes into Seconds
function convert(mins){
    let secs= mins*60;
    console.log(`${secs}s`)
}
convert(10)

//Challenge 3: Perimeter of a Rectangle
function findPerimeter(length,width){
    let perimeter = 2*(length + width);
    console.log(`The Perimeter is ${perimeter} cm`)
}
findPerimeter(10,20);

//Challenge 4: Check Negative
function isNegative(num){
    if (num<0){
        return true
    }
    else{
        return false
    }
}
console.log(isNegative(-20))

//Challenge 5: Can I Drive
function canDrive(name,age){
    if (age>=18){
        console.log(`${name} is old enough to drive`)
    }
    else{
        console.log(`${name} is not old enough to drive yet`)
    }
}
canDrive("Jane", 15)

//Challenge 6: Largest Number
function findLargest(a,b,c){
    if (a > b && a > c){
        return a
    }
    else if (b > a && b > c){
        return b
    }
    else {
        return c
    }
}
let largest=findLargest(3,8,5)
console.log(`The largest number is ${largest}`)

//Challenge 7: BMI Calculator
function calculateBMI(weight, height){
    let BMI = parseFloat(weight / (height * height));
    let NewBMI = BMI.toFixed(2);
    if (BMI<18.5){
        console.log(`Your BMI is ${NewBMI} - Underweight`)
    }
    else if(BMI > 18.5 && BMI < 24.9){
        console.log(`Your BMI is ${NewBMI} - Normal weight`)
    }
    else if(BMI > 25 && BMI < 29.9){
         console.log(`Your BMI is ${NewBMI} - Overweight`)

    }
     else if(BMI > 30){
         console.log(`Your BMI is ${NewBMI} - Obese`)

    }
    else{
        console.log("Wrong Input")
    }
}
calculateBMI(30, 5.5)

//Challenge 8: Greeting Based On Time
function greetUser(name, hour){
    if (hour >=5 &&  hour <= 11){
        console.log(`Good morning, ${name} !`)
    }
    else if (hour >=12 &&  hour <= 17){
        console.log(`Good afternoon, ${name} !`)
    }
    else if (hour >=18 &&  hour <= 21){
        console.log(`Good evening, ${name} !`)
    }
    else {
        console.log(`Good night, ${name} !`)
    }

}

greetUser("Alice", 4)

//Challenge 9: FizzBuzz
function fizzBuzzCheck(number){
    if(number%3===0){
        return "Fizz"
    }
    else if(number%5===0){
        return "Buzz"
    }
    else if(number%3===0 && number%5===0 ){
        return "FizzBuzz"
    }
    else{
        return number
    }
}
console.log(fizzBuzzCheck(9))

//Challenge 10:  Perimeter 2
function perimeter(letter, num){
    if (letter=="s"){
        perim=num * 4
        console.log(perim)
    }
    else if (letter=="c"){
        perim =  3.142* num * 2
        console.log(perim)
    }
    else{
        console.log("Wrong Input")
    }

}
perimeter("c" , 4)


//Challenge 11: Sum of Even Numbers
function sumEvenNumbers(n){
    let sum = 0
    for (let i=1; i <= n; i++){
        if ((i % 2) == 0){
            sum += i
        }else {
            
        }
    }
    return sum
}

let summ = sumEvenNumbers(12)
console.log(`The sum of even numbers is ${summ}`)

// Challenge 12: Multiply by Itself

function powerUp(num, times) {
    let result = 1

    for (let i = 1; i <= times; i++){
        result *= num
    }
    return result
}

console.log(powerUp(3, 3))

//challenge 13: Factorial Calculator
function factorial(n){
    let result = 1
    for (let i = 1; i <= n; i++){
        result *= i
    }
    return result
}

let y = (factorial(5))
console.log(`The factorial is ${y}`)

//Challenge 14: Multiple Sum

function sumMultiples(n, divisor){
    let result = 0
    for (let i = 0; i <= n; i++)
        if ((i % divisor) == 0){
            result += i
        }
    return result
}
console.log(sumMultiples(10, 5))


//Challenge 15: Sum of Digits

function sumDigits(num){
    let sum = 0
    while (num > 0){
        let lastDigit = num % 10
        num = Math.floor(num/10)
        sum += lastDigit
    }
    return sum
}
let results = sumDigits(123)
console.log(`The sum digits is ${results}`)
