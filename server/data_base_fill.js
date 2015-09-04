if (Solutions.find().count() === 0) {
    Solutions.insert({
        title: 'Solutions for home'
    });
    Solutions.insert({
        title: 'Solutions for plant-growing'
    });

    Solutions.insert({
        title: 'Solutions for aquariums'
    });
}