/**
 * @param source 文件的原内容
 */
const path = require("path");
module.exports = function(source) {
  console.log("logging");
  // return source;
  this.callback(null, source);
};
