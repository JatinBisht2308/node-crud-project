const app = require("./app");
const http = require("http");
const server = http.createServer(app);
if(process.env.NODE_ENV !== "production")
{
    require("dotenv").config();
}
// if there is PORT in .env then we will use this else we use 3000 as port number
const port = process.env.PORT || 3000;

server.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})
