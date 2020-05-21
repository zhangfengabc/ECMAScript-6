//Promise对象

//1.Promise 的含义

//Promise对象有以下两个特点。





//2.基本用
const promise = new Promise(function(resolve, reject) {
    //.... some code
    if(/*异步操作成功*/) {
        resolve(value)
    } else {
        reject(error)
    }
})

//Promise构造函数接受一个函数作为参数，该函数的两个参数分别时resolve和reject。
//它们时两个函数，由JavaScript引擎提供，不用自己部署。


//resolve函数的作用时，将Promise对象的状态从  未完成 变为 成功 （即从pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
//reject函数的作用是，将Promist对象的状态从  未完成 变为  失败 （即从pending 变为 rejected）, 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。


