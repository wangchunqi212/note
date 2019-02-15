const proxy = require("http-proxy-middleware");

module.exports = (app)=>{
    app.use("/api",proxy({
        target:"http://bookstoreapi.shuqireader.com",
        changeOrigin:true,
        pathRewrite:{
            "^/api":""
        }
    }))
}