const jsdom = require("jsdom");  // 引入 jsdom
const { JSDOM } = jsdom;  // 引出 JSDOM 类， 等同于 JSDOM = jsdom.JSDOM
const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
const resourceLoader = new jsdom.ResourceLoader({
  userAgent: userAgent
});
let dom = new JSDOM(``, {
    userAgent: userAgent,
    url: "https://example.org/",
    referrer: "https://example.com/",
t });
window = dom.window
console.log(window.navigator.userAgent)
dom = new JSDOM(``, {
    url: "https://example.org/",
    referrer: "https://example.com/",
   resources: resourceLoader,
});
window = dom.window
console.log(window.navigator.userAgent)