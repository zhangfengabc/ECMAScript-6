//字符串
//1.字符的Unicode表示法
console.log('\u0061')   //a


for(let codePoint of 'foo'){
    console.log(codePoint)
}
// f
// o
// o
//5.模板字符串
//普通字符串
let a1 = `In Javascript '\n' is a line-feed`
//多行字符串
let a2 = `In Javascript this is not legal.
`
//字符串中嵌入变量
let name = 'Bob', time = "today";
let str = `Hello ${name}, hao are you ${time}`
console.log(str)  //Hello Bob, hao are you today




let greeting =  `\` Yo \` World!`
console.log(greeting)  //` Yo ` World!
//如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
//如果使用模板字符串表示多行字符串，所有的空格和缩进都会保留在输出之中。
//模板字符串中嵌入变量，需要将变量名写在${}之中
//大括号内部可以放入任意的Javascript表达式，可以进行运算，以及引用对象属性。

//5.实例方法： includes(), startsWidth(), endsWith()
//传统上，Javascript只有indexOf方法，可以用来确定一个字符串是否包含在另一个字符串中
//ES6又提供了三种新方法：
//includes() : 返回布尔值，表示是否找到了参数字符串
//startsWith()  返回布尔值，表示参数字符串是否在原字符串的头部
//endsWith() 返回布尔值，表示参数字符串是否在原字符串的尾部

let s = 'Hello world!'

console.log(s.startsWith('Hello')) //true
console.log(s.endsWith('!')) //true
console.log(s.includes('Hello')) //true

//这三个方法都支持第二个参数，表示开始搜索的位置
console.log(s.startsWith('world', 6)) // true
console.log(s.endsWith('Hello', 5)) // true
console.log(s.includes('Hello'), 6) // false
//上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。


//6.实例方法： repeat()
//repeat方法返回一个新字符串，表示将源字符串重复n次。

console.log('x'.repeat(3))  //xxx
console.log('hello'.repeat(2)) //hellohello
console.log('na'.repeat(0)) // 
console.log('na'.repeat(2.9)) //nana
//如果参数是小数，会被取整
//console.log('na'.repeat(Infinity)) //Invalid count value
//console.log('na'.repeat(-1)) //Invalid count value
//如果repeat的参数是负数或者Infinity，会报错
console.log('na'.repeat(-0.9)) //
//但是，如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0；
console.log('na'.repeat(NaN)) //
//参数NaN等同于0
console.log('na'.repeat('na')) //
//如果repeat的参数是字符串，则会先转换成数字

//7.实例方法： padStart(), padEnd()
//ES2017引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全，
//padStart() 用于头部补全
//padEnd() 用于尾部补全
console.log('x'.padStart(5,'01')) //0101x
console.log('x'.padStart(4,'ab')) //abax

console.log('x'.padEnd(5,'ab'))  //xabab
console.log('x'.padEnd(6, 'ab'))  //xababa
//上面代码中，padStart()和padEnd()一共接受两个参数，第一参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串


console.log('xxx'.padStart(2, 'ab')) //xxx
console.log('xxx'.padEnd(2,'ab'))  //xxx
console.log('abc'.padStart(10, '0123456789')) //0123456abc

//如果用来补全的字符串与原字符串，两者的长度之和超过了最大长度，则会截去超出位数的补全字符串


console.log('x'.padStart(4)) //   x
console.log('x'.padEnd(4)) //x   

//如果省略第二个参数，默认使用空格补全长度。
//padStart()的常见用途是为数值补全指定的位数， 下面代码生成10位的数值字符串
 console.log('1'.padStart(10,'0')) //0000000001
 console.log('12'.padStart(10,'0')) //0000000012
 console.log('123456'.padStart(10,'0')) //0000123456

 //另一个用途是提示字符串格式
 console.log('12'.padStart(10,'YYYY-MM-DD'))  //YYYY-MM-12
 console.log('09-12'.padStart(10,'YYYY-MM-DD'))  //YYYY-09-12


//8.实例方法： trimStart(), trimEnd()
//ES2019对字符串实例新增了trimStart()和trimEnd()这两个方法。他们的行为与trim()一致，
//trimStart() 消除字符串头部的空格，trimEnd()消除尾部的空格。它们返回的都是新字符串，不会修改原始字符串
const st = '    abc    ';
console.log(st.trim()) //abc   "abc"
console.log(st.trimStart()) //abc   "abc  "  
console.log(st.trimEnd()) //    abc  "  abc"

//上面代码中，trimStart()只消除头部的空格，保留尾部的空格，trimEnd()也是类似的行为
//除了空格键，这两个方法对字符串头部（或尾部）的tab键、换行符等不可见的空白符也有效，
//浏览器还部署了额外的两个方法，trimLeft()是trimStart()的别名，trimRight()是trimEnd的别名

//9。实例方法：matchAll()
//matchAll() 方法返回一个正则表达式在当前字符串的所有匹配





























