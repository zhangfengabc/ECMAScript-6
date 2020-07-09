//1.数组的解构赋值

//ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。

// let [a, b, c] = [1, 2, 3]
// console.log(a) //1
// console.log(b) //2
// console.log(c) //3
//上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。

// let [foo, [[bar], baz]] = [1, [[2], 3]]
// console.log(foo) //1
// console.log(bar) //2
// console.log(baz) //3

// let [ , , third] = ['foo', 'bar', 'baz']
// console.log(third) //baz

// let [x, , y] = [1, 2, 3]
// console.log(x) //1
// console.log(y) //3


// let [head, ...tail] = [1, 2, 3, 4]
// console.log(head)  //1
// console.log(tail) //[ 2, 3, 4 ]



// let [x, y, ...z] = ['a']
// console.log(x) //a
// console.log(y)  /undefined
// console.log(z)  //[]


//如果解构不成功，变量的值就等于undefined。
// let [foo] = [];
// console.log(foo)  //undefined

// let [bar, foo] = [1];
// console.log(bar)  //1
// console.log(foo) //undefined
//以上两种情况都属于解构不成功，foo的值都会等于undefined

//另有一种情况是不完全解构，即等号左边的模式，只匹配一部分的等号右边的数组。这种情况下，解构依然可以成功。
// let [x, y] = [1, 2, 3]
// console.log(x) //1
// console.log(y) //2

// let [a, [b], c] = [1, [2, 3], 4]
// console.log(a) //1
// console.log(b)  //2
// console.log(c)  //4
//上面两个例子，都属于不完全解构，但是可以成功。


//如果等号的右边不是数组(或者严格地说，不是可遍历的解构)，那么将会报错。
//  let [foo] = 1;
//  let [foo] = false;
//  let [foo] = NaN;
//  let [foo] = undefined;
//  let [foo] = null;
//  let [foo] = {};

//以上几种都会报   Uncaught TypeError: null is not iterable



//默认值
// let [foo = true] = []
// console.log(foo) //true


// let [x, y = 'b'] = ['a']
// console.log(x) //a
// console.log(y) //b


// let [x, y = 'b'] = ['a', undefined]
// console.log(x)  //a
// console.log(y)  //b

//* ES6 内部使用严格相等运算符（===），判读一个位置是否相等。所以，只有当一个数组成员严格等于undefined，默认值才会生效
// let [x = 1] = [undefined]
// console.log(x) //1


// let [x = 1] = [null]
// console.log(x) // null

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
// let [x = 1, y = x] = [];
// console.log(x) //1
// console.log(y) //1

// let [x = 1, y = x] = [2]
// console.log(x) //2
// console.log(y) //2

// let [x = 1, y = x] = [1, 2]
// console.log(x) //1
// console.log(y)  //2

// let [x = y, y = 1] = []
//ReferenceError: y is not defined,   是因为x用y做默认值时，y还没有声明

//2.对象的解构赋值
// let {foo, bar} = {foo: 'aaa', bar: 'bbb'}
// console.log(foo) //'aaa'
// console.log(bar)  //'bbb'


//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定，而对象的属性没有次序，
//变量必须与属性同名，才能取到正确的值。

// let {bar, foo} = {foo: 'aaa', bar: 'bbb'}
// console.log(bar)  //'aaa'
// console.log(foo) //'bbb'

// let {baz} = {foo: 'aaa', bar: 'bbb'}
// console.log(baz) //undefined

//如果解构失败，变量的值等于undefined。


//*  如果变量名与属性名不一致，必须写成下面这样。
// let {foo: baz} = {foo: 'aaa', bar: 'bbb'}
// console.log(baz) //'aaa'

// let obj = {first: 'hello', last: 'world'}
// let {first: f, last: l} = obj;
// console.log(f) //'hello'
// console.log(l) //'world'

//也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。


// let obj = {
//     p: [
//         'Hello',
//         { y: 'World'}
//     ]
// }
// let { p: [x, { y }]} = obj;
// console.log(x) //'Hello'
// console.log(y) //'World'

// //* 这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。

// let obj = {
//     p: [
//         'Hello',
//         { y: 'World'}
//     ]
// }
// let {p, p: [x, { y }]} = obj;
// console.log(x) //'Hello'
// console.log(y) //'World'
// console.log(p) //['Hello', { y: 'World'}]

// const node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5
//         }
//     }
// }
// let { loc, loc: { start: { line }}} = node;
// console.log(line) // 1
// console.log(loc)  // Object {start: Object}
// console.log(start)  // Object {line: 1, column: 5}

// let obj = {}
// let arr = []

// ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true})
// console.log(obj) //{prop: 123}
// console.log(arr) //[true]


//如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
// let {foo: {bar}} = {baz: 'baz'}  //报错

