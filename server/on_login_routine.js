Accounts.onLogin(function(user){
    console.log(user.user._id);
    console.log(user.user.username);
    var username = user.user.username;
    var screen_collection = (username + '_screens');
    var control_collection = (username + '_controls');
    if (!Checks.findOne(username)) {
        Checks.insert({username: true});

        ScreenCollection = new Mongo.Collection(screen_collection);
        ControlCollection = new Mongo.Collection(control_collection);

        ScreenCollection.insert({
            screen: 'test_screen',
            screen_name: 'test_screen'
        });
        ControlCollection.insert({
            control: 'sample_control',
            control_type: 'button',
            width: 2,
            height: 2,
            top: 2,
            left: 3,
            text:'Press me'
        });
    }

    screen = ScreenCollection.findOne({screen: 'main_screen'});
    control = ControlCollection.findOne({control: 'sample_control'});
    console.log('test');
    console.log(screen);
    console.log(control);
});
