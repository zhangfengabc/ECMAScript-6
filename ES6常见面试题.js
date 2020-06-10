//1.去除数组的重复成员
// let arr = [3, 5, 2, 2, 5, 5]
// let unique = [...new Set(arr)]
// console.log(unique)
//[ 3, 5, 2 ]



//2.手写一个promise

// var promise = new Promise((resolve, reject) => {
//     if(操作成功) {
//         resolve()
//     } else {
//         reject()
//     }
// })

// promise.then(function(value) {

// }, function(value) {
    
// })




//3.判断一个变量的类型  2016.0327----6
//typeof: 在使用typeof运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回'object'

//->typeof有一个局限性:不能具体的识别是数组、正则、对象...,使用typeof检测这几个值都是一个"object" 
//->我们可以使用instanceof来弥补这个局限性

// typeof new Array()
// "object"
// typeof new Object()
// "object"



//instanceof: 判断某个实例是否输入某种类型，  判断一个实例是否属于它的父类型。  检测某一个实例是否属于这个类? ->instanceof

//在检测某个类实例的时候，对于字面量方式创建出来的基本数据类型(不是严谨的实例)是无法就是检测的，
//只能检查通过面向对象（构造函数）创建出来的实例


// console.log(1 instanceof Number);//->false
//    console.log(new Number(1) instanceof Number);//->true

//    var str = "哈哈";
//    //->在String这个类上定义了一个叫做replace的方法,只有String这个类的实例(字符串)才可以使用这个方法
//    str = str.replace("哈哈", "呵呵");
//    console.log(str);//->"呵呵"
//    console.log(str instanceof String);//->false




// var ary = new Array()

// ary instanceof Array
// true

// var obj = new Object()

// obj instanceof Object
// true









//hasOwnProperty: Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。

// function fn() {
//     this.x = 100;
//     this.getX = function() {
//         console.log(this.x)
//     }
// }

// var f1 = new fn();

//检测getX是否为f1的一个私有属性：  hasOwnProperty

// console.log(f1.hasOwnProperty('getX'))  //true
// console.log(f1.hasOwnProperty('toString'))   //false




//4.for in 和 for of 的区别
// Array.prototype.method = function() {
//     console.log(this.length)
// }

// var myArray = ['崔明', '鲍蕾', '叶佳云', '张森', '黄丽梅', '孙坚']

// myArray.name = '数组'
// for(let index in myArray) {
//     console.log(index)
//     console.log(myArray[index])
// }

// 0
// 崔明
// 1
// 鲍蕾
// 2
// 叶佳云
// 3
// 张森
// 4
// 黄丽梅
// 5
// 孙坚
// name
// 数组
// method
// [Function]

//for in遍历数组的毛病
//1.index索引为字符串型数字，不能直接进行几何运算。
//2.遍历顺序有可能不是按照实际数组的内部顺序
//3.使用for in会遍历数组所有的可枚举属性，包括原型。例如上例的原型方法 method 和 name属性，
//  所以for 更适合遍历对象，不要使用for in遍历数组。





// var starArray = ['范冰冰','李晨','赵薇','孙菲菲','马云']
// for(let value of starArray) {
//     console.log(value)
// }

// 范冰冰
// 李晨
// 赵薇
// 孙菲菲
// 马云


//---for in更适合遍历对象，不要使用for in遍历数组


//***  for in遍历的是数组的索引（即键名），而for of遍历的是数组元素值。
//     for of遍历的只是数组内的元素，而不包括数组的原型属性method 和索引 name


//遍历对象  通常用for in来遍历对象的键名

Object.prototype.method = function() {
    console.log(this)
}

var myObject = {
    a: '葛优',
    b: '黄晓明',
    c:'黄磊'
}
// for(let key in myObject) {
//     console.log(key)
// }

// a
// b
// c
// method

//for in可以遍历到myObject的原型方法method,如果不想遍历原型方法和属性的话，可以在循环内部判断一下，
//hasOwnProperty方法可以判断属性是否是该对象的实例属性

for(let key in myObject) {
    if(myObject.hasOwnProperty(key)) {
        console.log(key)
    }
}

// a
// b
// c


//具体看下面这个地址的说明
//   https://www.jianshu.com/p/c43f418d6bf0



//5.mvc、mvvm
//Model View Controller,是模型（model）-视图（view）-控制器（controller）,数据拿过之后，必须操作dom。

//Model-View-ViewModel, 模型、视图、视图模型，在model请求的数据，渲染页面，、

//区别：mvvm不需要操作dom,mvcbicultural操作dom



//6.js同源策略


//charAt()  从某个字符串取得具体的字符。返回指定位置的字符。
// var str = "Hello world!"
//console.log(str.charAt(1)) // e



//7.js实现杨辉三角
                //         1
                //        1  1
                //       1  2  1
                //      1  3  3  1
                //     1  4  6  4  1
                //   1   5  10 10 5  1
                // .....



//8.防抖和节流
//函数防抖(debonce):当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次。
//函数节流(throttle)：当继续触发事件时，保证一定时间段内只调用一次事件处理函数。


//防抖debounce代码:
//防抖
function debounce(fn, wait) {
    var timeout = null;
    return function() {
        if(timeout !== null) clearTimeout(timeout)
        timeout = setTimeout(fn, wait)
    }
}
//处理函数
function handle() {
    console.log(Math.random())
}
//滚动事件
window.addEventListener('scroll', debounce(handle, 1000))

//当持续触发scroll事件时，事件处理函数handle只在停止滚动1000毫秒之后才会调用一次，
//也就是说在持续触发scroll事件的过程中，事件处理函数handle一直没有执行。

//   https://www.cnblogs.com/momo798/p/9177767.html









