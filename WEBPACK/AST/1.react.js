// babel核心库，用来实现核心的转换引擎
let babel = require('babel-core')
//可以实现类型判断，可以实现ast零部件
let types = require('babel-types')
let code = `let sum =(a,b)=>{a+b} `
