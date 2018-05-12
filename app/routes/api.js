var config = require('../../config');
var secretKey = config.secretKey;


module.exports = function(app, express, io) {
    /* body... */
    var api = express.Router();


    var test = [{
            "City": "Berlin",
            "Country": "Germany",
            "Name": "Alfreds Futterkiste"
        }, {
            "City": "México D.F.",
            "Country": "Mexico",
            "Name": "Ana Trujillo Emparedados y helados"
        },

        {
            "City": "México D.F.",
            "Country": "Mexico",
            "Name": "Antonio Moreno Taquería"
        }, {
            "City": "London",
            "Country": "UK",
            "Name": "Around the Horn"
        },

        {
            "City": "London",
            "Country": "UK",
            "Name": "B's Beverages"
        },

        {
            "City": "Luleå",
            "Country": "Sweden",
            "Name": "Berglunds snabbköp"
        }
    ]
    api.post('/free', function(req, res) {

        res.json(test);
        /*var user = new User({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });
        var token = createToken(user);
        user.save(function(err) {
            
            if (err) {
                res.send(err);
                return;
            }
            res.json({
                success: true,
                token: token,
                message: 'User been created'
            });
        });*/
    })


    return api;
};