Template.postItem.helpers({
	'events': function() {
		return Posts.find();
	},

    'isFavorited': function() {
        favorited = false;
        thisPost = this;

        Meteor.user().favorites.forEach(function(favPost) {
            if (favPost._id == thisPost._id) {
                favorited = true;
            }
        });

        return favorited;
    }
});

Template.postItem.events({
	'click .post': function() {
		Router.go('post', { postId: this._id });
	},

    'click .not-favorite': function() {
        Meteor.call("favoritePost", this);
    },

    'click .favorite': function() {
        Meteor.call("unfavoritePost", this);
    }
});
