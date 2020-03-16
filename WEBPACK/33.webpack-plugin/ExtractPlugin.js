/**
 * 也可以理解为简版的tree-shaking
 * 解析导入哪些模块，然后把哪些模块给干掉
 */

let babel = require("babel-core");
let types = require("babel-types");

let visitor = {
  ImportDeclaration(path) {
    let node = path.node;
    let specifiers = node.specifiers;
    if (!types.isImportDefaultSpecifier(specifiers[0])) {
      let newspecifiers = specifiers.map(specifier);
    }
  }
};

let code = ``;
let r = babel.transform(code, {
  plugins: [{ visitor }]
});
console.log(r.code);
