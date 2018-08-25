const express = require('express');
// requiring body-parser middleware for express to use
const bodyParser = require('body-parser');

let PORT = process.env.PORT || 8080;

const app = express();

// telling express to use the static method w/ public so we can use our public js and css files
app.use(express.static('public'));

// telling express to use the bodyparser middleware w/ json
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// requiring express-handlebars engine
let exphbs = require('express-handlebars');

// setting express to use handlebars as its templating engine and setting our default layout to main.handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// requiring our routes established in the burger controller
let routes = require('./controllers/burgers_controller');

// telling express to use the routes we created
app.use(routes);

app.listen(PORT, function() {
    console.log('listening on localhost ' + PORT);
})
