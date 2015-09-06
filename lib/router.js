Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('solutionsList', {path: '/'});
Router.route('homeSolutionsPage', {path: '/home-solutions'});
Router.route('growingSolutionsPage', {path: '/growing-solutions'});
Router.route('aquaSolutionsPage', {path: '/aqua-solutions'});
Router.route('lightingPage', {path: '/lighting'});
Router.route('videoPage', {path: '/video'});
Router.route('climatePage', {path: '/climate'});
Router.route('aboutPage', {path: '/about'});
Router.route('contactsPage', {path: '/contacts'});
Router.route('mainScreen', {path: '/main'});
Router.route('createScreen', {path: '/create'});
Router.route('editScreen', {path: '/edit'});

Router.route('mainScreenHelp', {path: '/main-screen-help'});

var requireLogin = function() {
    if (! Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
}

Router.onBeforeAction(requireLogin, {only: 'mainScreen'});