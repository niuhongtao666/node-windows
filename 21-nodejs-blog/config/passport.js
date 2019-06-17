var LocalStrategy = require('passport-local').Strategy;
var User=require('../models/user');
let bcrypt=require('bcrypt');
module.exports=function(passport){
    passport.use(new LocalStrategy(
        function(username, password, done) {
          User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            // if (!user.validPassword(password)) {
            //   return done(null, false, { message: 'Incorrect password.' });
            // }
            bcrypt.compare(password,user.password,function(err, isMatch) {
                // res == true
                if (err) { return done(err); };
                if(isMatch){
                    return done(null, user);
                }else{
                    return done(null, false, { message: 'Incorrect password.' });
                }
            });
          });
        }
      ));
      passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
};
