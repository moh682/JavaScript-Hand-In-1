const array = process.argv;
const newArray = array.filter((value) => (value.length < 6))
//console.log(newArray);
const res = newArray.reduce((cur, Val,index) => {
        return Number(cur) + Number(Val);
});
console.log(res);

//Real solution
// var result = 0
    
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }

// console.log(result)