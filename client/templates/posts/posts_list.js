Template.postsList.helpers({
    /**
     * Returns a list of all posts available to the current user.
     */
	'posts': function() {
		return Posts.find();
	}
});

Template.postsList.events({
});
