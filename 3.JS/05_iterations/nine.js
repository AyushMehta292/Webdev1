const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 2)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 1
    },
    {
        itemName: "py course",
        price: 2
    },
    {
        itemName: "mobile dev course",
        price: 3
    },
    {
        itemName: "data science course",
        price: 4
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);