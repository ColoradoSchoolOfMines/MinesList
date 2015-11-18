Template.postsList.helpers({
	'posts': function() {
		return Posts.find();
	}
});

Template.postsList.events({
	'click .post': function(post) {
		Router.go('post', { postId: this._id });
	}
});