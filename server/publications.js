Meteor.publish('solutions', function() {
    return Solvers.find();
});