//Task#1
let arr = [1, 2, 3, 4, 5, 6]
let sqArr = arr.map((i) => i**2)
console.log("Task.1 Output:", sqArr);

//Task#2
let nums = [1, 5, 10, 15, 20]
let filterNums = nums.filter((nums) => nums > 10)
console.log("Task.2 Output:", filterNums);

//Task#3
// let str = "Orange Coding Academy";
// let getUpChar = str.split("").forEach((i) => i === i.toUpperCase() ? i.toUpperCase() : i.toLowerCase()).join("");
// let getUpChar = str.split("").forEach(function(i) {
//   i === i.toUpperCase() ? i.toUpperCase() : i.toLowerCase()
//   return i} ).join("");
let strArr = ["ragad", "yousef", "alshobaki"]
let getUpChar = strArr.forEach(function(i) {console.log(i.toUpperCase())} );

// console.log("Task.3 Output:", getUpChar);

//Task#4
let device = [{Brand : "HP",
               Color : "Black",
               RAM : "8" },
              {Brand : "Dell",
                Color : "Dark Grey",
                RAM : "8" },
              {Brand : "HP",
                Color : "Silver",
                RAM : "4" }]
let prop = device.map(i => i.Brand)
console.log("Task.4 Output:", prop);

//Task#5
let fltrProp = device.filter((i) => i.Brand == "Dell")
console.log("Task.5 Output:", fltrProp);

//Task#6
let sumNum = [5, 10, 15, 20, 25]
let sum = sumNum.forEach((cum, i) => cum+i)
console.log("Task.6 Output:", sum);

//Task#7
// let str = "Orange Coding Academy";
let revArr = ["egnarO", "gnidoC", "ymedacA"]
let rev = revArr.map((i) => i.split("").reverse().join(""))
console.log("Task.7 Output:", rev);

//Task#8
let n = [1, 2, 3, 4, 5, 6, 7]
let getPrime = n.filter(i => i % 2 === 1)
console.log("Task.8 Output:", getPrime);

//Task#9


//Task#10
let getStr = n.map(i => i.toString())
console.log("Task.10 Output:", getStr);

//Task#11
let dub = [1, 1, 2, 3, 3, 4, 4]
let getUnique = dub.filter()