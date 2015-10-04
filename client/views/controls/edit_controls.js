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

function settingWorkSpace() {
    var workspace = $('#controls-workspace');
    var w = workspace.width();
    console.log('current width = ' + w);
    var h = w * 0.75;
    workspace.height(h);
    var p = workspace.position();
    console.log('current pos left = ' + p.left);
    console.log('current pos top = ' + p.top);
}

function fillControls(){
    var workspace = $('#controls-workspace');
    var step = (workspace.width() / 12);
    var p = workspace.position();
    var controls = Controls.find({screen: currentScreenId()});
    var a;
    controls.forEach(function (control) {
        var w = control.width;
        var h = control.height;
        var x = control.pos_x;
        var y = control.pos_y;
        var id = control._id;
        workspace.append('<div id="' + id + '">JIGURDA</div>')
        var element = $('#' + id);
        element.width(w * step);
        element.height(h * step);
        var top_offset = step + p.top;
        var left_offset = step + p.left;
        element.css({position: "absolute", marginLeft: 0,
            marginTop: 0, top: top_offset, left: left_offset});
        element.css('backgroundColor', '#00FF00');

    })
    return a
}

function currentScreenName(){
    var a = Router.current().url;
    var b = a.split('/');
    var c = b[(b.length - 1)];
    var d = Screens.findOne({_id: c}).screen_name;
    return d
}

function currentScreenId(){
    var a = Router.current().url;
    var b = a.split('/');
    var c = b[(b.length - 1)];
    return c
}

Template.editControls.rendered = (function() {
    settingWorkSpace();
    fillControls();
});