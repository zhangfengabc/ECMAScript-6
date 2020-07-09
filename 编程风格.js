//1. 块级作用域
//所有的函数都应该设置为常量


//2.字符串
//静态字符串一率使用单引号或反引号，不使用双引号。动态字符串使用反引号。

//bad
// const a = "foobar";
// const b = 'foo' + a + 'bar';

//good
const a = 'foobar';
const b = `foo${a}bar`