// import jquery from 'jquery'
// import moment from 'moment'

// //设置语言
// //moment.locale('zh-cn');
// //自己手动引入所需要的语言
// import 'moment/locale/zh-cn' //手动引入中文包


// let r = moment().endOf('day').fromNow(); 
// console.log(r);


// import React from 'react';
// import {render} from 'react-dom';

// render(<h1>jsx</h1>,window.root)


// function ajax(url=new Error('url不能为空'),method='get',dataType='json'){
//     console.log(url)
//     console.log(method)
//     console.log(dataType)
// }
// ajax('/user','post')  //默认参数

function sum(prefix,...rest){ //...rest 代表一个数组
    //1.循环求和
    let result = 0;
    //循环数组中的每一个元素，把他们依次传入对应的函数
    rest.forEach(function(item){
        result += item
    })
    //reduce: 计算  汇总 收敛  把一个数组中的一堆值计算出来一个值
    return prefix + result
}
console.log(sum('$',1,2,3,4))


let arr4=[1,2,3];
//可以传一个参数，也可以传2个参数
arr4.reduce(function(val,item,index,origin){

},0)

//展开运算符  相当于把数组中的每个元素展开放在那里
let arr5 = [1,2,3]
let arr6 = [4,5,6]
let arr7 = [...arr5,...arr6]
console.log(arr7)

let max = Math.max(1,2,3)
console.log(max)

let max3 = Math.max.call()
let max2 = Math.max.apply(null,arr6)

let max4 = Math.max(...arr6)
console.log(max4)


let obj1= {name:'1'}
let obj2 = {age:2}
let obj3 = {}
// 1.循环赋值
// for(let key in obj1){
//     obj3[key] = obj1[key]
// }
// for(let key in obj2){
//     obj3[key] = obj2[key]
// }

// assign  
//参数1 是target ,后面都是来源对象
// Object.assign(obj3,obj1,obj2)
//对象的解构   
obj3 = {...obj1,...obj2}
console.log(obj3)


let obj5 = {name:'1',home:{
    city: 'beijing'
}}
let obj6= {}
obj6=Object.assign(obj6,obj5)


