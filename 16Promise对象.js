//Promise对象

//1.Promise 的含义

//Promise对象有以下两个特点。





//2.基本用
// const promise = new Promise(function(resolve, reject) {
//     //.... some code
//     if(/*异步操作成功*/) {
//         resolve(value)
//     } else {
//         reject(error)
//     }
// })

//Promise构造函数接受一个函数作为参数，该函数的两个参数分别时resolve和reject。
//它们时两个函数，由JavaScript引擎提供，不用自己部署。


//resolve函数的作用时，将Promise对象的状态从  未完成 变为 成功 （即从pending 变为 resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
//reject函数的作用是，将Promist对象的状态从  未完成 变为  失败 （即从pending 变为 rejected）, 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

//Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数。

// promise.then(function(value) {
//     //success
// }, function(error) {
//     //failure
// })

//then方法可以接受两个回调函数作为参数。 第一个回调函数是Promise对向的状态变为resolved时调用，第二个回调函数是Promise对象的状态变为rejected时调用。
//其中，第二个函数时可选的，不一定要提供，这两个函数都接受Promise对象传出的值作为参数。

//下面是一个Promise对象的简单例子

// function timeout(ms) {
//     return new Promise((resolve, reject) = > {
//         setTimeout(resolve, ms, 'done')
//     })
// }

// timeout(100).then((value) => {
//     console.log(value)
// })

//上面代码中， timeout方法返回一个Promise实例，表示一段时间以后才会发生的结果。过了指定的时间（ms参数）以后，Promise实例的状态变为resolved,就会触发then方法
//绑定的回调函数。





//Promise新建后就会立即执行。
let promise = new Promise(function(resolve, reject) {
    console.log('Promise')
    resolve()
})

promise.then(function() {
    console.log('resolved')
})
console.log('Hi')

// Promise
// Hi
// resolved

//上面代码中，Promise新建后立即执行，所以首先输出的是Promise。然后，then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以resolved最后输出。



//下面是异步加载图片的例子
function loadImageAsync(url) {
    return new Promise(function(resolve, reject) {
        const image = new Image();

        image.onload = function() {
            resolve(image)
        }

        image.onerror = function() {
            reject(new Error('Could not load image at' + url))
        }
        image.src = url;
    })
}

//上面代码中，使用Promise包装了一个图片加载的异步操作。如果加载成功，就调用resolve方法，否则就调用reject方法。

//下面是一个用Promise对象实现的Ajax操作的例子。
const getJSON = function(url) {
    const promise = new Promise(function(resolve, reject) {
        const handler = function() {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                resolve(this.response)
            } else {
                reject(new Error(this.statusText))
            }
        }
        const client = new XMLHttpRequest();
        client.open('GET', url);
        client.onreadystatechange = handler;
        clearInterval.responseType = 'json';
        client.setRequestHeader("Accept","application/json");
        client.send();
    })
    return promise;
}

getJSON("/posts.json").then(function(json) {
    console.log('Contests:' + json)
}, function(error) {
    console.log('出错了', error)
})



//上面代码中，getJSON 是针对XMLHttpRequest对象的封装，用于发生一个针对JSON 数据的HTTP请求，并且返回一个Promise对象。需要注意的是，在getJSON内部，
//resolve函数和reject函数调用时，都带有参数。

//如果调用resolve函数和reject函数时带有参数，那么它们的参数回被传递给回调函数。
//reject函数的参数通常时Error对象的实例，表示抛出错误；
//resolve函数的参数除了正常的值以外，还可以时另一个Promise实例，比如像下面这样。


const p1 = new Promise(function(resolve, reject) {

})
const p2 = new Promise(function(resolve, reject) {
    resolve(p1)
}

//上面代码中，p1和p2都是Promise的实例，但是p2的resolve方法将p1作为参数，即一个异步操作的结果时返回另一个异步操作。

//* 这时p1的状态就会传递给p2,也就是说，p1的状态决定了p2的状态。如果p1的状态是pending,那么p2的回调函数就会等待p1的状态改变；如果p1的状态已经是resolved或者rejected,
//那么p2的回调函数就会立即执行。








const p1 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('fail')), 3000)
})


const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(p1), 1000)
})




p2
    .then(result => console.log(result))
    .catch(error => console.log(error))


