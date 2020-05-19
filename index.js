// Your code here

function mapToNegativize(sourceArray) {
    const resultArry = []
    for (const el of sourceArray) {
        resultArry.push(el * -1)
    }
    return resultArry
}

function mapToNoChange(sourceArray) {
    const resultArry = []
    for (const el of sourceArray) {
        resultArry.push(el)
    }
    return resultArry
}

function mapToDouble(sourceArray) {
    const resultArry = []
    for (const el of sourceArray) {
        resultArry.push(el * 2)
    }
    return resultArry
}

function mapToSquare(sourceArray) {
    const resultArry = []
    for (const el of sourceArray) {
        resultArry.push(el * el)
    }
    return resultArry
}

function reduceToTotal(sourceArray, startingPoint=0) {
    for (const el of sourceArray) {
        startingPoint += el
    }
    return startingPoint
}

function reduceToAllTrue(sourceArray) {
    let value = true
    for (const el of sourceArray) {
        if (!el) {
            value = false
        }
    }
    return value
}

function reduceToAnyTrue(sourceArray) {
    let value = false
    for (const el of sourceArray) {
        if (el) {return value = true}
    }
    return value
}
