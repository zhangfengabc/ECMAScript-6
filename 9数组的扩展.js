//数组的扩展

//1.扩展运算符

//扩展运算符是三个点（...）。它是将一个数组转为用逗号分隔的参数序列。
// console.log(...[1, 2, 3])
// //1 2 3
// console.log([])

// let ary = new Array(3).fill(7)
// console.log(ary) //[7,7,7]



//6.数组实例的 fill()
//fill方法使用给定值，填充一个数组。

// 上面代码表明，fill方法用于空数组的初始化非常方便。数组中已有的元素，会被全部抹去。

// fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。

// ['a', 'b', 'c'].fill(7, 1, 2)
// // ['a', 7, 'c']
// 上面代码表示，fill方法从 1 号位开始，向原数组填充 7，到 2 号位之前结束。

// 注意，如果填充的类型为对象，那么被赋值的是同一个内存地址的对象，而不是深拷贝对象。




//7.数组实例的entries(),keys()和values()
//用于遍历数组。

let ary = ['a', 'b']
// for(let index of ary.keys()){
//     console.log(index)
// }
// 0
// 1
// for(let elem of ary.values()){
//     console.log(elem)
// }

// a
// b

// for(let [index, elem] of ary.entries()){
//     console.log(index, elem)
// }

// 0 a
// 1 b


