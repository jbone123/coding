/**
 * @param source 文件的原内容
 */
const path = require("path");
const loaderUtils = require("loader-utils");
const schemaUtils = require("schema-utils");
module.exports = function(source) {
  // console.log(this);
  // let callback = this.async();
  // setTimeout(() => {
  //   callback(null, source); //异步
  // }, 2000);
  // console.log("logging");
  return source;
  // this.callback(null, source);  // 这样写报错
};
