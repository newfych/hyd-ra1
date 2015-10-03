Template.editControlsRightPanel.helpers({
    screens: function() {
        return Screens.find();
    },
    controls: function() {
        return Controls.find({screen: currentScreenId()});
    },
    control_name: function() {
        return $('#controls-list').val();
    }

});

Template.editControlsRightPanel.events({
    'click #change-text-button' : function(){
        hideDivs('#change-text-div');
        $('#change-text-input').val(currentControlText());
        $('#change-text-input').focus();
        console.log('Click');
    },
    'click #change-text' : function() {
        var new_text = $.trim($('#change-text-input').val());

        if (validateName(new_text)) {
            Controls.update(currentControlId(), {$set: {text: new_text}});
        }
    },
    'click #cancel-change-text' : function(){
        $("#change-text-div").hide();
    }
});

function hideDivs(except_div){
    var divs = ['#change-text-div'];
    for (var i in divs){
        console.log (divs[i]);
        if (divs[i] == except_div) {
            $(divs[i]).toggle();
        } else {
            $(divs[i]).hide();
        }
    }
};

function currentControlWidth(){
    var current_control = $('#controls-list').val();
    var b = Controls.findOne({screen: currentScreenId(), control_name: current_control}).width;
    return b
}

function currentControlText(){
    var current_control = $('#controls-list').val();
    var b = Controls.findOne({screen: currentScreenId(), control_name: current_control}).text;
    return b
}

function currentControlId(){
    var current_control = $('#controls-list').val();
    var b = Controls.findOne({screen: currentScreenId(), control_name: current_control})._id;
    return b
}

function currentScreenId(){
    var a = Router.current().url;
    var b = a.split('/');
    var c = b[(b.length - 1)];
    return c
}


function validateName(name){
    if ( name ==''){
        alert('Name is empty!')
        return false;
    } else {
return true;
}
}