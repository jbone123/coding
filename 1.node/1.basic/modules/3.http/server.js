const http = require("http");
const port = "8889";
const host = "localhost"; // 127.0.0.1  回环地址
// req request res response 相应内容的能力
let count = 0;
let index = `
    <h1>神奇的网站</h1>
    <p>你在这里可以找到最不靠谱的预测</p>
`;
let requestListener = (req, res) => {
  count++;
  console.log(count);
  console.log(req.method); // 请求方法
  console.log(req.url); // 请求地址，得知用户请求的内容
  console.log(req.headers); // 请求头
  //相应头
  //   res.setHeader('');
  res.statusCode = 200;
  res.setHeader("content-type", "text/html;charset=utf8"); // plain无格式的
  // 给相应内容中写入信息
  res.write("你好啊nodejs");
  //   制定相应结束 end之后此次相应结束
  res.end("你好啊");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log("server running");
});
