Template.postItem.helpers({
    /**
     * Checks if the post has been favorited by the current user.
     */
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
    /**
     * Redirects to the post's page.
     */
	'click .post': function() {
		Router.go('post', { postId: this._id });
	},

    /**
     * Unfavorites the post for the current user.
     *
     * @param event The template event
     */
    'click .not-favorite': function(event) {
        // Don't redirect to the post's page.
        event.stopImmediatePropagation();

        Meteor.call("favoritePost", this);
    },

    /**
     * Favorites the post for the current user.
     *
     * @param event The template event
     */
    'click .favorite': function(event) {
        // Don't redirect to the post's page.
        event.stopImmediatePropagation();

        Meteor.call("unfavoritePost", this);
    }
});
