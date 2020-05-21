//Class的基本语法
// function Point(x, y) {
//     this.x = x;
//     this.y = y;
// }
// Point.prototype.toString = function () {
//     return '(' + this.x + ', ' + this.y + ')'
// }
// var p = new Point(1,2)
//这是传统写法




// class Point {
//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     toString() {
//         return "(" + this.x + ', ' + this.y + ')'
//     }
// }
//上面代码定义了一个类，可以看到里面有一个constructor方法，这就是构造方法，而this关键字则代表实例对象。
//也就是说，ES5的构造函数Point,对应ES6的Point类的构造方法。

//constructor 构造方法
//toString方法
//***  注意，定义类的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了，另外，方法之间不需要逗号分隔，加了会报错。



// class Point {

// }
// console.log(typeof Point);  //function
// console.log(Point === Point.prototype.constructor)  //true

//上面代码表明，类的数据类型就是函数，类本身就指向构造函数。



// class Bar {
//     duStuff() {
//         console.log('stuff')
//     }
// }

// var b = new Bar();
// var stuff = b.duStuff();  //stuff

//使用的时候，也是直接对类使用new命令，跟构造函数的用法完全一致。

//constructor 方法
//constructor方法是类的默认方法，统一new命令生成对象实例时，自动调用该方法。
//一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加
// class Point {

// }
//等同于
// class Point {
//     constructor() {}
// }
// Point() //Class constructor Point cannot be invoked without 'new'
//类必须使用new 调用，否则会报错。这是它根普通构造函数的一个主要区别，后者不用new 也可以执行





















