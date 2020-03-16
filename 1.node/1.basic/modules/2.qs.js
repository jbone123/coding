const qs = require("querystring");
let str = "a=1&b=2";
let obj = qs.parse(str);
console.log(obj);

let str2 = "city=北京";
str2 = qs.escape(str2);
console.log(qs.unescape(str2));
