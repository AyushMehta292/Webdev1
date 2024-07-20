const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (val){
    console.log(" 1st ",val);
} )

coding.forEach( (item) => {
    console.log(" 2nd ",item);
} )

function printMe(item){
    console.log(" 3rd ",item);
}

coding.forEach(printMe)

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )