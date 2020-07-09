//2.严格模式

//严格模式主要有以下限制
//-变量必须声明后再使用
//-函数的参数不能有同名属性，否则报错
//-不能使用with语句
//-不能对只读属性赋值，否则报错
//-不能使用前缀 0 表示八进制数，否则报错
//-不能删除不可删除的属性，否则报错
//-不能删除变量delete prop, 会报错，只能删除属性delete global[prop]
//-eval不会在它的外层作用域引入变量
//-eavl和arguments不能被重新赋值
//-arguments不会自动反映函数参数的变化
//-不能使用arguments.callee
//-不能使用arguments.caller
//-禁止this指向全局对象
//-不能使用fn.caller和fn.arguments获取函数调用的堆栈
//-增加了保留字（比如 protected、 static 、 interface）

//** 尤其要注意this的限制。ES6模块之中，顶层this指向undefined, 即不应该在顶层代码使用this。

//3. export 命令
//模块功能主要由两个命令构成： export 和 import 。
//export 命令用于规定模块的对外接口，import命令用于输入其他模块提供的功能。

//一个模块就是一个独立的文件。该文件内部的所有变量，外部无法获取。如果你希望外部能够读取模块内部的某个变量，
//就必须使用export 关键字输出该变量。


// export var firstName = 'Michael';
// export var last = 'Jackson';
// export var year = 1958;


// //export 的写法，除了上面这样，还有另外一种，
// var firstName = 'Michael';
// var lastName = 'Jackson';
// var year = 1958;
// export { firstname, lastName, year }


// //通常情况下，export输出的变量就是本来的名字，但是可以使用as关键字重命名。

// function v1() {}
// function v2() {}

// export {
//     v1 as streamV1,
//     v2 as streamV2,
//     v2 as streamLatesVesion
// }
// //上面代码使用as关键字，重命名了函数v1和v2的对外接口。重命名后，v2可以用不同的名字输出两次。

// //export 1 //报错

// // var m = 1;
// // export m; 
// //报错
// //上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出1，第二种写法通过变量m,还是直接输出1。1只是一个值，不是接口。
// //正确的写法是下面这一

// export var m = 1;

// var m = 1;
// export { m }

// var n = 1;
// export { n as m}

// //同样的，function 和 class 的输出，也必须遵循这样的写法。
// // function f() {}
// // export f;
// //报错

// //正确
// export function f() {}

// //正确
// function f() {}
// export {f}



// //*  export命令可以出现在模块的任何位置，只要处于模块顶层就可以。如果处于块级作用域内，就会报错，下一节的import命令也是如此。
// //这是因为处于条件代码块之中，就没法做静态优化了，违背了ES6模块的设计初衷

// // function foo() {
// //     export default 'bar'
// // }
// // foo()
// //报错



// //4. import 命令
// //使用export 命令定义了模块的对外接口以后，其他JS 文件就可以通过import命令加载这个模块

// import { firstName, lastName, year } from './profile.js'
// function setName(element) {
//     element.textContent = firstName + ' ' + lastName;
// }

// //上面代码的import命令，用于 加载profile.js文件，并从种输入变量。import 命令接受一对大括号，里面指定要从其他模块导入的变量名。
// //大括号里面的变量名，必须与被导入模块（profile.js）对外接口的名称相同。

// //如果想为输入的变量重新取一个名字，import 命令要使用as 关键字，将输入的变量重命名
// import { lastName as surname } from './profile.js'

// //import 命令输入的变量都是只读的，因为它的本质是输入接口。也就是说，不允许在加载模块的脚本里面，改写接口。

// import { a } from './xxx.js'
// a = {} //报错 'a' is read-only

// //上面代码中，脚本加载了变量a,对其重新赋值就会报错，因为a是一个只读的接口。但是，如果a是一个对象，改写a的属性是允许的。

// import { a } from './xxx.js'
// a.foo = 'hello' //合法操作

// //上面代码中，a的属性可以成功改写，并且其他模块也可以读到改写后的值。
// //不过，这种写法很难查错，建议凡是输入的变量，都当做完全只读，不要轻易改变它的属性

// //import 后面的from 指定模块文件的位置，可以是相对路径，也可以是绝对路径， .js后缀可以省略。
// //如果只是模块名，不带有路径，那么必须有配置文件，告诉javascript引擎该模块的位置。

// import { myMethod } from 'util'
// //上面代码中，util是模块文件名，由于不带有路径，必须通过配置，告诉引擎怎么取到这个模块。

// //**  注意 import 命令具有提升作用，会提升到整个模块的头部，首先执行。



// foo();
// import { foo } from 'my_module';
// //上面的代码不会报错，因为import 的执行早于foo的调用。这种行为的本质是，import命令是编译阶段执行的，在代码运行之前。

