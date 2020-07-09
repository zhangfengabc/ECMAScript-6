//Set 和 Map 数据结构


//1. Set

//ES6提供了新的数据结构Set.它类似与数组，但是成员的值都是唯一的，没有重复的值。
//Set本身是一个构造函数，用来生成Set数据结构

// const s = new Set();

// [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));
// console.log(s) //Set { 2, 3, 5, 4 }

// for(let i of s) {
//     console.log(i)
// }
// 2
// 3
// 5
// 4

//Set函数可以接受一个数组作为参数，用来初始化。
// const set = new Set([1, 2, 3, 4, 4])
// console.log(...set) //1 2 3 4


// const items = new Set([1, 2, 3, 4, 5, 5, 5, 5])
// console.log(items.size) //5

// const set = new Set(document.querySelectorAll('div'))
// console.log(set.size) //56


//去除数组的重复成员
// let arr = [1, 2, 3, 4, 5, 5, 5, 5]
// console.log([...new Set(arr)])  //[ 1, 2, 3, 4, 5 ]

//向Set加入值的时候，不会发生类型的转换，所以5和'5'是两个不同的值。Set内部判断两个值是否不同，
//使用的算法叫做’Same-value-zero equality‘,它类似于精确相等运算符（===），
//主要的区别是向Set加入值时认为NaN等于自身，而精确相等运算符认为NaN不等于自身。

// let set = new Set()
// let a = NaN;
// let b = NaN;
// set.add(a)
// set.add(b)
// console.log(set) // NaN

//上面代码向Set实例添加了两次NaN,但是只会加入一个。这表明，在Set内部，两个NaN时相等的。

//另外，两个对象总是不相等的

// let set = new Set()

// set.add({})
// console.log(set.size)    //1

// set.add({})
// console.log(set.size) //2

// console.log(set) //Set { {}, {} }

//上面代码表示，由于两个空对象不相等，所以它们被视为两个值。


//Set实例的属性和方法
//Set 结构的实例有以下属性。
 //- Set.prototype.constructor: 构造函数，默认就是Set函数
 //- Set.prototype.size: 返回Set实例的成员总数。

 //Set实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。
//- Set.prototype.add(value):添加某个值，返回Set结构本身
//- Set.prototype.delete(value): 删除某个值，返回一个布尔值，表示删除是否成功
//- Set.prototype.has(value): 返回一个布尔值，表示该值是否为Set的成员
//- Set.prototype.clear(): 清除所有成员，没有返回值



// let s = new Set();
// let a = s.add(1).add(2).add(2);

// console.log(a.size) //2
// console.log(a.has(1)) //true
// console.log(a.has(2)) //true
// console.log(a.has(3)) //false
 
// console.log(s.delete(2))  //true
// console.log(s.has(2))  //false


// //Array.from 方法可以将Set结构转为数组
// const items = new Set([1, 2, 3, 4, 5])
// const arr = Array.from(items)
// console.log(arr) //[ 1, 2, 3, 4, 5 ]

// //这就提供了去除数组成员的另一种方法。
// function dedupe(ary) {
//     return Array.from(new Set(ary))
// }
// let ded = dedupe([1, 1, 2, 3])
// console.log(ded)  //[ 1, 2, 3 ]


// //遍历操作
// //Set结构的实例有四个遍历方法，可以用于遍历成员
// //- Set.prototype.keys(): 返回键名的遍历器
// //- Set.prototype.values(): 返回键值的遍历器
// //- Set.prototype.entries()：返回键值对的遍历器
// //- Set.prototype.forEach(): 使用回调函数遍历每个成员

// //需要特别指出的是，Set的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用Set保存一个回掉函数列表，调用时就能保证按照添加顺序调用。

// //1) keys(), values(), entries()
// //keys方法、values方法、entries方法返回的都是遍历器对象。
// //由于Set结构没有键名，只有键值（或者说键名和键值时同一个值），所以keys方法和values方法的行为完全一致。

// let set = new Set(['red', 'green', 'blue']);
// for(let item of set.keys()) {
//     console.log(item)
// }
// // red
// // green
// // blue

// for(let item of set.values()) {
//     console.log(item)
// }
// // red
// // green
// // blue

// for(let item of set.entries()) {
//     console.log(item)
// }
// // [ 'red', 'red' ]
// // [ 'green', 'green' ]
// // [ 'blue', 'blue' ]

// //上面代码中，entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。

// //可以省略values方法，直接用for...of循环遍历Set
// for (let x of set) {
//     console.log(x)
// }
// // red
// // green
// // blue

// //2) forEach()
// //Set结构的实例和数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。

// let set2 = new Set([1, 4, 9])
// set2.forEach((value, key) => console.log(key + ':' + value))

// // 1:1
// // 4:4
// // 9:9

// //*  Set结构的键名就是键值（两者时同一个值），因此第一个参数与第二个参数的值永远都是一样的。

// //另外，forEach方法还可以有第二个参数，表示绑定处理函数内部的this对象。

// //3)遍历的应用
// //扩展运算符（...）内部使用for...of循环，所以也可以用于Set结构。

// let set3 = new Set([1, 2, 3])
// set3 = new Set([...set3].map(x => x*2))
// console.log(set3)
// //Set { 2, 4, 6 }

// let set = new Set([1, 2, 3, 4, 5])
// let = new Set([...set].filter(x => (x % 2) == 0))

