const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

// app.use((req, res, next) => {

//     res.render('under_const.hbs')

// });

hbs.registerHelper('getCurrentYear',() => {
    return new Date().getFullYear();
    
});

app.get('/', (req, res) => {
//  res.send('<h1>Hello Express</h1>');
res.render('home.hbs', {
    pageTitle: 'Greeting Page111',
    
    greet: "Wellcome to my page"
})
});

app.get('/about', (req, res)=> {
 res.render('about.hbs', {
     pageTitle: 'About Page'
 })
});

// app.get('/bad', (req,res) => {
//     res.send( {
//         error: "Unable to fulfill this request"
//     })
// })
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});