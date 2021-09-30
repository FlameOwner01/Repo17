// Lodash
const _ = require('lodash');
// only change code below this line
// users nested array with four objects starts here
var users = [Prvi = { id: 1, firstName: "John", lastName: "Doe", age: 24, gender: "male"}, Drugi ={
    id: 2,
    firstName: "Jane",
    lastName: "Doe",
    age: 5,
    gender: "female"
}, Treci = {
    id: 3,
    firstName: "Jim",
    lastName: "Carry",
    age: 54,
    gender: "male"
}, Cetvrti = {
    id: 4,
    firstName: "Kate",
    lastName: "Winslet",
    age: 40,
    gender: "female"
}];
// users nested array with four objects end here

// getUsers function - list of users starts here
function getUsers(){
    var output = "";
    for (let i = 0; i < users.length; i++) {
        console.log(i + " - " + users[i].firstName + " " + users[i].lastName + " is " + users[i].age +", " + users[i].gender); 
    }
    return output;
}
// getUsers function - list of users ends here

// findUserById(id) function starts here
function findUserById(id){
    try{
        //add appropriate code here
    var user = _.find(users, {id: id});
    var iFindUser =user.id + " " + user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender;
    
    }catch (error){
        
        return `Cannot read property '${id}'`; // Change this line
        console.log(iFindUser); // Change this line
    }
    return iFindUser;
}
// findUserById(id) function ends here
// Only change code above this line
getUsers();
console.log(findUserById(3)); // Change this line
module.exports = findUserById;