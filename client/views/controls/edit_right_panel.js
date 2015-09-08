Template.editRightPanel.events({
    'submit form': function(e) {
        e.preventDefault();
        var user = Meteor.user().username;
        var screenName = {
            username: user,
            screen_name: $('#screenName').val()
        };

        screen._id = Screens.insert(screenName);
        //Router.go('postPage', post);
        console.log ('insert screen');
        console.log (screenName);
        var b = $('#screenNameDiv');
        console.log (b);
        $('#screenNameDiv').hide();
        $('#screenName').val('');
        //$('#createScreenButton').html('Add new screen');
    }
});

Template.editRightPanel.events({
    'change #screensList' : function(e){
        var current_screen = $('#screensList').val();
        $("#currentScreen").empty();
        $("#currentScreen").append(current_screen);

    }
});

Template.editRightPanel.helpers({
    screens: function() {
        return Screens.find();
    }
});
