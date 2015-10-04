Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('mainScreen', {path: '/'});
Router.route('solutionsList', {path: '/solutions'});
Router.route('homeSolutionsPage', {path: '/home-solutions'});
Router.route('growingSolutionsPage', {path: '/growing-solutions'});
Router.route('aquaSolutionsPage', {path: '/aqua-solutions'});
Router.route('lightingPage', {path: '/lighting'});
Router.route('videoPage', {path: '/video'});
Router.route('climatePage', {path: '/climate'});
Router.route('aboutPage', {path: '/about'});
Router.route('contactsPage', {path: '/contacts'});
Router.route('createScreen', {path: '/create'});
Router.route('editScreen', {path: '/edit'});
Router.route('screenList', {path: '/screens-list'});

//Router.route('/screens/:_id',
//    {name: 'screenPage',
//        data: function(){ return Screens.findOne(this.params._id); }
//    });
//Router.route('/edit-controls/:_id',
//    {name: 'editControls',
//        data: function(){ return Screens.findOne(this.params._id); }
//    });

Router.route('/screens/:_id', {
    name: 'screenPage',
    waitOn: function() {
        return [
            Meteor.subscribe('Screens'),
            Meteor.subscribe('Controls')
        ];
    },
    data: function() { return Screens.findOne(this.params._id); }
});

Router.route('/editControls/:_id', {
    name: 'editControls',
    waitOn: function() {
        return [
            Meteor.subscribe('Screens'),
            Meteor.subscribe('Controls')
        ];
    },
    data: function() { return Screens.findOne(this.params._id); }
});

Router.route('Help', {path: '/help'});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('solutionsList');
        }
    } else {
        //this.wait([Meteor.subscribe('Screens'), Meteor.subscribe('Controls')]);

        this.next();
    }
};

Router.onBeforeAction(requireLogin,
    {only:
        ['mainScreen', 'screenList', 'screenPage', 'editScreen', 'editControls']
    });
