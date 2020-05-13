function mapToNegativize(array) {
    return array.map(x => x * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray
}
function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2 )
}
function mapToSquare(sourceArray) {
    return sourceArray.map(x => x**2)
}

function reduceToTotal(sourceArray, startingPoint = 0) {
    return sourceArray.reduce(function(acc, cur, index) {
        if (index == 1) {
            acc += cur 
            return acc += startingPoint
        } else {
            return acc += cur 
        }
    })
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce(function(acc, cur) {
        if (acc && cur) {
            return acc = true 
        } else {
            return acc = false 
        }
    })
}
function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce(function(acc, cur) {
        if (acc || cur) {
            return acc = true 
        } else {
            return acc = false 
        }
    })
}
