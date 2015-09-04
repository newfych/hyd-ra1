Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.map(function() {
    this.route('solutionsList', {path: '/'});
    this.route('homeSolutionsPage', {path: '/home-solutions'});
    this.route('growingSolutionsPage', {path: '/growing-solutions'});
    this.route('aquaSolutionsPage', {path: '/aqua-solutions'});
    this.route('lightingPage', {path: '/lighting'});
    this.route('videoPage', {path: '/video'});
    this.route('climatePage', {path: '/climate'});
});