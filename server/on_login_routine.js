Accounts.onLogin(function(user){
    var username = user.user.username;
    if (!Checks.findOne({username: username})) {
        Checks.insert({username: username, status: true});
        Screens.insert({
            username: username,
            screen_name: 'Main'
        });
        var screen_id = Screens.findOne({
            username: username,
            screen_name: 'Main'})._id;
        Controls.insert({
            username: username,
            screen: screen_id,
            control_name: 'test_button',
            control_type: 'button',
            text:'Press me',
            width: 3,
            height: 1
        });
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

