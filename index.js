const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')
var multer = require('multer');
const pwdGen = require('./utils/pwdGen')
var upload = multer();
app = express()

var bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.engine('ejs', ejsMate);
app.use(upload.array());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.render('home')
})

app.post('/password', (req, res, next) => {
    const { pwdLen, wAlp, wNum, wSpec } = req.body;
    const newPassword = pwdGen.passWordGen(pwdLen, wAlp, wNum, wSpec)
    res.json({ 'pwd': newPassword })

})

app.listen(3000, () => {
    console.log('Listening on port 3000')
})