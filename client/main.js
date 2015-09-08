Accounts.onLogin(function(user){
    Meteor.subscribe('Screens');
    Meteor.subscribe('Controls');
    console.log('CLIENT SUBSCRIBE TEST IN MAIN');
});

