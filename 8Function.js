// //给函数参数设置默认值
// function ajax(url=new Error('url不能为空'),methods='get',dataType='json'){
//     console.log(url)
//     console.log(methods)
//     console.log(dataType)
// }
// ajax('/user','post')


// function log(x, y = 'world') {
//     console.log(x, y)
// }
// log('hello')  //hello world
// log('hello', 'Chila') //hello Chila
// log('Hello', '')  //Hello 


// function foo({x, y = 5} = {}) {
//     console.log(x, y)
// }
// foo()
// //上面代码指定，如果没有提供参数，函数foo的参数默认为一个空对象。


function push(ary, ...rest) {
    rest.forEach(item => {
        ary.push(item)
        console.log(item)
    })
    return ary;
}

var ary = []
let aryValue = push(ary, 11, 12, 13)
console.log(aryValue)
console.log(push.length)



console.log((function(a) {}).length);
console.log((function(...b) {}).length);
console.log((function(a, ...b) {}).length);

// (function(a) {}).length    //1
// (function(...b) {}).length   //0
// (function(a, ...b) {}).length   //1

// const isEven = n => n%2 === 0
// function xx(n) {
//     return n % 2 === 0
// }
// const isEven =  xx(2)


let arr = [1, 2, 3].map(x => x * x)
console.log(arr);   //[ 1, 4, 9 ]

let values = [13, 5, 23, 0, 7]
let result = values.sort((a, b) => a -b)
console.log(result)  //[ 0, 5, 7, 13, 23 ]













// //5.箭头函数
// //ES6允许使用  箭头（=>）定义函数
// var f = v => v;

// //等同于
// var f = function (v) {
//     return v;
// }

// //如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
// var f = () => 5;
// //等同于
// var f = function () { return 5 }

// var sum = (num1, num2) => num1 + num2;
// //等同于
// var sum = function(num1, num2) {
//     return num1 + num2;
// }


//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

//使用注意点
//箭头函数有几个使用注意点
//1)函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//3）不可以使用arguments对象，该对象在函数体内不存在，如果要用，可以用rest参数代替
//4）不可以使用yield命令，因此箭头函数不能作为Generator函数。


var fn = n => n + 3;












//6.尾调用优化
//尾调用是函数式编程的一个重要概念，本身非常简单。一句话就能说清楚，
//就是指某个函数的最后一步是调用另一个函数。


//7.函数参数的尾逗号
//ES2017 允许函数的最后一个参数有尾逗号
//新的语法允许定义和调用时，尾部直接有一个逗号。

function clownsEverywhere(
    param1,
    param2,
) {
    console.log(`${param1}  ${param2}`)
}
clownsEverywhere(
    'foo',
    'bar',
)


//8. Function.prototype.toString()
//ES2019 对函数实例的toString()方法做出了修改。

//toString()方法返回函数代码本身，以前会省略注释和空格。

//修改后的toString()方法，明确要求返回一模一样的原始代码。

function /*这是注释 */ foo () {}
console.log(foo.toString());
//function /*这是注释 */ foo () {}




//9. catch命令的参数省略

//Javascript语言的try...catch结构，以前明确要求catch命令后面必须跟参数，接受try代码块抛出的错误对象
try {

} catch (err) {
    //处理错误
}
//上面代码中，catch命令后面带有参数err。


//很多时候，catch代码块可能用不到这个参数。但是，为了保证语法正确，还是必须写。
//ES2019做出了改变，允许catch 语句省略参数。

try {

} catch {

}