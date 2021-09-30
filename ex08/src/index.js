// Lodash
const _ = require('lodash');
// only change code below this line
// users nested array with four objects starts here
var users = [Prvi = {
        firstName: "John",
        lastName: "Doe",
        age: 24,
        gender: "male"
    },
    Drugi = {
        firstName: "Jane",
        lastName: "Doe",
        age: 5,
        gender: "female"
    },
    Treci = {
        firstName: "Jim",
        lastName: "Carry",
        age: 54,
        gender: "male"
    },
    Cetvrti = {
        firstName: "Kate",
        lastName: "Winslet",
        age: 40,
        gender: "female"
    }
];
// users nested array with four objects end here

// getUsers function - list of users starts here
function getUsers() {
    var output = "";
    for (let i = 0; i < users.length; i++) {
        console.log(users[i].firstName + " " + users[i].lastName + " is " + users[i].age + ", " + users[i].gender);
    }
    return output;
}
// getUsers function - list of users ends here

// findUser(lastName, gender) function starts here
function findUser(lastName, gender) {
    try {
        //add appropriate code here
        var user = _.find(users, {
            lastName: lastName,
            gender: gender
        });
        var iFindUser = user.firstName + " " + user.lastName + " is " + user.age + ", " + user.gender;

    } catch (error) {

        return `Cannot read property '${lastName}' of undefined`; // Change this line
        console.log(iFindUser); // Change this line
    }
    return iFindUser;
}
// findUser(lastName, gender) function ends here
// Only change code above this line
getUsers();
console.log(findUser("Doe", "female")); // Change this line
module.exports = findUser;