const prompt = require("readline-sync");
const utils = require("./utils.js");


console.log(utils.matrixProduct([[1, 2] , [3, 4]] , [[1, 2] , [3, 4]]));
console.log(utils.sumOfMatrices([[1, 2] , [3, 4]] , [[1, 2] , [3, 4]]));
console.log(utils.sumOfArray([1, 2, 3, 4, 5]));
console.log(utils.sumOfEachRow([[1, 2, 3, 4], [5, 6, 7, 8]]));

const string1 = prompt.question("Insert your string here");
console.log(utils.countWords(string1));

const string2 = prompt.question("Insert your string here 2");
console.log(utils.trim(string2));