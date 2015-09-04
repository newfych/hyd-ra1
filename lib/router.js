Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    waitOn: function() { return Meteor.subscribe('solvers'); }
});

Router.map(function() {
    this.route('solversList', {path: '/'});

    this.route('solverPage', {
        path: '/solvers/:_id',
        data: function() { return Solvers.findOne(this.params._id); }
    });
});