Checks = new Mongo.Collection('checks');
Screens = new Mongo.Collection('screens');
Controls = new Mongo.Collection('controls');
Screens.allow({
    insert: function(userId, doc) {
        // разрешить постить только если пользователь залогинен
        return !! userId;
    }
});
Controls.allow({
    insert: function(userId, doc) {
        // разрешить постить только если пользователь залогинен
        return !! userId;
    }
});