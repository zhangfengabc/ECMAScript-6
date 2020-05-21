//1.Generator  
//Generator 是ES6提供的一种异步编程解决方案，语法行为与传统函数完全不同
// 是一个状态机，封装了多个内部状态，还是一个遍历器对象生成函数，返回的遍历器对象，可以依次遍历Generator函数内部的每一个状态。
//特别是* 和 yield

// function* helloWorldGenerator(){
//     yield 'hello';
//     yield 'world';
//     return 'ending';
// }

// function * foo() {}
// function *foo() {}
// function* foo() {}
// function*foo() {}
//以上四种方法都能通过，一般的写法是上面的第三种


// var hw = helloWorldGenerator();
// var a  = hw.next();
// console.log(a)  //{ value: 'hello', done: false }

// var b = hw.next();
// console.log(b) //{ value: 'world', done: false }

// var c = hw.next();
// console.log(c) //{ value: 'ending', done: true }

// var d = hw.next();
// console.log(d)  //{ value: undefined, done: true }

//yield 表达式


function* gen() {
    yield "1";
    yield "2"
}
var iterator = gen();
console.log(iterator) //Object [Generator] {}
console.log(iterator.next()); //{ value: '1', done: false }
console.log(iterator.next()); //{ value: '2', done: false }
console.log(iterator.next()); //{ value: undefined, done: true }



//3.for...of循环
// function* foo(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     return 6;
// }
// for (let v of foo()) {
//     console.log(v) 
// }
// 1
// 2
// 3
// 4
// 5

//for of 循环可以自动遍历Generator函数运行时生成的Iterator对象，且此时不在需要调用next方法

//一旦next方法的返回对象的done属性为true, for..of循环就会终止，且不包含该返回对象，
//所以上面代码的return语句返回6，不包括在for...of循环之中




// function* numbers () {
//     yield 1
//     yield 2
//     return 3
//     yield 4
// }
// console.log(...numbers()) //1 2

// console.log(Array.from(numbers())) //[ 1, 2 ]

// let [x, y] = numbers();
// console.log(x)  //1
// console.log(y) //2


//4.Generator.prototype.throw()
//Generator 函数返回的遍历器对象，都有一个throw对象，可以在函数体外抛出错误，然后在Generator 函数体内捕获

// var g = function* () {
//     try {
//         yield;
//     } catch (e) {
//         console.log('内部捕获', e)
//     }
// }

// var i = g();
// i.next();

// try {
//     i.throw('a')
//     i.throw('b')
// } catch (e) {
//     console.log('外部捕获', e)
// }



//5.Generator.prototype.return()
//Generator 函数返回的遍历器对象，还有一个return方法，可以返回给定的值，并且终结遍历Generator 函数

// function* gen() {
//     yield 1;
//     yield 2;
//     yield 3;
// }
// var g = gen();

// console.log(g.next())  //{ value: 1, done: false }
// console.log(g.return('foo')) //{ value: 'foo', done: true }
// console.log(g.next())  //{ value: undefined, done: true }

//上面代码中，遍历器对象g调用return 方法后，返回值的value属性就是return方法的参数foo。并且Generator函数的遍历就终止了，返回值的done属性为true,以后再调用next方法
//done属性总是返回true
//如果return方法调用时，不提供参数，则返回值的value属性为undefined.
// console.log(g.return()) //{ value: undefined, done: true }



// function* numbers () {
//     yield 1;
//     try {
//         yield 2;
//         yield 3;
//     } finally {
//         yield 4;
//         yield 5;
//     }
//     yield 6;
// }
// var g = numbers();
// console.log(g.next()) //{ value: 1, done: false }
// console.log(g.next()); //{ value: 2, done: false }
// console.log(g.return(7)); //{ value: 4, done: false }
// console.log(g.next()); //{ value: 5, done: false }
// console.log(g.next()); //{ value: 7, done: true }


// console.log(g.next()); //{ value: undefined, done: true }
// console.log(g.next()); //{ value: undefined, done: true }

//如果Generator函数内部有try...finally代码块，且正在执行try代码块，那么return方法会导致立刻进入finally 代码块，执行完以后，整个函数才会结束。
//上面代码中，调用reutrn()方法后，就开始执行finally代码块，不执行try里面剩下的代码了，然后等到finally代码块执行完，再返回return()方法指定的返回值


//6. next()、 throw() 、 return()的共同点
//next()、throw()、return()这 三个方法本质上是同一件事，可以放在一起理解，他们的作用都是让Generator函数恢复执行，并且使用不用的
//语句替换yield表达式。

//next()是将yield表达式替换成一个值
//throw()是将yield表达式替换成一个throw语句
//return()是将yield表达式替换成一个return语句






