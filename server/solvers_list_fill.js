if (Solvers.find().count() === 0) {
    Solvers.insert({
        title: 'Solutions for home',
        url: 'gg'
    });

    Solvers.insert({
        title: 'Solutions for plant-growing',
        url: 'http://meteor.com'
    });

    Solvers.insert({
        title: 'Solutions for aquariums',
        url: 'http://themeteorbook.com'
    });
}