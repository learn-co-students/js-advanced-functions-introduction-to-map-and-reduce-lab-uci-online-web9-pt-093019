// Your code here
function mapToNegativize(sourceArray) {
    let newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        let num = sourceArray[i] * -1;
        newArray.push(num);
    }
    return newArray;
}

function mapToNoChange(sourceArray) {
    let newArray = [];
    for (let i=0; i < sourceArray.length; i++) {
        newArray.push(sourceArray[i]);
    }
    return newArray;
}

function mapToDouble(sourceArray) {
    let newArray = [];
    for (let i=0; i < sourceArray.length; i++) {
        let num = sourceArray[i] * 2
        newArray.push(num);
    }
    return newArray;
}

function mapToSquare(sourceArray) {
    let newArray = [];
    for (let i=0; i < sourceArray.length; i++) {
        let num = Math.pow(sourceArray[i], 2);
        newArray.push(num);
    }
    return newArray;
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint;
    for (let i=0; i < sourceArray.length; i++) {
        total = total + sourceArray[i];
    }
    return total;
}

function reduceToAllTrue(sourceArray) {
    for (let i=0; i < sourceArray.length; i++) {
        if (sourceArray[i] === false) { return false;}
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i=0; i < sourceArray.length; i++) {
        if (sourceArray[i] === true) { return true;}
    }
    return false;
}