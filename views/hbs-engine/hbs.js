const exphbs  = require('express-handlebars');
const path = require('path');


// const hbs = exphbs.create({
module.exports = exphbs.create({
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(
        __dirname, '../tmpl-default/'
    ),
    partialsDir: path.join(
        __dirname, '../tmpl-parts/'
    ),
    extname: '.hbs'
});
// console.log(hbs);
// module.exports = hbs;