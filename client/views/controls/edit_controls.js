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
    fill_controls: function() {
        var controls = Controls.find();
        var a = "Jigurda"
        controls.forEach(function (control) {
            console.log(control.control_name)
            a = '<div class="col-sm-3"><a class="btn btn-primary btn-block"><span>'
                + control.text
                + '<span></a></div>'
        })
        return a
    }
});