// let a = new Set([1, 2, 3])
// let b = new Set([4, 5, 6])
// //并集
// let union = new Set([...a, ...b])
// // Set {1, 2, 3, 4}

// //交集
// let intersect = new Set([...a].filter(x => b.has(x)))
// // set {2, 3}

// //差集
// let difference = new Set([...a].filter(x =>!b.has(x)))
// // Set {1}

// let set = new Set([1, 2, 3])
// set = new Set([...set].map(val => val * 2))


// let arr = [3, 5, 7, 5, 2, 1]
// let set1 = new Set(arr); //去重 
// console.log(set1)   //Set { 3, 5, 7, 2, 1 }

// let set2 = new Set([4, 6, 8, 2, 1])
// let set3 = new Set([3, 6, 8, 7, 1])

// set2.add(0)
// set2.delete(8)
// console.log(set2)
// console.log(typeof set2) //set2是一个类数组
// var ary = Array.from(set2)
// console.log(ary)
// console.log(typeof ary)

// let set4 = new Set([...set2, ...set3])
// console.log(set4) //合并两个set,并去重

// let set5 = new Set([...set2].filter(x => set3.has(x)))  //交集
// console.log(set5)

// let set6 = new Set([...set2].filter(x => !set3.has(x))) //差集
// console.log(set6)


const set = new Set([
    ['foo', 1],
    ['bar', 2]
]);
console.log(set)  //Set { [ 'foo', 1 ], [ 'bar', 2 ] }











// //2.WeakSet
// //WeakSet结构与Set类似，也是不重复的值的集合。但是，它与Set有两个区别。
// //首先，WeakSet的成员只能是对象，而不能是其他类型。

// //WeakSet结构有以下三个方法。
// //- WeakSet.prototype.add(value): 向WeakSet实例添加一个新成员
// //- WeakSet.prototype.delete(value): 清除WeakSet实例的指定成员
// //- WeakSet.prototype.has(value): 返回一个布尔值，表示某个值是否在WeakSet实例之中。

// //例子
// const ws = new WeakSet();
// const obj = {}
// const foo = {}

// ws.add(window)
// ws.add(obj)

// console.log(ws.has(window)) //true
// console.log(ws.has(foo)) //false

// ws.delete(window)
// console.log(ws.has(window)) //false

// //WeakSet没有size属性，没有办法遍历它的成员。
// console.log(ws.size)  //undefined







// //3.Map
// //传统上只能用字符串当作键值对。这给使用带来了很大的限制
// //为了解决这个问题，ES6提供了Map数据结构。它类似与对象，也是键值对的集合，但是  键 的范围不限于字符串，各种类型的值（包括对象）
// //都可以当作键，也就是说Object结构提供了 字符串一值 的对应，Map结构提供了  值-值的对应，是一种更完善的Hash结构实现
// //如果需要键值对的数据结构，Map比Object更合适

// const m = new Map()
// const o = {p: 'hello world'}

// m.set(o, 'content')
// m.get(o)  //'content'

// m.has(o) //true
// m.delete(o) //true
// m.has(0) //false


// let num = 123;
// let arr = [1, 2, 3, 4]
// let fun = function() {}
// let obj = {}
// const map1 = new Map();
// map1.set(num, 'q1')
// map1.set(arr, 'q2')
// map1.set(fun, 'q3')
// map1.set(obj, 'q5')

// for(const key of map1.keys()) {
//     console.log(key, typeof key)
// }

// for(const key of map1.values()) {
//     console.log(key, typeof key)
// }

//keys（键）,values（值）,entries(键值对)


// const map = new Map()
// map.set('foo', true)
// map.set('bar', false)
// console.log(map.size) //2

//实例的属性和操作方法
//Map结构的实例有以下属性和操作方法。
//1.size属性返回Map结构的成员总数


//2.Map.prototype.set(key, value)
//set方法设置键名key对应的键值为value,然后返回整个Map结构。如果key已经有值，则键值会被更新，否则就新生成该键。

//3.Map.prototype.get(key)
//get方法读取key对应的键值，如果找不到key,返回undefined

//4.Map.prototype.has(key)
//has方法返回一个布尔值，表示某个键是否在当前Map对象之中。

//5.Map.prototype.delete(key)
//delete方法删除某个键，返回true.如果删除失败，返回false。


//6.Map.prototype.clear()
//clear方法清除所有成员，没有返回值


//遍历方法
//Map结构原生提供三个遍历器生成函数和一个遍历方法。

//-Map.prototype.keys(): 返回键名的遍历器
//-Map.prototype.values(): 返回键值的遍历器
//-Map.prototype.entries(): 返回所有成员的遍历器
//-Map.prototype.forEach(): 返回Map的所有成员




// const map = new Map([
//     ['far', 'foo'],
//     ['bar', 33]
// ])
// console.log(map) //Map { 'far' => 'foo', 'bar' => 33 }
// console.log(typeof map) //object

// for(let key of map.keys()){
//     console.log(key)
// }
// far
// bar

// for(let value of map.values()){
//     console.log(value)
// }

// foo
// 33

// map.set('e',9)
// console.log(map)
// console.log(map.get('e'))
// console.log(map.has('far')) //true
// console.log(map.delete('far'))
// console.log(map.has('far'))
// console.log(map.clear())

// 9
// true
// true
// false
// undefined





















