const res = require('express/lib/response');

const router = require('express').Router();

router.post("/",(req,res)=>{
    res.send(`API is working now, YAAY!!`)
})

module.exports = router;