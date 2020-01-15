const express = require('express');
const app = express();



app.use( express.urlencoded({ extended : true }) )
app.use( express.json() )
app.use( express.static('./public/') )


const hbs = require('./views/hbs-engine/hbs.js');
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')



const apiRoutes = require('./controllers/apiRoutes.js');
const hbsRoutes = require('./controllers/hbsRoutes.js');
app.use('/api', apiRoutes)
app.use('/', hbsRoutes)



const PORT = 5000;
const connection = require('./config/connection.js');

connection.authenticate()
.then( _ => console.log('Database Connected — ✓') )
.catch( err => console.log(`Err: ${err}`) )

connection.sync().then( _ => {
    app.listen(PORT, _ => {
        console.log(
            `Test Server — http://localhost:${PORT}`
        )
    })
})