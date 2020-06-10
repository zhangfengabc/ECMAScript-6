//let 和 const命令

for(let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i)
}

// abc
// abc
// abc

//上面代码正确运行，输出了3次abc。
//表面函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。


//不存在变量提升

//暂时性死区

//只要块级作用域内存在let命令，它所声明的变量就绑定这个区域，不再受外部的影响。
//总之，在代码块内，使用let命令声明变量之前，该变量都是不可用的。
//这在语法上，称为暂时性死区


//不允许重复声明

//let不允许在相同作用域内，重复声明同一个变量。




//ES6的块级作用域


//const 
//const 声明一个只读的常量。一旦声明，常量的值就不能改变。



//将对象冻结，应该使用Object.freeze方法
const foo = Object.freeze({})























