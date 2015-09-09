divs = ['#create-screen-div', '#delete-screen-div'];

Template.editRightPanel.events({
    'click #create-screen-button' : function(e){
        hideDivs('#create-screen-div');
    },
    'click #cancel-create-screen' : function(e){
        var current_screen = $('#screens-list').val();
        $("#create-screen-div").hide();
    },
    'click #delete-screen-button' : function(e){
        hideDivs('#delete-screen-div');
    },
    'click #cancel-delete-screen' : function(e){
        var current_screen = $('#screens-list').val();
        $("#delete-screen-div").show();
    }
});

function hideDivs(except_div){
    for (var i in divs){
        //var div = $(i);
        if (divs[i] == except_div) {
            $(divs[i]).toggle();
            $('#create-screen-input').focus();
        } else {
            $(divs[i]).hide();
        }
    }
};

Template.editRightPanel.events({
    'submit #create-screen-form': function(e) {
        e.preventDefault();
        var user = Meteor.user().username;
        var screen_name = {
            username: user,
            screen_name: $('#create-screen-input').val()
        };
        Screens.insert(screen_name);
        $('#create-screen-div').hide();
        $('#create-screen-input').val('');
    },
    'submit #delete-screen-form': function(e) {
        e.preventDefault();
        var current_screen = $('#screens-list').val();
        if (current_screen == 'Main') {
            alert('Main screen can not be deleted!')
        } else {
            var current_screen_id = Screens.findOne({screen_name: current_screen})._id;
            Screens.remove(current_screen_id);
            $('#delete-screen-div').hide();
        }
    }
});

Template.editRightPanel.events({
    'change #screens-list' : function(e){
        var current_screen = $('#screens-list').val();
        $("#currentScreen").empty();
        $("#currentScreen").append(current_screen);
    }
});

Template.editRightPanel.helpers({
    screens: function() {
        return Screens.find();
    },
    controls: function() {
        return Controls.find();
    },
    screen_name: function() {
        return $('#screens-list').val();
    }
});
