var serviceAccount = require('C:/Users/Пользователь/Desktop/Practic/users-82e13-firebase-adminsdk-xgcr1-c0080a14e5.json');
var admin = require('firebase-admin')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://users-82e13.firebaseio.com'
});
const fs = require("fs")
var helpers = require('handlebars-helpers')(['object']);

var ref= admin.database().ref('Users')
exports.ref;
var userRef=ref;
exports.addUser = function (request, response){
    response.render("create.hbs");

};

var user  = []
exports.getUsers = function(request, response){
    userRef.on('value',function(snapshot)
    {
        user=snapshot.val()
        response.render("users.hbs", {
            users: user,
            sf:fs
        })
    })
    }

    var users  = []
exports.getmap = function(request, response){
    userRef.on('value',function(snapshot)
    {
        users=snapshot.val()
        response.render("map.hbs", {
            allUsers: users,
            testVar:encodeURIComponent(JSON.stringify(users))
        })
    })
    }
exports.postUser= function(request, response){ 
 
 userRef.push(
    {
        name :request.body.phone,
        age : request.body.pass,
        coords:{
        lat: request.body.lat,
        lng: request.body.lng
        }
    }
)

    response.redirect("/");
};