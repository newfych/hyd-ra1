Accounts.onLogin(function(user){
    console.log(user.user._id);
    console.log(user.user.username);
    var username = user.user.username;
    if (!Checks.findOne({username: username})) {
        Checks.insert({username: username, status: true});
        Screens.insert({
            username: username,
            screen_name: 'Main'
        });
        Controls.insert({
            username: username,
            control: 'sample_control',
            control_type: 'button',
            width: 2,
            height: 2,
            top: 2,
            left: 3,
            text:'Press me'
        });
        console.log('test for user data bases');
    }
    screens = Screens.find({username: username});
    controls = Controls.find({username: username});
    if(Meteor.isServer) {
        Meteor.publish('Screens', function () {
            return Screens.find({username: username});
        });
        Meteor.publish('Controls', function () {
            return Controls.find({username: username});
        });
        console.log ('Collections PUBLISHED (onloginroutine)')
    }
});

