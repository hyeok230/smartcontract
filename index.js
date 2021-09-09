let express = require('express');
let app = express();
let router = require('./router/main')(app);
// 이 문법이 반드시 있어야 heroku에서 사용이 가능함
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

let server = app.listen(port, function(){
    console.log("Express server has started on port "+ port)
});
