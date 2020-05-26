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




//3.判断一个变量的类型  2016.0327----6
//typeof: 在使用typeof运算符时采用引用类型存储值会出现一个问题，无论引用的是什么类型的对象，它都返回'object'

//->typeof有一个局限性:不能具体的识别是数组、正则、对象...,使用typeof检测这几个值都是一个"object" 
//->我们可以使用instanceof来弥补这个局限性

typeof new Array()
"object"
typeof new Object()
"object"



//instanceof: 判断某个实例是否输入某种类型，  判断一个实例是否属于它的父类型。  检测某一个实例是否属于这个类? ->instanceof

//在检测某个类实例的时候，对于字面量方式创建出来的基本数据类型(不是严谨的实例)是无法就是检测的，
//只能检查通过面向对象（构造函数）创建出来的实例


console.log(1 instanceof Number);//->false
//    console.log(new Number(1) instanceof Number);//->true

//    var str = "哈哈";
//    //->在String这个类上定义了一个叫做replace的方法,只有String这个类的实例(字符串)才可以使用这个方法
//    str = str.replace("哈哈", "呵呵");
//    console.log(str);//->"呵呵"
//    console.log(str instanceof String);//->false




var ary = new Array()

ary instanceof Array
true

var obj = new Object()

obj instanceof Object
true









//hasOwnProperty: Object的hasOwnProperty()方法返回一个布尔值，判断对象是否包含特定的自身（非继承）属性。

function fn() {
    this.x = 100;
    this.getX = function() {
        console.log(this.x)
    }
}

var f1 = new fn();

//检测getX是否为f1的一个私有属性：  hasOwnProperty

console.log(f1.hasOwnProperty('getX'))  //true
console.log(f1.hasOwnProperty('toString'))   //false


















