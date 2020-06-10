// javaScript有三种数据存储方式，分别是：

// sessionStorage

// localStorage

// cookier

// 相同点：都保存在浏览器端，同源的

// 不同点：

// ①传递方式不同

// cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。

// sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

// ②数据大小不同

// cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。
// 存储大小限制也不同，cookie数据不能超过4k，同时因为每次http请求都会携带cookie，所以cookie只适合保存很小的数据，如会话标识。

// sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

// ③数据有效期不同

// sessionStorage：仅在当前浏览器窗口关闭前有效，自然也就不可能持久保持；

// localStorage：始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据；

// cookie只在设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭。

// ④作用域不同

// sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；

// localStorage 在所有同源窗口中都是共享的；

// cookie也是在所有同源窗口中都是共享的。

// Web Storage 支持事件通知机制，可以将数据更新的通知发送给监听者。
// Web Storage 的 api 接口使用更方便。








// cookie: cookie 确实非常小，它的大小限制为[4KB]左右；数据的生命期是关闭浏览器后失效；安全性一般。
// sessionStorage: 用于临时保存同一窗口(或标签页)的数据，刷新页面数据依旧存在，在[关闭窗口或标签页之后]将会删除这些数据。生命周期是仅在当前会话下有效，关闭页面或浏览器后被清除；大小可以达到5m或更大；安全性更优。
// localStorage
// 大小可以达到5m或更大；储存持久数据，浏览器关闭后数据不丢失除非主动删除数据








