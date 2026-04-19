const http = require("http");

function add(a, b) {
  return a + b;
}

// 👇 ONLY start server if file is run directly
if (require.main === module) {
  http.createServer((req, res) => {
    res.end("Hello from Jenkins CI/CD 🚀");
  }).listen(3000, () => {
    console.log("Server running on port 3000");
  });
}

module.exports = { add };
