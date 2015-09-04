Meteor.publish('solvers', function() {
    return Solvers.find();
});