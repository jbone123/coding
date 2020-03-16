/**
 * babel插件
 */
let core = require('babel-core')
let types = require('babel-types')
let code = `const result = 1000*60*60*24*365`
// 预计算
let visitor = {
    BinaryExpression(path) {
        console.log(path)
    }
}
