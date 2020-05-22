//1.去除数组的重复成员
let arr = [3, 5, 2, 2, 5, 5]
let unique = [...new Set(arr)]
console.log(unique)
//[ 3, 5, 2 ]



//2.手写一个promise

var promise = new Promise((resolve, reject) => {
    if(操作成功) {
        resolve()
    } else {
        reject()
    }
})

promise.then(function(value) {

}, function(value) {
    
})