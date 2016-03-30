Template.postItem.helpers({
	'events': function() {
		return Posts.find();
	}
});

Template.postItem.events({
	'click .post .excerpt .favoriteStar': function(post) {
	    $(".post .excerpt .favoriteStar").toggleClass("favorited");

	    //var post = BLAHBLAHIDK;
	 	//Meteor.call("updatePost", post);
	},

	'click .post': function(post) {
		Router.go('post', { postId: this._id });
	}
});