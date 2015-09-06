Accounts.onLogin(function(user){
    console.log(user.user._id);
    console.log(user.user.username);
    var username = user.user.username;
    var screen_collection = (username.toString + '_screens');
    var control_collection = (username.toString + '_controls');
    if (!Checks.findOne(username)) {
        Checks.insert({username: true});
        ScreenCollection = new Mongo.Collection(screen_collection);
        ControlCollection = new Mongo.Collection(control_collection);
}
    ScreenCollection.insert({
        screen: 'main_screen',
        main_screen: 'main_screen'
    });
    ControlCollection.insert({
        control: 'sample_control',
        control_type: 'second_control'
    });
    screen = ScreenCollection.findOne({screen: 'main_screen'});
    control = ControlCollection.findOne({control: 'sample_control'});
    console.log('test');
    console.log(screen);
    console.log(control._id);
});
