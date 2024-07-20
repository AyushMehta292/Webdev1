const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const cup = {
    name: 'ginger cup',
    price: 250,
    isAvailable: true,

    ordercup: function(){
        console.log("cup nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(cup, "name"));

Object.defineProperty(cup, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(cup, "name"));

for (let [key, value] of Object.entries(cup)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}