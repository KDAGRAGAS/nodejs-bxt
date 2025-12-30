const express = require('express');
import 'dotenv/config';
import webRouter from "./routes/web";
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine','ejs');
app.set('views', __dirname + '/views');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

webRouter(app);
// app.get('/', (req, res) => {
//     res.send('Hello World! dasdas');
// })
// app.get('/home', (req, res) => {
//     res.render('home',{title:'Hey', message:'Hello there'});
// })
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
    console.log("env port ",process.env.PORT);
})

