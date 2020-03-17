let less = require("less");

module.exports = function(source) {
  less.render(source, (err, res) => {
    console.log(res.css);
    this.callback(err, res.css);
  });
};
