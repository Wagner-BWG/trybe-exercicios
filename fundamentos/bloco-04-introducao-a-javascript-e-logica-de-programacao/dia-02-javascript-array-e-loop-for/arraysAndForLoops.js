let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("Exercise 1");
console.log(" ");
for (let i = 0; i < numbers.length; i = i+1)
{
    console.log(numbers[i]);
}

console.log(" ");
console.log("Exercise 2");
console.log(" ");

let sum = 0;
for (let i = 0; i < numbers.length; i = i+1)
{
    sum = sum + numbers[i];
}
console.log(sum);

console.log(" ");
console.log("Exercise 3");
console.log(" ");

let arithmeticMean = sum/(numbers.length);
console.log(arithmeticMean);

console.log(" ");
console.log("Exercise 4");
console.log(" ");

if(arithmeticMean > 20)
    console.log("valor maior que 20");
else
    console.log("valor menor ou igual a 20");
