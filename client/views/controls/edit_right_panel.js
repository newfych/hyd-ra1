Template.editRightPanel.events({
    'submit #screen-name-form': function(e) {
        e.preventDefault();
        var user = Meteor.user().username;
        var screenName = {
            username: user,
            screen_name: $('#screenName').val()
        };
        Screens.insert(screenName);
        $('#screenNameDiv').hide();
        $('#screenName').val('');
    },
    'submit #screen-delete-form': function(e) {
        e.preventDefault();
        var current_screen = $('#screensList').val();
        console.log(current_screen)
        var currentScreenId = Screens.findOne({screen_name: current_screen})._id;
        Screens.remove(currentScreenId);
        $('#screenDeleteDiv').hide();
    }
});

Template.editRightPanel.events({
    'click #cancel-delete-screen' : function(e){
        var current_screen = $('#screensList').val();
        $("#screenDeleteDiv").style.display='block';
    }
});

Template.editRightPanel.events({
    'change #screensList' : function(e){
        //if (confirm("Delete this screen?")) {
            var current_screen = $('#screensList').val();
            $("#currentScreen").empty();
            $("#currentScreen").append(current_screen);
        //}
    }
});

Template.editRightPanel.helpers({
    screens: function() {
        return Screens.find();
    },
    controls: function() {
        return Controls.find();
    }
});
