module.exports = 'zf'




// /user post json
// function sum(prefix,...rest){ 
//     let result = 0;
//     rest.forEach(function(item){
//         result += item;
//     })
//     return prefix + result;
// }
// console.log(sum(1,2,3,4)) //10

//...rest  代表一个数组
//forEach   循环数组中的每一个元素，把他们依次传入对应的函数


// let arr4 = [1,2,3]
// let arr5 = [4,5,6]
// let arr7 = [...arr4,...arr5]
// let arr8 = [...arr5,...arr4]
// console.log(arr7) //[ 1, 2, 3, 4, 5, 6 ]
// console.log(arr8) //[ 4, 5, 6, 1, 2, 3 ]


// let max = Math.max(1,2,3);
// console.log(max) //3


// let max2 = Math.max(...arr4)
// console.log(max2)  //3





// console.log(NaN == NaN) //false

// console.log(+0 == -0) //true

//1.Object.is()

//Object 对象的新增方法
//Object.is() 比较两个对象是否相等
// console.log(Object.is('foo','foo')) //true
// console.log(Object.is({},{})) //false
// console.log(Object.is(NaN,NaN)) //true
// console.log(Object.is(+0,-0))  //false


//2.Object.assign()


//Object.assign() //用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）

// const target = {a:1}
// const source1 = {b:2}
// const source2 = {c:3}
// Object.assign(target,source1,source2)
// console.log(target) //{ a: 1, b: 2, c: 3 }

//Object.assign方法的第一个参数是目标对象，后面的参数都是源对象
// * 如果目标对象与源对象有同名属性，或多个源对象有同名属性，则后面的属性会覆盖前面的属性

// const target = {a:1,b:1}
// const source1 = {b:2,c:2}
// const source2 = {c:3}
// Object.assign(target,source1,source2)
// console.log(target) //{ a: 1, b: 2, c: 3 }



// //如果只有一个参数，Object.assign 会直接返回该参数
// // const obj = {a:1}
// // Object.assign(obj) === obj // true

// //如果该参数不是对象，则会先转成对象，然后返回
// let type = typeof Object.assign(2)
// console.log(type) //Object

//由于undefined 和 null 无法转成对象，所以如果他们作为参数，就会报错

// let oU = Object.assign(undefined) 
// console.log(oU)  //报错 Cannot convert undefined or null to object     无法将undefined 或 null 转成对象
// let oNull = Object.assign(null)
// console(oNull) //报错    报Cannot convert undefined or null to object



//如果非对象参数出现在源对象的位置（即非首参数），那么处理规则有所不同。首先，这些参数都会转成对象，如果无法转成对象，就会跳过。这意味着
//如果undefined 和  null 不在首参数，就 不会报错


// let obj = {a:1}
// Object.assign(obj,undefined) ===  obj // true
// Object.assign(obj, null) ===  obj // true

//其它类型的值（即数值、字符串和布尔值）不在首参数，也不会报错。但是，除了字符串会以数组形式，拷贝如目标对象，其他值都不会产生效果



//************************注意点************************ */
//1.浅拷贝
//Object.assign 方法实行的是浅拷贝，而不是深拷贝。也就是说，如果源对象某个属性的值是对象，那么目标对象拷贝得到的是这个对象的引用。
// const obj1 = {a:{b:1}}
// const obj2 = Object.assign({},obj1) 

// obj1.a.b = 2
// let ob = obj2.a.b 
// console.log(ob) //2
//上面代码中，源对象ojb1的a属性的值是一个对象， Object.assign拷贝得到的是这个对象的引用，这个对象的任何变化，都会反映到目标对象上面。

//2.同名属性的替换

//3.数组的处理

//4.取值函数的处理

//************************常见用途**************************** */






//3.Object.getOwnPropertyDescriptors

//Object.getOwnPropertyDescriptors()
//Object.getOwnPropertyDescriptors() 方法，返回指定对象所有自身属性（非继承属性）的描述对象。

// const obj = {
//     foo:123,
//     get bar() { return 'abc'}
// }
// let getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors(obj)
// console.log(getOwnPropertyDescriptors)
// {
//     foo: { value: 123, writable: true, enumerable: true, configurable: true },
//     bar: {
//       get: [Function: get bar],
//       set: undefined,
//       enumerable: true,
//       configurable: true
//     }
// }
//上面代码中，Object.getOwnPropertyDescriptors()方法返回一个对象，所有原对象的属性名都是该对象的属性名，对象的属性值就是该属性的描述对象。



//4.__proto__属性， Object.setPrototypeOf(),  Object.getPrototypeOf()



//Object.setPrototypeOf()
//Object.setPrototypeOf() 方法的作用是用来设置一个对象的原型对象（prototype）,返回参数对象本身。

//格式
// Object.setPrototypeOf(object, prototype)
//用法
// Object.setPrototypeOf({}, null)


//Object.getPrototypeOf()
//Object.getPrototypeOf 该方法与 Object.setPrototypeOf 方法配套，用于读取一个对象的原型对象。

//Object.getPrototypeOf(obj)




//5.Object.keys(),    Object.values(),   Object.entries()
//ES5引入了Object.keys方法，返回一个数组，成员是参数对象自身的所有可遍历属性的键名
// var obj = { foo: 'bar', baz: 42}
// var oA = Object.keys(obj)
// console.log(oA) //[ 'foo', 'baz' ]



// let {keys, values, entries } = Object;
// let obj = { a: 1, b: 2, c: 3}
// for(let key of keys(obj)){
//     console.log(key)
// }
// // a
// // b
// // c
// for(let value of values(obj)){
//     console.log(value)
// }
// // 1
// // 2
// // 3
// for(let [key, value] of entries(obj)){
//     console.log([key, value])
// }

// [ 'a', 1 ]
// [ 'b', 2 ]
// [ 'c', 3 ]





//Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值
// const obj = { foo: 'bar', baz: 42}
// let oB = Object.values(obj)
// console.log(oB)
//[ 'bar', 42 ]

//Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历属性的键值对数组。

// const obj = { foo: 'bar', baz: 42 }
// let oC = Object.entries(obj)
// console.log(oC)
//[ [ 'foo', 'bar' ], [ 'baz', 42 ] ]



//6.  Object.formEntries()
//Object.fromEntries()方法是Object.entries()的逆操作，用于将一个键值对数组转为对象

let oFE = Object.fromEntries([
    ['foo', 'bar'],
    ['baz', 42]
])
console.log(oFE)
//[ [ 'foo', 'bar' ], [ 'baz', 42 ] ]