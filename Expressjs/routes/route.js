const router = require('express').Router();
const path = require('path')
router.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname) + '/index.html'); //__dirname gives complete path of current folder
})

router.get('/about', (req, res) =>{
    res.sendFile(path.resolve(__dirname) + '/about.html'); //__dirname gives complete path of current folder
})

router.get('/download', (req, res) =>{
    res.download(path.resolve(__dirname) + '/about.html'); //__dirname gives complete path of current folder
})

module.exports = router;