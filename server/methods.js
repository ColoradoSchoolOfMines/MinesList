Meteor.methods({
	/**
	 * Creates a new post in the database with the specified attributes.
	 *
	 * @param post The post to be created
	 */
	'insertPost': function(post) {
		Posts.insert({
			title: post.title,
			author: Meteor.user(),
			description: post.desc,
			location: post.location,
			img_url: post.imgURL,
			tags: post.tags,
			created_at: new Date(),
			cancel: { is_cancelled: false, reason: '' }
		});
	},

	/**
	 * Adds the post to the current user's list of favorite posts.
	 *
	 * @param post The post to be favorited
	 */
	'favoritePost': function(post) {
		Meteor.users.update({ _id: Meteor.user()._id },
		{
			$push: {
				favorites: post
			}
		});
	},

	/**
	 * Removes the post from the current user's list of favorite posts.
	 *
	 * @param post The post to be unfavorited
	 */
	'unfavoritePost': function(post) {
		Meteor.users.update({ _id: Meteor.user()._id },
		{
			$pull: {
				favorites: {
					_id: post._id
				}
			}
		});
	}
});
