// Your code here

function mapToNegativize(arr){
    let ans = []
    for (let i = 0; i < arr.length; i++){
        ans.push(arr[i] *- 1)
    }
    return ans
}

function mapToNoChange(arr){
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        ans.push(arr[i])
    }
    return ans
}

function mapToDouble(arr){
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        ans.push(arr[i] * 2 )
    }
    return ans
}

function mapToSquare(arr) {
    let ans = []
    for (let i = 0; i < arr.length; i++) {
        ans.push(arr[i] ** 2)
    }
    return ans
}


function reduceToTotal(arr, startPoiint = 0) {
    let ans = startPoiint
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i]
    }
    return ans
}

function reduceToAllTrue(arr){
    let ans = true
    for (let i = 0; i < arr.length; i++ ){
        if (arr[i] === false){
            return ans = false
        }
    }
    return ans
}

function reduceToAnyTrue(arr){
    let ans = false
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === true){
            return ans = true
        }
    }
    return ans
}