// //由于import是静态执行的，所以不能使用表达式和变量，这些只有在运行时才能得到结果的语法结构。

// //报错
// import { 'f' + 'oo' } from 'my_module';

// //报错
// let module = 'my_module';
// import { foo } from module;

// //报错
// if(x === 1) {
//     import { foo } from 'module1
// } else {
//     import { foo } from 'module2'
// }

// //上面三种写法都会报错，因为它们用到了表达式、变量和if结构。在静态分析阶段，这些语法都是没法得到值的。

// //最后，import语句会执行所加载的模块，因此可以有下面的写法。
// import 'loadsh';
// //上面代码仅仅执行loadsh模块，但是不输入任何值。

// //如果多次重复执行同一句import 语句，那么只会执行一次，而不会执行多次。
// import 'loadsh';
// import 'loadsh';
// //上面代码加载了两次loadsh,但是只会执行一次。

// import { foo } from 'my_module';
// import { bar } from 'my_module';

// //等同于
// import { foo, bar } from 'my_module'

// //5.模块的整体加载

// //除了指定加载某个输出值，还可以使用整体加载，即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。
// //circle.js
// export function area(radius) {
//     return Math.PI * radius * radius;
// }

// export function circumference(radius) {
//     return 2 * Math.PI * radius;
// }

// //现在加载这个模块
// import { area, circumference } from './circle';
// console.log('圆面积：' + area(4))
// console.log('圆周长：' + circumfenence(14))


// //上面写法时逐一指定要加载的方法，整体加载的方法如下。
// import * as circle from './circle';

// console.log('圆面积：' + circle.area(4))
// console.log('圆周长：' + circle.circumference(14))

// //* 注意，模块整体加载所在的那个对象，应该时可以静态分析的，所以不允许运行时改变。

// //下面两行都是不允许的
// // circle.foo = 'hello';
// // circle.area = function() {}




// //6.export  default命令
// //从前面的例子可以看出，使用import命令的时候，用户需要知道所要加载的变量名或函数名，否则无法加载。
// //但是，用户肯定希望快速上手，未必愿意阅读文档，去了解模块有哪些属性和方法。

// //为了给用户提供方便，让它们不用阅读文档就能加载模块，就要用到export default命令，为模块指定默认输出。

// export default function() {
//     console.log('foo')
// }
// //上面代码时一个模块文件，他的默认输出时一个函数。

// //其他模块加载该模块时，import命令可以为该匿名函数指定任意名字。

// import customName from './export-default'
// customName()

// //上面代码的import命令，可以用任意名称指向export-default.js输出的方法，这是就不需要知道原模块输出的函数名。
// //需要注意的时，这时import命令后面，不使用大括号。

// //export default命令用在非匿名函数前，也是可以的
// export default function foo() {

// }

// //或者写成
// function foo() {}
// export default foo;
// //上面代码中，foo函数的函数名foo,在模块外部时无效的。加载的时候，视同匿名函数加载。


// //第一组
// export default function crc32() {} 
// //输出
// import crc32 from 'crc32'
// //输入

// //第二组
// export function crc32() {}
// //输出
// import { crc32 } from 'crc32'
// //输入

// //上面代码的两组写法，第一组时使用export default时，对应的import语句不需要使用大括号，
// //第二组时不适用export default时，对应的import语句需要使用大括号。

// //export default 命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。
// //所以，import命令后面才不用加大括号，因为只可能唯一对应export default命令。

// //本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。所以，下面写法是有效的。

// //modules.js
// function add(x, y) {
//     return x * y;
// }
// export { add as default }
// //等同于
// //export default add

// //app.js
// import { default as foo } from 'modules'
// //等同于
// //import foo froom 'moudules

// //正是因为export default命令其实只是输出一个叫做default的变量，所以它后面不能跟变量声明语句。


// //正确
// export var a = 1;

// //正确
// var a = 1;
// export default a;

// //错误
// export default var a = 1;
// //上面代码中，export default a的含义是将变量a的值赋给变量default 。所以，最后一种写法会报错。

// //同样地，因为export default命令的本质是将后面的值，赋给default变量，所以可以直接将一个值写在export default 之后。

// //正确
// export default 42;

// //报错
// export 42;

// //上面代码中，后一句报错是因为i没有指定对外的接口，而前一句指定对外接口为default。

// //有了export default 命令，输入模块时就非常直观了，以输入loadsh模块为例。

// import _ from 'loadsh';

// //如果想在一条import 语句中，同时输入默认方法和其他接口，可以写成这样。
// import _, { each, forEach } from 'loadsh';

// //对应上面代码的export语句如下。
// export default function (obj) {}

// export function each(obj, iterator, context) {}

// export { each as  forEach}

// //7.export 与 import 的复合写法














//8.模块的继承


//9.跨模块常量


//10.import()






