//上面代码中，p1是一个Promise，3s之后变为rejected。p2的状态在1秒之后改变，resolve方法返回的是p1。
//由于p2返回的是另一个Promise,导致p2直接的状态无效了，由p1的状态决定p2的状态。
//所以，后面的then语句都变成针对后者（p1）。 又过了2秒。p1变为rejected。导致触发catch方法指定的回调函数。



//注意，调用resolve或reject并不会终结Promise的函数的执行

new Promise((resolve, reject) => {
    resolve(1)
    console.log(2)
}).then(r => {
    console.log(r)
})

//2
//1

//上面代码中，调用resolve（1）以后，后面的console.log(2)还是回执行，并且会首先打印出来。这是因为立即resolved的Promise是在本轮事件循环的末尾执行，
//总是晚于本轮循环的同步任务。

//一般来说，调用resolve 或 reject 以后， Promise的使命就完成了，后续操作应该放到方法里面，而不应该直接写在resolve或reject的后面。
//所以，最好在它们前面加上return 语句，这样就不会有意外。

new Promise((resolve, reject) => {
    return resolve(1);
    //后面的语句不会执行
    console.log(2)
})






//3.Promise.prototype.then()
//Promise实例具有then方法，也就是说，then方法是定义在原型对象promise.prototype上的，它的作用是为Promise实例添加状态改变时的回调函数。
//then方法的第一个参数时resolved状态的回调函数，第二个参数（可选）时rejected状态的回调函数。



//then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

getJSON("/posts.json").then(function(json) {
    return json.post;
}).then(function(post) {

})

//上面的代码使用then方法，依次指定了两个回调函数。第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数。

//采用链式的then,可以指定一组按照次序调用的回调函数。这时，前一个回调函数，有可能返回的还是一个Promise对象（即有异步操作），
//这时后一个回调函数，就回等待该Promise对象的状态发生变化，才会被调用。




getJSON("/post/1.json").then(function(post) {
    return getJSON(post.commentURL)
}).then(function (comments) {
    console.log('resolved:', comments)
}, function(err) {
    console.log('rejected:', err)
})

//上面代码中，第一个then方法指定的回调函数，返回的时另一个Promise对象。这时，第二个方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。
//如果变为resolved，就会调用第一个回调函数，如果状态变为rejected，就调用第二个回调函数

//如果采用箭头函数，上面的代码就可以变得更简洁

getJSON("/post/1.json").then(
    post => getJSON(post.commentURL)
).then(
    comments => console.log('resolved', comments),
    err => console.log('rejected:', err)
)


//4.Promise.prototype.catch()

//Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
getJSON('/posts.json').then(function(posts) {
    //
}.catch(function(error) {
    console.log('发生错误！', error)
}))

//上面代码中，getJSON()方法返回一个Promise对象，如果该对象状态变为resolved，就会调用then()方法指定的回调函数；
//如果异步操作抛出错误，状态就回变成rejected,就会调用catch方法指定的回调函数，处理这个错误。
//另外，then()方法指定的回调函数，如果运行中抛出错误，也会被catch()方法捕获。



p.then((val) => console.log('fulfilled', val))
  .catch((err) => console.log('rejected', err))

//等同于
p.then((val) => console.log('fulfilled', val))
  .then(null, (err) => console.log('rejected', err))



//5.Promise.prototype.finally()

//6.Promise.all()

//Promise.all()方法用于将多个Promise实例，包装成一个新的Promise实例。
const p = Promise.all([p1, p2, p3])
//上面代码中，Promise.all()方法接受一个数组作为参数，p1、p2、p3都是Promise实例，如果不是，就会调下面讲到的Promise.resolve方法，
//将参数转为Promise实例，再进一步处理。
//另外，Promise.all()方法的参数可以不是数组，但必须具有Iterator接口，且返回的每个成员都是Promise实例。

//7.Promise.race()

//8.Promise.allSettled()

//9.Promise.any()

//10.Promise.resolve()

//11.Promise.reject()

//12.应用

//加载图片
//我们可以将图片的加载写成一个Promise,一旦加载完成，Promise的状态就发生变化
const preloadImage = function (path) {
    return new Promise(function (resolve, reject) {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    })
}


//13.Promise.try()