//默认值
//对象的解构也可以指定默认值。



// var { x = 3} = {}
// console.log(x) //3

// var { x, y = 5} = {x: 5}
// console.log(x) //1
// console.log(y)  //5

// var { x: y = 3} = {}
// console.log(y) //3


// var { x: y = 3 } = { x: 5}
// console.log(y)  //5

// var { message: msg = 'Something went wrong'  } = {}
// console.log(msg) //'Something went wrong'

//默认值生效的条件是，对象的属性值严格等于undefined

// var { x = 3 } = { x: undefined }
// console.log(x) //3

// var { x = 3} = { x: null}
// console.log(x) //null

//上面代码中，属性x等于null,因为null 与undefined不严格相等， 所以是个有效的赋值，导致默认值3不会生效


//3.字符串的解构赋值
//字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。

// const [a, b, c, d, e] = 'hello'
//a    //'h'
//b    //'e'
//c    //'l'
//d    //'l'
//e    //'o'

//类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
// let { length: len } = 'hello';
// console.log(len) //5


//4. 数值和布尔值的解构赋值
//解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。

// let { toString: s} = 123;
// console.log(s === Number.prototype.toString) //true

// let { toString: s } = true; 
// console.log(s === Boolean.prototype.toString) // true

//上面代码中，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。

//解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。
//由于undefined 和 null 无法转为对象，所以对它们进行解构赋值，都会报错。

// let { prop: x} = undefined;  //报错
// let { prop: y } = null; //报错





//5.函数参数的解构赋值
//函数的参数也可以使用解构赋值。

// function add([x, y]){
//     return x + y;
// }
// add([1, 2]) //3

//6.圆括号问题
//解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到等号才能知道。

//因此带来的问题是，如果模式中出现圆括号怎么处理。 ES6的规则是，只要有可能导致解构的歧义的，就不得使用圆括号。
//但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，就不要在模式中放置圆括号。


//不能使用圆括号的情况
//1） 变量声明语句
// let [(a)] = [1];

// let {x: (c)} = {};
// let ({x: c}) = {};
// let {(x: c)} = {};
// let {(x): c} = {};

// let { o: ({p: p})} = {o: {p: 2}}

//以上6个语句都会报错，因为它们都是变量声明语句，模式不能使用圆括号。


//2）函数参数
// function f([(z)]) { return z;}
//报错
// function f({z, (x)}) {return x}
//报错
//函数参数也属于变量声明，因此不能带有圆括号。

//可以使用圆括号的情况
//可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。
// [(b)] = [3] // 正确
// ({p: (d)} = {}) // 正确
// [(parseInt.prop)] = [3] // 正确

//上面三行语句都可以正确执行，因为首先它们都是赋值语句，而不是声明语句；其次它们的圆括号都不属于模式的一部分。第一行语句中，模式是取数组的第一个成员，跟圆括号无关
//第二行语句中，模式是p,而不是d,第三行语句与第一行语句的性质一致。



//7.用途
//1)交换变量的值
// let x = 1;
// let y = 2;
// [x,y] = [y, x]


//2)从函数返回多个值

//函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里面返回。有了解构赋值，取出这些值就非常方便。


//返回一个数组
// function example() {
//     return [1, 2, 3]
// }
// let [a, b, c] = example();
// console.log(a) //1
// console.log(b) //2
// console.log(c) //3

//返回一个对象
// function example2() {
//     return {
//         foo: 1,
//         bar: 2
//     }
// }
// let { foo, bar } = example2();
// console.log(foo) //1
// console.log(bar) //2

//3)函数参数的定义
//解构赋值可以方便地将一组参数与变量名应对起来

//参数是一组有次序的值
// function f([x, y, z]) {}
// f([1, 2, 3])

//参数是一组无次序的值
// function f({x, y, z}) {}
// f({z: 3, y: 2, x: 1})

//4)提取JSON数据
//解构赋值对提取JSON对象中的数据，尤其有用

// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
// }
// let { id, status, data: number } = jsonData;
// console.log(id, status, number) //42 OK [ 867, 5309 ]


//5)函数参数的默认值

// JQuery.ajax = function (url, {
//     async = true,
//     beforeSend = function() {},
//     cache = true,
//     complete = function() {},
//     crossDomain = false,
//     global = true
// } = {}) {

// }
//指定参数的默认值

//6) 遍历Map解构

//7) 输入模块的指定方法
// //加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
// const { SourceMapConsumer, SourceNode } = require('source-map')

//////////////////////////////////////////////////////start////////////////////////////////////////////////////////////////////////////////////////////
let [foo = true] = []
console.log(foo)  //true

// let [x, y = 'b'] = ['a']
// console.log(x, y) //a  b

let [x, y = 'b'] = ['a', undefined]
console.log(x, y) //a b



































