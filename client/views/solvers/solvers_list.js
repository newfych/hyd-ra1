var solversData = [
    {
        title: 'Решения для управления домом',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Решения для растениеводства',
        url: 'http://meteor.com'
    },
    {
        title: 'Решения для аквариумов',
        url: 'http://themeteorbook.com'
    }
];
Template.solversList.helpers({
    solvers: solversData
});
