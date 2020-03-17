// 创建一个style标签，并插入页面中

module.exports = function(source) {
  let script = `
    let style =document.createElement('style');
    style.innerText=${JSON.stringify(source)};
    document.head.appendChild(style);
  `;
  return script;
};
