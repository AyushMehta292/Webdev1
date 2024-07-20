const user = {
    username: "ayush",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this);

// function cup(){
//     let username = "ayush"
//     console.log(this.username);
// }

// cup()

// const cup = function () {
//     let username = "ayush"
//     console.log(this.username);
// }

const cup =  () => {
    let username = "ayush"
    console.log(this);
}
console.log(this);


// cup()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "ayush"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()