Template.postItem.helpers({
	'events': function() {
		return Posts.find();
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