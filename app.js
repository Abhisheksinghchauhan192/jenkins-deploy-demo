const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {
  res.end("Hello from Jenkins CI/CD 🚀");
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

function add(a,b){
        return a+b;
}
module.exports ={add};
