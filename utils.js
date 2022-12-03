function matrixProduct(mat1, mat2){
    let result = [];

    for (let i = 0; i < mat1.length; i++){
        result[i] = [];
        for (let j = 0; j < mat1.length; j++){
            result[i][j] = 0;
            for (let n = 0; n< mat1.length; n++)
            result[i][j] += mat1[i][n] * mat2[n][j];
        }

    }
    return result;

}




function sumOfMatrices(mat1, mat2){
    let result = [];
    for (let i = 0; i < mat1.length; i++){
        result[i] = [];
        for ( let j = 0; j < mat1.length; j++){
            result[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return result;
}




function sumOfArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function sumOfEachRow(mat){
    let result = [];
    for (let i = 0; i< mat.length; i++){
        result.push(sumOfArray(mat[i]))
    }
    return result;
}






function countWords(string){
    let count = 0;
    let str = " " + string;

    for (let i = 0; i < str.length-1; i++){
        if (str[i] === " " && str[i+1] !== " "){
            count++;
        }
    } 
    return count;
}




function trim(string){
    let lefSpace = 0;
    let righSpace = 0;

    for (let i = 0; i < string.length; i++){
        if(leftSpace = i){
            break;
        }
    }

    for (let j = string.length - 1; j > 0; j--){
        if (rightSpace = j){
            break;
        }
    }
    return string.slice(leftSpace , rightSpace + 1);
}

module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfArray,
    sumOfEachRow,
    countWords,
    trim
}