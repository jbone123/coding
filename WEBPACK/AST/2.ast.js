let esprima = require('esprima')
let estraverse = require('estraverse')
let escodegen = require('escodegen')

let code = `function ast(){}`
let ast = esprima.parse(code)//把源码转换为ast
estraverse.traverse(ast, {
    enter(node) {
        console.log('enter', node.type)
        if (node.type == 'Identifier') {
            node.name += '_enter'
        }
    },
    leave(node) {
        console.log('leave', node.type)
        if (node.type == 'Identifier') {
            node.name += '_leave'
        }
    }
})
let resultast = escodegen.generate(ast) //重新生成后的代码
console.log(resultast);

