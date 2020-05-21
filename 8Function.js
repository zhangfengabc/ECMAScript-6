//给函数参数设置默认值
function ajax(url=new Error('url不能为空'),methods='get',dataType='json'){
    console.log(url)
    console.log(methods)
    console.log(dataType)
}
ajax('/user','post')


function log(x, y = 'world') {
    console.log(x, y)
}
log('hello')  //hello world
log('hello', 'Chila') //hello Chila
log('Hello', '')  //Hello 


function foo({x, y = 5} = {}) {
    console.log(x, y)
}
foo()
//上面代码指定，如果没有提供参数，函数foo的参数默认为一个空对象。








//5.箭头函数
//ES6允许使用  箭头（=>）定义函数
var f = v => v;

//等同于
var f = function (v) {
    return v;
}

//如果箭头函数不需要参数或需要多个参数，就使用一个圆括号代表参数部分。
var f = () => 5;
//等同于
var f = function () { return 5 }

var sum = (num1, num2) => num1 + num2;
//等同于
var sum = function(num1, num2) {
    return num1 + num2;
}


//如果箭头函数的代码块部分多于一条语句，就要使用大括号将它们括起来，并且使用return语句返回。

//使用注意点
//箭头函数有几个使用注意点
//1)函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
//2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
//3）不可以使用arguments对象，该对象在函数体内不存在，如果要用，可以用rest参数代替
//4）不可以使用yield命令，因此箭头函数不能作为Generator函数。

