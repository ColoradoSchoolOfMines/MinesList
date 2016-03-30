Template.postItem.helpers({
	'events': function() {
		return Posts.find();
	},
    'isFavorited': function() {
        favorited = false;
        console.log("this post id: " + this._id);

        Meteor.user().favorites.forEach(function(favPost) {
            console.log("favorite post id: " + favPost._id);
            if (favPost._id == this._id) {
                favorited = true;
            }
        });

        return favorited;
    }
});

Template.postItem.events({
	'click .post': function(post) {
		Router.go('post', { postId: this._id });
	},
    'click .favoriteStar': function() {
        Meteor.call("favoritePost", this);
    }
});