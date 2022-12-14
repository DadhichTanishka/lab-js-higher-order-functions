const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:

function slice(start, end) {
  const modifiedFood = [];
  for (let i = start; i < end - 1; i++) {
    modifiedFood.push(foods[i]);
  }
  return modifiedFood;
}
// Progression 2:
function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}

// Progression 3:
function isEven(n) {
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
function isPrime(n) {
  var c = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      c++;
    }
    
  }
  if (c ==1 ) {
    return true;
  } else {
    return false;
  }
}

function checkNumber(numberArray, operation) {
  var check = numberArray.filter(operation);
  // function something(fi){
  //   // if(operation==isEven){
  //   //   isEven(fi)
  //   // }
  //   // if(operation==isPrime){
  //   //     isPrime(fi)

  //   operation(fi);

  //   // }
  // }
  return check;
}

// Progression 4:
function reject(n){
  var notPrime=!isPrime(n);
  return notPrime;
  }
function nonPrime(numberArray){
  var check2 = numberArray.filter(reject);
  return check2;
}

// Progression 5:
const isEvenUsingLambda=(n)=>n%2==0
// {
//   if(n%2!=0){
//    return false;
//   }
//   else{
//     return true;
//   }
// }
// function isEvenUsingLambda(numberAr){
//   var check2 = numberArray.filter(number); 
// }
// Progression 6:
function findSquareOfNumbers(myArray){
  var square=myArray.map(ans)
  function ans(n){
    return n*n;
  }
  return square
}
function multiply(myArray){
  var product=1
  for(let i=0;i<myArray.length;i++){
     product*=myArray[i]
  }
 return product;
  }
function sumOfSquares(myArray){
  var sum=0
  for(let i=0;i<myArray.length;i++){
    square2=myArray[i]*myArray[i]
     sum+=square2;
  }
 return sum;
}
// Progression 7:
