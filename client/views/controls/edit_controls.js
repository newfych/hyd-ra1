Template.editControls.helpers({
    screens: function() {
        return Screens.find();
    },
    controls: function() {
        return Controls.find();
    },
    control_name: function() {
        return $('#controls-list').val();
    },
    current_screen:function(){
        return currentScreenName()
    },
    fill_controls: function() {
        return fillControls()
    }
});

function fillControls(){
    var controls = Controls.find({screen: currentScreenId()});
    var a = '';

    controls.forEach(function (control) {
        var w = control.width;
        a = '<div class="col-sm-'
        + w +
        '"><a class="btn btn-primary btn-block"><span>'
        + control.text
        + '<span></a></div>'
    })
    return a
}

//function currentControlWidth(control){
//    var current_control = $('#controls-list').val();
//    console.log ('CURRENT Control '+ current_control)
//    var b = Controls.findOne({screen: currentScreenId(), control_name: current_control});
//    var c = b.width;
//    return c
//}

function currentScreenName(){
    var a = Router.current().url;
    var b = a.split('/');
    var c = b[(b.length - 1)];
    console.log(c)
    var d = Screens.findOne({_id: c}).screen_name;
    return d
}

function currentScreenId(){
    var a = Router.current().url;
    var b = a.split('/');
    var c = b[(b.length - 1)];
    return c
}