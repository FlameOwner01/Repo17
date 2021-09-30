const array1 = ['MON', 'TUE', 'WED', 'THU', 'FRI'];

function Main(arr){
// Only change code below this line

let array2 = [...arr];

// Only change code above this line
 return array2;
}

console.log(Main(array1));
module.exports = Main;