// var factory = function(){
//     return function(){
//         console.log('执行了')
//         //执行方法
//     }
// }
// var jQuery = factory();
// console.log(jQuery)

//js自执行函数
//1.对于函数表达式，在后面加括号可以让函数立即执行；例如下面这个函数，至于为什么加了括号就可以立即执行，我们可以这么理解，
//就是像fn1();这样写的话，函数可以立即执行是没问题的，我们经常会用到，那么对于函数表达式来说，fn1就是对后面的匿名函数的一个引用，
//因此在后面的匿名函数后直接加括号，自然就可以立即执行。


// var fn1 = function(){
//     console.log('函数表达式fn1立即执行了')
// }()

//2.但是对于下面这个函数，如果直接加()就会报错；如果按照上面的思路去理解，在匿名函数后面直接加上()应该是可以立即执行的，
//但是下面这个函数之所以会报错，而且会报两个错误，是因为js引擎在解析js代码的时候，遇到以function大头的函数会当作函数声明，
//然后会检测语法错误，那么第一个括号处的语法错误在于函数声明是必须要有函数名字的，而()前面没有所以报错，第二个括号处的语法
//错误在于函数声明到第二个花括号处，就已经算是结尾了，后面的()会被当作分组操作符，这个()实际上已经和函数声明没关系了，但是
//既然有了分组操作符，那就要有表达式，不然会报错。


// function () {
//     console.log('函数表达式fn2立即执行了')
// }()


//就是一旦被当作函数声明，那么到花括号处就算为止了，后面的()就只当作一个分组操作符，和函数没有任何关系了。

// //3.那么想让这种匿名函数直接执行应该怎么办呢，其实很简单，就是在function前面加上一些操作符，这样js引擎在解析的时候就不会把它当成函数声明了。

// (function () {
//     console.log('改造版1号立即执行了') //最前最后加括号
// }())

// //推荐使用的方法，看起来比较具有结构性
// (function(){
//     console.log('改造版2号立即执行') //function外面加括号
// })();

// //也是一种常用的写法  function前面加运算符
// !function(){
//     console.log('改造版3号执行了')
// }()
// +function(){
//     console.log('改造版4号执行了')
// }()






