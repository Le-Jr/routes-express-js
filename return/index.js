const express = require('express')
const path = require('path')
const router = express.Router()

const pathBegin = path.join(__dirname,'../templates')



router.get("/teste", (req, res)=>{
    res.sendFile(`${pathBegin}/return.html`)
})

router.get("/", (req, res)=>{
    res.sendFile(`${pathBegin}/index.html`)
})


module.exports = router